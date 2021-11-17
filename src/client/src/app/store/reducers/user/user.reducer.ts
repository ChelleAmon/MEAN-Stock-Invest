import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';
import { createUserSuccess, loadUsersSuccess, loginUserSuccess } from '../../actions/user/user.actions';


export const userFeatureKey = 'user';

export interface State extends EntityState<User>{
  users: User[];
  loginUser: User | null;
}

export function selectUserId(a: User): string {
  return `${a._id}`;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: selectUserId
})

export const initialState: State = adapter.getInitialState({
  users: [],
  selectedUser: null,
  loginUser: JSON.parse(localStorage.getItem("token") || "{}")

});


export const reducer = createReducer(
  initialState,

  on(loadUsersSuccess, (state, action) => {
    return adapter.setAll(action.data, state)
  }),

  on(createUserSuccess, (state, action) => {
    return adapter.addOne(action.data, state)
  }),

  on(loginUserSuccess, (state, action) => {
    localStorage.setItem("token", JSON.stringify(action.data) )
    return {...state, users:state.users.map(
      user => (user.email === action.data.email) && (user.password === action.data.password)
      ? action.data : user
      )}
  }),

 
);


import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';
import { createUserSuccess, loadUsersSuccess, loginUserFailure, loginUserSuccess, logOutUserSuccess } from '../../actions/user/user.actions';


export const userFeatureKey = 'user';

export interface State extends EntityState<User>{
  users: User[];
  loginUser: User | null;
  loginFailMessage: string;
  logOut: null;
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
  loginUser: JSON.parse(sessionStorage.getItem("token") || "{}"),
  loginFailMessage: '',
  logOut: null,

});


export const reducer = createReducer(
  initialState,

  on(loadUsersSuccess, (state, action) => {
    return adapter.setAll(action.data, state)
  }),

  on(createUserSuccess, (state, action) => {
    sessionStorage.setItem("token", JSON.stringify(action.data))
    // sessionStorage.setItem('firstName', action.data.firstName)
    // sessionStorage.setItem('userId', JSON.stringify(action.data._id))

    return adapter.addOne(action.data, state)
    
  }),

  on(loginUserSuccess, (state, action) => {
    sessionStorage.setItem("token", JSON.stringify(action.data))
    // sessionStorage.setItem('firstName', action.data.firstName)
    // sessionStorage.setItem('userId', JSON.stringify(action.data._id))


    return {...state, users:state.users.map(
      user => (user.email === action.data.email) && (user.password === action.data.password)
      ? action.data : user
      ),
      loginUser: action.data
    }
  }),

  on(logOutUserSuccess, (state, action ) => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("firstName")
    sessionStorage.removeItem("userId")
    return {...state, loginUser: null}
  })
);


import { createAction, props } from '@ngrx/store';
import { User } from '../../../../../../shared/models/user.model';

export const loadUsers = createAction(
  '[User] Load Users'
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: User[] }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: Error }>()
);

export const createUser = createAction(
  '[User] Create User',
  props<{data: User}>()
);

export const createUserSuccess = createAction(
  '[User] Create User Success',
  props<{data: User}>()
);

export const createUserFailure = createAction (
  '[User] Create User Failure',
  props<{error: Error}>()
);

export const loginUser = createAction (
  '[User] Login User',
  props<{data: Partial<User>}>(),
);

export const loginUserSuccess = createAction (
  '[User] Login User Success',
  props<{data: User}>()
);

export const loginUserFailure = createAction (
  '[User] Login User Failure',
  props<{error: Error}>()
);

export const loginNavigateSuccess = createAction (
  '[User] Login Navigate Success'
)

// export const logOutUserSuccess = createAction (

// )

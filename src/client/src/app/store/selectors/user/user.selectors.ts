import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../..';
import * as fromUsers  from '../../reducers/user/user.reducer';

const userFeatureSelector = createFeatureSelector<fromUsers.State>(fromUsers.userFeatureKey);

export const userSelector = createSelector (
  userFeatureSelector,
  (state) => state.users
);

export const loginUserSelector = createSelector(
  userFeatureSelector,
  (state) => state.loginUser
);


export const logOutSelector = createSelector(
  userFeatureSelector,
  (state) => state.logOut
)



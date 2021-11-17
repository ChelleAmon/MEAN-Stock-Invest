import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from 'src/app/services/users.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  createUser,
  createUserFailure,
  createUserSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  loginNavigateSuccess,
  loginUser,
  loginUserFailure,
  loginUserSuccess,
} from '../../actions/user/user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.usersService.getUsers().pipe(
          map((data) => loadUsersSuccess({data})),
          catchError((error) => of(loadUsersFailure({ error })))
        )
      )
    )
  );

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      mergeMap((action) =>
        this.usersService.createAccount(action.data).pipe(
          map((data) => createUserSuccess({data})),
          catchError((error) => of(createUserFailure({ error })))
        )
      )
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap((action) =>
        this.usersService.loginUser(action.data).pipe(
          map((data) => loginUserSuccess({data})),
          catchError((error) => of(loginUserFailure({ error })))
        )
      )
    )
  );

  loginSuccess$ = createEffect(()=>
    this.actions$.pipe(
      ofType(loginUserSuccess),
      mergeMap(() =>
      this.usersService.loginNavigate().pipe(
        map(()=>
          loginNavigateSuccess()
        )
      ))
    )
  )

  constructor(private actions$: Actions, private usersService: UsersService) {}
}

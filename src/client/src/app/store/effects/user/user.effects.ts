import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from 'src/app/services/users.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import {
  createUser,
  createUserFailure,
  createUserSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
  loginFailureRedirect,
  loginNavigateSuccess,
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  logOutUser,
  logOutUserFailure,
  logOutUserSuccess,
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

  createUserSuccess$ = createEffect(() =>
  this.actions$.pipe(
    ofType(createUserSuccess),
      mergeMap(() =>
      this.usersService.loginNavigate().pipe(
        map(()=>
          loginNavigateSuccess()
        )
      ))
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
  );


  logOutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logOutUser),
      mergeMap(() =>
        this.usersService.logOut().pipe(
          map((data) => logOutUserSuccess()),
          catchError((error) => of(logOutUserFailure()))
        )
      )
    )

  )

  constructor(private actions$: Actions, private usersService: UsersService, private router: Router) {}
}

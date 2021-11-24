import { DatePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, takeLast } from 'rxjs/operators';
import { CurrencyDetailsService } from 'src/app/services/currency-details.service';
import { WatchListService } from 'src/app/services/watch-list.service';
import { AppState } from 'src/app/store';
import { loginUserSelector } from 'src/app/store/selectors/user/user.selectors';
import { User } from '../../../../../../shared/models/user.model';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss'],
  providers:[DatePipe]
})
export class CurrencyDetailsComponent implements OnInit, OnDestroy{

  loggedUser$!: Observable<User | null>
  interval_ID: any;


  constructor(
    private _snackBar:MatSnackBar,
    private currencyDetailsService: CurrencyDetailsService,
    public datepipe: DatePipe,
    private watchListService: WatchListService,
    private store: Store<AppState>
  ) { }

  ngOnDestroy(): void {
    clearInterval (this.interval_ID)
  }

  ngOnInit(): void {
    this.getMeta();

   this.interval_ID =  setInterval(()=> {

    this.getOrders();
    this.getMarketHistory();

    }, 5 * 1000)

  }

  @Input()
  name: any;
  errorMessage!: string;
  today: any;
  metadata: any;
  latestDate: any;
  todayDetails: any;
  data: any;
  orders: any;
  errorMsg: any;
  history: any;
  errMsg: any;
  notAv: boolean = false;
  logged: boolean = false;
  userId: any;


  getMeta(){
    this.currencyDetailsService.getMetadata(this.name).subscribe((success: any)=> {
      this.data = success;
      this.metadata = this.data['Meta Data'];
      this.today = new Date();
      this.latestDate = this.datepipe.transform(this.today, 'yyyy-MM-dd');
      this.todayDetails=this.data['Time Series (Digital Currency Daily)'][this.latestDate];
    }, (error:any)=> {
      this.errorMessage = error;
      this.notAv = true;
    })
  }

  getOrders(){
    this.currencyDetailsService.getOrders(this.name).subscribe((success:any) => {
      this.orders = success;
      return this.orders;
    }, (error:any)=> {
      this.errorMsg = error
    })
  }

  getMarketHistory(){
    this.currencyDetailsService.getMarketHistory(this.name).subscribe((success)=> {
      this.history = success;
      return this.history;
    }, (error: any)=> {
      this.errMsg = error
    })
  }

  addToWatchList( item: any){

    this.watchListService.addToWatch(this.userId, item).pipe(take(1)).subscribe((success) => {

      this.loggedUser$ = this.store.select(loginUserSelector)
      this.userId = this.loggedUser$;
      this._snackBar.open("Added to WatchList", "", {
        duration: 2000,
      });
    },
    (error) => {
      this._snackBar.open("An error occured", "", {
        duration: 2000,
      })

    })

  }
}

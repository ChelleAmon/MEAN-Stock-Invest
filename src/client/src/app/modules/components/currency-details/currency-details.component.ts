import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CurrencyDetailsService } from 'src/app/services/currency-details.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.scss'],
  providers:[DatePipe]
})
export class CurrencyDetailsComponent implements OnInit {

  constructor(
    private _snackBar:MatSnackBar,
    private currencyDetailsService: CurrencyDetailsService,
    public datepipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.getMeta();
    this.orders = this.getOrders();
    this.history = this.getMarketHistory();

    setInterval(()=> {
      this.orders = []
      this.orders = this.getOrders();
      this.history = []
      this.history = this.getMarketHistory();
    }, 10 * 1000)

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
    this.currencyDetailsService.getMarketHistory(this.name).subscribe((success:any)=> {
      this.history = success;
    }, (error: any)=> {
      this.errMsg = error
    })
  }

}

import { Component, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Currency } from 'src/app/models/currency';
import { CryptoService } from 'src/app/services/crypto.service';



@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit, OnDestroy {

  previous: any;
  page = 2;
  change: any =[];
  colors: any = [];
  red: boolean = false;
  green: boolean = false;
  currency = [];
  currencies: any;
  currencyArray: Currency[] = [];
  error: any;
  pageSize = 10;
  pChange: any;
  diff: any;

  intervalId: any;

  constructor(private cryptoService: CryptoService) {
  }
  @ViewChild(MatPaginator) paginator: any;


  ngOnDestroy(): void {
    clearInterval(this.intervalId)

  }

  ngOnInit(): void {

    this.getCurrencies();

    this.intervalId = setInterval(() => {
      this.previous = [...this.change];
     this.getCurrencies();
    }, 10 * 1000);

  }

  getCurrencies(): any {
    this.cryptoService.getPrices().subscribe((success)=> {
      this.currencies = success;
      let i = 0;

      for(let property in this.currencies){
        this.currencyArray[i] = this.currencies[property]
        i++;

      }

      // this.pChange = [...this.change]
      // this.change = [];

      // for(let e of this.currencyArray){
      //   this.change.push(e.last)
      //   // console.log('Change:', this.change)
      // }

      // for(let i = 0; i < this.currencyArray.length; i++){
      //   this.currencyArray[i].change = (this.change[i] = this.pChange[i]);

      //   if ((this.change[i] - this.pChange[i]) >= 0){
      //     this.currencyArray[i].colors = 'green'
      //   } else {
      //     this.currencyArray[i].colors ='red'
      //   }
      // }
    },
      (error) => this.error = error
    );
  }

}



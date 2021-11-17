import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Currency } from 'src/app/models/currency';
import { CryptoService } from 'src/app/services/crypto.service';



@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

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

  constructor(private cryptoService: CryptoService) { }
  @ViewChild(MatPaginator) paginator: any;

  ngOnInit(): void {

    setInterval(() => {
      this.previous = [...this.change];
      this.currencyArray.splice(0);
      this.currencyArray = this.getCurrencies();
    }, 10 * 1000);

  }

  getCurrencies(): any {
    this.cryptoService.getPrices().subscribe((success)=> {
      this.currencies = success;
      // console.log('this.currencies: ', this.currencies)

      for(let property in this.currencies){
        this.currencyArray.push(this.currencies[property]);
        // console.log('currencyArray: ', this.currencyArray)
      }
      this.pChange = [...this.change]
      //console.log('pChange: ', this.pChange)

      this.change = [];

      for(let e of this.currencyArray){
        this.change.push(e.last)
        //  console.log('change after loop: ', this.change)
      }

      for(let i = 0; i < this.currencyArray.length; i++){
        //console.log(this.pChange)
        this.currencyArray[i].change = (this.change[i] = this.pChange[i]);

        if ((this.change[i] - this.pChange[i]) >= 0){
          this.currencyArray[i].colors = 'green'
        } else {
          this.currencyArray[i].colors ='red'
        }
      }
    },
      (error: any) => this.error = error
    );

    if (!this.error){
      return this.currencyArray;
    }else {
      return null;
    }
  }
}



import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto.service';
import { WatchListService } from 'src/app/services/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {

  constructor(private watchListService: WatchListService, private cryptoService: CryptoService) { }

  ngOnInit(): void {
    this.getWatchList();
  }

  userId: any;
  watchList: any
  errorMsg: any;
  success: any;
  err: any;
  prices: any;
  watch: any = [];
  tickers: any;

  getWatchList(){
    this.userId = sessionStorage.getItem('userId');

    this.watchListService.getWatchList(this.userId).subscribe((success) => {
      this.watchList = success[0].item
      console.log("Watchlist success: ", this.watchList)

      console.log("Tickers: ", this.tickers)
      this.cryptoService.getPrices().subscribe((success) => {
        this.tickers = success;
        console.log("Tickers Success: ", this.tickers)
        console.log("Hello", this.watchList)

        for (let item in this.watchList){
          this.watch[item] = {}

          this.watch[item].name = this.watchList[item];
          this.watch[item].last = this.tickers[(this.watchList[item]).toLowerCase() + "usdt"].last
        }

        console.log("final: ", this.watch)

      }, (error) =>{
      this.errorMsg = error.message;
      console.log("Error")})

    }, (error) => {
      this.errorMsg = error.message;
      console.log("Error!")
    })
  }


  deleteFromWatchList(item:string){
    this.watch = this.watch.filter((items: any) => items.name !=item)
    this.watchListService.deleteWatch(this.userId, item).subscribe((success)=> {
      this.success = success
    }, (error) => this.err = error.message)
  }
}


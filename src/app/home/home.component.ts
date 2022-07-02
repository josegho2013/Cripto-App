import { Component, OnInit, Injectable,  EventEmitter, Output } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HomeService } from './service/home.service';
import { PageEvent } from '@angular/material/paginator';
import * as rxjs from 'rxjs';
import * as rxops from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
@Injectable()
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService, private router: Router) {}

  allCoins: Observable<any> = EMPTY;
  searchCoins: Observable<any> = EMPTY;
  coinsPaginate: any = EMPTY;
  aux: any = EMPTY;
  pageEvent: any = PageEvent;

  countUpdate = new EventEmitter<string>();

  ngOnInit(): void {
    if(!this.aux[0]?.length){
      this.getAllCoins();
    } else {
      return this.coinsPaginate = this.aux[0]?.length
    }
  }

  async getAllCoins() {
    this.allCoins = this.homeService.getAllCoins();
    this.aux = await rxjs.lastValueFrom(
      rxjs.from(this.allCoins).pipe(rxops.toArray())
    );
    this.coinsPaginate = this.aux[0].slice(0, 20);
  }

  OnPageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.aux[0].length) {
      endIndex = this.aux[0].length;
    }
    this.coinsPaginate = this.aux[0].slice(startIndex, endIndex);
  }

  emitWordCount(e: Event) {
    const target = e.target as HTMLInputElement;
    var secondtest = []
    if(target.value){
      for (let i = 0; i < this.aux[0].length; i++) {
        if(this.aux[0][i].name.toLowerCase().indexOf(target.value.toLowerCase()) >= 0){
         secondtest.push(this.aux[0][i])
        }
      }
      return this.coinsPaginate = secondtest
    } else {
      return this.coinsPaginate = this.aux[0].slice(0, 20)  
    }
  }
}

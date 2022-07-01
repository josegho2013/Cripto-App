import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) { }

  allCoins: Observable<any> = EMPTY;


  ngOnInit(): void {
    this.getAllCoins()
    
  }

  getAllCoins(){
    this.allCoins=this.homeService.getAllCoins()
  }

}

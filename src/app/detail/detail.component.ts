import { Component, OnInit, Input } from '@angular/core';
import { DetailService } from './service/detail.service';
import { EMPTY, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(
    private detailService: DetailService,
    private route: ActivatedRoute
  ) {}

  coinById: Observable<any> = EMPTY;

  ngOnInit(): void {
    this.getCoinById();
  }
  

  getCoinById() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.coinById = this.detailService.getCoinById(id);
  }
}

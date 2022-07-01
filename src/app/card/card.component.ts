import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: any;
  constructor(private router: Router) {}

  ngOnInit(): void {
  }
  goToDetail(id: string) {
    this.router.navigate([`detail/${id}`]);
  }

}

import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: {  noPause: false, showIndicators: true } }
  ]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() { }

  ngOnInit() {
  }
  share(products) {
    window.alert('You shared your product ' + products);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

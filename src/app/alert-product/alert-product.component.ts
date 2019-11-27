import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-product',
  templateUrl: './alert-product.component.html',
  styleUrls: ['./alert-product.component.scss']
})
export class AlertProductComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}

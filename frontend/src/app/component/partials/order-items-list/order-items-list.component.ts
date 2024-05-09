import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shares/Model/Order';

@Component({
  selector: 'order-items-list',
  templateUrl: './order-items-list.component.html',
  styleUrls: ['./order-items-list.component.css']
})
export class OrderItemsListComponent implements OnInit {

  @Input()
  order!:Order;
  constructor() { }

  ngOnInit(): void {
  }

}

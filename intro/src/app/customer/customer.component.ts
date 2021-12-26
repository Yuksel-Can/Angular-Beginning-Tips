import { Component, Input, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  kullanici: string = "Can Yuksel"
  customers: Customer[] = []

  selectedCustomer: Customer | undefined;

  ngOnInit(): void {

    this.customers = [{ id: 1, firstName: "Can", lastName: "Yuksel", age: 23 },
    { id: 1, firstName: "Osman", lastName: "Kem", age: 21 }]
  }

  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer;
  }

  @Input() city2: string | undefined;



}

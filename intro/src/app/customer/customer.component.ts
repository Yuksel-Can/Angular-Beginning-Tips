import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }
  kullanici:string= "Can Yuksel"
  customers:Customer[] =[]

  ngOnInit(): void {

    this.customers = [{id:1,firstName:"Can",lastName:"Yuksel",age:23},
      {id:1,firstName:"Osman",lastName:"Kem",age:21}]
  }

}

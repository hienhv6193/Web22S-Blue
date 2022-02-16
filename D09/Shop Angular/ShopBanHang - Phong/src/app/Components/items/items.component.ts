import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';
import { ThanhtoanService } from 'src/app/Service/thanhtoan.service';
import { Account } from '../Modules/account.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {
    @Input() item!:Account;
    public totalPrice:number=0
    constructor(public tinhtong:ThanhtoanService) { 
  }
  ngOnInit(): void {

  }
  test(a:any){
      this.totalPrice = this.item.price * a
      this.tinhtong.tongtien += this.item.price;
  }
  buy(){

  }
  

}

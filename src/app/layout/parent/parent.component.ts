import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  num1: string = '';
  num2: string = '';
  Total: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  ConvertToInt(val: string): number {
    return parseInt(val);
  }
  getTotalAmt() {
    this.Total = this.ConvertToInt(this.num1) + this.ConvertToInt(this.num2);
    console.log(this.Total)
  }
  getUpdatedvalue(value: any) {
    // console.log($event);  
    debugger
    this.Total = value;
  }


}

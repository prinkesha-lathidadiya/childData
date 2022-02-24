import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parentt',
  templateUrl: './parentt.component.html',
  styleUrls: ['./parentt.component.css']
})
export class ParenttComponent implements OnInit {
  value: any = '';
  red: string = 'red';
  gray: string = 'gray';
  yellow: string = 'yellow';
  pink: string = 'pink';
  selectChild = '';
  selectChild4 = ''
  selectChild3=''
  selectChild2=''
  selectChild1=''
  data = {};
  data4 = {}
  data3 = {}
  data2 = {}
  data1 = {}

  constructor() {  }

  ngOnInit(): void {
  }
  changed1() {
    this.value = this.red;
  }
  changed2() {
    this.value = this.gray;
  }
  changed3() {
    this.value = this.yellow;
  }
  changed4() {
    this.value = 'pink';
  }

  changeValue($event: any) {
    const value = $event.target.value;
    this.selectChild = $event.target.value;
  }

  OnButtonCLick(): void {
    this.data = { child: this.selectChild, color: this.value };
  }

  updateChild1(e: any) {
    debugger
    this.selectChild1 = e
    this.data = { child: this.selectChild1, color: this.value };
    console.log('child1parent', this.data)
  }

  updateChild2(e: any) {
    
    this.selectChild2 = e
    this.data = { child: this.selectChild2, color: this.value };
    console.log('child2parent', this.data2)
  }

  updateChild3(e: any) {
    this.selectChild3 = e
    this.data = { child: this.selectChild3, color: this.value };
    console.log('child3parent', this.data3)
  }

  updateChild4(e: any) {
    this.selectChild4 = e
    this.data = { child: this.selectChild4, color: this.value };
    console.log('child4parent', this.data4)
  }

}



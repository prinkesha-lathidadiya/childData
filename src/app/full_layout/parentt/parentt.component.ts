import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parentt',
  templateUrl: './parentt.component.html',
  styleUrls: ['./parentt.component.css']
})
export class ParenttComponent implements OnInit {
  value: string = '';
  red: string = 'red';
  gray: string = 'gray';
  yellow: string = 'yellow';
  pink: string = 'pink';
  data1 = {};
  data = {};

  isChildShow = true;
  selectChild = '';
  inputData1: string = ''
  inputData2: string = ''
  inputData3: string = ''
  inputData4: string = ''

  constructor() {
    // this.service.child1.subscribe((res: any) => {
    //   this.data = res
    // })
  }

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
    // switch (value) {
    //   case 'child-1':
    //     this.inputData1 = value
    //     break;
    //   case 'child-2':
    //     this.inputData2 = value
    //     break;
    //   case 'child-3':
    //     this.inputData3 = value
    //     break;
    //   case 'child-4':
    //     this.inputData4 = value
    //     break;
    //   default:
    //     break;
    // }
  }

  // child1($event: any) {
  //   this.service.updatechild1($event)
  // }

  OnButtonCLick(): void {
    // this.isChildShow = false;
    this.data = { child : this.selectChild, color: this.value};

    // this.isChildShow = true;
  }
}

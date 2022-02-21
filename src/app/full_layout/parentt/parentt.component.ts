import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parentt',
  templateUrl: './parentt.component.html',
  styleUrls: ['./parentt.component.css']
})
export class ParenttComponent implements OnInit {
  // @Output() child1Update = new EventEmitter<string>()
  data = { color: 'red', child: 'child1', 
           };
  value: string = '';

  red: string = 'red';
  gray: string = 'gray';
  yellow: string = 'yellow';
  pink: string = 'pink';
  message: string = '';
  me: string = '';
  child1: string = '';
  child2: string = 'child2';
  child3: string = 'child3';
  child4: string = 'child4';

  constructor() { }

  ngOnInit(): void {
    this.child1='hello';
  }
  // changed(evt: any) {
  //   this.value = evt.target.checked;
  //   // alert(evt.target.checked)
  //   if (evt.target.checked) {
  //     this.userList.map((e) => {
  //       e.select = true;
  //     })
  //   }
  //   else {
  //     this.userList.map((e) => {
  //       e.select = false;
  //     })
  //   }
  // }

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
  check(e:any){
    // this.value = this.child1;
    // this.value = this.child2;
    // this.value = this.child3;
    // this.value = this.child4
    console.log(this.value);
  }

  // cheak(){
  //   if(this.ng){

  //   }
  // }

  // updateChild2($event: any) {
  //   this.message = $event
  // }


}

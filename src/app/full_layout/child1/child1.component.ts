import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, AfterViewInit, OnChanges {
 
  @Input() DataValue: any = {};

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {


  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.DataValue && this.DataValue != ""){
      this.SetColor();
    }
   
  }

  SetColor(){
    let emement : any= document.getElementById('c1');
    if(this.DataValue.child == 'child-1'){
      emement.style.backgroundColor = this.DataValue.color;
    }
    else{
      emement.style.backgroundColor = 'transparent';
    } 
  }
}

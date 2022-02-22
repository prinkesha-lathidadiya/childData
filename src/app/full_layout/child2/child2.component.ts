import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, AfterViewInit, OnChanges{

  @Input() DataValue: any = {};

  constructor() { }

  ngOnInit(): void {
  }
 
  ngAfterViewInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if(this.DataValue && this.DataValue != ""){ 
      this.SetColor();
    }
  }
  SetColor(){
   
    let emement : any= document.getElementById('c2');
    if(this.DataValue.child == 'child-2'){
      emement.style.backgroundColor = this.DataValue.color;
    }
    else{
      emement.style.backgroundColor = 'transparent';
    }
  
  }

}

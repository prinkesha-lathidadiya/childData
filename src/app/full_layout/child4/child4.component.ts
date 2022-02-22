import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit, AfterViewInit,OnChanges {
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
    let emement : any= document.getElementById('c4');
    if(this.DataValue.child == 'child-4'){
      emement.style.backgroundColor = this.DataValue.color;
    }
    else{
      emement.style.backgroundColor = 'transparent';
    }
  }
}

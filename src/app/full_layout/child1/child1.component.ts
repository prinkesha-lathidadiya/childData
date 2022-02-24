import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, AfterViewInit, OnChanges {
 
  @Input() DataValue: any = {};
  @Output()valueUpdate1 = new EventEmitter();
  selectChild1 = '';

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

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
  changeValue($event: any) {
    this.selectChild1 = $event.target.value;
    }

  onUpdate(e: any) {
    this.selectChild1
    this.valueUpdate1.emit(this.selectChild1)
    console.log('hell1',this.selectChild1)  
  }
}

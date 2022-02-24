import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, AfterViewInit, OnChanges {

  @Input() DataValue: any = {};
  @Output() valueUpdate2 = new EventEmitter();
  selectChild2 = '';

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.DataValue && this.DataValue != "") {
      this.SetColor();
    }
  }

  SetColor() {
    let emement: any = document.getElementById('c2');
    if (this.DataValue.child == 'child-2') {
      emement.style.backgroundColor = this.DataValue.color;
    }
    else {
      emement.style.backgroundColor = 'transparent';
    }
  }

  changeValue($event: any) {
    const value = $event.target.value;
    this.selectChild2 = $event.target.value;
  }

  onUpdate(e: any) {
    this.selectChild2
    this.valueUpdate2.emit(this.selectChild2)
    console.log('hell2', this.selectChild2)
  }

}

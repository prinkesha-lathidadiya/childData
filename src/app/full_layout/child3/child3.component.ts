import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit, AfterViewInit, OnChanges {
  @Input() DataValue: any = {};
  @Output() valueUpdate3 = new EventEmitter();
  selectChild3 = ''

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.DataValue && this.DataValue != "") {
      this.SetColor();
    }
  }

  SetColor() {
    let emement: any = document.getElementById('c3');
    if (this.DataValue.child == 'child-3') {
      emement.style.backgroundColor = this.DataValue.color;
    }
    else {
      emement.style.backgroundColor = 'transparent';
    }
  }

  changeValue($event: any) {
    this.selectChild3 = $event.target.value;
  }

  onUpdate(e: any) {
    debugger
    this.selectChild3
    this.valueUpdate3.emit(this.selectChild3)
    console.log('hell3', this.selectChild3)
  }
}

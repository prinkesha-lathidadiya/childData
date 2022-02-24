import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit, AfterViewInit, OnChanges {
  @Input() DataValue: any = {};
  @Output() valueUpdate4 = new EventEmitter();
  selectChild4 = '';
  data4 = {};

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.DataValue && this.DataValue != "") {
      this.SetColor();
    }
  }

  SetColor() {
    let emement: any = document.getElementById('c4');
    if (this.DataValue.child == 'child-4') {
      emement.style.backgroundColor = this.DataValue.color;
    }
    else {
      emement.style.backgroundColor = 'transparent';
    }
  }

  changeChild($event: any) {
    this.selectChild4 = $event.target.value;
  }
  onUpdate(e: any) {
    this.selectChild4
    // this.data4={child4com: this.selectChild4 , color: this.DataValue.color}
    // this.data4={child4com: this.selectChild4 }
    this.valueUpdate4.emit(this.selectChild4)
    console.log('hello', this.selectChild4)
  }

}



import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() Addition: number = 0;
  @Output() valueUpdate = new EventEmitter();
  num3: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  OnUpdate(): void {
    this.Addition = +this.Addition + +this.num3;
    this.valueUpdate.emit(this.Addition);
  }
}

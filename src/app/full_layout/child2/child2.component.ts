import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, AfterViewInit {
  // @Input() updateChild2 = new EventEmitter<string>()
  @Input() child2: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {}

}

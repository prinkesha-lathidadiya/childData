import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit ,AfterViewInit{
  // @Input() updateChild3 = new EventEmitter<string>()
  @Input() child3: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {}
}

import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit, AfterViewInit {
  // @Input() updateChild4 = new EventEmitter<string>()
  @Input() child4: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
     if('Child4'){
     }
     else{

     }
  }
}

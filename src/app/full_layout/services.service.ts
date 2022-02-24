import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private parentSubs = new BehaviorSubject("")
  private child1Subs = new BehaviorSubject("")
  private child2Subs = new BehaviorSubject("")
  private child3Subs = new BehaviorSubject("")

  subsParent = this.parentSubs.asObservable()
  subsChild1 = this.child1Subs.asObservable()
  subsChild2 = this.child2Subs.asObservable()
  subsChild3 = this.child3Subs.asObservable()

  constructor() { }
  updateParent(message: string) {
    this.parentSubs.next(message)
  }

  updateChild1(message: string) {
    this.child1Subs.next(message)
  }

  updateChild2(message: string) {
    this.child2Subs.next(message)
  }

  updateChild3(message: string) {
    this.child3Subs.next(message)
  }
}

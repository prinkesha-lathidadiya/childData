import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './layout/child/child.component';
import { ParentComponent } from './layout/parent/parent.component';
import { ParenttComponent } from './full_layout/parentt/parentt.component';
import { Child1Component } from './full_layout/child1/child1.component';
import { Child2Component } from './full_layout/child2/child2.component';
import { Child3Component } from './full_layout/child3/child3.component';
import { Child4Component } from './full_layout/child4/child4.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ParenttComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

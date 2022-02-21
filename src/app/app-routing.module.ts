import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParenttComponent } from './full_layout/parentt/parentt.component';

const routes: Routes = [
  { path: 'color', component: ParenttComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

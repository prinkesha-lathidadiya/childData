import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { ParenttComponent } from './full_layout/parentt/parentt.component';

const routes: Routes = [
  { path: 'color', component: ParenttComponent},
  { path:'pipes', component: AngularPipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

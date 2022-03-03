import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { ParenttComponent } from './full_layout/parentt/parentt.component';
import { KhonetxtComponent } from './khonetxt/khonetxt.component';
import { KhonetextTeamComponent } from './template/khonetext-team/khonetext-team.component';

const routes: Routes = [
  { path: 'color', component: ParenttComponent},
  { path:'pipes', component: AngularPipesComponent},
  { path:'Khonetext', component: KhonetxtComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

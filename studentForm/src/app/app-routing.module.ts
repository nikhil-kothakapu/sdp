import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOREditComponent } from './add-oredit/add-oredit.component';
import { TestingComponent } from './testing/testing.component';
import { StytableComponent } from './stytable/stytable.component';
import { WnfComponent } from './wnf/wnf.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard',pathMatch:"full"},
  {path:'dashboard',component:DashboardComponent},
  {path:'datatable',component:StytableComponent},
  {path:'ranking',component:TestingComponent},
  {path:"**",component:WnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingomponents =[AddOREditComponent,TestingComponent,StytableComponent,WnfComponent,DashboardComponent]

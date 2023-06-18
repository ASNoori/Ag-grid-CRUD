import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggridformComponent } from './aggridform/aggridform.component';
import { AppComponent } from './app.component';

const routes: Routes = [  
  {path:'', component:AppComponent},
  {path:'user', component:AggridformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

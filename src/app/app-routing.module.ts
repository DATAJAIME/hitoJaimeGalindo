import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'crud', component: MainComponent},
  {path:'delete', component: ContactComponent},
  {path:'read_update', component: AboutComponent},
  {path:'create', component: HomeComponent},
  {path:'', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

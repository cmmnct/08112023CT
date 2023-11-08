import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColorpatchesComponent } from './color-patches/color-patches.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'colorpatches', component: ColorpatchesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

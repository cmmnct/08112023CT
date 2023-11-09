import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColorpatchesComponent } from './color-patches/color-patches.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'colorpatches', component: ColorpatchesComponent},
  {path:'memory', component: MemoryGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

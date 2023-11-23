import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColorpatchesComponent } from './color-patches/color-patches.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'colorpatches', component: ColorpatchesComponent},
  {path:'memory', component: MemoryGameComponent},
  {path:'contact', component: ContactComponent},
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  },
  { path: 'customers', 
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

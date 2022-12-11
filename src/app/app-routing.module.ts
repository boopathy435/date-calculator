import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuItemsComponent } from 'src/components/menu-items/menu-items.component';
import { AgeCalculationComponent, CountDifferenceComponent } from '../components';

const routes: Routes = [
  { path: '', component: MenuItemsComponent },
  { path: 'age-calculator', component: AgeCalculationComponent },
  { path: 'count-days', component: CountDifferenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

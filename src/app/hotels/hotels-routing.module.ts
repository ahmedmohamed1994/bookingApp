import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsHomeComponent } from './components/hotels-home/hotels-home.component';


const routes: Routes = [
  {
    path: '',
    component: HotelsHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsHomeComponent } from './components/flights-home/flights-home.component';


const routes: Routes = [
  {
    path: '',
    component: FlightsHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule {
}

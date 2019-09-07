import { NgModule } from '@angular/core';
import { FlightsRoutingModule } from './flights-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FlightsHomeComponent } from './components/flights-home/flights-home.component';


@NgModule({
  declarations: [FlightsHomeComponent],
  imports: [
    SharedModule,
    FlightsRoutingModule
  ]
})
export class FlightsModule {
}

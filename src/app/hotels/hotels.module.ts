import { NgModule } from '@angular/core';
import { HotelsRoutingModule } from './hotels-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HotelsHomeComponent } from './components/hotels-home/hotels-home.component';


@NgModule({
  declarations: [HotelsHomeComponent],
  imports: [
    SharedModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule {
}

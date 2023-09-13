import { NgModule } from '@angular/core';

import {OrderComponent} from "./order.component";

@NgModule({
  declarations: [OrderComponent],
  exports: [OrderComponent]
})
export class OrderModule {}
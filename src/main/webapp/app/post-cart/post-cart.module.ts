import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { POSTCART_ROUTE } from './post-cart.route';
import { PostCartComponent } from './post-cart.component';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { FinalisationModule } from './finalisation/finalisation.module';

@NgModule({
  declarations: [PostCartComponent],
  imports: [SharedModule, RouterModule.forChild([POSTCART_ROUTE]), OrderModule, PaymentModule, FinalisationModule],
  exports: [PostCartComponent],
})
export class PostCartModule {}

import { NgModule } from '@angular/core';

import { ForgotPasswordmodule } from './forgotpassword-routing.module';

import { ForgotpasswordComponent } from './forgotpassword.component';

@NgModule({
  imports: [ForgotPasswordmodule],
  declarations: [ForgotpasswordComponent],
  exports: [ForgotpasswordComponent],
})
export class ForgotPasswordModule {}

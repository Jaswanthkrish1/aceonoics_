import { NgModule } from '@angular/core';

import { CreateUserRoutingModule } from './create-user-routing.module';
import { CreateUserComponent } from './create-user.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { IconsProviderModule } from 'src/app/icons-provider.module';
@NgModule({
  imports: [CommonModule,CreateUserRoutingModule,ReactiveFormsModule,NzInputModule,
    NzFormModule,NzButtonModule,IconsProviderModule,NzNotificationModule],
  declarations: [CreateUserComponent],
  exports: [CreateUserComponent],
})
export class CreateUserModule {}

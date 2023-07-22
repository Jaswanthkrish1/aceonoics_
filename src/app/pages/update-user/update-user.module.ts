import { NgModule } from '@angular/core';
import { UpdateUserRoutingModule } from './update-user-routing.module';
import { UpdateUserComponent } from './update-user.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { IconsProviderModule } from 'src/app/icons-provider.module';
@NgModule({
  imports: [UpdateUserRoutingModule,CommonModule,ReactiveFormsModule,NzInputModule,
    NzFormModule,NzButtonModule,IconsProviderModule,NzNotificationModule],
  declarations: [UpdateUserComponent],
  exports: [UpdateUserComponent],
})
export class UpdateUserModule {}

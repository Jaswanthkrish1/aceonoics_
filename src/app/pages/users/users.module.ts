import { NgModule, ViewChild } from '@angular/core';import { DataItem, UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { AuthservService } from 'src/app/authserv.service';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableComponent } from 'ng-zorro-antd/table';
@NgModule({
  imports: [UsersRoutingModule,NzTableModule,CommonModule,FormsModule,NzInputModule,NzMessageModule,HttpClientModule,NzPopconfirmModule
  ,NzDropDownModule,IconsProviderModule,NzButtonModule,NzFormModule],
  declarations: [UsersComponent],
  providers:[AuthservService,NzMessageService],
  exports: [UsersComponent],
})
export class UsersModule {
  
}

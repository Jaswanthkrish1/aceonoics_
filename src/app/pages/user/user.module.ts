import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NzTableModule } from 'ng-zorro-antd/table';

import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { AuthservService } from 'src/app/authserv.service';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
@NgModule({
  imports: [UserRoutingModule, NzTableModule, FormsModule, NzInputModule, CommonModule, NzMessageModule, HttpClientModule, NzPopconfirmModule
    , NzDropDownModule, IconsProviderModule, NzButtonModule, ReactiveFormsModule, NzFormModule],
  declarations: [UserComponent],
  exports: [UserComponent],
  providers: [AuthservService, NzMessageService]
})
export class UserModule { }

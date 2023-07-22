import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthservService } from 'src/app/authserv.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

export interface user1{
email:string;
name:string
}
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id!: number;
  email!:string;
  name!:string;
  ngOnInit() {
    this._activated.params.subscribe(params => {
      const id = params['id'];
      // Use the id parameter as needed
      this.id = parseInt(id);
      
      this._user.getuserbyid(10).subscribe((f:user1)=>{
       this.email=f.email
       this.name=f.name;
      })
      
    });
  }
  validateForm: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, private _user: AuthservService, private _router: Router,
    private _activated: ActivatedRoute, private _notification: NzNotificationService) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]]
    });

  }
  submitForm() {
    let type = ''
    console.log('submit', this.validateForm.value);
    if (this.id != null) {

      this._user.updateUser(this.id, this.validateForm.value).subscribe((f: any) => {
        if (f) {
          type = "success";
          this._notification.create(
            type,
            'User Updated',
            'User saved perfectly .'
          )
          this._router.navigate(['/users']);
        }
      }, (error: any) => {
        if (error.status === 401) {
          type = "warning"
          this._notification.create(
            type,
            'UnAuthorized ',
            'Plese check the Email id you enterd . that was allready exited used'
          )
        }else if (error.status === 502) {
          type = "error"
          this._notification.create(
            type,
            'Bad Gateway ',
            'Plese check the userid which is avilable in user data'
          )
        } else {
          type = "error"
          this._notification.create(
            type,
            'Internal Server Error ',
            ' Server is not responding'
          )
        }

      }
      )
    } else {
      type = "error";
      this._notification.create(
        type,
        'User Id not found',
        ' Trying to access this page without user Permiction .'
      )
    }
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  userNameAsyncValidator = (control: UntypedFormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'Admin') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
}

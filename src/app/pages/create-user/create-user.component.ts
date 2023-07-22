import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthservService } from 'src/app/authserv.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  validateForm: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder,private _user: AuthservService,private _router:Router,private _notification:NzNotificationService) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]]
    });

  }
  submitForm() {
    let type=''
    console.log('submit', this.validateForm.value);
   this._user.createuser(this.validateForm.value).subscribe((f:any)=>{
    if(f){
      type="success";
      this._notification.create(
        type,
        'User Created',
      'User saved perfectly .'
      )
      this._router.navigate(['/users']);
    }
   },(error:any)=>{
    if(error.status === 401){
      type="warning"
       this._notification.create(
      type,
      'UnAuthorized ',
    'Plese check the Email id you enterd . that was allready exited used'
    )
    }else{ type="error"
    this._notification.create(
   type,
   'Internal Server Error ',
 ' Server is not responding'
 )}
  })
     
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

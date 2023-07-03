import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PasswordMatch } from '../validators/password-match';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  notCompleted = false;
  constructor(private passwordMatch: PasswordMatch){}

  cardForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      
    ])

  }, {validators: [this.passwordMatch.validate]})

  onSubmit(){

    
    if(this.cardForm.controls.confirmPassword.value && this.cardForm.controls.password.value && this.cardForm.controls.email.value && this.cardForm.controls.confirmPassword.value === this.cardForm.controls.password.value){

      console.log('Valid')
      this.notCompleted = false;

    }else{

      this.notCompleted = true;
      console.log('Invalid')

    }

    
  }
}

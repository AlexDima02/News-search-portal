import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PasswordMatch } from '../validators/password-match';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  notCompleted = false;
  notValidEmail = false;
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

    
    if(this.cardForm.controls.password.value && this.cardForm.controls.email.value){

      
      console.log('Valid')
      this.notCompleted = false;
      this.notValidEmail = false 

    }else{

      this.notCompleted = true;

    }
    if(this.cardForm.controls.email.invalid){ 
      
    
      console.log('Invalid')
    
      this.notValidEmail = true 
  
    }

  }
}

import { Validator, FormGroup, AbstractControl } from '@angular/forms'
import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})

export class PasswordMatch implements Validator{
    
    // Implementam interfata Validator din Forms module pentru a ne ajuta sa creeam o noua validare dupa un sablon corect
    validate = (formGroup: AbstractControl) => {
        
        // formGroup este instanta de care avem nevoie in functia care valideaza
        // Ne ajuta sa aducem valori din input-urile din template si sa creeam o
        const {password, confirmPassword} = formGroup.value;
        console.log(password)
        console.log(confirmPassword)
        if(password === confirmPassword){

            return null

        }else{

            return {passwordsDontMatch: true}

        }

    }
}

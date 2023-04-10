import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth', 
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    error!: string;
    constructor(private authService: AuthService) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmit(form: NgForm){
        if(!form.valid){
            return;
        }
        if (this.isLoginMode) {
            //..
        } else {
            const email = form.value.email;
            const password = form.value.password;
            this.authService.signup(email,password)
            .subscribe( resData => {
                console.log(resData)
            }, errorMessage => {
                console.log(errorMessage);    
                this.error = errorMessage;
            })
        }
        form.reset();
    }

}
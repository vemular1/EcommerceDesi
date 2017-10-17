import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'guest-root',
  templateUrl: './guest.component.html',
   styleUrls: ['./guest.component.css']
 
 
})

export class GuestComponent   {
    email: string;
    password: string;
    constructor(public authService: AuthService) {}
    
      signup() {
        this.authService.signup(this.email, this.password);
        this.email = this.password = '';
      }

      logout() {
        this.authService.logout();
      }
      
    submitted: boolean = false;
    onSubmit(value:any){
    
        console.log(value);
        this.submitted= true;
 

  
}
}
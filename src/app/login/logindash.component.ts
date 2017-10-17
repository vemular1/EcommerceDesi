import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'logindash-root',
  templateUrl: './logindash.component.html',
  styleUrls: ['./logindash.component.css']
})

export class LogindashComponent {
    email: string;
    password: string;
 
Some:string="User";
 
UserChangePanel(){
this.Some='User';
}

DriverChangePanel(){
this.Some='Driver';
}

VendorChangePanel(){
this.Some='Vendor';
}

constructor(public authService: AuthService) {}
login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }


loginAll(username, pass){
  
    if(this.Some === "User"){
alert(this.Some+""+username +""+pass);
    }
if(this.Some === "Driver"){
alert(this.Some);
    }
if(this.Some === "vendor"){
alert(this.Some);
    }
}


}
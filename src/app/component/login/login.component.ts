import { Component , ViewChild} from '@angular/core';
import {Popup} from 'ng2-opd-popup';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent  { 

  private email:string;
  private password:string;
      
      @ViewChild('popup1') popup1: Popup;
       @ViewChild('popup5') popup5: Popup;

     showLogin(){
            this.popup5.options = {
            cancleBtnClass: "btn btn-default", 
            confirmBtnClass: "btn btn-mbe-attack",
            color: "#696969",
            header: "Login...",
            widthProsentage:50,
            animation: "bounceInDown",
            confirmBtnContent: "Login"}
            this.popup5.show(this.popup5.options);
  }

      ClickButton(){
          this.popup1.show();
        }

         login(){
    alert('Email: ' + this.email + '  Password: ' + this.password);
    this.popup5.hide();
  }
    
 }

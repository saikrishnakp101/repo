import { Component } from '@angular/core';
//import { SchoolService } from '../services/school.service'

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent  { 

      private schoolName:string;

      constructor(){
        this.schoolName = 'Sri Sai Public School'
      }
    
 }

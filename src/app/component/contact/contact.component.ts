import { Component } from '@angular/core';
import { ContactService} from '../../services/contact/contact.service'


@Component({
  moduleId: module.id,
  selector: 'contact',
  templateUrl: 'contact.component.html',
})
export class ContactComponent  { 
    
      private contacts:any;
    

    constructor(private _contactService:ContactService){
       
       this.contacts = this._contactService.getContactsObj();

        console.log(this.contacts);
    }
 }

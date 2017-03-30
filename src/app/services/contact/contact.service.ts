import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()

export class ContactService{

    private contacts:any;

    constructor(){
        console.log('school service ready');

        this.contacts = [{
             contactName:"Ruby Rose",
             contactEmail:`test1@email1.'com  `,
             contactProfilePic:"https://s-media-cache-ak0.pinimg.com/736x/af/58/28/af5828bb2044f323c713dea923b01db7.jpg",
             contactPhone:`999-999-8888`,
             contactProfession:'teacher'
        },
            {
             contactName:"Albert Einstine",
             contactEmail:`test@email.'com  `,
             contactProfilePic:"https://s-media-cache-ak0.pinimg.com/originals/39/e9/b3/39e9b39628e745a39f900dc14ee4d9a7.jpg",
             contactPhone:`999-999-9999`,
             contactProfession:'principle'
        }
        ];
    }

    getContactsObj(){
        return this.contacts;
    }
}
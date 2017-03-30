import { Component } from '@angular/core';
import { AboutService} from '../../services/about/about.service';


@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
})
export class AboutComponent  { 
      private about:any;
    

    constructor(private _aboutService:AboutService){
       
       this.about = this._aboutService.getHomeObj();

        console.log(this.about);
    }
 }

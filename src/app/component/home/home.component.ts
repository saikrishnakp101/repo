import { Component } from '@angular/core';
import { HomeService} from '../../services/home/home.service'


@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
})
export class HomeComponent  { 
    private home:any;
    

    constructor(private _homeService:HomeService){
       
       this.home = this._homeService.getHomeObj();

        console.log(this.home);
    }

 }

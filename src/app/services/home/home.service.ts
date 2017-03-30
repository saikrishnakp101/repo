import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()

export class HomeService{

    private home:any;

    constructor(){
        console.log('school service ready');

        this.home = {
             homeHeading:"Sri Sai Public school",
             homeMsg:`A place where both physical and metal education is given high priopority. Our
                       efforts are to bring the best out of all students. Not only get them educated but make them 
                       a all round individuals  `,
             homeHistory:`Our school has been established in 1983 and we are The University of Texas at 
                            San Antonio is dedicated to the advancement of knowledge through research and discovery, teaching and learning, community engagement and public service. As an institution of access and excellence, UTSA embraces multicultural traditions and serves as a center for intellectual and creative re
                            as well as a catalyst for socioeconomic development and the commercialization of intellectual property`
        }
    }

    getHomeObj(){
        return this.home;
    }
}
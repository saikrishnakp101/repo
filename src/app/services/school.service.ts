import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()

export class SchoolService{

    private schoolName:string;

    constructor(){
        console.log('school service ready');

        this.schoolName = 'Sri Sai Public school';
    }

    getSchoolName(){
        return this.schoolName;
    }
}
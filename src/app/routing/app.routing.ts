import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes } from '@angular/router'; 

import {HomeComponent} from '../component/home/home.component';
import {AboutComponent} from '../component/about/about.component';
import {LoginComponent} from '../component/login/login.component';
import {ContactComponent} from '../component/contact/contact.component';

const appRoutes:Routes =[
        {
         path:'',
         component: HomeComponent   
        },
        {
         path:'about',
         component: AboutComponent   
        },
        {
         path:'login',
         component: LoginComponent   
        },
        {
         path:'contact',
         component: ContactComponent   
        },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
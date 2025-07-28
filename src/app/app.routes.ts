import { Routes } from '@angular/router';
import {HomeComponent } from './pages/home/home.component';
import {VpnsComponent} from './pages/vpns/vpns.component';
import { AbcComponent } from '../app/pages/abc/abc.component';
import { AcpsComponent } from '../app/pages/acps/acps.component';


export const routes: Routes = [

    {
        path: '', 
        component: HomeComponent
    },

    
    {
        path: 'vpns', 
        component: VpnsComponent
    },

    {
        path: 'abc',
        component: AbcComponent
    },

    {
        path: 'acps',
        component: AcpsComponent
    },

];

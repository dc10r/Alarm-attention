import { Routes } from '@angular/router';
import {HomeComponent } from './pages/home/home.component';
import {VpnsComponent} from './pages/vpns/vpns.component';
import { AbcComponent } from '../app/pages/abc/abc.component';
import { AcpsComponent } from '../app/pages/acps/acps.component';
import { ApuntesComponent } from './pages/apuntes/apuntes.component';
import { EigrpComponent } from './cisco/eigrp/eigrp.component';
import { OspfCommandsComponent } from './cisco/ospf-commands/ospf-commands.component';
import { OspfprepComponent } from './cisco/ospfprep/ospfprep.component';
import { OspfComponent } from './cisco/ospf/ospf.component';

export const routes: Routes = [

    {
        path: '', 
        component: HomeComponent
    },

    
    {
        path: 'cisco', 
        component: ApuntesComponent
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

    {
        path: 'eigrp',
        component: EigrpComponent
    },
    {
        path: 'ospf',
        component: OspfComponent
    },
    {
        path: 'OspfCom',
        component: OspfCommandsComponent
    },
        {
        path: 'OspfPrep',
        component: OspfprepComponent
    },

];

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogComponent } from './components/log/log.component';
import { FirmComponent } from './components/firm/firm.component';

export const routes: Routes = [
    {
        path:'home',component:HomeComponent
    },
    {
        path:'firm',component:FirmComponent
    },
    {
        path:'logs',component:LogComponent
    }
];

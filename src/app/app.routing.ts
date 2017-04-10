import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WelcomeComponent} from './components/welcome.component/welcome.component';
import {RootComponent} from './components/root.component/root.component';
import { ProfileComponent } from './components/profile.component/profile.component'

import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'accountapp',
        component: RootComponent,
        canActivate: [AuthGuard]
    }
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WelcomeComponent} from './components/welcome/welcome.component';
import {RootComponent} from './components/root.component/root.component';

import {AuthGuard} from './auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'profile',
        component: RootComponent,
        canActivate: [AuthGuard]
    }
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

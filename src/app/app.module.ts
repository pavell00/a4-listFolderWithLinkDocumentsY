import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {routing, appRoutingProviders} from './app.routing'

import { AppData } from './data/app.data';
import {AUTH_PROVIDERS} from 'angular2-jwt'

import { CalendarModule, DataTableModule, AutoCompleteModule,
        ToolbarModule, SplitButtonModule, DialogModule,
        InputSwitchModule } from 'primeng/primeng'

import { WelcomeComponent } from './components/welcome/welcome.component';
import { RootComponent } from './components/root.component/root.component';
import { FolderComponent } from './components/folder.component/forlder.component';
import { DocumentComponent } from './components/document.component/document.component';
import { JournalComponent } from './components/journal.component/journal.component';
import { CalendarComponent } from './components/calendar.component/calendar.component';
import { AutoComplitEntityComponent }  from './components/autocomplit.entity.component/autocomplit.entity.component';
import { EditDialogComponent } from './components/edit.dialog.component/edit.dialog.component';
import { BreadCramberComponent } from './components/breadcramber.component/breadcramber.component';

import { AppService } from './services/app.service';
import {Auth} from './services/auth0.service'
import {AuthGuard} from './auth.guard'


@NgModule({
  imports:      [ BrowserModule, routing,
                  BrowserAnimationsModule,
                  HttpModule,
                  FormsModule,
                  JsonpModule,
                  CalendarModule, DataTableModule, AutoCompleteModule,
                  ToolbarModule, SplitButtonModule, DialogModule,
                  InputSwitchModule],
  declarations: [ RootComponent, JournalComponent,
                  DocumentComponent, FolderComponent,
                  CalendarComponent, AutoComplitEntityComponent,
                  EditDialogComponent, BreadCramberComponent, WelcomeComponent ],
  providers:    [ AppService, appRoutingProviders,
                  AUTH_PROVIDERS, Auth, AuthGuard ],                  
  bootstrap:    [ WelcomeComponent ]
})
export class AppModule { }

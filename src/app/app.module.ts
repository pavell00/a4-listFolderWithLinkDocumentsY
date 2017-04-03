import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

import { AppData }             from './data/app.data';

import { CalendarModule, DataTableModule, AutoCompleteModule,
        ToolbarModule, SplitButtonModule, DialogModule,
        InputSwitchModule } from 'primeng/primeng'

import { RootComponent }  from './components/root.component/root.component';
import { FolderComponent }  from './components/folder.component/forlder.component';
import { DocumentComponent }  from './components/document.component/document.component';
import { JournalComponent }  from './components/journal.component/journal.component';
import { CalendarComponent }  from './components/calendar.component/calendar.component';
import { AutoComplitEntityComponent }  from './components/autocomplit.entity.component/autocomplit.entity.component';
import { EditDialogComponent } from './components/edit.dialog.component/edit.dialog.component';
import { BreadCramberComponent } from './components/breadcramber.component/breadcramber.component';

import { AppService } from './services/app.service';

@NgModule({
  imports:      [ BrowserModule,
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
                  EditDialogComponent, BreadCramberComponent ],
  providers:    [ AppService ],                  
  bootstrap:    [ RootComponent ]
})
export class AppModule { }

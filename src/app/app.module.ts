import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocalStorageModule } from 'angular-2-local-storage';

import { ListService } from './list.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { OrderByDoneAndDatePipe } from './order-by-done-and-date.pipe';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    OrderByDoneAndDatePipe,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    LocalStorageModule.withConfig({
      prefix: 'todo-list',
      storageType: 'localStorage'
    })
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

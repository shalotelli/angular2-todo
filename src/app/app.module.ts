import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ListService } from './list.service';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { OrderByDoneAndDatePipe } from './order-by-done-and-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    OrderByDoneAndDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchAndFiltersComponent } from './dashboard/search-and-filters/search-and-filters.component';
import { RecordListComponent } from './dashboard/record-list/record-list.component';
import { RecordGridComponent } from './dashboard/record-grid/record-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    SearchAndFiltersComponent,
    RecordListComponent,
    RecordGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

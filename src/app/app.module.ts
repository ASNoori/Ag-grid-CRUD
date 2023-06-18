import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AggridformComponent } from './aggridform/aggridform.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditCompComponent } from './aggridform/render/edit-comp/edit-comp.component';
import { UpdatedetaildialogComponent } from './updatedetaildialog/updatedetaildialog.component';
import { DelCompComponent } from './aggridform/render/del-comp/del-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    AggridformComponent,
    EditCompComponent,
    UpdatedetaildialogComponent,
    DelCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
   ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

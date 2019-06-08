import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { My2nddialogComponent } from './my2nddialog/my2nddialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MyDialogComponent,
    My2nddialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    
  ],
  entryComponents: [
    MyDialogComponent,
    My2nddialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogAddStaff, DialogEditStaff } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    DialogAddStaff,
    DialogEditStaff
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatButtonModule,
    MatGridListModule,
    MatNativeDateModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  entryComponents: [DialogAddStaff, DialogEditStaff],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule, routingomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { AddOREditComponent } from './add-oredit/add-oredit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StytableComponent } from './stytable/stytable.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { TestingComponent } from './testing/testing.component';
import { WnfComponent } from './wnf/wnf.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TudComponent } from './stytable/tud/tud.component';



@NgModule({
  declarations: [
    AppComponent,
    AddOREditComponent,
    StytableComponent,
    HeaderComponent,
    SidenavComponent,routingomponents, TestingComponent, WnfComponent, DashboardComponent, TudComponent, 
  ],
  imports: [
    BrowserModule,AppRoutingModule,BrowserAnimationsModule,MatToolbarModule,
    MatIconModule,MatDialogModule,MatButtonModule,MatFormFieldModule,MatInputModule,
    MatDatepickerModule,MatNativeDateModule,MatRadioModule,MatSelectModule,ReactiveFormsModule,
    HttpClientModule,MatTableModule,MatPaginatorModule,MatSortModule,FlexLayoutModule,MatSidenavModule,MatDividerModule,MatListModule,
    MatMenuModule,MatProgressSpinnerModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

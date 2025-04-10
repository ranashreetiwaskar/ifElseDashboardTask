import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './shared/services/api.interceptor';
import { LayoutComponent } from './layout/layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SpinnerComponent } from './shared/loading-spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { CircleChartComponent } from './dashboard/charts/circle-chart/circle-chart.component';
import { BarChartComponent } from './dashboard/charts/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    SpinnerComponent,
    ConfirmDialogComponent,
    BarChartComponent,
    CircleChartComponent,
  ],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

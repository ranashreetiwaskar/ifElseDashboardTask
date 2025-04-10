import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { BarChartComponent } from '../shared/charts/bar-chart/bar-chart.component';
import { CircleChartComponent } from '../shared/charts/circle-chart/circle-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ApiInterceptor } from '../shared/services/api.interceptor';
import { ApiService } from '../shared/services/api.service';


@NgModule({
  declarations: [
    MainDashboardComponent,
    SpinnerComponent,
    ConfirmDialogComponent,
    BarChartComponent,
    CircleChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    MatDialogModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ]

})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { CircleChartComponent } from './charts/circle-chart/circle-chart.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';


@NgModule({
  declarations: [
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

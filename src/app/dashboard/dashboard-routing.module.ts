import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

const routes: Routes = [

  { path: '', component: MainDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

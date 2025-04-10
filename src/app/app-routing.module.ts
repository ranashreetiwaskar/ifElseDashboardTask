import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { BarChartComponent } from './dashboard/charts/bar-chart/bar-chart.component';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () =>
      import('../app/dashboard/dashboard.module').then((m) => m.DashboardModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

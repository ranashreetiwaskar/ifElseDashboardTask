import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: false,
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {

public chartData = [
      {
        name: 'Jan',
        series: [
          { name: 'Low', value: 30 },
          { name: 'Medium', value: 30 },
          { name: 'High', value: 20 },
        ],
      },
      {
        name: 'Feb',
        series: [
          { name: 'Low', value: 20 },
          { name: 'Medium', value: 30 },
          { name: 'High', value: 45 },
        ],
      },
      {
        name: 'Mar',
        series: [
          { name: 'Low', value: 30 },
          { name: 'Medium', value: 30 },
          { name: 'High', value: 25 },
        ],
      },
      {
        name: 'Apr',
        series: [
          { name: 'Low', value: 40 },
          { name: 'Medium', value: 20 },
          { name: 'High', value: 15 },
        ],
      },
      {
        name: 'May',
        series: [
          { name: 'Low', value: 30 },
          { name: 'Medium', value: 20 },
          { name: 'High', value: 45 },
        ],
      },
      {
        name: 'Jun',
        series: [
          { name: 'Low', value: 20 },
          { name: 'Medium', value: 40 },
          { name: 'High', value: 25 },
        ],
      },
      {
        name: 'Jul',
        series: [
          { name: 'Low', value: 10 },
          { name: 'Medium', value: 20 },
          { name: 'High', value: 15 },
        ],
      },
      {
        name: 'Aug',
        series: [
          { name: 'Low', value: 40 },
          { name: 'Medium', value: 20 },
          { name: 'High', value: 25 },
        ],
      },
      {
        name: 'Sept',
        series: [
          { name: 'Low', value: 20 },
          { name: 'Medium', value: 20 },
          { name: 'High', value: 25 },
        ],
      },
      {
        name: 'Oct',
        series: [
          { name: 'Low', value: 15 },
          { name: 'Medium', value: 20 },
          { name: 'High', value: 15 },
        ],
      },
      {
        name: 'Nov',
        series: [
          { name: 'Low', value: 20 },
          { name: 'Medium', value: 20 },
          { name: 'High', value: 55 },
        ],
      },
      {
        name: 'Dec',
        series: [
          { name: 'Low', value: 30 },
          { name: 'Medium', value: 30 },
          { name: 'High', value: 25 },
        ],
      },
    ];
  
    colorScheme: Color = {
      name: 'customScheme',
      selectable: true,
      domain: ['#7560b3', '#886fce', '#e6e2f7'],
      group: ScaleType.Time,
    };
  
    formatYAxis(value: number): string {
      return `${value}`;
    }
}

import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: any;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
};

@Component({
  selector: 'app-pie-chart',
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})

export class PieChartComponent {
  chartOptions: ChartOptions = {
  series: [45, 30, 25],
  chart: {
    width: 450,
    type: 'pie'
  },
  labels: ['Team A', 'Team B', 'Team C'],
  colors: ['var(--rosa3)', 'var(--rosa4)', 'var(--verde4)'],
  dataLabels: {
    style: {
      fontSize: '18px', // tamaño del número dentro del gráfico
      fontWeight: 'bold'
    }
  },
  legend: {
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '18px', // tamaño del texto de leyenda
    fontWeight: 'bold',
    fontFamily: 'inherit',
    labels: {
      colors: 'var(--text-color)' // Color del texto de la leyenda
    } 
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
};
}

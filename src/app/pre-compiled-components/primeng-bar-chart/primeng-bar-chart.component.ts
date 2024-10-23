import { Component, Input, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-primeng-bar-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './primeng-bar-chart.component.html',
  styleUrl: './primeng-bar-chart.component.scss',
})
export class PrimengBarChartComponent implements OnInit {
  @Input() basicData: any;
  @Input() basicOptions: any;

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import type { EChartsOption } from 'echarts';

@Component({
  selector: 'app-echart-vertical-bar',
  templateUrl: './echart-vertical-bar.component.html',
  styleUrl: './echart-vertical-bar.component.scss',
})
export class EchartVerticalBarComponent {
  initOpts = {
    renderer: 'svg',
    width: 300,
    height: 300,
  };

  options: EChartsOption = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };
}

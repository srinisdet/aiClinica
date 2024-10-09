import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-doughnut-echart',
  templateUrl: './doughnut-echart.component.html',
  styleUrl: './doughnut-echart.component.scss',
})
export class DoughnutEchartComponent {
  options: EChartsOption = {
    title: {
      left: '50%',
      text: 'Report Analysis',
      subtext: 'Analysis at each category level',
      textAlign: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      align: 'auto',
      bottom: 10,
      data: [
        'Area 1',
        'Area 2',
        'Area 3',
        'Area 4',
        'Area 5',
        'Area 6 ',
        'Area 7',
        'Area 8',
      ],
    },
    calculable: true,
    series: [
      {
        name: 'Recorded Value',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 10, name: 'Area 1' },
          { value: 5, name: 'Area 2' },
          { value: 15, name: 'Area 3' },
          { value: 25, name: 'Area 4' },
          { value: 20, name: 'Area 5' },
          { value: 35, name: 'Area 6' },
          { value: 30, name: 'Area 7' },
          { value: 40, name: 'Area 8' },
        ],
      },
    ],
  };
}

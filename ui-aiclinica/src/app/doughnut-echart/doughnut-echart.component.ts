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
        'Category 1',
        'Category 2',
        'Category 3',
        'Category 4',
        'Category 5',
        'Category 6 ',
        'Category 7',
        'Category 8',
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
          { value: 10, name: 'Category 1' },
          { value: 5, name: 'Category 2' },
          { value: 15, name: 'Category 3' },
          { value: 25, name: 'Category 4' },
          { value: 20, name: 'Category 5' },
          { value: 35, name: 'Category 6' },
          { value: 30, name: 'Category 7' },
          { value: 40, name: 'Category 8' },
        ],
      },
    ],
  };
}

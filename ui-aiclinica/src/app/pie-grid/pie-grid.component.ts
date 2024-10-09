import { Component, Input } from '@angular/core';
import { single } from './data';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrl: './pie-grid.component.scss',
})
export class PieGridComponent {
  percentage: number = 0; //our text in the middle of the pie
  @Input() CurrentNumber: number = 0;
  @Input() TotalNumber: number = 0;
  @Input() PieTitle: string = 'Pie Chart';
  @Input() activeColor: string = '#000';
  @Input() secondColor: string = '#D8D8D8';
  @Input() textColor: string = '#272727';

  single: any[] = [];
  colorScheme!: Color;

  view: [number, number] = [180, 180]; //height & width

  constructor() {
    Object.assign(this, { this: this.single });
  }

  ngOnInit(): void {
    this.percentage = Math.floor((this.CurrentNumber / this.TotalNumber) * 100); //calculating our percentage
    //pie charts sets all values on 1 chart unlike pie grid
    // so to be able to customize we will use this array to set our desired number
    // and the rest will be the total unachieved
    this.single = [
      {
        name: 'Done',
        value: this.CurrentNumber,
      },
      {
        name: 'Undone',
        value: this.TotalNumber - this.CurrentNumber,
      },
    ];

    this.colorScheme = {
      name: 'myScheme',
      selectable: true,
      group: ScaleType.Ordinal,
      domain: [this.activeColor, this.secondColor],
    };
  }
}

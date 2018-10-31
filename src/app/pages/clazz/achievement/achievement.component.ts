import { Component, OnInit } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts/release/utils';


@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.scss']
})
export class AchievementComponent implements OnInit {

  view = undefined;


  single = [
    {
      name: '《欧洲文化渊源》 一年级一班',
      value: 95
    },
    {
      name: '《欧洲文化渊源》 一年级二班',
      value: 87
    }
  ];


  x = 0;
  colorScheme: any;
  colorSets: any;
  ngOnInit() {
  }


  constructor() {


    Object.assign(this, {


      colorSets,

    });




    this.setColorScheme('cool');



  }

  setColorScheme(name) {

    this.colorScheme = this.colorSets.find(s => s.name === name);
  }

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = '班级';
  legendPosition = 'right';
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = '平均成绩';
  showYAxisLabel = false;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = '10%';
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;
  roundEdges: boolean = true;
  animations: boolean = true;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  showDataLabel = false;
  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }
  select(data) {
    console.log('Item clicked', data);
  }

}

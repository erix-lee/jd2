import { NgModule } from '@angular/core';

import { RosterComponent } from './roster/roster.component';
import { ResultComponent } from './result/result.component';
import { AchievementComponent } from './achievement/achievement.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SchoolworkComponent } from './schoolwork/schoolwork.component';


const routes: Routes = [

  {
    component: RosterComponent,
    path: 'roster',
  }, {
    component: ResultComponent,
    path: 'result',
  }, {
    component: AchievementComponent,
    path: 'achievement',
  }, {
    component: SchoolworkComponent,
    path: 'schoolwork',
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    NgxChartsModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [RosterComponent, ResultComponent, AchievementComponent, SchoolworkComponent]
})
export class ClazzModule { }

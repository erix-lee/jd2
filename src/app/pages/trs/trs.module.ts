import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [

  {
    component: ProfileComponent,
    path: ':id',
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    NgxChartsModule,
  ],
  exports: [
    RouterModule
  ], 
  declarations: [ProfileComponent]
})
export class TrsModule { }

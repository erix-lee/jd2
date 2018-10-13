import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TimelineComponent },
];

@NgModule({
  imports: [
   
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TimelineComponent],
  exports: [
      RouterModule
  ]
})
export class TimelineModule { }
 

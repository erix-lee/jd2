import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share/share.component';
import { ApprovalComponent } from './approval/approval.component';
import { CoursewareComponent } from './courseware.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CoursewareComponent,ApprovalComponent,ShareComponent],
  exports:[
    ApprovalComponent,ShareComponent
  ]
})
export class CoursewareModule { }

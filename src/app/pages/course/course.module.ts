import { NgModule } from '@angular/core';

import { CourseComponent } from './course.component';
import { HomepageComponent } from './homepage/homepage.component';

import { UnitComponent } from './unit/unit.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApprovalComponent } from '../courseware/approval/approval.component';


import { ExamComponent } from '../exam/exam.component';
import { TeamComponent } from './team/team.component';
import { ShareComponent } from '../courseware/share/share.component';
import { CoursewareModule } from '../courseware/courseware.module';
import { ExamModule } from '../exam/exam.module';
import { NoticeModule } from '../notice/notice.module';
import { TestpaperComponent } from '../exam/testpaper/testpaper.component';

import { NoticeEditComponent } from '../notice/notice-edit/notice-edit.component';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
import { NoticeViewComponent } from '../notice/notice-view/notice-view.component';
import { ListComponent } from './list/list.component';
defineLocale('zh-cn', deLocale); 

const routes: Routes = [

  {
    path: ':id', component: CourseComponent,
    children: [

      { path: '', component: HomepageComponent },
 
      { path: 'approval', component: ApprovalComponent },
      { path: 'team', component: TeamComponent },

      { path: 'list', component: ListComponent },
      { path: 'share', component: ShareComponent },
      { path: 'exam', component: ExamComponent },
      { path: 'testpaper', component: TestpaperComponent },
      { path: 'notice', component: NoticeViewComponent },
      { path: 'notice-new', component: NoticeEditComponent }
    ]
  },

];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),

    NgxDatatableModule,
    CoursewareModule,
    ExamModule,
    NoticeModule
  ],
  declarations: [CourseComponent, HomepageComponent, UnitComponent,TeamComponent, ListComponent],
  exports: [
    RouterModule
  ]
})
export class CourseModule {

}

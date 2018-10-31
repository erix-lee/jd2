import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam.component';
import { TestpaperComponent } from './testpaper/testpaper.component';
import { SharedModule } from '../../shared/shared.module';

import { ClassReportComponent } from './class-report/class-report.component';
import { MyReportComponent } from './my-report/my-report.component';
import { Routes, RouterModule } from '@angular/router';
import { AnswerSheetComponent } from './answer-sheet/answer-sheet.component';
import { IncomingComponent } from './incoming/incoming.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [

  {
    component: MyReportComponent,
    path: 'myreport',
  }, {
    component: ClassReportComponent,
    path: 'class-report',
  }, {
    component: TestpaperComponent,
    path: 'test-paper',
  },
  {
    component: ExamComponent,
    path: 'list',
  },
  {
    component: AnswerSheetComponent,
    path: 'answer-sheet',
  },
  {
    component: IncomingComponent,
    path: 'incoming',
  },
  {
    component: TestComponent,
    path: 'test',
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule,ExamComponent, TestpaperComponent
  ],
  declarations: [ExamComponent, TestpaperComponent,  ClassReportComponent, MyReportComponent, AnswerSheetComponent, IncomingComponent, TestComponent],

})
export class ExamModule { }

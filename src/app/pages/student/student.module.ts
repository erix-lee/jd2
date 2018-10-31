import { NgModule } from '@angular/core';

import { IndexComponent } from './index/index.component';
import { CourseComponent } from './course/course.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  
  {
    component: IndexComponent,
    path: '',
  }, {
    component: CourseComponent,
    path: 'courses',
  }, 
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [IndexComponent, CourseComponent],
  exports: [
    RouterModule
  ],
})
export class StudentModule { }

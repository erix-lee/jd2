import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TeachersComponent } from './teachers/teachers.component';
import { StudentsComponent } from './students/students.component';

import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { StaffComponent, DialogOverviewExampleDialog } from './staff/staff.component';
import { SettingComponent } from './setting/setting.component';
import { ClassGradeComponent } from './class-grade/class-grade.component';

const routes: Routes = [

  {
    component: DashboardComponent,
    path: 'dashboard',
  }, {
    component: TeachersComponent,
    path: 'teachers',
  }, {
    component: StudentsComponent,
    path: 'students',
  },
  {
    component: StaffComponent,
    path: 'staff',
  },
  {
    component: SettingComponent,
    path: 'setting',
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [DashboardComponent, TeachersComponent, StudentsComponent, StaffComponent, SettingComponent,ClassGradeComponent,DialogOverviewExampleDialog],
  
  entryComponents: [DialogOverviewExampleDialog],
})
export class AdminModule { }


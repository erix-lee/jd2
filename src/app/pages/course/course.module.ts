import { NgModule } from '@angular/core';

import { CourseComponent } from './course.component';
import { HomepageComponent } from './homepage/homepage.component';

import { UnitComponent } from './unit/unit.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: Routes = [

  {
    path: ':id', component: CourseComponent,
    children: [

      { path: '', component: HomepageComponent },

    ]
  },

];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),

    NgxDatatableModule,

  ],
  declarations: [CourseComponent, HomepageComponent, UnitComponent],
  exports: [
    RouterModule
  ]
})
export class CourseModule {

}

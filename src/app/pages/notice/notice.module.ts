import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { NoticeEditComponent } from './notice-edit/notice-edit.component';
import { Routes, RouterModule } from '@angular/router';

import { NoticeViewComponent } from './notice-view/notice-view.component';
import { NoticeListComponent } from './notice-list/notice-list.component';



const routes: Routes = [

  {
    component: NoticeListComponent,
    path: 'list',
  }, {
    component: NoticeEditComponent,
    path: 'edit',
  }, {
    component: NoticeViewComponent,
    path: 'view',
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [ NoticeEditComponent, NoticeViewComponent, NoticeListComponent],
  exports:[NoticeViewComponent,RouterModule]
})
export class NoticeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ExtrasModule } from '../routes/extras/extras.module';
import { InvoiceComponent } from '../routes/extras/invoice/invoice.component';
const routes: Routes = [
  { path: '', component: CatalogComponent },
];

@NgModule({
  imports: [
     
    SharedModule,
  
    ExtrasModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CatalogComponent]
  ,
  exports: [
      RouterModule
  ]
})
export class CourseModule { }

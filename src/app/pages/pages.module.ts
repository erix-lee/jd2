import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', deLocale); 
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PagesModule { }

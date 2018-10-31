import { Component, OnInit } from '@angular/core';
import { ContentviewService } from '../../../service/ui/contentview.service';
import { BsLocaleService } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';
defineLocale('zh-cn', deLocale); 
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  constructor(public service:ContentviewService,private localeService: BsLocaleService) { 
    
  }

 

  toggleOffsidebar() {
    
     
    this.service.change.emit({
      title:"THEOI GREEK MYTHOLOGY",
      contentUrl:"assets/server/articles/2.html"

    });
   
  }

  ngOnInit() {
   this.localeService.use("zh-cn");
  }

}

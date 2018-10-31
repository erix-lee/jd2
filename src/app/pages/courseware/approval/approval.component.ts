import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { ContentviewService } from '../../../service/ui/contentview.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})
export class ApprovalComponent implements OnInit {

  constructor(public service:ContentviewService) { }

 

  toggleOffsidebar() {
    
     
    this.service.change.emit({
      title:"Olympian Gods",
      contentUrl:"assets/server/articles/2.html"

    });
   
  }

  ngOnInit() {
  }

}

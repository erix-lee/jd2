import { Component, OnInit } from '@angular/core';

import { ContentviewService } from '../../../service/ui/contentview.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {

  constructor(public service:ContentviewService) { }

  ngOnInit() {
  }

  toggleOffsidebar( ) {
 
    this.service.change.emit({
      title:"11",
      contentUrl:"assets/server/articles/1.html"

    });
 

  }


}

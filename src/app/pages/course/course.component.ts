import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {


  id:number;
  
  activeLink="/";
  scrollwheel = false;
  contents: string;
  constructor( private route: ActivatedRoute,public auth: AuthService) { console.log('constructor'); }

  ngOnInit() {
      this.contents=this.auth.getToken();
      
      this.id = this.route.snapshot.params['id'];
      
      console.log( this.id );
  }

}

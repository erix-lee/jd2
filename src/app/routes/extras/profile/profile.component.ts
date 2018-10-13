import { Component, OnInit ,ViewChild, OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceComponent } from '../invoice/invoice.component';
import { AuthService } from '../../../../service/auth.service';
declare var $: any;
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit ,OnChanges,AfterViewInit{
    ngAfterViewInit(): void {
        console.log(121);
    }

  
    id:number;
  
    activeLink="/";
    scrollwheel = false;
    contents: string;
    constructor( private route: ActivatedRoute,public auth: AuthService) { console.log('constructor'); }
    ngOnChanges(changes: SimpleChanges): void {
        this.id = this.route.snapshot.params['id'];
        console.log('???');
      }
    ngOnInit() {
        this.contents=this.auth.getToken();
        
        this.id = this.route.snapshot.params['id'];
        
        console.log(111);
    }

}

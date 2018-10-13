import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceComponent } from '../invoice/invoice.component';
import { AuthService } from '../../../../service/auth.service';
declare var $: any;
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    @ViewChild(InvoiceComponent) child: InvoiceComponent;
    lat: number = 33.790807;
    lng: number = -117.835734;
    id:number;
    zoom: number = 14;
    activeLink="/";
    scrollwheel = false;
    contents: string;
    constructor( private route: ActivatedRoute,public auth: AuthService) { }

    ngOnInit() {
        this.contents=this.auth.getToken();
        
        this.id = this.route.snapshot.params['id'];
        this.child.setId(this.id);
    }

}

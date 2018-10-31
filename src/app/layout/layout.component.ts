import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../core/settings/settings.service';
import { ContentviewService } from '../service/ui/contentview.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor( public settings: SettingsService,public service:ContentviewService ) {   service.change.subscribe((value:number)=>{
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    }) }

    ngOnInit() {
    }
    toggleOffsidebar() {
        this.settings.layout.offsidebarOpen = !this.settings.layout.offsidebarOpen;
    }
}

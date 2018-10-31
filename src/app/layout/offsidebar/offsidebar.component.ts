import { Component, OnInit, OnDestroy } from '@angular/core';
declare var $: any;

import { SettingsService } from '../../core/settings/settings.service';
import { ThemesService } from '../../core/themes/themes.service';
import { ContentviewService, Article } from '../../service/ui/contentview.service';
import { HttpClient } from "@angular/common/http" 

@Component({
    selector: 'app-offsidebar',
    templateUrl: './offsidebar.component.html',
    styleUrls: ['./offsidebar.component.scss']
})
export class OffsidebarComponent implements OnInit, OnDestroy {

    currentTheme: any;
    selectedLanguage: string;
    clickEvent = 'click.offsidebar';
    $doc: any = null;

    content="";
    v:Article={title:""};
    constructor(public settings: SettingsService, public themes: ThemesService,public service:ContentviewService ,private http:HttpClient) {
        this.currentTheme = themes.getDefaultTheme();
      
            service.change.subscribe((value:Article)=>{
              this.v=value;
                this.settings.layout.offsidebarOpen = true;
                event.stopPropagation();
                this.http.get(value.contentUrl, {responseType: 'text'})
                .subscribe(res=>{ 
                    this.content=res;

                })
               
            })
        
      
    }

    ngOnInit() {
        this.anyClickClose();
    }

    setTheme() {
        this.themes.setTheme(this.currentTheme);
    }

    



    anyClickClose() {
        this.$doc = $(document).on(this.clickEvent, (e) => {
            if (!$(e.target).parents('.offsidebar').length) {
                this.settings.layout.offsidebarOpen = false;
            }
        });
    }

    ngOnDestroy() {
        if (this.$doc)
            this.$doc.off(this.clickEvent);
    }
}

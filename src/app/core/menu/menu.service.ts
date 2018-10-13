import { Injectable } from '@angular/core';
import { AuthService } from '../../../service/auth.service';

@Injectable()
export class MenuService {

    menuItems: Array<any>;

    constructor(public auth:AuthService) {
        this.menuItems = [];
    }

    addMenu(items: Array<{
        text: string,
        heading?: boolean,
        link?: any,     // internal route links
        elink?: string,    // used only for external links
        target?: string,   // anchor target="_blank|_self|_parent|_top|framename"
        icon?: string,
        alert?: string,
        submenu?: Array<any>
    }>) {
       
        items.forEach((item) => {
            this.menuItems.push(item);
        });
    }

    setMenu(items: Array<{
        text: string,
        heading?: boolean,
        link?: any,     // internal route links
        elink?: string,    // used only for external links
        target?: string,   // anchor target="_blank|_self|_parent|_top|framename"
        icon?: string,
        alert?: string,
        submenu?: Array<any>
    }>) {
        this.menuItems=[];
        items.forEach((item) => {
            this.menuItems.push(item);
        });
    }

    getMenu(role:string) {

        return this.menuItems;
    }

}

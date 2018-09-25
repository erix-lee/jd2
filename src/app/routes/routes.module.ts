import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../core/translator/translator.service';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { menu ,techerMenu,studentMenu,adminMenu,directorMenu} from './menu';
import { routes } from './routes';
import { AuthService } from '../../service/auth.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class RoutesModule {
    constructor(public menuService: MenuService,public auth:AuthService, tr: TranslatorService) {
        let r:string=auth.getToken();
        console.log(r);
        if(r==null){
            menuService.addMenu(menu);
        }else  if(r.startsWith("a")){
            menuService.addMenu(adminMenu);
        }else  if(r.startsWith("s")){
            menuService.addMenu(studentMenu);
        }else  if(r.startsWith("d")){
            menuService.addMenu(directorMenu);
        }else  if(r.startsWith("t")){
            menuService.addMenu(techerMenu);
        }else{
            menuService.addMenu(menu);
        }
        console.log(menuService.menuItems)
    }
}

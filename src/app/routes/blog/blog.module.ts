import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectModule } from 'ng2-select';

import { SharedModule } from '../../shared/shared.module';
import { ListComponent } from './list/list.component';
import { PostComponent } from './post/post.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleviewComponent } from './articleview/articleview.component';
import { DirectorHomeComponent } from '../others/director-home/director-home.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'post', component: PostComponent },

    { path: 'articleview', component: ArticleviewComponent },
    { path: 'dirhome', component: DirectorHomeComponent},
];

@NgModule({
    imports: [
        SharedModule,
        NgxChartsModule,
        RouterModule.forChild(routes),
        SelectModule
    ],
    declarations: [
        ListComponent,
        PostComponent,

        ArticleviewComponent,
        DirectorHomeComponent
    ],
    exports: [
        RouterModule
    ]
})
export class BlogModule { }
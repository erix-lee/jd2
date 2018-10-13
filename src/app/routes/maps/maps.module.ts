import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from '../../shared/shared.module';

import { VectorComponent } from './vector/vector.component';

const routes: Routes = [

    { path: 'vector', component: VectorComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),

    ],
    declarations: [

        VectorComponent
    ],
    exports: [
        RouterModule
    ]
})
export class MapsModule { }
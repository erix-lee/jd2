import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SharedModule } from '../../shared/shared.module';
import { GoogleComponent } from './google/google.component';
import { VectorComponent } from './vector/vector.component';

const routes: Routes = [
    { path: 'google', component: GoogleComponent },
    { path: 'vector', component: VectorComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),

    ],
    declarations: [
        GoogleComponent,
        VectorComponent
    ],
    exports: [
        RouterModule
    ]
})
export class MapsModule { }
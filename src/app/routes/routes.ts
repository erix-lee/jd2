import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { LockComponent } from './pages/lock/lock.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';

export const routes = [

   
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/login', pathMatch: 'full' },
            { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
            { path: 'course', loadChildren: '../pages/course/course.module#CourseModule' },
            { path: 'courseware', loadChildren: '../pages/courseware/courseware.module#CoursewareModule' },
            { path: 'exam', loadChildren: '../pages/exam/exam.module#ExamModule' },
            { path: 'home', loadChildren: '../timeline/timeline.module#TimelineModule' },
            { path: 'notice', loadChildren: '../pages/notice/notice.module#NoticeModule' },
            { path: 'class', loadChildren: '../pages/clazz/clazz.module#ClazzModule' },
            { path: 'learn', loadChildren: '../pages/student/student.module#StudentModule' },
            { path: 'trs', loadChildren: '../pages/trs/trs.module#TrsModule' },
            { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
            
            { path: 'extras', loadChildren: './extras/extras.module#ExtrasModule' },
            
            
        ]
    },

    // Not lazy-loaded routes
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },

    // Not found
    { path: '**', redirectTo: '404' }

];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeModule } from 'angular-tree-component';

import { SelectModule } from 'ng2-select';

import { SharedModule } from '../../shared/shared.module';

import { BugtrackerComponent } from './bugtracker/bugtracker.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CodeeditorComponent } from './codeeditor/codeeditor.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { FilemanagerComponent } from './filemanager/filemanager.component';
import { FollowersComponent } from './followers/followers.component';
import { ForumComponent } from './forum/forum.component';
import { ForumdiscussionComponent } from './forum/forumdiscussion/forumdiscussion.component';
import { ForumtopicsComponent } from './forum/forumtopics/forumtopics.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ComposeComponent } from './mailbox/compose/compose.component';
import { FolderComponent } from './mailbox/folder/folder.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { ViewComponent } from './mailbox/view/view.component';
import { PlansComponent } from './plans/plans.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsdetailsComponent } from './projectsdetails/projectsdetails.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { SocialboardComponent } from './socialboard/socialboard.component';
import { TeamviewerComponent } from './teamviewer/teamviewer.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TodolistComponent } from './todolist/todolist.component';
import { VotelinksComponent } from './votelinks/votelinks.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NoticeComponent } from '../others/notice/notice.component';
import { ArticlesComponent } from '../blog/articles/articles.component';
import { SortableComponent } from '../elements/sortable/sortable.component';
import { DndModule } from 'ng2-dnd';
import { ReportComponent } from './report/report.component';
import { ExamComponent } from './exam/exam.component';
import { Exam2Component } from './exam2/exam2.component';
import { Report2Component } from './report2/report2.component';
import { ArticleviewComponent } from '../blog/articleview/articleview.component';
import { BlogModule } from '../blog/blog.module';
import { ListComponent } from '../blog/list/list.component';

const routes: Routes = [
    { path: 'contacts', component: ContactsComponent },
    { path: 'contactdetails', component: ContactdetailsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projectsdetails', component: ProjectsdetailsComponent },
    { path: 'teamviewer', component: TeamviewerComponent },
    { path: 'socialboard', component: SocialboardComponent },
    { path: 'votelinks', component: VotelinksComponent },
    { path: 'bugtracker', component: BugtrackerComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'helpcenter', component: HelpcenterComponent },
    { path: 'followers', component: FollowersComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'plans', component: PlansComponent },
    { path: 'filemanager', component: FilemanagerComponent },

    {
        path: 'forum',
        children: [
            { path: '', component: ForumComponent },
            { path: 'topics/:catid', component: ForumtopicsComponent, outlet: 'primary' },
            { path: 'discussion/:topid', component: ForumdiscussionComponent, outlet: 'primary' }
        ]
    },
    { path: 'report', component: ReportComponent },
    { path: 'report2', component: Report2Component },
    { path: 'exam', component: ExamComponent },
    { path: 'exam2', component: Exam2Component },
    {
        path: 'mailbox',
        component: MailboxComponent,
        children: [
            { path: '', redirectTo: 'folder/inbox' },
            { path: 'folder/:folder', component: FolderComponent },
            { path: 'view/:mid', component: ViewComponent },
            { path: 'compose', component: ComposeComponent }
        ]
    },

    { path: 'timeline', component: TimelineComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'search', component: SearchComponent },
    { path: 'todolist', component: TodolistComponent },
    {
        path: 'profile/:id', component: ProfileComponent, 
        children: [
     
            { path: '', component: InvoiceComponent },
            { path: 'approval', component: ArticlesComponent },
            { path: 'teamviewer', component: TeamviewerComponent },
            { path: 'test', component: VotelinksComponent },
            { path: 'articleview', component: ArticleviewComponent },
            { path: 'list', component: ListComponent }
        ]
    },
    { path: 'codeeditor', component: CodeeditorComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        TreeModule,
        DndModule.forRoot(),
        NgxDatatableModule,

        BlogModule,
        SelectModule
    ],
    declarations: [
        BugtrackerComponent,
        CalendarComponent,
        CodeeditorComponent,
        ContactdetailsComponent,
        ContactsComponent,
        FaqComponent,
        FilemanagerComponent,
        FollowersComponent,
        ForumComponent,
        ForumdiscussionComponent,
        ForumtopicsComponent,
        HelpcenterComponent,
        InvoiceComponent,
        ComposeComponent,
        FolderComponent,
        MailboxComponent,
        ViewComponent,
        PlansComponent,
        ProfileComponent,
        ProjectsComponent,
        ProjectsdetailsComponent,
        SearchComponent,
        SettingsComponent,
        SocialboardComponent,
        TeamviewerComponent,
        TimelineComponent,
        TodolistComponent,
        VotelinksComponent,
        NoticeComponent,
        ArticlesComponent,
        SortableComponent,
        ReportComponent,
        ExamComponent,
        Exam2Component,
        Report2Component
    ],
    exports: [
        RouterModule,
        InvoiceComponent
    ]
})
export class ExtrasModule { }


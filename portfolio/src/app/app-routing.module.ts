import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found-component';

const appRoutes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
]

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  };


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
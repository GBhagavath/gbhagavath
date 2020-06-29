import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found-component';
import { AboutMeComponent } from './about-me/about-me.component';

const appRoutes: Routes = [
    {path: '', component: ContentComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'about', component: AboutMeComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
]

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  };


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
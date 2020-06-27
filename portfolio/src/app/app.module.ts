import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ContentComponent } from './content/content.component';
import { ProjectsComponent } from './projects/projects.component';
import { SafePipe } from './projects/safepipe.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found-component';
import { FragmentPolyfillModule } from './fragment-polyfill.module';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    ContentComponent,
    ProjectsComponent,
    SafePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FragmentPolyfillModule.forRoot({
			smooth: true
		})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { ProjectspageComponent } from './projectspage/projectspage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { BlogpostComponent } from './blogpage/blogpost/blogpost.component';

const appRoutes: Routes = [
  { path: 'home',     component: HomepageComponent},
  { path: 'about',    component: AboutpageComponent },
  { path: 'blog',     component: BlogpageComponent },
  { path: 'projects', component: ProjectspageComponent },
  { path: 'contact',  component: ContactpageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutpageComponent,
    BlogpageComponent,
    ProjectspageComponent,
    ContactpageComponent,
    BlogpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

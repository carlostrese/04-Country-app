import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContacPageComponent } from './pages/contac-page/contac-page.component';
import { ShearchBoxComponent } from './components/shearch-box/shearch-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPagesComponent,
    SidebarComponent,
    ContacPageComponent,
    ShearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPagesComponent,
    SidebarComponent,
    ContacPageComponent,
    ShearchBoxComponent
  ]
})
export class SharedModule { }

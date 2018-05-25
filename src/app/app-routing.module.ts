import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './frontend/home/home.component';
import {AboutComponent} from './frontend/about/about.component';
import {BespokeComponent} from './frontend/bespoke/bespoke.component';
import {EducationComponent} from './frontend/education/education.component';
import {SectorsComponent} from './frontend/sectors/sectors.component';
import {AccessoriesComponent} from './frontend/accessories/accessories.component';
import {ContactComponent} from './frontend/contact/contact.component';
import {GalleryComponent} from './frontend/gallery/gallery.component';
import { HttpClientModule} from '@angular/common/http';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'bespoke', component: BespokeComponent},
  {path: 'about', component:  AboutComponent },
  {path: 'education', component: EducationComponent},
  {path: 'sector', component: SectorsComponent},
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gallery', component: GalleryComponent},




  ];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

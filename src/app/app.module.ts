import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './frontend/home/home.component';
import { AboutComponent } from './frontend/about/about.component';
import { BespokeComponent } from './frontend/bespoke/bespoke.component';
import { EducationComponent } from './frontend/education/education.component';
import { AccessoriesComponent } from './frontend/accessories/accessories.component';
import { SectorsComponent } from './frontend/sectors/sectors.component';
import { ContactComponent } from './frontend/contact/contact.component';
import { HeaderComponent } from './frontend/include/header/header.component';
import { FooterComponent } from './frontend/include/footer/footer.component';
import { GalleryComponent } from './frontend/gallery/gallery.component';
import { PrivacypolicyComponent } from './frontend/privacypolicy/privacypolicy.component';
import { TermsconditionsComponent } from './frontend/termsconditions/termsconditions.component';
import { FaqComponent } from './frontend/faq/faq.component';
import { RetrunpolicyComponent } from './frontend/retrunpolicy/retrunpolicy.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BespokeComponent,
    EducationComponent,
    AccessoriesComponent,
    SectorsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    PrivacypolicyComponent,
    TermsconditionsComponent,
    FaqComponent,
    RetrunpolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPropertyComponent } from './add-property/add-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ngfModule} from 'angular-file';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { environment } from 'src/environments/environment';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { PropertyListComponent } from './property-list/property-list.component';
import { DraftListComponent } from './draft-list/draft-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { EnquiriesListComponent } from './enquiries-list/enquiries-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPropertyComponent,
    PropertyDetailsComponent,
    CarouselComponent,
    PropertyListComponent,
    DraftListComponent,
    FeedbackListComponent,
    EnquiriesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, far);
  }
}

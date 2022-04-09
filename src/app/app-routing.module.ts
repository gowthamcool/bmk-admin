import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftListComponent } from './draft-list/draft-list.component';
import { EnquiriesListComponent } from './enquiries-list/enquiries-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { PropertyListComponent } from './property-list/property-list.component';

const routes: Routes = [
  {
    path:'properties',
    component:PropertyListComponent
  },
  {
    path:'enquiries',
    component:EnquiriesListComponent
  },
  {
    path:'feedbacks',
    component:FeedbackListComponent
  },
  {
    path:'draft',
    component:DraftListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListingComponent } from './event-listing/event-listing.component';

const routes: Routes = [
  { path: '', 
  component: EventListingComponent 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

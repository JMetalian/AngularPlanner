import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/shared/not-found/not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MatchersComponent } from './components/matchers/matchers.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { SearchComponent } from './components/search/search.component';
import { ShowsComponent } from './components/shows/shows.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'providers',
    component:ProvidersComponent
  },
  {
    path:'shows',
    component:ShowsComponent
  },
  {
    path:'matches',
    component:MatchersComponent
  },
  {
    path:'**',
    component:NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

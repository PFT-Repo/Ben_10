import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlienListComponent } from './components/alien-list/alien-list.component';
import { AlienDetailComponent } from './components/alien-detail/alien-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'list',
    children: [
      { path: '', component: AlienListComponent },
      { path: ':id', component: AlienDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}

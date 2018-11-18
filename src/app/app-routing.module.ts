import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './login/callback/callback.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component'
import { PlaylistViewComponent } from './host-dashboard/playlist-view/playlist-view.component'

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'callback', component: CallbackComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'hostdashboard', component: HostDashboardComponent
  },
  {
    path: 'playlistview', component: PlaylistViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

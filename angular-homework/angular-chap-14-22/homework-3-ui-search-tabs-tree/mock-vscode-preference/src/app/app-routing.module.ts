import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './settings/user/user.component';
import { WorkspaceComponent } from './settings/workspace/workspace.component';

const routes: Routes = [
  {path: '', redirectTo: '/settings-user', pathMatch: 'full'},
  {path: 'settings-user', component: UserComponent},
  {path: 'settings-workspace', component: WorkspaceComponent},
  {path: '**', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

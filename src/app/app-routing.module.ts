import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ModulesComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: 'antigen',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

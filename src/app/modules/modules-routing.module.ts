import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { ProjectComponent } from './project/project.component';
import { AntigenComponent } from './antigen/antigen.component';

const routes: Routes = [
    {
        path: '',
        component: ModulesComponent,
        children: [
            {
                path: 'project',
                component: ProjectComponent,
            },
            {
                path: 'antigen',
                component: AntigenComponent
            },
        ]
    },
    {
        path: '',
        redirectTo: 'antigen',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule {
}
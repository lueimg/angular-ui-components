import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { StyleguideComponent } from './styleguide/styleguide.component';
import { StyleguideFullscreenModalInRouteComponent } from './styleguide/fullscreen-modal/styleguide-fullscreen-modal-in-route.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'styleguide',
        pathMatch: 'full'
    },
    {
        path: 'styleguide',
        loadChildren: './styleguide/styleguide.module#StyleguideModule'
    },
    {
        path: 'styleguide/fullscreen-modal/inRoute',
        component: StyleguideFullscreenModalInRouteComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                // enableTracing: true, // <-- debugging purposes only
                useHash: true,
                preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

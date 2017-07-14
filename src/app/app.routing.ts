import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { MembersComponent }   from './members/members.component';

const appRoutes: Routes = [

   {
      path: '',
      component: WelcomeComponent
   },
   {
      path: 'about',
      component: AboutComponent
   },
   {
      path: 'members',
      component: MembersComponent
   }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

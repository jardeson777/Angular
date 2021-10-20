import { Routes, RouterModule } from '@angular/router';
import { AppMainComponent } from './app-main.component';
import { PageExtractComponent } from './pages/page-extract/page-extract.component';
import { ScheduleComponent } from './pages/page-schedule/schedule/schedule.component';
import { ViewScheduleComponent } from './pages/page-viewSchedule/view-schedule/view-schedule.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'main',
    component: AppMainComponent,
    children: [
      {path: 'schedule', component: ScheduleComponent},
      {path: 'viewSchedule', component: ViewScheduleComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'extract', component: PageExtractComponent}
    ]
  },
];

export const AppMainRoutes = RouterModule.forChild(routes);

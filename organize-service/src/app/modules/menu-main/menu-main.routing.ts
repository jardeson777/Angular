import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from '../app-main/pages/page-schedule/schedule/schedule.component';

const routes: Routes = [
  {path: 'schedule', component: ScheduleComponent}
];

export const MenuMainRoutes = RouterModule.forChild(routes);

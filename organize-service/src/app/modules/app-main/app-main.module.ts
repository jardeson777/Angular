import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './pages/page-schedule/schedule/schedule.component';
import { ViewScheduleComponent } from './pages/page-viewSchedule/view-schedule/view-schedule.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageExtractComponent } from './pages/page-extract/page-extract.component';
import { AppMainComponent } from './app-main.component';
import { AppMainRoutes } from './app-main.routing';



@NgModule({
  declarations: [
    ScheduleComponent,
    ViewScheduleComponent,
    AppMainComponent,
    MenuComponent,
    RegisterComponent,
    PageExtractComponent
  ],
  imports: [
    CommonModule,
    AppMainRoutes
  ]
})
export class AppMainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './pages/page-schedule/schedule/schedule.component';
import { ViewScheduleComponent } from './pages/page-viewSchedule/view-schedule/view-schedule.component';



@NgModule({
  declarations: [
    ScheduleComponent,
    ViewScheduleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppMainModule { }

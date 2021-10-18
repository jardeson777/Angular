import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';



@NgModule({
  declarations: [
    ButtonPrimaryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonPrimaryComponent,
  ]
})
export class SharedModule { }

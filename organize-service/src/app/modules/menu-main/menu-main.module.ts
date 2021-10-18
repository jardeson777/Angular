import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMainComponent } from './pages/menu-main/menu-main.component';
import { OptionCardSelecaoMenuComponent } from './components/option-card-selecao-menu/option-card-selecao-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuMainRoutes } from './menu-main.routing';



@NgModule({
  declarations: [
    MenuMainComponent,
    OptionCardSelecaoMenuComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MenuMainRoutes
  ]
})
export class MenuMainModule { }

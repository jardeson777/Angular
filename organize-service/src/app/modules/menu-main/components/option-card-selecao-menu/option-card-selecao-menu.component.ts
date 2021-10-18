import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-option-card-selecao-menu',
  templateUrl: './option-card-selecao-menu.component.html',
  styleUrls: ['./option-card-selecao-menu.component.scss']
})
export class OptionCardSelecaoMenuComponent implements OnInit {

  @Input('nameLabel') nameLabel: string | undefined;
  @Input('idLabel') idLabel: string | undefined;
  @Input() value: string | undefined;
  @Input() formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void { }
}

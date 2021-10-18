import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option-card-selecao-menu',
  templateUrl: './option-card-selecao-menu.component.html',
  styleUrls: ['./option-card-selecao-menu.component.scss']
})
export class OptionCardSelecaoMenuComponent implements OnInit {

  @Input('nameLabel') nameLabel: string | undefined;
  @Input('idLabel') idLabel: string | undefined;

  constructor() { }

  ngOnInit(): void { }
}

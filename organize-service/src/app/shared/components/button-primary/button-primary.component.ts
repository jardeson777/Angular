import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {

  @Input() text:string | undefined;
  @Input() active:string | undefined;

  valueOption:any | undefined;

  selectOptionMenuMain(){
    this.valueOption = document.getElementsByClassName('menuInicial');

    for(let i = 0; i<this.valueOption.length; i++){
      if(this.valueOption[i].checked){
        this.valueOption = this.valueOption[i].id;
        break;
      }

      if(i == this.valueOption.length -1){
        this.valueOption = 0;
      }
    }

    console.log(this.valueOption);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

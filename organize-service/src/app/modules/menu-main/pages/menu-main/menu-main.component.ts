import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrls: ['./menu-main.component.scss']
})
export class MenuMainComponent implements OnInit {
  formMenuMain!: FormGroup;
  optionChosen: string = '' ;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formMenuMain = this.formBuilder.group({
      option: ['', [Validators.required]]
    });
  }

  menuMainSubmit(){
    this.optionChosen = this.formMenuMain.controls['option'].value;
    // console.log(this.optionChosen);
    this.router.navigate(['/main/' + this.optionChosen])
  }

}

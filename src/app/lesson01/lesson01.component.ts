import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson01',
  templateUrl: './lesson01.component.html',
  styleUrls: ['./lesson01.component.scss']
})
export class Lesson01Component implements OnInit {

  public strValue!: string;
  public valueName!: string;
  public arr1!: string[];
  public arr2!: string[];

  constructor() { }

  ngOnInit(): void {
  }

  getValue(): void{
    event?.preventDefault();
    if (this.valueName) {
      (<HTMLInputElement>document.getElementById("inputWord")).style.border = '0';
      (<HTMLInputElement>document.getElementById("inputWord")).placeholder = 'word here...';
      this.arr1 = [];
      this.strValue = (<HTMLInputElement>document.getElementById("badWords")).innerHTML +=  this.valueName + ' ';
      this.arr1 = this.strValue.trim().split(' ');
      console.log(this.arr1);
  }
  else {
      (<HTMLInputElement>document.getElementById("inputWord")).placeholder = 'Please write a word!';
      (<HTMLInputElement>document.getElementById("inputWord")).style.border = '1px solid rgba(220, 20, 60, 0.863)';
  }

  let resetForm = <HTMLFormElement>document.getElementById('form');
  resetForm.reset();
  }
 

  resetValue(){
    (<HTMLInputElement>document.getElementById("badWords")).innerHTML = '';
    (<HTMLInputElement>document.getElementById("area")).value = '';
    (<HTMLInputElement>document.getElementById("area")).style.border = '0';
  }

  cenzorValue(){
    let area: string = (<HTMLInputElement>document.getElementById("area")).value;
    if (area == '') {
        (<HTMLInputElement>document.getElementById("area")).style.border = '1px solid rgba(220, 20, 60, 0.863)';
        (<HTMLInputElement>document.getElementById("area")).placeholder = 'Please write a text!';
    }
    if (area != '') {
        (<HTMLInputElement>document.getElementById("area")).style.border = '1px solid mediumseagreen';
        this.arr2 = area.trim().split(' ');
        console.log(this.arr2);
        
        let res = this.arr2.map((value) => {
            if(this.arr1.includes(value)){
                let v = value.replace(/./g, '*');
                return v;   
            }
            else{
                return value;
            }
        })
        let result = res.join(', ');
        (<HTMLInputElement>document.getElementById("area")).value = result;        
    }
  }

}

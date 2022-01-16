import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson02',
  templateUrl: './lesson02.component.html',
  styleUrls: ['./lesson02.component.scss']
})

export class Lesson02Component implements OnInit {

  public name!: string;
  public password!: string;
  public email!: string;
  public userArray: any[] = [];
  public editStatus = false;
  public editIndex!: number;
  public regExpLG = /^[a-zA-Z]{3,16}$/;
  public regExpPS = /^[a-zA-Z0-9_\.-]{4,16}$/;
  public regExpEM = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  constructor() { }

  ngOnInit(): void {
  }  

  addUser(): void{
    let nameUser = this.regExpLG.test(this.name);
    let passUser = this.regExpPS.test(this.password);
    let eamilUser = this.regExpEM.test(this.email);
    
    if(nameUser && passUser && eamilUser){
      let obj = {
        login: this.name,
        password: this.password,
        email: this.email
    }
    this.userArray.push(obj);
    this.name = '';
    this.password = '';
    this.email = '';
    }
    else {
      console.log('Please write field...')
   }
  }

  deleteUser(index: number): void{
    this.userArray.splice(index,1);
  }

  editUzer(index: number): void{
    (<HTMLInputElement>document.getElementById("login")).value = this.userArray[index].login;
    (<HTMLInputElement>document.getElementById("password")).value = this.userArray[index].password;
    (<HTMLInputElement>document.getElementById("email")).value = this.userArray[index].email;
    this.editIndex = index;
    this.editStatus = true;
  }

  editedUser(): void{
    this.userArray[this.editIndex].login = (<HTMLInputElement>document.getElementById("login")).value;
    this.userArray[this.editIndex].password = (<HTMLInputElement>document.getElementById("password")).value;
    this.userArray[this.editIndex].email = (<HTMLInputElement>document.getElementById("email")).value; 
    this.name = '';
    this.password = '';
    this.email = '';
    this.editStatus = false;
  }

}

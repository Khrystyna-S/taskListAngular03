import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child003',
  templateUrl: './child003.component.html',
  styleUrls: ['./child003.component.scss']
})
export class Child003Component implements OnInit {

  @Input() userTask!: any;
  @Output() fromChild = new EventEmitter<number>();
  showMy: boolean = false;
  public editIndex!: number;
  public myInput!: string;

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(index: number): void {
    
    this.userTask.splice(index, 1);
    this.fromChild.emit(this.userTask.length);
  }

  editUser(index: number): void {
    this.showMy = true;
    this.editIndex = index;
    this.myInput = this.userTask[index].task;
  }

  btnSave(): void {
    this.showMy = false;
    this.userTask[this.editIndex].task = this.myInput;
  }

  getChecked(data: any, index: number): void {    
     if(data.target.checked){
       this.userTask[index].check = true; 
     }else{
      this.userTask[index].check = false;   
     }    
  }
}

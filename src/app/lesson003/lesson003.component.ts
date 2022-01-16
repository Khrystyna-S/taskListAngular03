import { Component, OnInit } from '@angular/core';

export interface Todo {
  id: number,
  task: string,
  check: boolean,
  done: string
}

@Component({
  selector: 'app-lesson003',
  templateUrl: './lesson003.component.html',
  styleUrls: ['./lesson003.component.scss']
})
export class Lesson003Component implements OnInit {

  public taskValue!: string;
  public userList: Todo[] = [
    {
      id: 0,
      task: 'HTML',
      check: false,
      done: ''
    },
    {
      id: 0,
      task: 'CSS3',
      check: false,
      done: ''
    },
    {
      id: 0,
      task: 'SCSS',
      check: false,
      done: ''
    },
    {
      id: 0,
      task: 'JavaScript',
      check: false,
      done: ''
    }, 
    {
      id: 0,
      task: 'jQuery',
      check: false,
      done: ''
    },
    {
      id: 0,
      task: 'Angular',
      check: false,
      done: ''
    }

  ]
  public count = this.userList.length;

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void{
    let user = {
      id: 0,
      task: '',
      check: false,
      done: ''
    }
    user.task = this.taskValue;
    if(this.taskValue){
      this.userList.push(user);
      this.count++
    }
    this.taskValue = '';
  }

  getLength(data: number): void{
    this.count = data;
  }

}

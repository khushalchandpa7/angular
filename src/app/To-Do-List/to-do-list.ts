import { Component, signal, OnInit } from '@angular/core';
import { v4 as ID } from 'uuid';

interface Task {
  id: string;
  taskTitle: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css',
})
export class ToDoList implements OnInit {
  tasks = signal<Task[]>([]);

  ngOnInit() {
    let allFetchedTasks = localStorage.getItem('to-do-tasks');
    if (allFetchedTasks) {
      this.tasks.set(JSON.parse(allFetchedTasks));
    }
  }

  handleSubmit(evt: any) {
    evt.preventDefault();
    evt.target[0].value = '';
  }

  saveToDB(data: object) {
    localStorage.setItem('to-do-tasks', JSON.stringify(data));
  }

  addTask(evt: any) {
    let taskVal = evt.srcElement.previousElementSibling.value;
    if (!taskVal.trim()) return;
    this.tasks.update((prevTasks) => {
      let newTasks = [...prevTasks, { id: ID(), taskTitle: taskVal, isComplete: false }];
      this.saveToDB(newTasks);
      return newTasks;
    });
  }

  deleteTask(id: string) {
    this.tasks.update((prevAllTask) => {
      let filteredTasks = prevAllTask.filter((prevTask) => {
        return prevTask.id !== id;
      });
      this.saveToDB(filteredTasks);
      return filteredTasks;
    });
  }

  upperCaseTask(id: string, taskTitle: string) {
    this.tasks.update((prevAllTask) => {
      let upperCaseTasks = prevAllTask.map((prevTask) => {
        return prevTask.id === id ? { ...prevTask, taskTitle: taskTitle.toUpperCase() } : prevTask;
      });
      this.saveToDB(upperCaseTasks);
      return upperCaseTasks;
    });
  }

  lowerCaseTask(id: string, taskTitle: string) {
    this.tasks.update((prevAllTask) => {
      let lowerCaseTasks = prevAllTask.map((prevTask) => {
        return prevTask.id === id ? { ...prevTask, taskTitle: taskTitle.toLowerCase() } : prevTask;
      });
      this.saveToDB(lowerCaseTasks);
      return lowerCaseTasks;
    });
  }

  upperCaseAllTask(evt: any) {
    this.tasks.update((prevAllTask) => {
      let allUpperCaseTasks = prevAllTask.map((prevTask, idx) => {
        let elementValue = evt.target.parentElement.children[idx].innerText;
        let getExactVal = elementValue.slice(3, elementValue.indexOf('\n'));
        return { ...prevTask, taskTitle: getExactVal.toUpperCase() };
      });
      this.saveToDB(allUpperCaseTasks);
      return allUpperCaseTasks;
    });
  }

  lowerCaseAllTask(evt: any) {
    this.tasks.update((prevAllTask) => {
      let allLowerCaseTasks = prevAllTask.map((prevTask, idx) => {
        let elementValue = evt.target.parentElement.children[idx].innerText;
        let exactValue = evt.target.parentElement.children[idx].innerText.slice(
          3,
          elementValue.indexOf('\n'),
        );
        return { ...prevTask, taskTitle: exactValue.toLowerCase() };
      });
      this.saveToDB(allLowerCaseTasks);
      return allLowerCaseTasks;
    });
  }

  markTaskComplete(id: string) {
    this.tasks.update((prevAllTask) => {
      return prevAllTask.filter((prevTask) => {
        return prevTask.id === id ? { ...prevTask, isComplete: true } : prevTask;
      });
    });
  }
}

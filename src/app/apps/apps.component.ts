import { Component } from '@angular/core';
import { Todo } from '../todo/todo';
import { TodoDataService } from '../todo/todo-data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

declare var jQuery:any;
@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
  providers: [TodoDataService]
})

export class AppsComponent {
  
  newTodo: Todo = new Todo();
  items: FirebaseListObservable<any[]>;

  constructor(afDb: AngularFireDatabase) {
    this.items = afDb.list('/items');
  } 
  
  addTodo(name: string, description: string, date: string, icon: boolean){
    
    //close modal window
    jQuery(".modal button.close").click();

    return this.items.push(this.newTodo).then(_ => console.log('item created!'));;
  }

  removeTodo(key: string) {
    return this.items.remove(key).then(_ => console.log('item deleted!'));}
}

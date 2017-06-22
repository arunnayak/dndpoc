import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

declare var jQuery:any;

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css'],
  providers: [TodoDataService]
})

export class AppsComponent {
 
  public showNav : boolean = true;

  newTodo: Todo = new Todo();
  items: FirebaseListObservable<any[]>;
  constructor(afDb: AngularFireDatabase) {
    this.items = afDb.list('/items');
    this.showNav = true;
    console.log(this.showNav);

  }
  
  addTodo(name: string, description: string, date: string, icon: boolean){
    //close modal window
    jQuery(".modal button.close").click();

    return this.items.push(this.newTodo).then(_ => console.log('item created!'));;
  }

  removeTodo(key: string) {
    return this.items.remove(key).then(_ => console.log('item deleted!'));
  }
  
}

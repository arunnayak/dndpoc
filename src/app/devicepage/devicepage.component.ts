import { Component, OnInit } from '@angular/core';
//import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-devicepage',
  templateUrl: './devicepage.component.html',
  styleUrls: ['./devicepage.component.css']
})
export class DevicepageComponent {

    //transferData: Object = {id: 1, msg: 'Hello', src: ""};
    //transferData2: Object = {id: 2, msg: 'nothing'};
    receivedData: Array<any> = [];

    items = [
      {name: 'name1', id: 1, description: 'description1'},
      {name: 'name2', id: 2, description: 'description2'},
      {name: 'name3', id: 3, description: 'description3'}
    ];

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
    }
 
}

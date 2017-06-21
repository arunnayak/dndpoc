import { Component, OnInit } from '@angular/core';
import {DragulaService} from "ng2-dragula";

@Component({
  selector: 'app-devicepage',
  templateUrl: './devicepage.component.html',
  styleUrls: ['./devicepage.component.css']
})
export class DevicepageComponent {

    transferData: Object = {id: 1, msg: 'Hello'};
    transferData2: Object = {id: 2, msg: 'nothing'};
    receivedData: Array<any> = [];

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
    }
 
}

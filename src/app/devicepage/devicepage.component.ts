import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-devicepage',
  templateUrl: './devicepage.component.html',
  styleUrls: ['./devicepage.component.css']
})

export class DevicepageComponent {

    receivedData: Array<any> = [];
    private formatToJson: Array<number> = [];

    items = [
      {name: 'name1', id: 1, description: 'description1'},
      {name: 'name2', id: 2, description: 'description2'},
      {name: 'name3', id: 3, description: 'description3'}
    ];

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
        console.log(this.receivedData);
        let formatToJson = JSON.stringify(this.receivedData);
        saveAs(new Blob([formatToJson], { type: "application/json" }), 'data.json');
    }
}

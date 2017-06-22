import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { saveAs } from 'file-saver';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-devicepage',
  templateUrl: './devicepage.component.html',
  styleUrls: ['./devicepage.component.css']
})

export class DevicepageComponent {
    public showNav : boolean = false;

    constructor() {
      this.showNav = false;

      console.log(this.showNav);
    }

    receivedData: Array<any> = [];

    items = [
      {name: 'name1', id: 1, description: 'description1'},
      {name: 'name2', id: 2, description: 'description2'},
      {name: 'name3', id: 3, description: 'description3'}
    ];

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
        console.log(this.receivedData);
    }

    downloadJSON (){
      console.log('Downloading...');
      let formatToJson = JSON.stringify(this.receivedData);
      saveAs(new Blob([formatToJson], { type: "application/json" }), 'data.json');
    }
    
}

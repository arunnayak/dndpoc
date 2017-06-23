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

   "items" = [
    { 
      "name": "name1", 
      "id": 1, 
      "description": "description1", 
      "imgUrl": "../../assets/img/flash.jpg",
       "form": [
          {
            "data": false
          }
    ]},
    { 
      "name": "name2", 
      "id": 2, 
      "description": "description2", 
      "imgUrl": "../../assets/img/arrow.jpg",
       "form": [
          {
            "data": false
          }
      
    ]},{ 
      "name": "name3", 
      "id": 3, 
      "description": "description3", 
      "imgUrl": "",
       "form": [
         {
           "data": true,
           "type": "button",
           "name": "buttonName",
           "id": "buttonId"
         }
      
    ]},{ 
      "name": "name4", 
      "id": 4, 
      "description": "description4", 
      "imgUrl": "",
       "form": [
         {
           "data": true,
           "type": "text",
           "name": "buttonName",
           "id": "buttonId"
         }
      
    ]}
]

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

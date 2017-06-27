import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { saveAs } from 'file-saver';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-devicepage',
  templateUrl: './devicepage.component.html',
  styleUrls: ['./devicepage.component.css']
})

export class DevicepageComponent {
    public label : string = '';
    public fieldType : string = '';

    constructor() {
      this.label = 'label';
      this.fieldType = 'Field type';
    }

    receivedData: Array<any> = [];

   "items" = [
    { 
      "type":"button",
      "name": "button_name", 
      "id": 1, 
      "class": "button-class", 
      "imgUrl": "../../assets/img/btn.png",
      "label": "Label",
      "fieldType": "Text field",
      "tableName": "Table name",
      "feildName": "Field name",
      "uiPosition": "UI Position",
      "style": "Styles",
       "form": [
          {
              "label": "Label",
              "fieldType": "Text field",
              "tableName": "Table name",
              "feildName": "Field name",
              "uiPosition": "UI Position",
              "style": "Styles"
          }
    ]},
    { 
      "type":"text",
      "name": "text_name", 
      "id": 2, 
      "class": "text-class", 
      "description": "description2", 
      "imgUrl": "../../assets/img/txt-input.png",
      "label": "Label",
      "fieldType": "Text field",
      "tableName": "Table name",
      "feildName": "Field name",
      "uiPosition": "UI Position",
      "style": "Styles",
       "form": [
          {
              "label": "Label",
              "fieldType": "Text field",
              "tableName": "Table name",
              "feildName": "Field name",
              "uiPosition": "UI Position",
              "style": "Styles"
          }
      
    ]}
]

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
    }

  
    addLabelvalue(value:any){
        this.receivedData[0].dragData.label = value;
    }

    addFieldTypevalue(value:any){
        this.receivedData[0].dragData.fieldType = value;
    }

    downloadJSON (){
      console.log('Downloading...');
      let formatToJson = JSON.stringify(this.receivedData);
      saveAs(new Blob([formatToJson], { type: "application/json" }), 'data.json');
      console.log(formatToJson);
    }
    
}

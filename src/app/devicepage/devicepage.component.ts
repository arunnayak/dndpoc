import { Component, OnInit,
            Input, Directive, ViewRef, ViewContainerRef, TemplateRef
         } from '@angular/core';
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
    public tableName : string = '';
    public fieldName : string = '';
    public uiPosition : string = '';
    public styles : string = '';

    constructor() {
        this.label = 'label';
        this.fieldType = 'Field type';
        this.tableName = 'table name'
        this.fieldName = 'field name'
        this.uiPosition = 'UI position'
        this.styles = 'styles'
    }

    receivedData: Array<any> = [];

   "items" = [
    { 
      "type":"button",
      "name": "button_name", 
      "id": 1, 
      "class": "button-class", 
      "imgUrl": "../../assets/img/btn.png"
       },
    { 
      "type":"text",
      "name": "text_name", 
      "id": 2, 
      "class": "text-class", 
      "description": "description2", 
      "imgUrl": "../../assets/img/txt-input.png"
    }
]

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
        console.log(this.receivedData.length);
    }
  
    addLabelvalue(value:any){
        this.receivedData[0].dragData.label = value;
    }

    addFieldTypevalue(value:any){
        this.receivedData[0].dragData.fieldType = value;
    }

    addTableNamevalue(value:any){
        this.receivedData[0].dragData.tableName = value;
    }

     addFieldNamevalue(value:any){
        this.receivedData[0].dragData.fieldName = value;
    }

     addUIPositionvalue(value:any){
        this.receivedData[0].dragData.uiPosition = value;
    }

     addStylesvalue(value:any){
        this.receivedData[0].dragData.styles = value;
    }

    downloadJSON (){
      console.log('Downloading...');
      let formatToJson = JSON.stringify(this.receivedData);
      saveAs(new Blob([formatToJson], { type: "application/json" }), 'data.json');
      console.log(formatToJson);
    }
    
}

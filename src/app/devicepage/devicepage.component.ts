import { Component, OnInit,
            Input, Directive, ViewRef, ViewContainerRef, TemplateRef
         } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { saveAs } from 'file-saver';
import { RouterModule, Routes } from '@angular/router';

declare var jQuery:any;

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
      "id": 0, 
      "class": "button-class", 
      "imgUrl": "../../assets/img/btn.png",
      "form": {}
       },
    { 
      "type":"text",
      "name": "text_name", 
      "id": 1, 
      "class": "text-class", 
      "description": "description2", 
      "imgUrl": "../../assets/img/txt-input.png",
      "form": {}
    }
]

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
        let stringify = JSON.stringify(this.receivedData);
        //console.log(this.receivedData[0].dragData.type);
    }
  
    addLabelvalue(value:any){
        this.receivedData[0].dragData.form.label = value;
    }

    addFieldTypevalue(value:any){
        this.receivedData[0].dragData.form.fieldType = value;
    }

    addTableNamevalue(value:any){
        this.receivedData[0].dragData.form.tableName = value;
    }

     addFieldNamevalue(value:any){
        this.receivedData[0].dragData.form.fieldName = value;
    }

     addUIPositionvalue(value:any){
        this.receivedData[0].dragData.form.uiPosition = value;
    }

     addStylesvalue(value:any){
        this.receivedData[0].dragData.form.styles = value;
    }

    /*** text values ***/

    addLabel2value(value:any){
        this.receivedData[1].dragData.form.label = value;
    }

    addFieldType2value(value:any){
        this.receivedData[1].dragData.form.fieldType = value;
    }

    addTableName2value(value:any){
        this.receivedData[1].dragData.form.tableName = value;
    }

     addFieldName2value(value:any){
        this.receivedData[1].dragData.form.fieldName = value;
    }

     addUIPosition2value(value:any){
        this.receivedData[1].dragData.form.uiPosition = value;
    }

     addStyles2value(value:any){
        this.receivedData[1].dragData.form.styles = value;
    }

    downloadJSON (){
      console.log('Downloading...');
      let formatToJson = JSON.stringify(this.receivedData);
      saveAs(new Blob([formatToJson], { type: "application/json" }), 'data.json');
      console.log(formatToJson);
    }
    showPanel(data){
        console.log(data.type);
        if(data.type=='button'){
            jQuery('.button-panel').slideDown();
            jQuery('.text-panel').slideUp();
        }
        if(data.type=='text'){
            jQuery('.text-panel').slideDown();
            jQuery('.button-panel').slideUp();
        }
    }
}

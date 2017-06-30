import { Component, OnInit,
            Input 
         } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { saveAs } from 'file-saver';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

declare var jQuery:any;
var x;
var y;


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
    public text: string = ''; 

    constructor() {
        this.label = 'label';
        this.fieldType = 'Field type';
        this.tableName = 'table name'
        this.fieldName = 'field name'
        this.uiPosition = 'left'
        this.styles = 'styles'
        this.text = 'text'
        
    }

    receivedData: Array<any> = [];

   "items" = [
    { 
      "type":"button",
      "name": "button_name",
      "id": 0, 
      "class": "button-class", 
      "imgUrl": "../../assets/img/btn-2.jpg",
      "form": {}
       },
    { 
      "type":"text",
      "name": "text_name", 
      "id": 1, 
      "class": "text-class", 
      "description": "description2", 
      "imgUrl": "../../assets/img/text-2.jpg",
      "form": {}
    }
]
    
    transferDataSuccess($event: any) {
        this.receivedData.push($event);
        //let stringify = JSON.stringify(this.receivedData);
        //console.log(this.receivedData[0].dragData.type == 'button');
        if(this.receivedData[0].dragData.type == 'button'){
            x = 0;
            y = 1;
        }else{
            x = 1;
            y = 0;
        }
    }
  
    addLabelvalue(value:any){
        this.receivedData[x].dragData.form.label = value;
        console.log(this.receivedData[x].dragData.form.label);
    }

     addTextvalue(value:any, id){
        this.receivedData[x].dragData.form.text = value;
        jQuery(id).val(this.receivedData[x].dragData.form.text);
        console.log(this.receivedData[x].dragData.form.text);
    }

    addFieldTypevalue(value:any){
        this.receivedData[x].dragData.form.fieldType = value;
        console.log(value);
    }

    addTableNamevalue(value:any){
        this.receivedData[x].dragData.form.tableName = value;
    }

     addFieldNamevalue(value:any){
        this.receivedData[x].dragData.form.fieldName = value;
    }

     addUIPositionvalue(value:any){
        this.receivedData[x].dragData.form.uiPosition = value;
    }

     addStylesvalue(value:any){
        this.receivedData[x].dragData.form.styles = value;

        //todo
        jQuery('.btn.form-control').attr("style", value);
    }

    /*** text values ***/

    addLabel2value(value:any){
        this.receivedData[y].dragData.form.label = value;
    }

    addFieldType2value(value:any){
        this.receivedData[y].dragData.form.fieldType = value;
    }

    addTableName2value(value:any){
        this.receivedData[y].dragData.form.tableName = value;
    }

     addFieldName2value(value:any){
        this.receivedData[y].dragData.form.fieldName = value;
    }

     addUIPosition2value(value:any){
        this.receivedData[y].dragData.form.uiPosition = value;
    }

     addStyles2value(value:any){
        this.receivedData[y].dragData.form.styles = value;
        
        jQuery('.input.form-control').attr("style", value);
        
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

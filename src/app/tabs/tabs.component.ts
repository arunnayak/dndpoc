import { Component, Injectable, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SortableContainer } from 'ng2-dnd';

declare var jQuery: any;

@Injectable()
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers:[SortableContainer]
})

export class TabsComponent {

    fieldTypes: Observable<Response>; 

    constructor(private http: Http) {
         this.getJSON()
             .subscribe(
                data => this.fieldTypes=data, 
                //data => this.processFieldtypes = data,
                error => console.log(error)
            );
    }

    public getJSON(): Observable<any> {
         return this.http.get("../../assets/img/field-types/fieldTypes.json")
                .map((res:any) => res.json())
                //.do(data => {this.fieldTypes = data, console.log(this.fieldTypes)})
                .do(data => this.fieldTypes = data)
                .catch(this.handleError);
     }

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw('Internal server error');
    }
    
    ShowHidePanel(formContainer){
        jQuery('.'+formContainer).hide();
        jQuery('.device-area__dragged-items div').removeClass('device-area__highlight');
    }
   
    textInput: Array<any> = [{"id": 1, "type": "text", "name": "textName", "schema": "textInputSchema", "properties": [] }];
    selectInput: Array<any> = [{"id": 2, "type": 'select', "name": "selectName", "schema": "selectInputSchema", "properties": {}}];
    
   // textInput: Object = {id: 1, "type": 'text', name: "textName", schema: "textInputSchema", properties: {}};
    //selectInput: Object = {id: 2, type: 'select', name: "selectName", schema: "selectInputSchema", properties: {}};
    testInput: Object = {id: 4, type: 'text', name: "textname", schema: "testSchema", properties: {}};
    
    properties: Array<any> = [];
    createJsonObj: Array<any> = [];
    showJson(val, val2){

    this.properties.push(val)
    this.selectInput.push(val2);

    this.createJsonObj.push(this.textInput, this.selectInput);
    let formatToJson = JSON.stringify(this.createJsonObj);
    console.log(formatToJson);
    }

    textInputSchema = {
        "properties": {
            "label": {
                "type": "string",
                "description": "label"
            },
            "styles": {
                "type": "string",
                "description": "styles"
            }
        }
    }

    selectInputSchema = {
        "properties": {
            "label": {
                "type": "string",
                "description": "label"
            },
            "styles": {
                "type": "string",
                "description": "styles"
            },
            "select": {
                "type": "string",
                "description": "select",
                "widget": "select",
                "oneOf": [{
                    "description": "Option 1", "enum": ["option1"]
                    }, {
                    "description": "Option 2", "enum": ["option2"]
                    }, {
                    "description": "Option 3", "enum": ["option3"]
                    }],
                "default": "option1"
            }
        }
    }

    testSchema = {
        "properties": {
            "label": {
                "type": "string",
                "description": "label"
            },
            "styles": {
                "type": "string",
                "description": "styles"
            }
        }
    }
}

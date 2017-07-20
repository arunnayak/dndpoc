import { Component, Injectable, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SortableContainer } from 'ng2-dnd';
import { NgForm } from '@angular/forms';

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

    textComponent: Array<any> = [{"id": 1, "type": "text", "name": "textName", "schema": "textInputSchema", "properties": [] }];
    selectComponent: Array<any> = [{"id": 2, "type": 'select', "name": "selectName", "schema": "selectInputSchema", "properties": [] }];

    addTextProperties(form: NgForm) {
        console.log(form.value);
        this.textComponent[0].properties.push(form.value);
    }

    addSelectProperties(form: NgForm) {
        console.log(form.value);
        this.selectComponent[0].properties.push(form.value);
    }
    
}

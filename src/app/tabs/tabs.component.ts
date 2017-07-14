import { Component, Injectable, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SortableContainer } from 'ng2-dnd';

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
                .do(data => {this.fieldTypes = data, console.log(this.fieldTypes)})
                .catch(this.handleError);
     }

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw('Internal server error');
    }
    

  exampleJsonObject = {
      "first_name": "Jane", "last_name": "Doe", "age": 25, "is_company": false,
      "address": {
          "street_1": "123 Main St.", "street_2": null,
          "city": "Las Vegas", "state": "NV", "zip_code": "89123"
      },
      "phone_numbers": [
          { "number": "702-123-4567", "type": "cell" },
          { "number": "702-987-6543", "type": "work" }
      ], "notes": ""
    };


}

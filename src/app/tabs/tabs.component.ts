import { Component } from '@angular/core';
import { DndModule } from 'ng2-dnd';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

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

    "items" = [
        {
            "type": "button",
            "name": "button_name",
            "id": 0,
            "class": "button-class",
            "imgUrl": "../../assets/img/btn-2.jpg",
            "form": {}
        },
        {
            "type": "text",
            "name": "text_name",
            "id": 1,
            "class": "text-class",
            "description": "description2",
            "imgUrl": "../../assets/img/text-2.jpg",
            "form": {}
        }
    ]


}

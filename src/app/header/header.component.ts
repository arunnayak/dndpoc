import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevicepageComponent } from '../devicepage/devicepage.component';

declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  //jsonData = DevicepageComponent

  changeDevice(id){
    console.log(id);
    if(id == "iphone-5"){
      jQuery('.phone-area').removeClass('iphone-6 iphone-7');
      jQuery('.phone-area').addClass('iphone-5');
    }
    else if(id == "iphone-6"){
      jQuery('.phone-area').removeClass('iphone-5 iphone-7');
      jQuery('.phone-area').addClass('iphone-6');
    }
    else if(id == "iphone-7"){
      jQuery('.phone-area').removeClass('iphone-6 iphone-5');
      jQuery('.phone-area').addClass('iphone-7');
    }
  }
}
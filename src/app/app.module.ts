import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//import { AlertModule } from 'ngx-bootstrap'; //uncomment this line when we need an alert module
import { DragulaModule } from 'ng2-dragula'; //============ third party module ==============//
import { DndModule } from 'ng2-dnd';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppsComponent } from './apps/apps.component';
import { DevicepageComponent } from './devicepage/devicepage.component';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAkvSXEKIo9kOT2NldjljPj8kEtJoSL5Xg',
  authDomain: 'mytestapp-d87cd.firebaseio.com',
  databaseURL: 'https://mytestapp-d87cd.firebaseio.com',
  storageBucket: 'mytestapp-d87cd.appspot.com'
  //messagingSenderId: '<your-messaging-sender-id>'
};

const appRoutes: Routes  = [
    { path: '', component: AppsComponent },
    { path: 'apps', component: AppsComponent },
    { path: 'app/:id', component: DevicepageComponent },
    
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AppsComponent,
    DevicepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DragulaModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    DndModule.forRoot(),
    AngularFireDatabaseModule
    //AlertModule.forRoot() //uncomment this line when we need an alert module
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}

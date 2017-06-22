import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//import { AlertModule } from 'ngx-bootstrap'; //uncomment this line when we need an alert module
//import { DragulaModule } from 'ng2-dragula'; //============ third party module ==============//
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppsComponent } from './apps/apps.component';
import { DevicepageComponent } from './devicepage/devicepage.component';
import { firebaseConfig } from './firebaseConfig'

const appRoutes: Routes  = [
    { path: '', component: AppsComponent, data:{ name: 'Home'}},
    { path: 'app/:id', component: DevicepageComponent, data:{ name: 'Apps component'}},
    
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

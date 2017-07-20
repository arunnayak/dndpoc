import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

//import { AlertModule } from 'ngx-bootstrap'; //uncomment this line when we need an alert module
//import { DragulaModule } from 'ng2-dragula'; //============ third party module ==============//
import { DndModule } from 'ng2-dnd';
import { AngularSplitModule } from 'angular-split';
import { TreeModule } from 'angular-tree-component';
import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "angular2-schema-form";

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppsComponent } from './apps/apps.component';
import { DevicepageComponent } from './devicepage/devicepage.component';
import { firebaseConfig } from './firebaseConfig';
import { LeftpaneComponent } from './leftpane/leftpane.component';
import { TabsComponent } from './tabs/tabs.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';


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
    DevicepageComponent,
    LeftpaneComponent,
    TabsComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    DndModule.forRoot(),
    AngularFireDatabaseModule,
    AngularSplitModule,
    TreeModule,
    SchemaFormModule,
    FormsModule,
    ReactiveFormsModule
    //AlertModule.forRoot() //uncomment this line when we need an alert module
  ],
  providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
  bootstrap: [AppComponent]
})

export class AppModule {

}

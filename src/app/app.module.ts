import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy, IonRadioGroup } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { UsamaComponent } from './usama/usama.component';
import { QuizComponent } from './quiz/quiz.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Question2Component } from './question2/question2.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Mechanical2Component } from './mechanical2/mechanical2.component';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [AppComponent,UsamaComponent,ResultComponent,Question2Component,QuizComponent,MechanicalComponent,Mechanical2Component],
  entryComponents: [],
  imports: [BrowserModule,FormsModule,IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase),AppRoutingModule, AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}


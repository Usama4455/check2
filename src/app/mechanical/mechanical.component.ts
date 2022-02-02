/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { CrudService } from './../service/crud.service';
import { NgModule } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, fromDocRef } from '@angular/fire/compat/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { identifierModuleUrl, IfStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { IonRadioGroup } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mechanical',
  templateUrl: './mechanical.component.html',
  styleUrls: ['./mechanical.component.scss'],
})
export class MechanicalComponent implements OnInit {
  valueselected: string;id: string;va: string;temp: string;temp2: string;
  temp3: string;temp4: string;temp5: string;temp6: string;temp7: string;temp8: string;
  d: string;d1: number[];d2: string;d3: string;d4: string;d5: string;d6: string;d7: string;
  questionno: number;ans1: string;r: string;h1: string;
  question: string;s: string;h: string;
  option1: string;option2: string;option3: string;option4: string;
  data: string;
  value1= '';
  array= [];
  items: Observable<any[]>;
  items1: Observable<any[]>;

  constructor(private firestore: AngularFirestore,
 public router: Router, public crudservice: CrudService)
  { AngularFireModule.initializeApp(environment.firebase);}

  ngOnInit()
   { this.items=this.firestore.collection('Questions data').valueChanges();}
   mechanical()
   {
     const id={};
     const record={};
     const ans={};
     record ['Question']=this.question;
     record ['questionNo']=this.questionno;
     record ['Option1']=this.option1;
     record ['Option2']=this.option2;
     record ['Option3']=this.option3;
     record ['Option4']=this.option4;
     ans ['answers']=this.ans1;
   this.crudservice.createmechanical(record,ans).then(res=>{
 this.question='';
 this.questionno=undefined;
 this.option1='';
 this.option2='';
 this.option3='';
 this.option4='';
 this.ans1='';
 console.log(res);
 this.data= 'question saved successfully';
 this.crudservice.id1().then(data=>{
   console.log(data);

 });
   }).catch(error =>
   {
     console.log('error');
   });
   }
 back()
 {
   this.router.navigate(['/home']);
   this.valueselected=null;
 }
 }


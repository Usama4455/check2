import { map } from '@firebase/util';
/* eslint-disable @typescript-eslint/dot-notation */
import { CrudService } from './../service/crud.service';
import { Component, OnInit, Query } from '@angular/core';
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
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.scss'],
})
export class Question2Component implements OnInit {
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
 {AngularFireModule.initializeApp(environment.firebase);
//this.tutorial=this.firestore.collection('tutorials').snapshotChanges();
//const tutorialsRef = firestore.collection('tutorials');
//const question = { title: '', url: 'bezkoder.com/zkoder-tutorial' };
//tutorialsRef.add({question });
//tutorialsRef.doc('id').update({ title: 'zkoder new Tut#8' });
};
  ngOnInit(){
    //this.items=this.firestore.collection('Questions data').valueChanges();
  };
  createquestion()
  {
    //const id={};
    const record={};
    const ans={};
    // eslint-disable-next-line @typescript-eslint/dot-notation
    record ['Question']=this.question;
    record ['questionNo']=this.questionno;
   // record ['id']=this.id;
    // eslint-disable-next-line @typescript-eslint/dot-notation
    record ['Option1']=this.option1;
    record ['Option2']=this.option2;
    record ['Option3']=this.option3;
    record ['Option4']=this.option4;
    ans ['answers']=this.ans1;
  this.crudservice.createnewquestion(record,ans).then(res=>{
this.question='';
this.questionno=undefined;
this.option1='';
this.option2='';
this.option3='';
this.option4='';
this.ans1='';
//this.id='';
console.log(res);
this.data= 'question saved successfully';
this.crudservice.id().then(data=>{
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



 //question read

  //const c=this.firestore.collection('Questions data').snapshotChanges().subscribe(as=>{
  //  as.map(p2=>{
  //const i= p2.payload.doc.id;
  //console.log(i);

  // this.id=this.firestore.createId();
 // this.items.subscribe(va=>{
    //console.log(va);
   // this.d=va.map((a)=>a.record.Question).toLocaleString();
    //this.d1=va.map((a)=>a.record.questionNo);
    //this.r=va.map((a)=>a.ans.answers).toLocaleString();
    //console.log(this.r);

    //this.d2=va.map((r)=>r.record.Option1).toLocaleString();
    //this.d3=va.map((b)=>b.record.Option2).toLocaleString();
    //this.d4=va.map((g)=>g.record.Option3).toLocaleString();
    //this.d5=va.map((b)=>b.record.Option4).toLocaleString();
    //console.log(this.d);

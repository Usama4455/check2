
import { AngularFirestoreDocument, } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable, ObservableInput, ObservedValuesFromArray } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule, getLocaleDayNames } from '@angular/common';
import { IfStmt, isNgTemplate } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { IonRadioGroup } from '@ionic/angular';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-usama',
  templateUrl: './usama.component.html',
  styleUrls: ['./usama.component.scss'],
})
export class UsamaComponent implements OnInit {
  valueselected: string;
  f: string;q1: boolean;
  //options
  a: string; a1: string;a2: string;a3: string;a4: string;
  a5: string;a6: string;a7: string;a8: string;a9: string;a10: string;a11: string;a12: string;
  h: string[];
  //answers
  b: string;b1: string;b2: string;b3: string;b4: string;b5: string;b6: string;
  disabled: boolean;
  data: string;
  data1: string;
  data2: string;
  data3: string;data4: string;data5: string;data6: string;
  items: Observable<any[]>;
  items1: Observable<any[]>;items2: Observable<any[]>;
  val: string;
  v: string;
  constructor(private firestore: AngularFirestore,
    public router: Router){}
  ngOnInit()
  {  AngularFireModule.initializeApp(environment.firebase);
    this.items=this.firestore.collection('items').valueChanges();
    //answers
    this.items2=this.firestore.collection('answers').valueChanges();
    this.items2.subscribe((v1=>{
     this.b=JSON.stringify(v1[0], null, 2);
      console.log(this.b);
      this.b1=JSON.stringify(v1[1], null, 2);
    }));
    //options
    this.items1=this.firestore.collection('items').doc('1WSbROmvbQniS1aY14HZ').collection('options').valueChanges();
    this.items1.subscribe((v=>{
     this.a=(v[0]);
     this.a1=(v[1]);
     this.a2=(v[2]);
     this.a3=(v[3]);
     this.a4=(v[4]);
     this.a5=(v[5]);
     this.a6=(v[6]);
     this.a7=(v[7]);
     this.a8=(v[8]);
     this.a9=(v[9]);
     this.a10=(v[10]);
      console.log(this.v);
    }));
    //questions
    this.items.subscribe((val=>{
      console.log(val);
      console.log(val.length);
      this.data1=(val[0]);
      this.data2=(val[1]);
      this.data3=(val[2]);
      this.data4=(val[3]);
      this.data5=(val[4]);
      this.q1=true;
      console.log(this.data1);
      console.log(this.data2);
      console.log(this.data3);
      console.log(this.data4);
   }));
  }
   //console.log(this.items);
  // this.number1 = Array(1).fill(0).map((x,i)=>i);
   //this.isvisible=true;
   //const docRef=this.firestore.collection('items').doc('answers');
    // eslint-disable-next-line max-len
    //const docRef=this.firestore.collection('items').doc('FHmVz9modJ5tf6etwSZW').collection('options').doc('FHmVz9modJ5tf6etwSZW').valueChanges();
    //docRef.subscribe((val)=>{
    //console.log(val);
     //this.data1=JSON.stringify(val);
     //const d=Array(this.data1);
    // console.log(d.toLocaleString());
//});
  //}
  //<li class="text" *ngFor="let item of items  |async ">

  get(): string{return (this.data1);}
  get1(): string{return (this.a);}
  get2(): string{return (this.a1);}
  get3(): string{return (this.a2);}
  get4(): string{return (this.a3);}
  get5(): string{return (this.data2);}
  get6(): string{return (this.a4);}
  get7(): string{return (this.a5);}
  get8(): string{return (this.a6);}
  get9(): string{return (this.a7);}
  get10(): string{return (this.a8);}
  goto()
  {
    console.log('answer submitted successfully');
    const data=this.valueselected;
    console.log(data);
    //eslint-disable-next-line eqeqeq
    if(data===this.b || data===this.b1){console.log('true answer');
  this.q1=false;}
    else {console.log('wrong answer');}
  this.q1=false;
  }
  }

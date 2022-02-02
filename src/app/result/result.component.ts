import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, fromDocRef } from '@angular/fire/compat/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { identifierModuleUrl, IfStmt } from '@angular/compiler';
import { NgForm } from '@angular/forms';
import { IonRadioGroup } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { CrudService } from './../service/crud.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  mesage: string;
  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore,
    public crudservice: CrudService)
  {AngularFireModule.initializeApp(environment.firebase); }

  ngOnInit() {
    this.items=this.firestore.collection('elecanswers').valueChanges();
  }
  endquiz()
  {
    this.items=this.firestore.collection('elecanswers').snapshotChanges();
    const j=this.firestore.collection('elecanswers').snapshotChanges();
    j.forEach(k=>{
const d=k.map(value=>{
const gh=value.payload.doc.id;
console.log(gh);
const t=this.firestore.collection('elecanswers').doc(gh).delete();
});
  });
}
}

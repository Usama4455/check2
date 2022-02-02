import { QuizComponent } from './../quiz/quiz.component';
import { map } from '@firebase/util';
import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirebaseApp } from '@angular/fire/app';
import { identifierModuleUrl } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  temp: string;
  constructor(public fireservice: AngularFirestore ) { }
  createnewquestion(record,ans)
  {
 return this.fireservice.collection('Questions data').add({record,ans})
 .then( (docRef=>{
   this.temp=docRef.id;
  console.log(this.temp);
   return this.temp=docRef.id;

 })).catch((error=>{
   console.log('error');
 }));
 }
 id()
 { return this.fireservice.collection('Quiz').add({ids:this.temp});}
 createmechanical(record,ans)
 {
return this.fireservice.collection('mechanical').add({record,ans})
.then( (docRef=>{
  this.temp=docRef.id;
 console.log(this.temp);
  return this.temp=docRef.id;

})).catch((error=>{
  console.log('error');
}));
}
id1()
{ return this.fireservice.collection('mechanical ids').add({ids:this.temp});}
id2(dat)
{
  return this.fireservice.collection('elecanswers').add({ans:dat});
}
}

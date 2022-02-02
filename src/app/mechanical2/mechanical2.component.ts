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
import { TrackByFunction } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from '@angular/fire/compat';
import { CrudService } from './../service/crud.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mechanical2',
  templateUrl: './mechanical2.component.html',
  styleUrls: ['./mechanical2.component.scss'],
})
export class Mechanical2Component implements OnInit {
  valueselected: string;id: string;va: string;temp: string;temp2: string;
  temp3: string;temp4: string;temp5: string;temp6: string;temp7: string;temp8: string;
  temp9: string;temp10: string;temp11: string;temp12: string;temp13: string;temp14: string;temp15: string;temp16: string;temp17: string;
  temp18: string;temp19: string;temp20: string;temp21: string;temp22: string;temp23: string;temp24: string;temp25: string;
  temp26: string;temp27: string;temp28: string;temp29: string;temp30: string;
  d: string;d1: number[];d2: string;d3: string;d4: string;d5: string;d6: string;d7: string;
  questionno: number;ans1: string;r: string;h1: string;
  question: string;s: string;h: string;
  option1: string;option2: string;option3: string;option4: string;
  data: string;
  value1= '';
  fileUrl;
  array= [];
  items: Observable<any[]>;
  items1: Observable<any[]>;

  constructor(private firestore: AngularFirestore,
    private sanitizer: DomSanitizer,
    public router: Router, public crudservice: CrudService)
     { AngularFireModule.initializeApp(environment.firebase); }

  ngOnInit() {
    const items1=this.firestore.collection('mechanical ids').snapshotChanges();
    items1.forEach(p=>{
      const l=p.map((value,index)=>{
         if(index===0){
        const hj= value.payload.doc.get('ids');
        console.log(hj);
        const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
   g.subscribe(gy=>{
     const h1=gy.payload.get('ans.answers');
     console.log(h1);
     this.temp=h1;
   });
  }
  else if(index===1){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
g.subscribe(gy=>{
const h1=gy.payload.get('ans.answers');
console.log(h1);
this.temp2=h1;
});
  }
  else if(index===2){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp3=h1;
  });
 }
  else if(index===3){
   const hj= value.payload.doc.get('ids');
   console.log(hj);
   const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
    g.subscribe(gy=>{
    const h1=gy.payload.get('ans.answers');
    console.log(h1);
    this.temp4=h1;
    });
   }
    else if(index===4){
   const hj= value.payload.doc.get('ids');
    console.log(hj);
    const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
     g.subscribe(gy=>{
    const h1=gy.payload.get('ans.answers');
    console.log(h1);
    this.temp5=h1;
    });
  }
    else if(index===5){
    const hj= value.payload.doc.get('ids');
    console.log(hj);
   const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
   g.subscribe(gy=>{
   const h1=gy.payload.get('ans.answers');
   console.log(h1);
  this.temp6=h1;
   });
  }
  else if(index===6){
   const hj= value.payload.doc.get('ids');
   console.log(hj);
   const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
   g.subscribe(gy=>{
   const h1=gy.payload.get('ans.answers');
   console.log(h1);
   this.temp7=h1;
   });
  }
  else if(index===7){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp8=h1;
   });
  }
  else if(index===8){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp9=h1;
   });
 }
  else if(index===9){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp10=h1;
  });
 }
  else if(index===10){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp11=h1;
  });
 }
  else if(index===11){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp12=h1;
  });
 }
  else if(index===12){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp13=h1;
  });
 }
  else if(index===13){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp14=h1;
   });
  }
  else if(index===14){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp15=h1;
   });
  }
  else if(index===15){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp16=h1;
   });
  }
  else if(index===16){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp17=h1;
   });
  }
  else if(index===17){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp18=h1;
   });
  }
  else if(index===18){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp19=h1;
   });
  }
  else if(index===19){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp20=h1;
   });
  }
  else if(index===20){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp21=h1;
   });
  }
  else if(index===21){
  const hj= value.payload.doc.get('ids');
  console.log(hj);
  const g=this.firestore.collection('mechanical').doc(hj).snapshotChanges();
  g.subscribe(gy=>{
  const h1=gy.payload.get('ans.answers');
  console.log(h1);
  this.temp22=h1;
   });
  }
   });
  this.items=this.firestore.collection('mechanical').valueChanges();
});
}
goto()
{
  this.s=this.valueselected.toLocaleString();
  console.log('you selected'+ this.s);
  if((this.s===this.temp)||(this.s===this.temp2)||(this.s===this.temp3)||
  (this.s===this.temp4)||(this.s===this.temp5)||(this.s===this.temp6)||(this.s===this.temp7)||(this.s===this.temp8)
  ||(this.s===this.temp9)||(this.s===this.temp10)||(this.s===this.temp11)||(this.s===this.temp12)||(this.s===this.temp13)
  ||(this.s===this.temp14)||(this.s===this.temp15)||(this.s===this.temp16)||(this.s===this.temp17)||(this.s===this.temp18)
  ||(this.s===this.temp19)||(this.s===this.temp20)||(this.s===this.temp21))
  {
    console.log('correct answer');
    //const data=this.s +('correct answer') + ' \r\n ';
    //const file = new window.Blob([data], { type: 'text/plain' });

//const downloadAncher = document.createElement('a');
//downloadAncher.style.display = 'none';

//const fileURL = URL.createObjectURL(file);
  //downloadAncher.href = fileURL;
  //downloadAncher.download = 'result.txt';
  //downloadAncher.click();
  }
  else
  {console.log('wrong answer');
  const data=this.s +('wrong answer') +' \r\n ';
  }
}
back()
{
  this.router.navigate(['/home']);
  this.valueselected=null;
}
  }


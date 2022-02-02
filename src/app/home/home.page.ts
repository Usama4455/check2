import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { NavController } from '@ionic/angular';
import { HomePageModule } from './home.module';
import { UsamaComponent } from '../usama/usama.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  name: string;
constructor(public router: Router) {}
onSave(){
   this.router.navigate(['/quiz']);
   console.log('loading your quiz');
}
onSavem(){
  this.router.navigate(['/mechanical2']);
  console.log('loading your quiz');
}
register(){
  if(this.name==='usama'){
  this.router.navigate(['/question2']);
  console.log('loading your page');
  }
  else
  {
this.router.navigate(['/home']);
  }
}
mechanical()
{
  if(this.name==='usama'){
    this.router.navigate(['/mechanical']);
    console.log('loading your page');
    }
    else
    {
  this.router.navigate(['/home']);
    }
}
}

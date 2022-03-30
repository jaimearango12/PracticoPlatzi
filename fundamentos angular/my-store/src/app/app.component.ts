import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Jaime';
  age = 12;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    nombre: 'jaime',
    age: 12,
    avatar:  'https://source.unsplash.com/random'
  };

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  };

  ageIncrease(){
    this.person.age += 1;
  };

  onScroll(event:Event){
    const element= event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  ChangeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.nombre = element.value;
  }
}

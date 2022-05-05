import { Component } from '@angular/core';
import { Product } from './models/product.model';


import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*name = 'Jaime';
  age = 12;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  register ={
    name: '',
    email:'',
    password: '',
  }
  person = {
    nombre: 'jaime',
    age: 12,
    avatar:  'https://source.unsplash.com/random'
  };
  names:string[]= ['jaime', 'david','arango','fonseca'];
  newName = '';
  products: Product[]=[
    {
      name:'carcasa',
      price: 80,
      image: 'https://source.unsplash.com/random'
    },
    {
      name:'avion',
      price: 20,
      image: 'https://source.unsplash.com/random'
    },
    {
      name:'Bicicleta',
      price: 100,
      image: 'https://source.unsplash.com/random'
    },
    {
      name:'PC',
      price: 10,
      image: 'https://source.unsplash.com/random'
    },
    {
      name:'BTc',
      price: 550,
      image: 'https://source.unsplash.com/random'
    },
    {
      name:'ETH',
      price: 30,
      image: 'https://source.unsplash.com/random'
    },
  ]

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

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number){
    this.names.splice(index, 1)
  }

  onRegister(){
    console.log(this.register);
    
  }*/
  imgParent= '';
  showImg = true;
  token= '';
  
  constructor(
    private userSService: UsersService
  ){}

  onLoaded(img: string){
    console.log('log padre', img);
    
  }

  toggleImg(){
    this.showImg = !this.showImg;
  }

  createUser(){
    this.userSService.create({
      name: 'jaime',
      email: 'jaime@mail.com',
      password: '112233'
    })
    .subscribe(rta =>{
      console.log(rta);
    });
  }

  /*
  login(){
    this.authService.login(
       'jaime@mail.com', '112233'
    )
    .subscribe(rta =>{
      this.token = rta.access_token;
    });
  }

  getProfile(){
    this.authService.profile(this.token)
    .subscribe(profile => {
      console.log(profile);
      
    })
  }
  */
}

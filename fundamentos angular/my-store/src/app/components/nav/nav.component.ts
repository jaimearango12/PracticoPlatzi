import { Component, OnInit } from '@angular/core';

import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service'; 
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter= 0;
  token= '';
  profile:User | null= null;

  constructor(
    private authService: AuthService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products =>{
      this.counter = products.length;
    })
  }

  toggleMenu(){
    this.activeMenu= !this.activeMenu
  }

  login(){
    this.authService.login(
       'jaime@mail.com', '112233'
    )
    .subscribe(rta =>{
      this.token = rta.access_token;
      this.getProfile();
    });
  }

  getProfile(){
    this.authService.profile(this.token)
    .subscribe(user => {
      this.profile = user      
    })
  }

}

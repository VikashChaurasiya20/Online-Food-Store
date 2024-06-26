import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shares/Model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
[x: string]: any;

  cartQuantity=0;
  user!:User;
  constructor(private cartService: CartService, private userService:UserService) {
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity=newCart.totalCount;
    })
userService.userObservable.subscribe((newUser)=>{
this.user= newUser
})


   }

  ngOnInit(): void {

  }
  logout(){

    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}

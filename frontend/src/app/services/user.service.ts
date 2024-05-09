import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../shares/Model/User';
import { IUserLogin } from '../shares/interfaces/IUserLogin';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shares/constants/urls';
import { IUserRegistered } from '../shares/interfaces/IUserRegistered';


const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject =
  new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User {
    return this.userSubject.value;
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Online Food Store ${user.name}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
  }

  register(userRegister:IUserRegistered):Observable<User>{
return this.http.post<User>(USER_REGISTER_URL,userRegister).pipe(
  tap({
    next: (user) =>{
      this.setUserToLocalStorage(user);
      this.userSubject.next(user);
      this.toastrService.success(
        `Welcome to Online Food Store ${user.name}!`,
        'Register Successful'
      )
    },
    error: (errorResponse) => {
      this.toastrService.error(errorResponse.error, 'Register Failed');
    }
  })
)
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}

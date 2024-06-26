import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegistered } from 'src/app/shares/interfaces/IUserRegistered';
import { PasswordsMatchValidators } from 'src/app/shares/validators/password_match_validator';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitted = false;

  returnUrl = '';
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',Validators.required],
      address:['',Validators.required],
    },{
      Validators:PasswordsMatchValidators('password','confirmPassword')
    });
    this.returnUrl=this.activatedRoute.snapshot.queryParams['returnUrl'];
  }
  get fc(){
    return this.registerForm.controls;

  }
  submit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

    const fv=this.registerForm.value;
    const user : IUserRegistered ={
      name :fv.name,
      email:fv.email,
      password:fv.password,
      confirmPassword:fv.confirmPassword,
      address:fv.address
    };
    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    })
  }
  }

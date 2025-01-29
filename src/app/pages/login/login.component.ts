import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
form : FormGroup;
AuthService = inject(AuthService)
router = inject(Router)

constructor(private fb : FormBuilder,
             
){
  this.form= this.fb.group(
    {
      email : new FormControl('' , [Validators.required , Validators.email]),
      password : new FormControl('' , [Validators.required])

    }
  )
}

onSumbit(){
  if(this.form.valid){
    console.log(this.form.value)

    this.AuthService.Login(this.form.value).subscribe({
      next: (response)=>{
        if(response.Role==='Admin'){
        this.router.navigate(['/dashboard'])}
        if(response.Role==='User'){
          this.router.navigate(['/home'])
        }
        console.log(response)
      }
    })
  }
}

}

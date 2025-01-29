import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  authService = inject(AuthService)
  router = inject(Router)

  form : FormGroup;
  constructor(private fb : FormBuilder){
    this.form= this.fb.group(
      {
        name : new FormControl('' , [Validators.required]),
        email : new FormControl('' , [Validators.required , Validators.email]),
        password : new FormControl('' , [Validators.required]),
        // retypePassword : new FormControl('' , [Validators.required]),
        mobile : new FormControl('' , [Validators.required]),
        address : new FormControl('' , [Validators.required]),



  
      }
    )
  }
  
  onSumbit(){
    if(this.form.valid){
      this.authService.Register(this.form.value).subscribe(
        {
          next: (Response)=>{
            this.router.navigate(['/login'])
            console.log(Response)

          }
        }
      )
      console.log(this.form.value)

    }
  }
}

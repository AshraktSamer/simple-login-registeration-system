import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
form : FormGroup;
constructor(private fb : FormBuilder){
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
  }
}

}

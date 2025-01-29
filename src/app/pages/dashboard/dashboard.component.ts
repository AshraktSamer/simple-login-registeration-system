import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  data! : any 
  authservice = inject(AuthService)
  constructor(){}
  ngOnInit(): void {
    // this.authservice.getAllUser().subscribe({
    //   next:(response)=>{
    //     console.log(response)
    //     this.data = response.Data
    //   }
    // })
  }

  Logout(){
    this.authservice.logout()
  }

}

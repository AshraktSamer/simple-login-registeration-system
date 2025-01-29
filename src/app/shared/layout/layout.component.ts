import { Component, effect, inject, Injector, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  injector = inject(Injector)
  authService = inject(AuthService)
  isLogged = false

  ngOnInit(): void {
    effect(() => {
      this.isLogged = this.authService.isLoggedIn();

    } ,       {
      injector: this.injector
    })
  }

}

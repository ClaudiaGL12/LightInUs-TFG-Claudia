import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterOutlet],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {
  ngOnInit(): void {
    document.body.classList.add('auth-layout');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('auth-layout');
  }
}

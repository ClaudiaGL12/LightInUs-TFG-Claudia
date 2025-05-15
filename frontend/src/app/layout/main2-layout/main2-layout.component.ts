import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';


@Component({
  selector: 'app-main2-layout',
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './main2-layout.component.html',
  styleUrl: './main2-layout.component.css'
})
export class Main2LayoutComponent {

}

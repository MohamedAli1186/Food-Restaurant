import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  title = 'Food-restaurant';
  scrollToTop = ()  => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
}
}

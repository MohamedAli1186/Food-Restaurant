import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  title = 'Food-restaurant';
  scrollToTop = ()  => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
}
}

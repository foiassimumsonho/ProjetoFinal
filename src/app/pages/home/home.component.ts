import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private router: Router) { }
  email = '';
  senha = '';
  menuOpen = false;

  slides = ['1.png', '2.png', '3.png'];
  currentIndex = 0;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  entrar() {
    if (this.email === 'admin@admin.com' && this.senha === '1234') {
      
    alert('Login realizado com sucesso!');
    this.router.navigate(['/dashboard']);
  } else {
      alert('E-mail ou senha incorretos!');
    }
  }
}

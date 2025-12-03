import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Controle do menu lateral
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Login
  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  entrar() {
    if (this.email === 'admin@admin.com' && this.senha === '1234') {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/dashboard']); // ou qualquer rota que exista
    } else {
      alert('E-mail ou senha incorretos!');
    }
  }

  // Carrossel
  slides = ['1.png', '2.png', '3.png'];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}

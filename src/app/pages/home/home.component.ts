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
toggleMenu() {
throw new Error('Method not implemented.');
}

  // Campos do login
  email: string = '';
  senha: string = '';
menuOpen: any;

  // Construtor para navegar
  constructor(private router: Router) {}

  // Slides (mantém aí se já tem)
  slides = ['1.png', '2.png', '3.png'];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  // FUNÇÃO DE LOGIN
  entrar() {
    if (this.email === 'admin@admin.com' && this.senha === '1234') {
      alert('Login realizado com sucesso!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('E-mail ou senha incorretos!');
    }
  }
}

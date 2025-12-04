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
 email: string = '';
  senha: string = '';
  menuOpen = false;

  slides = ['4.png', '2.png', '3.png'];
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
  const dados = localStorage.getItem('usuarioCadastro');

  if (!dados) {
    alert('Nenhum cadastro encontrado!');
    return;
  }

  const usuario = JSON.parse(dados);

  if (this.email === usuario.email && this.senha === usuario.senha) {
    alert('Login realizado com sucesso!');
    this.router.navigate(['/dashboard']);
  } else {
    alert('E-mail ou senha incorretos!');
  }
}
}

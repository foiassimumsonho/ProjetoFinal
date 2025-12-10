import { Component, OnInit, OnDestroy, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private router = inject(Router);

  email: string = '';
  senha: string = '';

  menuOpen = false;
  slides = ['4.png', '2.png', '3.png']; 
  currentIndex = 0;
  
  intervaloId: any;

  ngOnInit() {
    this.iniciarCarrosselAutomatico();
  }

  ngOnDestroy() {
    this.pararCarrosselAutomatico();
  }

  iniciarCarrosselAutomatico() {
    this.intervaloId = setInterval(() => {
      this.nextSlide(true);
    }, 3000);
  }

  pararCarrosselAutomatico() {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
    }
  }

  reiniciarTempo() {
    this.pararCarrosselAutomatico();
    this.iniciarCarrosselAutomatico();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  nextSlide(automatico: boolean = false) {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    if (!automatico) this.reiniciarTempo();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.reiniciarTempo(); 
  }

  entrar() {
    console.log('Tentativa de Login');
    
    if (!this.email || !this.senha) {
      alert('Por favor, preencha o e-mail e a senha.');
      return;
    }

    const dados = localStorage.getItem('usuarioCadastro');

    if (!dados) {
      alert('Nenhum cadastro encontrado! Você precisa criar uma conta.');
      return;
    }

    try {
      const usuario = JSON.parse(dados);

      if (this.email.trim() === usuario.email.trim() && 
          this.senha.trim() === usuario.senha.trim()) {
        
        localStorage.setItem('sessao', 'ativa');
        console.log('Salvando sessão...');
        alert('Login realizado com sucesso!');
        this.router.navigate(['/dashboard']); 

      } else {
        alert('E-mail ou senha incorretos!');
      }

    } catch (error) {
      console.error('Erro ao ler dados:', error);
      alert('Erro nos dados salvos.');
    }

  }
}



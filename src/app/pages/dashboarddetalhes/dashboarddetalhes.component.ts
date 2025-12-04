import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboarddetalhes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './dashboarddetalhes.component.html',
  styleUrls: ['./dashboarddetalhes.component.css']
})
export class DashboardDetalhesComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  usuario = {
    nome: '',
    senha: '',
    email: '',
    telefone: '',
    cpf: '',
    estado: '',
    municipio: ''
  };

  aceitaLgpd: boolean = false;

  cadastrar() {
    if (!this.aceitaLgpd) {
      alert('Você precisa aceitar a Política de Privacidade.');
      return;
    }

    console.log('Dados do usuário:', this.usuario);

    localStorage.setItem('usuarioCadastro', JSON.stringify(this.usuario));

    alert('Cadastro realizado com sucesso!');
  }
}



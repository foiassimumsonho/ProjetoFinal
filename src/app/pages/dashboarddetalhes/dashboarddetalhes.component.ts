import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';   
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-dashboarddetalhes', 
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive], 
  templateUrl: './dashboarddetalhes.component.html', 
  styleUrls: ['./dashboarddetalhes.component.css']
})
export class DashboardDetalhesComponent {

  constructor(private router: Router, private http: HttpClient) {}

  menuOpen = false;
  aceitaLgpd = false;
  carregandoCidades = false;
  usuario = {
    nome: '',
    senha: '',
    email: '',
    telefone: '',
    estado: '',
    municipio: ''
  };

  listaEstados = [
    { sigla: 'AC', nome: 'Acre' }, { sigla: 'AL', nome: 'Alagoas' }, { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' }, { sigla: 'BA', nome: 'Bahia' }, { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' }, { sigla: 'ES', nome: 'Espírito Santo' }, { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' }, { sigla: 'MT', nome: 'Mato Grosso' }, { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' }, { sigla: 'PA', nome: 'Pará' }, { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' }, { sigla: 'PE', nome: 'Pernambuco' }, { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' }, { sigla: 'RN', nome: 'Rio Grande do Norte' }, { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' }, { sigla: 'RR', nome: 'Roraima' }, { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' }, { sigla: 'SE', nome: 'Sergipe' }, { sigla: 'TO', nome: 'Tocantins' }
  ];

  listaMunicipios: any[] = [];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  aoMudarEstado() {
    console.log('Estado selecionado:', this.usuario.estado); 
    this.usuario.municipio = '';
    this.listaMunicipios = [];
    
    if (this.usuario.estado) {
      this.carregandoCidades = true;
      const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.usuario.estado}/municipios`;

      this.http.get<any[]>(url).subscribe({
        next: (dados) => {
          this.listaMunicipios = dados.sort((a, b) => a.nome.localeCompare(b.nome));
          this.carregandoCidades = false;
        },
        error: (erro) => {
          console.error('Erro IBGE:', erro);
          alert('Erro ao carregar cidades. Verifique sua conexão.');
          this.carregandoCidades = false;
        }
      });
    }
  }

  cadastrar() {
    if (!this.usuario.email || !this.usuario.senha || !this.usuario.municipio) {
      alert('Preencha todos os campos obrigatórios.');
      return;
    }

    localStorage.setItem('usuarioCadastro', JSON.stringify(this.usuario));
    alert('Cadastro realizado! Faça login.');
    this.router.navigate(['/home']); 
  }

  apenasNumeros(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
  }
}
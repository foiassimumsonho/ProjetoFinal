import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-fale',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule 
  ],
  templateUrl: './fale.component.html',
  styleUrls: ['./fale.component.css']
})
export class FaleComponent {

  menuOpen = false;
  contato = {
    nome: '',
    email: '',
    mensagem: ''
  };

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  } 

enviarMensagem(form: any) {
    if (form.valid) {
      console.log('Enviado com sucesso:', this.contato);
      alert('Mensagem enviada com sucesso!');
      
      form.resetForm(); 
    } else {
      alert('Preencha os campos corretamente antes de enviar.');
    } }
  }
  
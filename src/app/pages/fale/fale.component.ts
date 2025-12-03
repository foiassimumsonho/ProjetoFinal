import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-fale',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fale.component.html',
  styleUrls: ['./fale.component.css']
})

export class FaleComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  enviarMensagem(event: Event) {
  event.preventDefault(); // impede o recarregamento da página

  alert(" Agradecemos pelo contato, sua mensagem já foi enviada");
}


}

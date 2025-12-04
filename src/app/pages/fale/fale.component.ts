import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-fale',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './fale.component.html',
  styleUrls: ['./fale.component.css']
})

export class FaleComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  enviarMensagem(event: Event) {
  event.preventDefault(); 

  alert(" Agradecemos pelo contato, sua mensagem já foi enviada");
}


}

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  
  const sessao = localStorage.getItem('sessao');

  console.log('--- VERIFICANDO SEGURANÇA ---');
  console.log('Sessão encontrada?', sessao);

  if (sessao === 'ativa') {
    return true;
  } else {
    console.log('Bloqueado pelo Guard! Redirecionando...');
    alert('Acesso negado! Faça login.');
    
    router.navigate(['/home']);
    return false;
  }
};
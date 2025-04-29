<<<<<<< HEAD
const doacoes = [
    { nome: "Ana", valor: 32 },
    { nome: "Bruno", valor: 45 },
    { nome: "Carla", valor: 57 },
    { nome: "Diego", valor: 29 },
    { nome: "Eduarda", valor: 63 },
    { nome: "Felipe", valor: 88 },
    { nome: "Gustavo", valor: 41 },
    { nome: "Helena", valor: 75 },
    { nome: "Igor", valor: 39 },
    { nome: "Juliana", valor: 52 },
    { nome: "Lucas", valor: 99 }
  ];
  
  let index = 0;
  let mensagensNaTela = [];
  
  function mostrarDoacao() {
    if (index >= doacoes.length) return; // Para depois de mostrar todas as doações
  
    const { nome, valor } = doacoes[index];
    const inicial = nome.charAt(0).toUpperCase();
    
    const notificacao = document.createElement('div');
    notificacao.classList.add('notificacao');
    
    notificacao.innerHTML = `
      <div class="avatar">${inicial}</div>
      <div><strong>${nome}</strong> doou <strong>R$ ${valor},00</strong> 💖</div>
    `;
  
    const container = document.getElementById('notificacoes');
    container.appendChild(notificacao);
  
    mensagensNaTela.push(notificacao);
  
    // A cada 3 mensagens novas, remove as 2 anteriores
    if (mensagensNaTela.length > 2) {
      const primeira = mensagensNaTela.shift();
      const segunda = mensagensNaTela.shift();
      primeira.remove();
      segunda.remove();
    }
  
    index++;
  }
  
  // Mostrar a primeira mensagem imediatamente
  mostrarDoacao();
  
  // E depois a cada 8 segundos
=======
const doacoes = [
    { nome: "Ana", valor: 32 },
    { nome: "Bruno", valor: 45 },
    { nome: "Carla", valor: 57 },
    { nome: "Diego", valor: 29 },
    { nome: "Eduarda", valor: 63 },
    { nome: "Felipe", valor: 88 },
    { nome: "Gustavo", valor: 41 },
    { nome: "Helena", valor: 75 },
    { nome: "Igor", valor: 39 },
    { nome: "Juliana", valor: 52 },
    { nome: "Lucas", valor: 99 }
  ];
  
  let index = 0;
  let mensagensNaTela = [];
  
  function mostrarDoacao() {
    if (index >= doacoes.length) return; // Para depois de mostrar todas as doações
  
    const { nome, valor } = doacoes[index];
    const inicial = nome.charAt(0).toUpperCase();
    
    const notificacao = document.createElement('div');
    notificacao.classList.add('notificacao');
    
    notificacao.innerHTML = `
      <div class="avatar">${inicial}</div>
      <div><strong>${nome}</strong> doou <strong>R$ ${valor},00</strong> 💖</div>
    `;
  
    const container = document.getElementById('notificacoes');
    container.appendChild(notificacao);
  
    mensagensNaTela.push(notificacao);
  
    // A cada 3 mensagens novas, remove as 2 anteriores
    if (mensagensNaTela.length > 2) {
      const primeira = mensagensNaTela.shift();
      const segunda = mensagensNaTela.shift();
      primeira.remove();
      segunda.remove();
    }
  
    index++;
  }
  
  // Mostrar a primeira mensagem imediatamente
  mostrarDoacao();
  
  // E depois a cada 8 segundos
>>>>>>> 5c48f7e7b466a3d23af4b9f383f3a67b13805091
  setInterval(mostrarDoacao, 9000);
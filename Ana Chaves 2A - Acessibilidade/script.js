// Função autoexecutável para encapsular o código
(function() {
  // Seleciona os botões pelo ID
  const increaseBtn = document.getElementById('increase-font');
  const decreaseBtn = document.getElementById('decrease-font');
  const toggleThemeBtn = document.getElementById('toggle-theme');
  const body = document.body;

  // Define o tamanho de fonte inicial, mínimo e máximo
  let fontSize = 16; // em pixels
  const minFontSize = 12;
  const maxFontSize = 24;

  // Função que atualiza o tamanho da fonte no body
  function updateFontSize() {
    body.style.fontSize = fontSize + 'px';
  }

  // Evento para aumentar o tamanho da fonte
  increaseBtn.addEventListener('click', () => {
    if (fontSize < maxFontSize) {
      fontSize += 2;
      updateFontSize();
    }
  });

  // Evento para diminuir o tamanho da fonte
  decreaseBtn.addEventListener('click', () => {
    if (fontSize > minFontSize) {
      fontSize -= 2;
      updateFontSize();
    }
  });

  // Evento para alternar modo claro/escuro
  toggleThemeBtn.addEventListener('click', () => {
    // Adiciona ou remove a classe 'dark-mode' no body
    const isDark = body.classList.toggle('dark-mode');

    // Altera o texto do botão de acordo com o estado
    toggleThemeBtn.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';

    // Atualiza atributo aria-pressed para indicar estado
    toggleThemeBtn.setAttribute('aria-pressed', isDark);
  });

  // Define o tamanho inicial da fonte ao carregar
  updateFontSize();
})();

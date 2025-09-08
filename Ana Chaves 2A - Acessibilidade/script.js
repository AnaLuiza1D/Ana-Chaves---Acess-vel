document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Toggle para o botão de acessibilidade e suas opções
    botaoDeAcessibilidade.addEventListener('click', function() {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        // Ajusta o atributo aria-expanded para acessibilidade
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    // Função para aumentar o tamanho da fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    // Função para alternar o contraste
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1; // Tamanho inicial da fonte

    // Aumentar a fonte
    aumentaFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Diminuir a fonte
    diminuiFonteBotao.addEventListener('click', function() {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // Alternar o contraste
    alternaContraste.addEventListener('click', function() {
        document.body.classList.toggle('alto-contraste');
    });

    // ScrollReveal para animações de rolagem
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#tropicalia', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });

    // Ajuste das transições das imagens e textos no ScrollReveal
    ScrollReveal().reveal('.img-inicio', { delay: 800, distance: '50px', origin: 'right' });
    ScrollReveal().reveal('.esquerda-conteudo', { delay: 600, distance: '50px', origin: 'left' });
    ScrollReveal().reveal('#tropicalia .container', { delay: 700, distance: '50px', origin: 'bottom' });
});

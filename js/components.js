/* ===========================
   Componentes reutilizáveis
   Header e Footer injetados via JS
   =========================== */

(function () {
  const headerHTML = `
  <header>
    <div class="container">
      <div class="nav-inner">
        <a href="index.html" class="logo">
          <span class="logo-icon">⚡</span>
          Active Dics
        </a>
        <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">☰</button>
        <nav>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="teste-digitacao.html">Teste de Digitação</a></li>
            <li><a href="teste-clique.html">Teste de Clique</a></li>
            <li><a href="gerador-qrcode.html">QR Code</a></li>
            <li><a href="contador-palavras.html">Contador</a></li>
            <li><a href="sobre.html">Sobre</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>`;

  const footerHTML = `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">⚡ Active Dics</a>
          <p>Ferramentas gratuitas e fáceis de usar para o seu dia a dia. Sem cadastro, sem instalação — tudo direto no navegador.</p>
        </div>
        <div class="footer-col">
          <h4>Ferramentas</h4>
          <ul>
            <li><a href="teste-digitacao.html">Teste de Digitação</a></li>
            <li><a href="teste-clique.html">Teste de Velocidade de Clique</a></li>
            <li><a href="gerador-qrcode.html">Gerador de QR Code</a></li>
            <li><a href="contador-palavras.html">Contador de Palavras</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Institucional</h4>
          <ul>
            <li><a href="sobre.html">Sobre Nós</a></li>
            <li><a href="contato.html">Contato</a></li>
            <li><a href="privacidade.html">Política de Privacidade</a></li>
            <li><a href="termos.html">Termos de Uso</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Active Dics. Todos os direitos reservados.</span>
        <span>
          <a href="privacidade.html">Privacidade</a> ·
          <a href="termos.html">Termos</a> ·
          <a href="contato.html">Contato</a>
        </span>
      </div>
    </div>
  </footer>`;

  // Injeta header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) headerPlaceholder.outerHTML = headerHTML;

  // Injeta footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;
})();

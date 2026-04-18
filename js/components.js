/* ===========================
   Active Dics — Header & Footer
   =========================== */

(function () {

  /* ── Header ── */
  var headerHTML = `
  <header>
    <div class="container">
      <div class="nav-inner">

        <a href="index.html" class="logo" aria-label="Active Dics — Início">
          <span class="logo-icon">⚡</span>
          Active Dics
        </a>

        <button class="nav-toggle" aria-label="Abrir menu" aria-expanded="false">☰</button>

        <nav aria-label="Navegação principal">
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="teste-digitacao.html">Digitação</a></li>
            <li><a href="teste-clique.html">Teste de Clique</a></li>
            <li><a href="gerador-qrcode.html">QR Code</a></li>
            <li><a href="contador-palavras.html">Contador</a></li>
            <li><a href="sobre.html">Sobre</a></li>
          </ul>
        </nav>

      </div>
    </div>
  </header>`;

  /* ── Footer ── */
  var year = new Date().getFullYear();
  var footerHTML = `
  <footer>
    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <a href="index.html" class="logo" aria-label="Active Dics">
            <span class="logo-icon">⚡</span>
            Active Dics
          </a>
          <p>Ferramentas digitais gratuitas para o seu dia a dia. Sem cadastro, sem instalação — tudo direto no navegador.</p>
        </div>

        <div class="footer-col">
          <h4>Ferramentas</h4>
          <ul>
            <li><a href="teste-digitacao.html">Teste de Digitação</a></li>
            <li><a href="teste-clique.html">Velocidade de Clique</a></li>
            <li><a href="gerador-qrcode.html">Gerador de QR Code</a></li>
            <li><a href="contador-palavras.html">Contador de Palavras</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="sobre.html">Sobre Nós</a></li>
            <li><a href="contato.html">Contato</a></li>
            <li><a href="privacidade.html">Privacidade</a></li>
            <li><a href="termos.html">Termos de Uso</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <span>© ${year} Active Dics. Todos os direitos reservados.</span>
        <div class="footer-bottom-links">
          <a href="privacidade.html">Privacidade</a>
          <a href="termos.html">Termos</a>
          <a href="contato.html">Contato</a>
        </div>
      </div>
    </div>
  </footer>`;

  /* ── Inject ── */
  var hp = document.getElementById('header-placeholder');
  if (hp) hp.outerHTML = headerHTML;

  var fp = document.getElementById('footer-placeholder');
  if (fp) fp.outerHTML = footerHTML;

})();

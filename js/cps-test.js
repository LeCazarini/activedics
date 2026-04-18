/* ===========================
   Teste de Velocidade de Clique (CPS)
   =========================== */

(function () {
  const DURATION = 5000; // 5 segundos em ms

  let clicks = 0;
  let running = false;
  let startTime = null;
  let rafId = null;

  const btn = document.getElementById('cps-btn');
  const btnText = document.getElementById('cps-btn-text');
  const clicksEl = document.getElementById('cps-clicks');
  const timeEl = document.getElementById('cps-time');
  const scoreEl = document.getElementById('cps-score');
  const bar = document.getElementById('cps-bar');
  const resultDiv = document.getElementById('cps-result');
  const resCps = document.getElementById('res-cps');
  const resTotal = document.getElementById('res-total');
  const cpsMsg = document.getElementById('cps-msg');
  const retryBtn = document.getElementById('cps-retry');

  function reset() {
    clicks = 0;
    running = false;
    startTime = null;
    cancelAnimationFrame(rafId);
    btn.classList.remove('active');
    btnText.textContent = 'Clique Aqui para Começar!';
    clicksEl.textContent = '0';
    timeEl.textContent = '5.0';
    scoreEl.textContent = '0.0';
    bar.style.width = '100%';
    resultDiv.classList.remove('show');
    btn.disabled = false;
  }

  function tick() {
    if (!running) return;
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, DURATION - elapsed);
    const secs = (remaining / 1000).toFixed(1);
    const pct = (remaining / DURATION) * 100;

    timeEl.textContent = secs;
    bar.style.width = pct + '%';

    const cps = elapsed > 0 ? (clicks / (elapsed / 1000)).toFixed(1) : '0.0';
    scoreEl.textContent = cps;

    if (remaining <= 0) {
      endTest();
      return;
    }
    rafId = requestAnimationFrame(tick);
  }

  function endTest() {
    running = false;
    btn.disabled = true;
    btn.classList.remove('active');
    btnText.textContent = 'Tempo Esgotado!';
    bar.style.width = '0%';
    timeEl.textContent = '0.0';

    const finalCps = (clicks / (DURATION / 1000)).toFixed(2);
    scoreEl.textContent = finalCps;

    resCps.textContent = finalCps;
    resTotal.textContent = clicks;

    let msg = '';
    const c = parseFloat(finalCps);
    if (c < 3) msg = 'Continue tentando! Com prática você vai melhorar.';
    else if (c < 6) msg = 'Velocidade média. Você está no nível da maioria das pessoas.';
    else if (c < 9) msg = 'Bom resultado! Você está acima da média.';
    else if (c < 12) msg = 'Muito bom! Você tem reflexos de gamer.';
    else msg = 'Incrível! Velocidade excepcional!';
    cpsMsg.textContent = msg;

    resultDiv.classList.add('show');
  }

  btn.addEventListener('click', function () {
    if (!running && !btn.disabled) {
      // Primeiro clique inicia
      running = true;
      startTime = Date.now();
      clicks = 1;
      clicksEl.textContent = '1';
      btn.classList.add('active');
      btnText.textContent = 'Continue Clicando!';
      rafId = requestAnimationFrame(tick);
    } else if (running) {
      clicks++;
      clicksEl.textContent = clicks;
    }
  });

  // Suporte a toque mobile
  btn.addEventListener('touchstart', function (e) {
    e.preventDefault();
    btn.click();
  }, { passive: false });

  retryBtn.addEventListener('click', reset);

  reset();
})();

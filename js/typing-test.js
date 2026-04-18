/* ===========================
   Teste de Digitação
   =========================== */

(function () {
  const texts = [
    "A tecnologia transformou a maneira como nos comunicamos e trabalhamos. Hoje, é possível enviar mensagens para qualquer parte do mundo em segundos, acessar informações sobre qualquer assunto com poucos cliques e realizar reuniões com pessoas de diferentes países sem sair de casa. Essa revolução digital trouxe inúmeros benefícios para a sociedade.",
    "O Brasil é um país de dimensões continentais, com uma diversidade cultural, geográfica e climática impressionante. Do Amazonas ao Rio Grande do Sul, cada região possui suas próprias tradições, culinária, música e modo de vida. Conhecer o Brasil é uma aventura que pode durar a vida inteira sem que você esgote todas as possibilidades.",
    "Ler livros é um dos hábitos mais enriquecedores que uma pessoa pode cultivar. A leitura amplia o vocabulário, estimula a imaginação, desenvolve o pensamento crítico e reduz o estresse. Estudos mostram que pessoas que leem regularmente têm melhor desempenho acadêmico e profissional, além de maior empatia e compreensão do mundo ao redor.",
    "A alimentação saudável é fundamental para manter o corpo e a mente em pleno funcionamento. Consumir frutas, verduras, legumes, proteínas e grãos integrais fornece os nutrientes necessários para que o organismo funcione bem. Evitar o excesso de açúcar, sal e gorduras saturadas ajuda a prevenir doenças crônicas como diabetes e hipertensão.",
    "Aprender um novo idioma abre portas para novas oportunidades profissionais e pessoais. Além de facilitar viagens e ampliar a rede de contatos, falar outro idioma exercita o cérebro e melhora a memória. O inglês, o espanhol e o mandarim são os idiomas mais estudados no mundo, mas qualquer língua nova traz benefícios significativos."
  ];

  let currentText = '';
  let typedChars = 0;
  let correctChars = 0;
  let errors = 0;
  let timer = null;
  let timeLeft = 60;
  let started = false;
  let finished = false;

  const display = document.getElementById('typing-text-display');
  const input = document.getElementById('typing-input');
  const wpmEl = document.getElementById('wpm-display');
  const accEl = document.getElementById('acc-display');
  const timeEl = document.getElementById('time-display');
  const errorsEl = document.getElementById('errors-display');
  const startBtn = document.getElementById('start-btn');
  const resetBtn = document.getElementById('reset-btn');
  const resultScreen = document.getElementById('result-screen');
  const resultWpm = document.getElementById('result-wpm');
  const resultAcc = document.getElementById('result-acc');
  const resultErrors = document.getElementById('result-errors');
  const resultMsg = document.getElementById('result-msg');
  const tryAgainBtn = document.getElementById('try-again-btn');

  function pickText() {
    return texts[Math.floor(Math.random() * texts.length)];
  }

  function renderText(typed) {
    let html = '';
    for (let i = 0; i < currentText.length; i++) {
      const ch = currentText[i];
      if (i < typed.length) {
        if (typed[i] === ch) {
          html += `<span class="correct">${ch === ' ' ? '&nbsp;' : ch}</span>`;
        } else {
          html += `<span class="incorrect">${ch === ' ' ? '&nbsp;' : ch}</span>`;
        }
      } else if (i === typed.length) {
        html += `<span class="current">${ch === ' ' ? '&nbsp;' : ch}</span>`;
      } else {
        html += `<span>${ch === ' ' ? '&nbsp;' : ch}</span>`;
      }
    }
    display.innerHTML = html;
  }

  function calcWPM() {
    const elapsed = (60 - timeLeft);
    if (elapsed === 0) return 0;
    const words = correctChars / 5;
    return Math.round((words / elapsed) * 60);
  }

  function calcAcc() {
    if (typedChars === 0) return 100;
    return Math.round((correctChars / typedChars) * 100);
  }

  function updateStats() {
    wpmEl.textContent = calcWPM();
    accEl.textContent = calcAcc() + '%';
    timeEl.textContent = timeLeft;
    errorsEl.textContent = errors;
  }

  function startTimer() {
    timer = setInterval(function () {
      timeLeft--;
      updateStats();
      if (timeLeft <= 0) {
        endTest();
      }
    }, 1000);
  }

  function endTest() {
    clearInterval(timer);
    finished = true;
    input.disabled = true;
    const wpm = calcWPM();
    const acc = calcAcc();

    resultWpm.textContent = wpm;
    resultAcc.textContent = acc + '%';
    resultErrors.textContent = errors;

    let msg = '';
    if (wpm < 30) msg = 'Continue praticando! Com dedicação você vai melhorar muito.';
    else if (wpm < 50) msg = 'Bom resultado! Você está acima da média de iniciantes.';
    else if (wpm < 70) msg = 'Muito bem! Você tem uma velocidade acima da média.';
    else if (wpm < 90) msg = 'Excelente! Você digita como um profissional.';
    else msg = 'Incrível! Você é um digitador de elite!';
    resultMsg.textContent = msg;

    resultScreen.classList.add('show');
  }

  function initTest() {
    clearInterval(timer);
    currentText = pickText();
    typedChars = 0;
    correctChars = 0;
    errors = 0;
    timeLeft = 60;
    started = false;
    finished = false;
    input.value = '';
    input.disabled = false;
    resultScreen.classList.remove('show');
    renderText('');
    updateStats();
    input.focus();
  }

  input.addEventListener('input', function () {
    if (finished) return;
    if (!started) {
      started = true;
      startTimer();
    }
    const typed = input.value;
    typedChars = typed.length;
    correctChars = 0;
    errors = 0;
    for (let i = 0; i < typed.length; i++) {
      if (i < currentText.length) {
        if (typed[i] === currentText[i]) correctChars++;
        else errors++;
      }
    }
    renderText(typed);
    updateStats();

    // Completou o texto antes do tempo
    if (typed.length >= currentText.length) {
      endTest();
    }
  });

  startBtn.addEventListener('click', initTest);
  resetBtn.addEventListener('click', initTest);
  tryAgainBtn.addEventListener('click', initTest);

  // Inicializa ao carregar
  initTest();
})();

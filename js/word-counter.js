/* ===========================
   Contador de Palavras
   =========================== */

(function () {
  var textarea = document.getElementById('word-input');
  var wcWords = document.getElementById('wc-words');
  var wcChars = document.getElementById('wc-chars');
  var wcCharsNoSpace = document.getElementById('wc-chars-no-space');
  var wcSentences = document.getElementById('wc-sentences');
  var wcParagraphs = document.getElementById('wc-paragraphs');
  var wcReadTime = document.getElementById('wc-read-time');
  var clearBtn = document.getElementById('wc-clear');
  var copyBtn = document.getElementById('wc-copy');

  function countWords(text) {
    if (!text.trim()) return 0;
    return text.trim().split(/\s+/).filter(function (w) { return w.length > 0; }).length;
  }

  function countSentences(text) {
    if (!text.trim()) return 0;
    var matches = text.match(/[^.!?]*[.!?]+/g);
    return matches ? matches.length : (text.trim().length > 0 ? 1 : 0);
  }

  function countParagraphs(text) {
    if (!text.trim()) return 0;
    return text.split(/\n\s*\n/).filter(function (p) { return p.trim().length > 0; }).length;
  }

  function update() {
    var text = textarea.value;
    var words = countWords(text);
    var chars = text.length;
    var charsNoSpace = text.replace(/\s/g, '').length;
    var sentences = countSentences(text);
    var paragraphs = countParagraphs(text);
    var readTime = Math.ceil(words / 200);

    wcWords.textContent = words.toLocaleString('pt-BR');
    wcChars.textContent = chars.toLocaleString('pt-BR');
    wcCharsNoSpace.textContent = charsNoSpace.toLocaleString('pt-BR');
    wcSentences.textContent = sentences.toLocaleString('pt-BR');
    wcParagraphs.textContent = paragraphs.toLocaleString('pt-BR');
    wcReadTime.textContent = readTime + ' min';
  }

  textarea.addEventListener('input', update);

  clearBtn.addEventListener('click', function () {
    textarea.value = '';
    update();
    textarea.focus();
  });

  copyBtn.addEventListener('click', function () {
    if (!textarea.value) return;
    navigator.clipboard.writeText(textarea.value).then(function () {
      var orig = copyBtn.textContent;
      copyBtn.textContent = '✓ Copiado!';
      setTimeout(function () { copyBtn.textContent = orig; }, 2000);
    }).catch(function () {
      textarea.select();
      document.execCommand('copy');
    });
  });

  update();
})();

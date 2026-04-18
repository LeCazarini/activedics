/* ===========================
   Gerador de QR Code
   Usa a biblioteca qrcodejs (confiável, testada)
   =========================== */

(function () {
  var input       = document.getElementById('qr-input');
  var generateBtn = document.getElementById('qr-generate-btn');
  var clearBtn    = document.getElementById('qr-clear-btn');
  var output      = document.getElementById('qr-output');
  var downloadArea= document.getElementById('qr-download-area');
  var downloadBtn = document.getElementById('qr-download-btn');

  var qrInstance  = null;
  var qrContainer = null;

  function resetOutput() {
    output.innerHTML = '<p style="color:var(--text-muted);font-size:0.95rem;">O QR Code aparecerá aqui após a geração.</p>';
    downloadArea.style.display = 'none';
    qrInstance  = null;
    qrContainer = null;
  }

  function generate() {
    var text = input.value.trim();
    if (!text) {
      output.innerHTML = '<p style="color:#ef4444;">Digite algo para gerar o QR Code.</p>';
      downloadArea.style.display = 'none';
      return;
    }

    // Limpa saída anterior
    output.innerHTML = '';

    // Container que a lib vai usar
    qrContainer = document.createElement('div');
    output.appendChild(qrContainer);

    try {
      qrInstance = new QRCode(qrContainer, {
        text: text,
        width: 256,
        height: 256,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M
      });

      // Estiliza o canvas/img gerado
      var img = qrContainer.querySelector('img');
      var cvs = qrContainer.querySelector('canvas');
      var el  = cvs || img;
      if (el) {
        el.style.borderRadius = '8px';
        el.style.boxShadow    = '0 2px 8px rgba(0,0,0,0.12)';
        el.style.display      = 'block';
      }

      downloadArea.style.display = 'block';
    } catch (e) {
      output.innerHTML = '<p style="color:#ef4444;">Erro ao gerar QR Code. Tente com um texto mais curto.</p>';
      downloadArea.style.display = 'none';
    }
  }

  generateBtn.addEventListener('click', generate);

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') generate();
  });

  clearBtn.addEventListener('click', function () {
    input.value = '';
    resetOutput();
    input.focus();
  });

  downloadBtn.addEventListener('click', function () {
    // Tenta canvas primeiro (mais qualidade), depois img
    var cvs = qrContainer && qrContainer.querySelector('canvas');
    var img = qrContainer && qrContainer.querySelector('img');

    if (cvs) {
      var link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = cvs.toDataURL('image/png');
      link.click();
    } else if (img && img.src) {
      var link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = img.src;
      link.click();
    }
  });

  resetOutput();
})();

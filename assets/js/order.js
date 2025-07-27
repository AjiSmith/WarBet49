
  document.getElementById('device').value = navigator.userAgent;

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxqCjq1hVcjIv_L9RC4PbJr3s1IUU5K_aY5LMW-Tg-Xby3rgbCE3eg8yHm9vP8J4xlJ/exec'; // GANTI INI jika script berubah

  document.getElementById('orderForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama", document.getElementById('nama').value);
    formData.append("produk", document.getElementById('produk').value);
    formData.append("catatan", document.getElementById('catatan').value || '-');
    formData.append("device", document.getElementById('device').value);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        document.getElementById('orderForm').reset();
        document.getElementById('suksesMsg').style.display = 'block';
      } else {
        alert('Gagal mengirim pesanan. Status: ' + response.status);
      }
    } catch (err) {
      alert("Gagal: " + err.message);
    }
  });

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('suksesMsg').style.display = 'block';
  const popout = document.getElementById('popoutCheck');
  popout.style.display = 'block';
  setTimeout(() => {
    popout.style.display = 'none';
  }, 2000);
  this.reset();
});


document.getElementById("faizFormu").addEventListener("submit", function(e) {
  e.preventDefault();

  // Anapara
  let anaParaStr = document.getElementById("anaPara").value;
  anaParaStr = anaParaStr.replace(/\./g, "").replace(",", ".");
  const anaPara = parseFloat(anaParaStr);

  // Faiz oranı
  let faizOraniStr = document.getElementById("faizOrani").value;
  faizOraniStr = faizOraniStr.replace(/\./g, "").replace(",", ".");
  const faizOrani = parseFloat(faizOraniStr);

  // Gün sayısı (HTML tarafı step=1 olduğu için tam sayı olacak)
  const gunSayisi = parseInt(document.getElementById("gunSayisi").value, 10);

  if (
    isNaN(anaPara) ||
    isNaN(faizOrani) ||
    isNaN(gunSayisi) ||
    gunSayisi < 1
  ) {
    alert("Lütfen tüm alanlara geçerli sayılar giriniz. Gün sayısı tam sayı olmalıdır.");
    return;
  }

  let toplam = anaPara;
  let listeHTML = "<ul>";

  for (let i = 1; i <= gunSayisi; i++) {
    toplam *= (1 + faizOrani / 100);
    listeHTML += `<li>${i}. Gün: ${toplam.toFixed(2).replace(".", ",")} ₺</li>`;
  }

  listeHTML += "</ul>";

  document.getElementById("sonuc").innerHTML = `
    <h3>${gunSayisi} günün sonunda toplam: <strong>${toplam.toFixed(2).replace(".", ",")} ₺</strong></h3>
    <div class="liste">${listeHTML}</div>
  `;
});

document.getElementById("resetBtn").addEventListener("click", function() {
  document.getElementById("faizFormu").reset();
  document.getElementById("sonuc").innerHTML = "";
});

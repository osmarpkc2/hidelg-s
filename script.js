// Função para calcular o consumo de gás
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculadora-gas");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const numPessoas = parseInt(document.getElementById("num-pessoas").value);
        const usoDiario = parseInt(document.getElementById("uso-diario").value);
  
        const consumoMensal = numPessoas * usoDiario * 30;
  
        document.getElementById("resultado").textContent =
          `Consumo estimado: ${consumoMensal} horas de uso por mês.`;
      });
    }
  
    // Animação nos botões WhatsApp
    document.querySelectorAll(".btn-whatsapp").forEach((btn) => {
      btn.addEventListener("mouseover", function () {
        btn.style.transform = "scale(1.1)";
        btn.style.backgroundColor = "#ff7f32";
      });
  
      btn.addEventListener("mouseout", function () {
        btn.style.transform = "scale(1)";
        btn.style.backgroundColor = "#25D366";
      });
    });
  });
  
  // Função para inicializar o mapa e área de cobertura
  function initMap() {
    const hidelgasLocation = { lat: -4.165712, lng: -40.946282 };
  
    const mapOptions = {
      center: hidelgasLocation,
      zoom: 13,
    };
  
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
    new google.maps.Marker({
      position: hidelgasLocation,
      map: map,
      title: "Hidelgás - Localização",
    });
  
    const circle = new google.maps.Circle({
      map: map,
      radius: 20000,
      center: hidelgasLocation,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });
  
    const localidades = [
      { lat: -4.160712, lng: -40.940282, nome: "Localidade 1" },
      { lat: -4.170712, lng: -40.950282, nome: "Localidade 2" },
      { lat: -4.175712, lng: -40.945282, nome: "Localidade 3" },
    ];
  
    localidades.forEach((local) => {
      const distancia = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(hidelgasLocation),
        new google.maps.LatLng(local.lat, local.lng)
      );
  
      if (distancia <= 20000) {
        new google.maps.Marker({
          position: { lat: local.lat, lng: local.lng },
          map: map,
          title: local.nome,
        });
      }
    });
  }
  
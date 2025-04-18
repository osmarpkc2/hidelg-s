document.addEventListener("DOMContentLoaded", function () {
  // Função de alternância do modo escuro
  const themeToggle = document.getElementById("theme-toggle");

  // Verifica se o botão do modo escuro existe
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      // Alterna a classe dark-mode no body
      document.body.classList.toggle("dark-mode");

      // Altera o ícone do botão dependendo do modo
      if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; // Ícone de sol para o modo claro
      } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; // Ícone de lua para o modo escuro
      }
    });
  }

  // Outras funcionalidades...
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

  // Funcionalidade do menu hambúrguer
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});

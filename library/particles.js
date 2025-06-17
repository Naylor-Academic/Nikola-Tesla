document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80, // Cantidad de partículas
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff" // Color de las partículas
      },
      shape: {
        type: "circle", // Forma (circle, edge, triangle, polygon, etc.)
      },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Efecto al pasar el ratón (repulse, grab, bubble)
        },
        onclick: {
          enable: true,
          mode: "push" // Efecto al hacer clic (push, remove, bubble)
        }
      }
    }
  });
});
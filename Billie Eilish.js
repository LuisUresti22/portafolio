document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const respuestas = ['p1', 'p2', 'p3', 'p4', 'p5'];
  let puntuaciones = [];
  let total = 0;

  respuestas.forEach((pregunta, index) => {
    const opciones = document.getElementsByName(pregunta);
    let valor = 0;
    for (let i = 0; i < opciones.length; i++) {
      if (opciones[i].checked) {
        valor = parseInt(opciones[i].value);
        break;
      }
    }
    puntuaciones.push(valor);
    total += valor;
  });

  // Mostrar resultados
  document.getElementById('resultado').classList.remove('oculto');
  document.getElementById('calificacion').textContent = `Has obtenido ${total} de ${respuestas.length} puntos.`;

  // Generar gráfico
  const ctx = document.getElementById('grafico').getContext('2d');
  if (window.grafico) {
    window.grafico.destroy();
  }
  window.grafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3', 'Pregunta 4', 'Pregunta 5'],
      datasets: [{
        label: 'Puntuación',
        data: puntuaciones,
        backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#17a2b8']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 1
        }
      }
    }
  });
});

document.getElementById('descargarPDF').addEventListener('click', function() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  html2canvas(document.querySelector("#resultado")).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const imgProps= doc.getImageProperties(imgData);
    const pdfWidth = doc.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    doc.save("resultado_diagnostico_billie_eilish.pdf");
  });
});
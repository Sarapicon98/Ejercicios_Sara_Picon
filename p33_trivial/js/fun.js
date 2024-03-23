document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector("button");
    const result = document.querySelector(".result");
  
    btn.addEventListener("click", function () {
      const cuatroRadio = document.getElementById("cuatro");
      const cincoRadio = document.getElementById("cinco");
      const seisRadio = document.getElementById("seis");
  
      let respuesta;
      let colorClass;
  
      if (cuatroRadio.checked) {
        respuesta = "RESPUESTA: Son 4 elementos";
        colorClass = "green-text";
      } else if (cincoRadio.checked) {
        respuesta = "RESPUESTA: Son 5 elementos";
        colorClass = "blue-text";
      } else if (seisRadio.checked) {
        respuesta = "RESPUESTA: Son 6 elementos";
        colorClass = "yellow-text";
      } else {
        respuesta = "Por favor, seleccione una respuesta.";
        colorClass = ""; // Si no hay selección, no aplicar ninguna clase de color
      }
  
      result.textContent = respuesta;
      result.className = "result " + colorClass; // Aplicar la clase de color
    });
  });
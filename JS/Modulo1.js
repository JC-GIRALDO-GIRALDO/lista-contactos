let nombreCompleto = {};

// Obtener el nombre completo del almacenamiento local al cargar la página
if (localStorage.getItem("nombreCompleto")) {
  nombreCompleto = JSON.parse(localStorage.getItem("nombreCompleto"));
  actualizarNombreCompleto();
}

function enviarLista() {
  const nombre = document.querySelector(".nombre").value;
  const apellido = document.querySelector(".apellido").value;

  let guardarNombre = {
    nuevoNombre: nombre,
    nuevoApellido: apellido
  };

  nombreCompleto = guardarNombre;
  localStorage.setItem("nombreCompleto", JSON.stringify(nombreCompleto));

  actualizarNombreCompleto();
}

function actualizarNombreCompleto() {
  document.getElementById("nombreCompleto").textContent =
    `${nombreCompleto.nuevoNombre} ${nombreCompleto.nuevoApellido}`;
}

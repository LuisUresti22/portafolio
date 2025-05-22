document.addEventListener('DOMContentLoaded', () => {
  const inputTarea = document.getElementById('tarea');
  const btnAgregar = document.getElementById('agregar');
  const lista = document.getElementById('lista');

  btnAgregar.addEventListener('click', () => {
    const tareaTexto = inputTarea.value.trim();
    if (tareaTexto === '') {
      alert('Por favor, escribe una tarea.');
      return;
    }

    // Crear elemento li para la tarea
    const li = document.createElement('li');
    li.textContent = tareaTexto;

    // Crear botón ok para eliminar la tarea
    const btnOk = document.createElement('button');
    btnOk.textContent = 'ok';
    btnOk.style.marginLeft = '10px';

    btnOk.addEventListener('click', () => {
      lista.removeChild(li);
    });

    li.appendChild(btnOk);
    lista.appendChild(li);

    // Limpiar input y poner foco
    inputTarea.value = '';
    inputTarea.focus();
  });
});
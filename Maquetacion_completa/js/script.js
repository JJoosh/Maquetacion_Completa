function validar_submit() {
    const form = document.forms.form;
  
    if (form.nombre.value.length === 0) {
      alert("Ingrese su Nombre");
      form.nombre.focus();
      return 0;
    } else if (form.Apellidos.value.length === 0) {
      alert("Ingrese sus Apellidos");
      form.Apellidos.focus();
      return 0;
    } else if (!form.H.checked && !form.M.checked) {
      alert("Seleccione su Sexo");
      return 0;
    } else if (form.Fecha.value.length === 0) {
      alert("Ingrese su Fecha de Nacimiento");
      form.Fecha.focus();
      return 0;
    } else {
      form.submit();
    }
  }
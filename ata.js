  <script>
function calcularTotal() {
  let total = 0;

 
   const especialidad = document.getElementById("especialidad");
  total += parseFloat(especialidad.value);

 
     const pan = document.querySelector('input[name="pan"]:checked');
  if (!pan) {
    alert("Selecciona un tipo de pan");
    return;
   }
    total += parseFloat(pan.value);


    const ingredientes = document.querySelectorAll('.checkbox-list input[type="checkbox"]:checked');
    total += ingredientes.length * 5;

    const cantidad = parseInt(document.getElementById("cantidad").value);
     if (!cantidad || cantidad < 1) {
    alert("Selecciona una cantidad válida");
    return;}

          total = total * cantidad;

    const domicilioChecked = document.getElementById("domicilio").checked;
    if (domicilioChecked) {
    total += 30;}

  
     document.getElementById("total").innerText = "Total: $" + total.toFixed(2) + " MXN";
}
</script>
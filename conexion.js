

function dni(){
  let documento = document.getElementById("turnos").value
  console.log(documento)
  document.getElementById("opciones").style.display = "inline"
  document.getElementById("turno").style.display = "none"
  if(documento === "333"){
    document.getElementById("bienvenida").innerText = "Bienvenido gaston seleccione la opcion deseada"
  }

}
function impuestos(){
  document.getElementById("cajaprincipal").style.display = "none"
  document.getElementById("resultado").style.display = "block"
  
  document.getElementById("turnito").innerText = "gaston tu turno es el numero 2"
}

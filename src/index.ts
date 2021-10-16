let usuarioingresado: string = document.getElementById("usuario");
let claveingresada: string = document.getElementById("clave");
let usuario: string = "Milagros";
let clave: string = "1234";
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (usuario === usuarioingresado.value && clave === claveingresada.value) {
    console.log("bienvenido");
  } else {
    console.log("su usuario o clave son incorrectos");
  }
});

function toggleMode() {
  const html = document.documentElement // a constante "html" recebe acesso aos elementos do documento html
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imager
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e jaqueta preta,  sem barba e fundo azul com roxo."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  
}

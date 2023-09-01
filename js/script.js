// Ativa os Links do Menu para indicar qual pagina está sendo acessada.
const links = document.querySelectorAll(".header-menu a");
function ativarLink (link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  } 
}
links.forEach(ativarLink)

// Ativa os itens do orçamento
const parametros = new URLSearchParams(location.search);
function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
  elemento.checked = true;
  }
  console.log(elemento);
}
parametros.forEach(ativarProduto)

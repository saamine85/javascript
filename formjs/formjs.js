document.querySelector("#details").addEventListener("submit", function (e) {
  // beh thabbes rechargement nta3 la page
  e.preventDefault();
  // beh tacceder la valeur envoye teste3mel e.target.element
  // e.target.elements.(input-name).value
  // hna firstName hiya name nta3 el input
  console.log(e.target.elements.firstName.value);
  // to clear the input field tfaci les valeur elli dakhelthom apres le submit
  e.target.elements.firstName.value = "";
});

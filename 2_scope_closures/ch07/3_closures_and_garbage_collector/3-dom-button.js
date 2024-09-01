// Is here any closure present? Why?

const button = document.createElement("button");
button.textContent = "Continuar";
button.setAttribute("data-label", "continuar");

function handleClick(event) {
  console.log(`Button ${event.target.dataset.label} was clicked`);
}

button.addEventListener("click", handleClick);
document.body.appendChild(button);

const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById("pizzaForm");
const input = document.getElementById("pizzaId");
const resultDiv = document.getElementById("result");

function renderPizza(pizza) {
  resultDiv.innerHTML = '';

  if (pizza) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${pizza.imagen}" alt="${pizza.nombre}">
      <h3>${pizza.nombre}</h3>
      <p>Precio: $${pizza.precio}</p>
    `;
    resultDiv.appendChild(card);
  } else {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error');
    errorMessage.textContent = "No se encontró una pizza con ese ID.";
    resultDiv.appendChild(errorMessage);
  }
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const pizzaId = parseInt(input.value.trim());

  if (isNaN(pizzaId)) {
    renderPizza(); 
  } else {
    const pizza = pizzas.find(pizza => pizza.id === pizzaId);
    if (pizza) {
      renderPizza(pizza);
      localStorage.setItem('lastPizza', JSON.stringify(pizza));
    } else {
      renderPizza();
    }
  }
});

window.addEventListener('load', () => {
  const lastPizza = localStorage.getItem('lastPizza');
  if (lastPizza) {
    renderPizza(JSON.parse(lastPizza));
  }
});

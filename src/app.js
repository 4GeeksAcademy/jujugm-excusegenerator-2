/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Creo las listas
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  console.log(who[0] + action[0] + what[0] + when[0]);

  // Selecciono un elemento aleatorio de cada lista
  let randomWho = Math.floor(Math.random() * who.length);
  let randomaction = Math.floor(Math.random() * who.length);
  let randomWhat = Math.floor(Math.random() * who.length);
  let randomWhen = Math.floor(Math.random() * who.length);

  // Combino los resultados en una frase

  console.log(
    who[randomWho] +
      " " +
      action[randomaction] +
      " " +
      what[randomWhat] +
      " " +
      when[randomWhen]
  );

  // Importo al archivo HTML
  document.getElementById("excuse").innerHTML =
    who[randomWho] +
    " " +
    action[randomaction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];
};

/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let card_value = cardValue();
  let card_type = cardType();

  let valueToCard = document.createElement("P");
  let suitToCard = document.createElement("P");
  let suitToCard2 = document.createElement("P");

  valueToCard.innerHTML = `${card_value}`;
  suitToCard.innerHTML = `${card_type}`;
  suitToCard2.innerHTML = `${card_type}`;

  if (card_type == "♥" || card_type == "♦") {
    suitToCard.style.color = "red";
    suitToCard2.style.color = "red";
  } else {
    suitToCard.style.color = "black";
    suitToCard2.style.color = "black";
  }
  let aux = suitToCard;
  document.querySelector(".card-header").appendChild(suitToCard);
  document.querySelector(".card-body").appendChild(valueToCard);
  document.querySelector(".card-footer").appendChild(suitToCard2);
};

function cardValue() {
  let value = Math.floor(Math.random() * 13 + 1);
  if (value == 11) value = "J";
  if (value == 12) value = "Q";
  if (value == 13) value = "K";
  if (value == 1) value = "A";
  return value;
}

function cardType() {
  let type = Math.floor(Math.random() * 4 + 1);
  if (type == 1) type = "♥";
  if (type == 2) type = "♦";
  if (type == 3) value = "♣";
  if (type == 4) type = "♠";
  return type;
}

/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let card_value = cardValue();
  let card_type = cardType();

  let type_to_card_header = document.createElement("P");
  let value_to_card = document.createElement("P");
  let type_to_card_footer = document.createElement("P");

  type_to_card_header.innerHTML = `${card_type}`;
  value_to_card.innerHTML = `${card_value}`;
  type_to_card_footer.innerHTML = `${card_type}`;

  if (card_type == "♥" || card_type == "♦") {
    type_to_card_header.style.color = "red";
    type_to_card_footer.style.color = "red";
  } else {
    type_to_card_header.style.color = "black";
    type_to_card_footer.style.color = "black";
  }
  document.querySelector(".card-header").appendChild(type_to_card_header);
  document.querySelector(".card-body").appendChild(value_to_card);
  document.querySelector(".card-footer").appendChild(type_to_card_footer);
};

function cardValue() {
  let value = Math.floor(Math.random() * 13 + 1);
  if (value == 11) {
    value = "J";
  }
  if (value == 12) {
    value = "Q";
  }
  if (value == 13) {
    value = "K";
  }
  if (value == 1) {
    value = "A";
  }
  return value;
}

function cardType() {
  let type = Math.floor(Math.random() * 4 + 1);
  if (type == 1) {
    type = "♥";
  }
  if (type == 2) {
    type = "♦";
  }
  if (type == 3) {
    type = "♣";
  }
  if (type == 4) {
    type = "♠";
  }
  return type;
}

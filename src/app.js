/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // datos a generar

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let final = [".com", ".es", ".org"];

  // zona aleatoria
  for (let i = 0; i < pronoun.length; i++) {
    for (let t = 0; t < adj.length; t++) {
      for (let m = 0; m < noun.length; m++) {
        for (let p = 0; p < final.length; p++)
          console.log(pronoun[i] + noun[t] + adj[m] + final[p]);
      }
    }
  }
};

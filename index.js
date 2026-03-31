const candidats = [
  { nom: "Emmanuel GRÉGOIRE", parti: "PS", votes: 309693 },
  { nom: "Rachida DATI", parti: "LR", votes: 207613 },
  { nom: "Sophia CHIKIROU", parti: "LFI", votes: 95551 },
  { nom: "Pierre-Yves BOURNAZEL", parti: "Horizons", votes: 92448 },
  { nom: "Sarah KNAFO", parti: "Reconquête !", votes: 84809 },
  { nom: "Thierry MARIANI", parti: "RN", votes: 13096 },
  { nom: "Blandine CHAUVEL", parti: "NPA", votes: 5991 },
  { nom: "Marielle SAULNIER", parti: "Lutte ouvrière", votes: 5544 },
  { nom: "Mahel PIEROT-GUIMBAUD", parti: "Parti des travailleurs", votes: 703 },
];

// ─────────────────────────────────────────────
// Question 1
// Affichez le texte "Résultats du premier tour"
// dans la balise HTML qui a l'id "titre"
//
// 💡 document.getElementById("titre").textContent = ...
// ─────────────────────────────────────────────

/* votre code ici */

// ─────────────────────────────────────────────
// Question 2
// Affichez le nom et le nombre de votes
// du premier candidat du tableau
// dans la balise HTML qui a l'id "premier"
//
// 💡 Le premier élément d'un tableau s'obtient
//    avec candidats[0]
// ─────────────────────────────────────────────

/* votre code ici */

// ─────────────────────────────────────────────
// Question 3
// Affichez tous les candidats sous forme de liste
// dans la balise HTML qui a l'id "liste"
//
// 💡 Étapes :
//    1. Créez une variable  let html = ""
//    2. Dans un for...of, ajoutez un <li> à html
//       à chaque tour :  html = html + "<li>...</li>"
//    3. Après la boucle, injectez dans le DOM :
//       document.getElementById("liste").innerHTML = html
// ─────────────────────────────────────────────

let html = "";

for (const candidat of candidats) {
  /* html = html +  votre code ici */
}

document.getElementById("liste").innerHTML = html;

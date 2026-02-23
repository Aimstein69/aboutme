// Détecter si on est dans /assets/pages/
const path = window.location.pathname;

let basePath = "";

// Si la page est dans /assets/pages/, on remonte d'un dossier
if (path.includes("assets/pages")) {
  basePath = "../../";
} else {
  basePath = "./";
}

// Charger le header
fetch(basePath + "assets/components/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });

// Charger le footer
fetch(basePath + "assets/components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

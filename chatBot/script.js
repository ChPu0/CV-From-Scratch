
//----------------------------------------------------------------------------------------------------------------
// Ouverture et fermeture du formulaire avec texte acceuil à l'ouverture
//----------------------------------------------------------------------------------------------------------------
function openForm() {
  document.getElementById("myForm").style.display = "block";
  	function Accueil(texte, délai) {
		var newPara = document.createElement("h2"); //Déclare une nouvel élément <p>
		var fenetreBulles = document.getElementById("fenetreBulles"); // Déclare le bloc pour insérer les bulles
		setTimeout(
			function(){
				var nodeAccueil = document.createTextNode(texte); //Déclare un nouveau noeud pour y placer le <p>
				newPara.appendChild(nodeAccueil);
				fenetreBulles.appendChild(newPara);
				newPara.className = "bulleCharlBot"; //Crée un nom de classe aux bulles crées
				scrollDown();
				}
		,délai);
	}
	Accueil("Bonjour je suis CharlBot!", 500);
	Accueil("Posez moi vos questions sur Charles. Par exemple :", 1500);
	Accueil("Son Age, Ses Etudes, Ses Passions, Son Expériences,... ", 3500);
	Accueil("Je vous écoute   :-)", 5000);
}

function closeForm() {
  document.location.reload(true);
  document.getElementById("myForm").style.display = "none";
}

// scroll l'écran vers le bas
function scrollDown() {
	fenetreBulles.scrollTo(0, 10000);
}

//----------------------------------------------------------------------------------------------------------------
// Variables générales
//----------------------------------------------------------------------------------------------------------------
var userText = document.getElementById("userText".toString()); //Saisie utilisateur dans le textarea
var bouton = document.getElementById("button"); // bouton principal pour valider
var aujd = new Date();
var annee = aujd.getFullYear();
var age = annee-1981;


//----------------------------------------------------------------------------------------------------------------
// Permet de générer une réponse aléatoire dans les tableaux de réponses	
//----------------------------------------------------------------------------------------------------------------
// On renvoie un entier aléatoire entre une valeur min (incluse) et une valeur max (exclue).
// Attention : si on utilisait Math.round(), on aurait une distribution non uniforme !
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
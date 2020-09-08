
//----------------------------------------------------------------------------------------------------------------
// Fonction qui poste le texte saisie sur le Tchat 
//----------------------------------------------------------------------------------------------------------------

function userTextPost() {
	// variables déclarées pour les bulles de discussion
	var newPara = document.createElement("p"); //Déclare une nouvel élément <p>
	var nodeUser = document.createTextNode(userText.value); //Déclare un nouveau noeud pour y placer le <p>
	var fenetreBulles = document.getElementById("fenetreBulles") // Déclare le bloc pour insérer les bulles
	
	//----------------------------------------------------------------------------------------------------------------
	// Insère la saisie utilisateur de la Fenetre des bulles	
	//----------------------------------------------------------------------------------------------------------------
	//Créé un nouveau noeud avec un élément <p>
	newPara.appendChild(nodeUser);
	fenetreBulles.appendChild(newPara);	//positionne le <p> dans la fenetre Bulles

	Reponse()

	scrollDown();

}
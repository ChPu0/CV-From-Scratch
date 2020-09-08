
//----------------------------------------------------------------------------------------------------------------
// Coeur du Tchat bot
//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------
// Fonction réponse 
//----------------------------------------------------------------------------------------------------------------

function Reponse() {
	//----------------------------------------------------------------------------------------------------------------
	// Insère la saisie utilisateur de la Fenetre des bulles	
	//----------------------------------------------------------------------------------------------------------------
	// variables déclarées pour les bulles de discussion
	var newPara = document.createElement("h2"); //Déclare une nouvel élément <p>
	var nodeUser = document.createTextNode(userText.value); //Déclare un nouveau noeud pour y placer le <p>
	var fenetreBulles = document.getElementById("fenetreBulles") // Déclare le bloc pour insérer les bulles
	
	//----------------------------------------------------------------------------------------------------------------	
	// Variables déclarées la recherche de mots clés
	//----------------------------------------------------------------------------------------------------------------
	var regexAge = new RegExp(/age|naissance|ann[ée]e/i); // Mot criteres recherche AGE
	var regexCompetence = new RegExp(/comp[ée]tences?|savoirs?-faires?|m[ée]tiers?|exp[ée]riences?|professionnelles?|activit[ée]s?|travail|missions?|r[ôo]les?|postes?|t[âa]ches?|emplois?|professions?|jobs?|carri[èe]res?/i); // Mot criteres recherche COMPETENCE
	var regexEtude = new RegExp(/[ée]tudes?|[ée]coles?|formations?|dipl[ôo]mes?|cursus|scolaire|classes?|facult[ée]|fac|lyc[ée]e|coll[èe]ge|universit[ée]|enseignements?|[ée]tablissements?/i); // Mot criteres recherche ETUDES
	var regexDev = new RegExp(/logiciels?|languages?|informatique|javascript|html5?|css3?|bootstrap4?|php/i); // Mot criteres recherche DEVELOPPEMENT
	var regexContact = new RegExp(/contact|adresse|coordonn[ée]es|r[ée]sidence|domicile|habitation|habite|lieu|t[ée]l[ée]phone/i); // Mot criteres recherche CONTACT
	var regexHobbies = new RegExp(/passions?|loisirs?|hobby|hobbies]|libres?/i); // Mot criteres recherche HOBBIES
	var regexSalutationBonjour = new RegExp(/bonjour|salut|hello|hi|bienvenue|hey/i); // Mot criteres recherche BONJOUR
	var regexSalutationAurevoir = new RegExp(/bye|bye bye|au-? ?revoir|[àa] bient[ôo]t/i); // Mot criteres recherche AU REVOIR
	var regexCaVa = new RegExp(/vas?/i); // Mot criteres recherche CA VA
	var regexMerci = new RegExp(/merci|thanks|thank you/i)
	var regexCool = new RegExp(/cool|super|bravo|excellent|g[ée]nial/i)
	var regexCharlBot = new RegExp(/es tu|toi/i); // Mot criteres recherche CHARLBOT
	var regexBlague = new RegExp(/blagues?|histoires?|dr[ôo]les?/i); // Mot criteres recherche CHARLBOT

	//----------------------------------------------------------------------------------------------------------------
	// Tableaux de réponses	
	//----------------------------------------------------------------------------------------------------------------
	var charlBotReponse = ["Je suis CharlBot, un robot programmé pour vous renseigner sur Charles. Allez y, posez moi une question."];
	var ageReponse = ["Charles est né en 1981", "Charles à "+age+" ans", "Charles est devenu majeur en 1999", "Charles est né en 1981, la même année que Justin Timberlake", "Charles à "+age+" ans", "Charles est né en 1981, la même année que Paris Hilton", "La Grèce est entrée dans la C.E.E l'année ou Charles est né, en 1981", "Charles à "+age+" ans", "François Mitterand est élu Président de la république l'année ou Charles est né, en 1981", "Bob Marley décède à l'age de 36 ans, l'année ou Charles est né, en 1981", "Lady Di et le prince Charles se marient l'année ou Charles est né, en 1981", "L'assemblée Nationale vote la fin de la peine de mort l'année ou Charles est né, en 1981", "Charles est né en Aout 1981. Saviez vous que Georges Brassens décède à l'age de 36 ans cette même année"];
	var competenceReponse = ["Charles à suivi une formation en gestion de projets. Il possède une expérience de plusieurs années dans la gestion de projets importants en conciliant les contraintes coûts et délais.", "Charles à suivi une formation en management. Il a notamment été Team Leader chez UPS et DB Schenker", "Tout au long de sa carrière, Charles a été amené à travailler en équipe dans les différentes structures où il a évolué", "OFFRES COMMERCIALES", "DESIGN", "RELATION CLIENT"];
	var devReponse = ["dev"];
	var etudeReponse = ["Maitrise en Gestion des PME", "DUT Techniques de Commercialisation", "BAC Sciences et Technologies du Tertiaire"];
	var contactReponse = ["Charles habite au Poiré sur vie", "Charles réside en Vendée à côté de la Roche sur Yon"];
	var hobbiesReponse = ["Charles pratique la guitare depuis de nombreuses années", "Charles aime voyager notamment en Europe et à découvert le Laos récemment", "Charles est bénévole dans un festival de musique, c'est une de ses passions", "Charles pratique la photographie", "Charles aime la nature et la randonnée en autonomie"];
	var bonjour = ["Bonjour!", "Bienvenue!","Bien le bonjour!","Toutes mes salutations!"];
	var aurevoir = ["Au revoir!", "A bientôt!", "Au plaisir de vous revoir!", "Passez une excellente journée!"];
	var cava = ["Je vais très bien, merci!", "Je vais merveilleusement bien, merci! :-)", "Je me porte à merveille ;-)", "Je sais que je vais passer un bon moment avec vous!", "J'ai la pêche et je suis là pour vous donner la banane.", "Moi, ça roule!"];
	var merci = ["De rien!", "Tout le plaisir est pour moi!", ";-)", "C'est un plaisir de vous renseigner!"];
	var cool = ["Cool!", "Très bien!", ";-)"];
	var saisieVide = ["Il semble que votre saisie est vide. Je peux vous renseigner sur l'age de Charles par exemple.", "Pardon, je n'ai pas compris? Votre message est vide", "En manque d'inspiration? Posez moi une question.", "En manque d'inspiration? Savez vous que Charles est un prénom qui a été porté par un grand nombre de personnages célèbres au cours de l'Histoire, notamment des rois européens. Le monarque le plus célèbre est certainement l'empereur Charlemagne ou Charles le Grand, qui donna son nom à la dynastie des Carolingiens.", "Le saviez vous? La personnalité des Charles est : éternel optimiste, Charles est d'un abord agréable, souriant. Il sait charmer son entourage en étant à la fois attentif aux autres tout en adoptant une attitude originale, voire parfois excentrique. Curieux de tout, Charles passe sa vie à enrichir ses connaissances. Passionné par l'écrit et la communication"];
	var aide = [" Que puis-je faire pour vous?", " Comment puis-je vous renseigner?", " Que puis-je faire pour vous aider?", " Du coup, comment puis-je vous renseigner?", " Est ce que je peux vous donner un coup de main à trouver des rensegnements? Posez moi vos questions."]
	var blague = ["J'ai une blague sur les magasins, mais elle a pas supermarché", "Vous connaissez sûrment le fruit assez fort pour couper des arbres? C'est le ci-tron", "Les livres ont toujours chaud, c'est parce qu’ils ont une couverture", "Les tennisman sont gentils. Ils adorent rendre des services!", "Il y a une sorte de jambon que tout le monde déteste, c'est le sale-ami!"]

	//----------------------------------------------------------------------------------------------------------------
	// Fonction qui génère la réponse (selon theme et délai de réponse)
	//----------------------------------------------------------------------------------------------------------------
	function reponse(theme, delai) {
		setTimeout(
		function(){
			var nodeReponse = document.createTextNode(theme[getRandomInt(0, theme.length)]);
			newPara.appendChild(nodeReponse);
			fenetreBulles.appendChild(newPara);
			scrollDown();
			}, delai);
	}
	
	//----------------------------------------------------------------------------------------------------------------
	// Recherche AGE
	//----------------------------------------------------------------------------------------------------------------
	
	if (regexAge.test(userText.value)===true){
		reponse(ageReponse, 1500);
	}

	//----------------------------------------------------------------------------------------------------------------
	// Recherche COMPETENCES
	//----------------------------------------------------------------------------------------------------------------

	else if (regexCompetence.test(userText.value)===true){
		reponse(competenceReponse, 1500);
	}	

	//----------------------------------------------------------------------------------------------------------------
	// Recherche COMPETENCES DEVELOPPEMENT
	//----------------------------------------------------------------------------------------------------------------

	else if (regexDev.test(userText.value)===true){
		reponse(devReponse, 1500);
	}			

	//----------------------------------------------------------------------------------------------------------------
	// Recherche ETUDES
	//----------------------------------------------------------------------------------------------------------------

	else if (regexEtude.test(userText.value)===true){
		reponse(etudeReponse, 1500);
	}		
		
	//----------------------------------------------------------------------------------------------------------------
	// Recherche CONTACT
	//----------------------------------------------------------------------------------------------------------------

	else if (regexContact.test(userText.value)===true){
		reponse(contactReponse, 1500);
	}		
		
	//----------------------------------------------------------------------------------------------------------------
	// Recherche HOBBIES
	//----------------------------------------------------------------------------------------------------------------

	else if (regexHobbies.test(userText.value)===true){
		reponse(hobbiesReponse, 1500);
	}		
	
	//----------------------------------------------------------------------------------------------------------------
	// Recherche BONJOUR
	//----------------------------------------------------------------------------------------------------------------

	else if (regexSalutationBonjour.test(userText.value)===true){
		reponse(bonjour, 1000);		
	}	
	
	//----------------------------------------------------------------------------------------------------------------
	// Recherche AU REVOIR
	//----------------------------------------------------------------------------------------------------------------

	else if (regexSalutationAurevoir.test(userText.value)===true){
		reponse(aurevoir, 1000);
		}
	
	//----------------------------------------------------------------------------------------------------------------
	// Recherche SUR CA VA?
	//----------------------------------------------------------------------------------------------------------------

	else if (regexCaVa.test(userText.value)===true){
		reponse(cava, 1500);
		reponse(aide, 2500);
	}		

	//----------------------------------------------------------------------------------------------------------------
	// Recherche MERCI
	//----------------------------------------------------------------------------------------------------------------

	else if (regexMerci.test(userText.value)===true){
		reponse(merci, 1500);
	}

	//----------------------------------------------------------------------------------------------------------------
	// Recherche COOL
	//----------------------------------------------------------------------------------------------------------------

	else if (regexCool.test(userText.value)===true){
		reponse(cool, 1500);
	}		
	
	//----------------------------------------------------------------------------------------------------------------
	// Recherche SUR ROBOT
	//----------------------------------------------------------------------------------------------------------------

	else if (regexCharlBot.test(userText.value)===true){
		reponse(charlBotReponse, 1500);
	}	
	
	//----------------------------------------------------------------------------------------------------------------
	// Recherche SUR BLAGUE
	//----------------------------------------------------------------------------------------------------------------

	else if (regexBlague.test(userText.value)===true){
		reponse(blague, 1500);
	}	
		
	//----------------------------------------------------------------------------------------------------------------
	// Recherche CHAMP VIDE
	//----------------------------------------------------------------------------------------------------------------
	
	else if(userText.value==""){
		reponse(saisieVide, 1500);
	}
	
	//----------------------------------------------------------------------------------------------------------------
	// Recherche AUTRE
	//----------------------------------------------------------------------------------------------------------------

	else {
		setTimeout(function(){
		var nodeReponse = document.createTextNode("Je suis un robot uniquement programmé pour vous renseigner sur Charles.");
		newPara.appendChild(nodeReponse);
		fenetreBulles.appendChild(newPara);
		scrollDown();
		}, 1000);
	}

	// efface le champ texte area
	userText.value=null;
}
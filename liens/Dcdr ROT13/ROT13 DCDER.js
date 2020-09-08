//Programme qui code du texte : chaque letttre est remplacée par la 13eme suivante dans l'alphabet

function decodeRot13 () {
	var mot = document.getElementById("entry").value.toLowerCase();
	var tabMot = [] 
	var tabIndex =[]
	var tabConverti =[]
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var nbDecalage = -13
	var output = document.getElementById("output");

	// Convertir lemot saisi dans un tableau qui sépare chaque lettre
	for(i=0;i<mot.length;i++) {
		tabMot.push(mot[i]);
	}

	// Compare chaque lettre du mot saisie avec la lettre de l'alphabet et crée un tableau d'index de position de la lettre dans l'alphabet
	for(j=0;j<tabMot.length;j++) {
		if(tabMot[j] === " ") {
			tabIndex.push(" ");
		}
		else {
			for(k=0;k<alphabet.length;k++)
				if(tabMot[j] === alphabet[k]) {
					tabIndex.push(k);
				}
			}
		}
	
for(l=0;l<tabIndex.length;l++) {
	if(tabIndex[l]===" ") {
		tabConverti.push(" ");
	}
	else if(tabIndex[l]<13) { 
			tabConverti.push(alphabet[tabIndex[l]+nbDecalage+26]);
		}
	else{
		tabConverti.push(alphabet[tabIndex[l]+nbDecalage]);
	}
}

output.value = (tabConverti.join(""))

}
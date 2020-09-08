//Programme qui code du texte : chaque letttre est remplacée par la 13eme suivante dans l'alphabet

// Fonction qui transforme les accents en lettres sans accents
String.prototype.sansAccent = function(){
    var accent = [
        /[\300-\306]/g, /[\340-\346]/g, // A, a
        /[\310-\313]/g, /[\350-\353]/g, // E, e
        /[\314-\317]/g, /[\354-\357]/g, // I, i
        /[\322-\330]/g, /[\362-\370]/g, // O, o
        /[\331-\334]/g, /[\371-\374]/g, // U, u
        /[\321]/g, /[\361]/g, // N, n
        /[\307]/g, /[\347]/g, // C, c
    ];
    var noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
     
    var str = this;
    for(var i = 0; i < accent.length; i++){
        str = str.replace(accent[i], noaccent[i]);
    }
     
    return str;
}

function codeRot13() {
	var mot = document.getElementById("entry").value.toLowerCase().sansAccent();
	var tabMot = [] 
	var tabIndex =[]
	var tabConverti =[]
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var nbDecalage = 13
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
		if(tabIndex[l]===" ") {
			tabConverti.push(" ");
		}
	else if(tabIndex[l]>12) { 
			tabConverti.push(alphabet[tabIndex[l]+nbDecalage-26]);
		}
		else{
			tabConverti.push(alphabet[tabIndex[l]+nbDecalage]);
		}
	}
	output.value = (tabConverti.join(""))
}
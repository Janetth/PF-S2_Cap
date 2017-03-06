
var mostarOcultar = function(divtexte) {//()<>{}||**++--
	switch(divtexte){
		case "text1": var divtext1 = document.getElementById("text2");
									var divtext2 = document.getElementById("text3");
									break;
		case "text2": var divtext1 = document.getElementById("text1");
									var divtext2 = document.getElementById("text3");
									break;
		case "text3": var divtext1 = document.getElementById("text1");
									var divtext2 = document.getElementById("text2");
									break;
	}
	var divtext = document.getElementById(divtexte);

	if (divtext.style.display == "none" ) {
			divtext1.style.display = "none";
			divtext2.style.display = "none";
			divtext.style.display = "block";
	} else{
		divtext.style.display = "block";
	}
}

function myfunction(){
	document.getElementById("b").innerHTML = "click me";
	var couleur = document.getElementById("b").style.color;
	if(couleur == "blue"){
		document.getElementById("b").style.color = "red";
	}
	else{
		document.getElementById("b").style.color = "blue";
	}
	console.log(couleur);
}
	

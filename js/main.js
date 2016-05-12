var boton= document.getElementsByClassName("boton");
var contador=0;

for (var i = 0; i < boton.length; i++) {
	boton[i].onclick = function () {
		contador++
		if (contador%2===0) {
			this.textContent = "O";
		}
		else{
			this.textContent = "X";

		}
		var uno= document.getElementById("uno").textContent;
		var dos= document.getElementById("dos").textContent;
		var tres= document.getElementById("tres").textContent;
		var cuatro= document.getElementById("cuatro").textContent;
		var cinco= document.getElementById("cinco").textContent;
		var seis= document.getElementById("seis").textContent;
		var siete= document.getElementById("siete").textContent;
		var ocho= document.getElementById("ocho").textContent;
		var nueve= document.getElementById("nueve").textContent;

		if (uno != "" || dos != "" || tres != "") {
			if(uno == dos && uno == tres && dos == tres) {
				alert("Ganaste");
			}
		}
		if (cuatro != "" || cinco != "" || seis != "") {
			if(cuatro == cinco && cuatro == seis && cinco == seis) {
				alert("Ganaste");
			}
		}
		if (siete != "" || ocho != "" || nueve != "") {
			if(siete == ocho && siete == nueve && ocho == nueve) {
				alert("Ganaste");
			}
		}
		if (uno != "" || cuatro != "" || siete != "") {
			if(uno == cuatro && uno == siete && cuatro == siete) {
				alert("Ganaste");
			}
		}
		if (dos != "" || cinco != "" || ocho != "") {
			if(dos == cinco && dos == ocho && cinco == ocho) {
				alert("Ganaste");
			}
		}
		if (tres != "" || seis != "" || nueve != "") {
			if(tres == seis && tres == nueve && seis == nueve) {
				alert("Ganaste");
			}
		}
		if (uno != "" || cinco != "" || nueve != "") {
			if(uno == cinco && uno == nueve && cinco == nueve) {
				alert("Ganaste");
			}
		}
		if (tres != "" || cinco != "" || siete != "") {
			if(tres == cinco && tres == siete && cinco == siete) {
				alert("Ganaste");
			}
		}




	}
}





//function getInputValue(){
	//var mensaje= document.getElementById("caja-texto");
	//return mensaje.value;
//}
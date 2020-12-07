function monthly_profit(){
		let chislo = Number(document.getElementById("chislo").value);
		let procent = Number(document.getElementById("procent").value);
		let profit = 0;
		profit = chislo / 100 * procent;
		document.getElementById("proc").value = Math.round(profit);
	}

function func(){
	document.getElementById("year").innerHTML = "";
	document.getElementById("res").innerHTML = "";
	let chislo = Number(document.getElementById("chislo").value);
	let count = Number(document.getElementById("count").value);
	let procent = Number(document.getElementById("procent").value);
	let tax = Number(document.getElementById("tax").value);
	let year = 2020;
	if(document.getElementById("yes").checked){
	tax = tax/100;
		for(let i = 0; i < count; i++){
			chislo = parseInt(chislo) + ((chislo / 100) * procent) - chislo * tax;
			year += 1;
			document.getElementById("year").innerHTML += year + "<br>";
			document.getElementById("res").innerHTML += chislo.toFixed(2) + " ₽" + "<br>";
		}
	}
	else if(document.getElementById("no").checked){
	  	for(let i = 0; i < count; i++){
			chislo = parseInt(chislo) + ((chislo / 100) * procent);
			year += 1;
			document.getElementById("year").innerHTML += year + "<br>";
			document.getElementById("res").innerHTML += chislo.toFixed(2) + " ₽" + "<br>";
		}
	}
}
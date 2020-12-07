function monthly_profit(){
		let deposit = Number(document.getElementById("deposit").value);
		let percent = Number(document.getElementById("percent").value);
		let profit = 0;
		profit = deposit / 100 * percent;
		document.getElementById("proc").value = Math.round(profit);
	}

function func(){
	document.getElementById("year").innerHTML = "";
	document.getElementById("res").innerHTML = "";
	let deposit = Number(document.getElementById("deposit").value);
	let count = Number(document.getElementById("count").value);
	let percent = Number(document.getElementById("percent").value);
	let tax = Number(document.getElementById("tax").value);
	var date = new Date();
	let year = date.getFullYear();
	if(document.getElementById("yes").checked){
	tax = tax/100;
		for(let i = 0; i < count; i++){
			deposit = parseInt(deposit) + ((deposit / 100) * percent) - deposit * tax;
			year += 1;
			document.getElementById("year").innerHTML += year + "<br>";
			document.getElementById("res").innerHTML += deposit.toFixed(2) + " ₽" + "<br>";
		}
	}
	else if(document.getElementById("no").checked){
	  	for(let i = 0; i < count; i++){
			deposit = parseInt(deposit) + ((deposit / 100) * percent);
			year += 1;
			document.getElementById("year").innerHTML += year + "<br>";
			document.getElementById("res").innerHTML += deposit.toFixed(2) + " ₽" + "<br>";
		}
	}
}
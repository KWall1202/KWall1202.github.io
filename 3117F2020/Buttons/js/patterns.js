(async function() {
	String.prototype.hashCode = function() {
		var hash = 0;
		if (this.length == 0) {
			return hash;
		}
		for (var i = 0; i < this.length; i++) {
			var char = this.charCodeAt(i);
			hash = ((hash<<5)-hash)+char;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	}
	
	const COLORS = ["Red", "Orange", "Purple", "Green", "Blue"];
	
	const outputResponse = document.getElementById("outputResponse");
	const patternChoice = document.getElementById("patternChoice");
	const resetButton = document.getElementById("resetButton");
	const submitButton = document.getElementById("submitButton");
	const colorButtons = document.getElementById("colorButtons");
	
	for(var i=0; i < COLORS.length; i++) {
		const color = COLORS[i]
		const newButton = document.createElement("input");
		newButton.type = "button";
		newButton.value = color;
		newButton.onclick = (async function() {
			patternChoice.innerHTML = patternChoice.innerHTML + color + " ";
		});
		colorButtons.appendChild(newButton);
	}
	
	resetButton.onclick = (async function(){ 
		patternChoice.innerHTML = "";
		outputResponse.innerHTML = "";
	});
	submitButton.onclick = (async function() {
		const patternHash = patternChoice.innerHTML.hashCode();
		if (patternHash === -1860798771) {
			outputResponse.innerHTML = "You'll receive more information soon.";
			alert("You'll receive more information soon.");
			emailjs.send('default_service', 'patternSolved', {});
		} else {
			outputResponse.innerHTML = "Not quite.";
		}
	});
})();
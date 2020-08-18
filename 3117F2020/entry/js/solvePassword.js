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
	
	const outputResponse = document.getElementById("outputResponse");
	const pw = document.getElementById("password");
	const submitButton = document.getElementById("enterPassword");
	submitButton.onclick = (async function(){
		const pwHash = pw.value.hashCode();
		if(pwHash === 3105819) {
			alert("yep");
			outputResponse.value = "Contact Kevin for your final puzzle.";
		} else {
			alert("nope");
			outputResponse.value = "Not quite.";
		}
	})();
})();
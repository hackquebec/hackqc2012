window.onload = function ()
{
	// If JS starts, we insert all animated parts of the logo and hide the complete image.
	var logoDiv = document.getElementById("logo"),
		logoImage = document.getElementById("logo-image"),
		logoDots = document.createElement("div");
		logoDots.id = "logo-dots",
		hiddenParts = 0;

	for(i=1; i <= 15; i++){
		var newPart = document.createElement("div");
		var classNumber = "logo-part-" + i;
		newPart.id = classNumber;
		newPart.className = "logo-part";
		logoDiv.appendChild(newPart);
	}

	logoDiv.appendChild(logoDots);
	logoDiv.removeChild(logoImage);

	var timerSwitch = window.setInterval(changeLogo, 2200);
	logoDiv.onclick = function(){changeLogo()};

	function changeLogo(){
		var e=getRandomElement();
		var tryCount = 0;

		if(hiddenParts >= 6){
			while(e.className == "logo-part" && tryCount <= 6){
				e=getRandomElement();
				tryCount++;
			}
			e.className = "logo-part";
			hiddenParts--;
		} else {
			if(e.className == "logo-part hidden") {
				e.className = "logo-part";
				hiddenParts--;
			}
			else {
				e.className = "logo-part hidden";
				hiddenParts++;
			};
		}
	}

	function getRandomElement () {
    	return document.getElementById("logo-part-" + ( Math.floor(Math.random() * 14) + 1));
	}

}
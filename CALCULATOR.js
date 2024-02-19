
		var colors=["gray", "sienna","coral","teal"];
		var currentColorIndex= 0;
		
		function changeColor(){
		var div = document.getElementById("calculator");
		div.style.backgroundColor=colors[currentColorIndex];
		
		currentColorIndex++;
		if(currentColorIndex==colors.length){
		currentColorIndex=0;
		}
	     }


			 //calculate the value placed in display for a given operator
function appendToDisplay(value){
	document.getElementById('Display').textContent +=value;
}

function calculate(){
	try{
		let result=eval(document.getElementById('Display').textContent);
		document.getElementById('Display').textContent=result;
	}
	    catch (error) {
		document.getElementById('Display').textContent='Error';
		}
}

function clearDisplay(){
	document.getElementById('Display').textContent='';
}

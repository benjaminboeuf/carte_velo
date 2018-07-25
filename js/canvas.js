var color = "#000";
	var painting = false;
	var started = false;
	var width_brush = 2;
	var canvas = $("#canvas");
	var cursorX, cursorY;
	
	var context = canvas[0].getContext('2d');
	
	canvas.mousedown(function(e) {
		painting = true;
		
		cursorX = (e.pageX - this.offsetLeft);
		cursorY = (e.pageY - this.offsetTop);
	});
	
	$(this).mouseup(function() {
		painting = false;
		started = false;
	});
	
	canvas.mousemove(function(e) {
		if (painting) {
			cursorX = (e.pageX - this.offsetLeft);
			cursorY = (e.pageY - this.offsetTop);
			
			drawLine();
		}
	});
	
	// Fonction qui dessine une ligne :
	function drawLine() {
		// Si c'est le dÃ©but, j'initialise
		if (!started) {
			// Je place mon curseur pour la premiÃ¨re fois :
			context.beginPath();
			context.moveTo(cursorX, cursorY);
			started = true;
		} 
		// Sinon je dessine
		else {
			context.lineTo(cursorX, cursorY);
			context.strokeStyle = color;
			context.lineWidth = width_brush;
			context.stroke();
		}
	}
	
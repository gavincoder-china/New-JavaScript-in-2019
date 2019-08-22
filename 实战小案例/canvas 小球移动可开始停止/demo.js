window.onload = function() {
	var c = document.getElementById("ball");
	var ctx = c.getContext('2d');
	//ctx.fillStyle='#f60';
	//ctx.fillRect(30,30, 100,50);
	//ctx.strokeStyle='#f60';
	//ctx.strokeRect(30,30, 100,50);
	//ctx.arc(100,100,50,0,1*Math.PI);
	//ctx.stroke();
	/*ctx.beginPath();
	ctx.moveTo(20,20);
	ctx.lineTo(30,20);
	ctx.lineTo(30,30);
	ctx.lineTo(40,30);
	ctx.lineTo(40,40);
	ctx.strokeStyle = '#f60';
	ctx.closePath();
	ctx.stroke();*/

	//笑脸
	/*ctx.arc(100,100,80,0,2*Math.PI);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(50,70);
	ctx.lineTo(70,70);
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(130,70);
	ctx.lineTo(150,70);
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(100,120,20,0,1*Math.PI);
	ctx.stroke();*/
	var timer;
	var y = 0,
		step = 1,
		height = c.offsetHeight,  
		width = c.offsetWidth;    //画布的宽高
	document.getElementById("start").onclick = function() {
		if(timer){
			clearInterval(timer);
		}
		timer = setInterval(draw,5);
	};
	document.getElementById("stop").onclick = function() {
		clearInterval(timer);
	};
	function draw() {
		ctx.clearRect(0,0,width,height);
		ctx.beginPath();
		ctx.arc(100,y,10,0,2*Math.PI);
		ctx.fill();
		y+=step;
		if(y==0 || y== height){
			step = step *-1;
		}
	}

}
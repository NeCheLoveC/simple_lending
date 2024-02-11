let canvas = document.getElementById(`jok`);
let ctx = canvas.getContext(`2d`);
let img_1 = new Image();
let img_2 = new Image();
img_1.src = `pic_1.png`;	
img_2.src = `pic_2.png`;



let startX = 325;
img_1.onload = function(){
	ctx.beginPath();
	ctx.drawImage(img_1,0,0,325,414,0,0,325,414);	
	img_2.onload = function(){
		ctx.beginPath();
		ctx.drawImage(img_2,650-startX,0,650-startX,414,650-startX,0,650-startX,414);

		ctx.beginPath();
		ctx.fillStyle = `red`;
		ctx.fillRect(startX-3,0,6,414);
	};
};
canvas.onmousedown = function(event){
	if((event.offsetX <= (startX + 10)) && (event.offsetX >= (startX - 10))){
		canvas.onmousemove = function(event){

			let x = event.offsetX;
			ctx.beginPath();
			ctx.clearRect(0,0,650,414);
	


			ctx.beginPath();
			ctx.drawImage(img_1,0,0,x,414,0,0,x,414);

			ctx.beginPath();
			ctx.drawImage(img_2,x,0,650-x,414,x,0,650-x,414);

			ctx.beginPath();
			ctx.fillStyle = `red`;
			ctx.rect(x-3,0,6,414);
			ctx.fill();

			startX = x;

		};	
	}
	else{
		
		let x = event.offsetX;
		ctx.beginPath();
		ctx.clearRect(0,0,650,414);
	


		ctx.beginPath();
		ctx.drawImage(img_1,0,0,x,414,0,0,x,414);

		ctx.beginPath();
		ctx.drawImage(img_2,x,0,650-x,414,x,0,650-x,414);

		ctx.beginPath();
		ctx.fillStyle = `red`;
		ctx.rect(x-3,0,6,414);
		ctx.fill();

		startX = x;


	}
	canvas.onmouseup = function(event){
		canvas.onmousemove = null;
	};	
};
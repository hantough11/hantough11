function ImageTransition() {
	var interval = new Number;	

	this.transitionTime = new Number;
	this.viewTime = new Number;
	this.object = new String;
	this.url = new Array();
	this.percentage = new Array();
	this.positionX =  new Array();
	this.positionY =  new Array();
	
	this.run = function(){
		var amount = 0;
		var imageUrl = new Array();
		var imagePercentage = new Array();
		var imagePositionX = new Array();
		var imagePositionY = new Array();
		var i = new Number;
		var img_order = new Number;
		var transitionTime = this.transitionTime;
		var viewTime = this.viewTime;
		var object = this.object;
		
		// calculate the amount of images and load url of images
		for(i=1; i<=5; i++){
			if(this.url[i]){
				amount++;
				imageUrl[amount] = this.url[i];
				imagePercentage[amount] = this.percentage[i];
				imagePositionX[amount] = this.positionX[i] * (256/230);
				imagePositionY[amount] = this.positionY[i] * (256/230);
			}
		}
		
		console.log("amount = " + amount);
		
		// set backgrounds
		for(i=1; i<=amount; i++){
			console.log("trans / imagePercentage[" + i + "] : " + imagePercentage[i]);
			console.log("trans / imagePositionX[" + i + "] : " + imagePositionX[i]);
			console.log("trans / imagePositionY[" + i + "] : " + imagePositionY[i]);
			$(this.object + "_" + i).css({
				"background-image":"url(" + imageUrl[i] + ")",
				"background-size":imagePercentage[i] + "%",
				"background-position-x":imagePositionX[i],
				"background-position-y":imagePositionY[i]
			});
		}		
		
		// disappear all images
		for(i=1; i<=amount; i++){
			$(this.object + "_" + i).css({"opacity":"0.0"});
		}
		
		// appear only one image
		$(this.object + "_1").css({"opacity":"1.0"});
		
		// do animation unless there is only one image
		if(amount >=2){
			img_order = 1;
			interval = setInterval(function(){doAnimate();}, viewTime);
		}
		
		function doAnimate(){
			// fade out
			$(object + "_" + img_order).animate({"opacity":"0.0"}, transitionTime);
			
			// set order
			if(img_order >= amount) img_order=1;
			else img_order++;
			
			// fade in
			//console.log("img_order : " + img_order);
			$(object + "_" + img_order).animate({"opacity":"1.0"}, transitionTime);			
		}
	};
	
	this.abort = function(){
		clearInterval(interval);
	};
}
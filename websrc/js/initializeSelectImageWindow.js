var makeSelectCellImage = new MakeSelectImageWindow();
var maxSelectCellImageMyImages = new Number;

var makeSelectBackgroundImage = new MakeSelectImageWindow();
var maxSelectBackgroundImageMyImages = new Number;
var maxSelectBackgroundImage_digitalAndArt = new Number;
var maxSelectBackgroundImage_plantsAndFlowers = new Number;
var maxSelectBackgroundImage_placesAndLandscape = new Number;
var maxSelectBackgroundImage_natureAndAnimals = new Number;


$(document).ready(function(){
	
	
	// Template List 생성
	/*
	loadSelectCellImageInfo();	
	
	makeSelectCellImage.category = "cell";
	makeSelectCellImage.wrapper = "#lay_editor_layer .images .select_an_image .list_item_container_outer .list_item_container";
	makeSelectCellImage.top = 47;
	makeSelectCellImage.left = 25;
	makeSelectCellImage.maxMyImages = maxSelectCellImageMyImages;
	makeSelectCellImage.build("myImages");	
	
	
	loadSelectBackgroundImageInfo();	
	
	makeSelectBackgroundImage.category = "background";
	makeSelectBackgroundImage.wrapper = "#lay_editor_layer .backgrounds .image .select_an_image .list_item_container_outer .list_item_container";
	makeSelectBackgroundImage.top = 47;
	makeSelectBackgroundImage.left = 25;
	
	makeSelectBackgroundImage.maxMyImages = maxSelectBackgroundImageMyImages;
	makeSelectBackgroundImage.max_digitalAndArt = maxSelectBackgroundImage_digitalAndArt;
	makeSelectBackgroundImage.max_plantsAndFlowers = maxSelectBackgroundImage_plantsAndFlowers;
	makeSelectBackgroundImage.max_placesAndLandscape = maxSelectBackgroundImage_placesAndLandscape;
	makeSelectBackgroundImage.max_natureAndAnimals = maxSelectBackgroundImage_natureAndAnimals;
	
	makeSelectBackgroundImage.build("myImages");
	makeSelectBackgroundImage.build("digitalAndArt");
	makeSelectBackgroundImage.build("plantsAndFlowers");
	makeSelectBackgroundImage.build("placesAndLandscape");
	makeSelectBackgroundImage.build("natureAndAnimals");*/
});

function loadSelectCellImageInfo() {
	var i=1;
	
	while(selectCellImage.myImages.url[i] != undefined) {
		i++;
	}	
	
	maxSelectCellImageMyImages = i - 1;
	
	console.log("The maxSelectCellImageMyImages is " + maxSelectCellImageMyImages);	
}

function loadSelectBackgroundImageInfo() {
	var i=1, j=1, k=1, l=1, m=1;
	
	while(selectBackgroundImage.myImages.url[i] != undefined) {
		i++;
	}
	
	while(selectBackgroundImage.digitalAndArt.url[j] != undefined) {
		j++;
	}
	while(selectBackgroundImage.plantsAndFlowers.url[k] != undefined) {
		k++;
	}
	while(selectBackgroundImage.placesAndLandscape.url[l] != undefined) {
		l++;
	}
	while(selectBackgroundImage.natureAndAnimals.url[m] != undefined) {
		m++;
	}
	
	maxSelectBackgroundImageMyImages = i - 1;
	maxSelectBackgroundImage_digitalAndArt = j - 1;
	maxSelectBackgroundImage_plantsAndFlowers = k - 1;
	maxSelectBackgroundImage_placesAndLandscape = l - 1;
	maxSelectBackgroundImage_natureAndAnimals = m - 1;
	
	console.log("The maxSelectBackgroundImageMyImages is " + maxSelectBackgroundImageMyImages);
	console.log("The maxSelectBackgroundImage_digitalAndArt is " + maxSelectBackgroundImage_digitalAndArt);
	console.log("The maxSelectBackgroundImage_plantsAndFlowers is " + maxSelectBackgroundImage_plantsAndFlowers);
	console.log("The maxSelectBackgroundImage_placesAndLandscape is " + maxSelectBackgroundImage_placesAndLandscape);
	console.log("The maxSelectBackgroundImage_natureAndAnimals is " + maxSelectBackgroundImage_natureAndAnimals);
}


function MakeSelectImageWindow() {
	var imageHTMLString = new String;
	
	this.build = function(kind){
		var imageTop = new Number;
		var imageLeft = new Number;
		var numberOfImages = new Number;
		var posOfTitle = new Number;
		var urlOfImage = new String;
		
		switch(kind) {
			case "myImages":
				numberOfImages = this.maxMyImages;
				posOfTitle = 26;
				break;			
				
			case "digitalAndArt":
				numberOfImages = this.max_digitalAndArt;
				posOfTitle = this.top + (107 * (parseInt((this.maxMyImages-1)/4) + 1) + 10);
				break;				
			case "plantsAndFlowers":
				numberOfImages = this.max_plantsAndFlowers;
				posOfTitle = this.top + (107 * (parseInt((this.maxMyImages-1)/4) + 1) + 10) 
				                      + (107 * (parseInt((this.max_digitalAndArt-1)/4) + 1) + 20);
				break;	
			case "placesAndLandscape":
				numberOfImages = this.max_placesAndLandscape;
				posOfTitle = this.top + (107 * (parseInt((this.maxMyImages-1)/4) + 1) + 10) 
				                      + (107 * (parseInt((this.max_digitalAndArt-1)/4) + 1) + 20)
									  + (107 * (parseInt((this.max_plantsAndFlowers-1)/4) + 1) + 30);
				break;				
			case "natureAndAnimals":
				numberOfImages = this.max_natureAndAnimals;
				posOfTitle = this.top + (107 * (parseInt((this.maxMyImages-1)/4) + 1) + 10) 
				                      + (107 * (parseInt((this.max_digitalAndArt-1)/4) + 1) + 20)
									  + (107 * (parseInt((this.max_plantsAndFlowers-1)/4) + 1) + 30)
									  + (107 * (parseInt((this.max_placesAndLandscape-1)/4) + 1) + 40);
		}
		
		$("#lay_editor_layer .select_an_image .title_" + kind).css({top:posOfTitle + "px"});
		if(this.maxMyImages <= 0){
			$("#lay_editor_layer .select_an_image .title_myImages .noImage").show();
		}
		else{
			$("#lay_editor_layer .select_an_image .title_myImages .noImage").hide();
		}
		
				
		for(var i=1; i<=numberOfImages; i++){
			if(!$(this.wrapper + " ." + kind + "_" + i).is(':visible')){
				if(kind == "myImages")imageTop = this.top + 107 * parseInt((i-1)/4);
								
				else if(kind == "digitalAndArt") {
					imageTop = this.top + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + 1) + 30);
					/*
					if(this.maxMyImages <= 0) {
						imageTop = this.top + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + 1) + 30);
					}
					else {
						this.imageTop =   (this.top + (107 * (parseInt((this.maxMyImages-1)/4) + 1) + 10)) 
										            + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + 1) + 30);
					}
					*/
				}
				
				else if(kind == "plantsAndFlowers") {
					imageTop = this.top + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + parseInt((this.max_digitalAndArt-1)/4 + 2)) + 50);
					/*
					if(this.maxMyImages <= 0) {
						imageTop = this.top + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + parseInt((this.max_digitalAndArt-1)/4 + 2)) + 50);
					}
					else {
						this.imageTop =   (this.top + (107 * (parseInt((this.maxMyImages-1)/4) + 1) + 10)) 
													+ (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + parseInt((this.max_digitalAndArt-1)/4 + 2)) + 50);						
					}
					*/
				}
				
				else if(kind == "placesAndLandscape") {
					imageTop = this.top + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + parseInt((this.max_digitalAndArt-1)/4 + 2) + parseInt((this.max_plantsAndFlowers-1)/4 + 1)) + 80);
					/*
					if(this.maxMyImages <= 0) {
						imageTop = this.top + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + parseInt((this.max_digitalAndArt-1)/4 + 2) + parseInt((this.max_plantsAndFlowers-1)/4 + 1)) + 80);
					}
					else {
						imageTop =   (this.top + (107 * (parseInt((this.maxMyImages-1)/4) + 1) + 10)) 
										            + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + parseInt((this.max_digitalAndArt-1)/4 + 2) + parseInt((this.max_plantsAndFlowers-1)/4 + 1)) + 80);
					}
					*/
				}
				
				else if(kind == "natureAndAnimals") {
					imageTop = this.top + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + parseInt((this.max_digitalAndArt-1)/4 + 2) + parseInt((this.max_plantsAndFlowers-1)/4 + 1) + parseInt((this.max_placesAndLandscape-1)/4 + 1)) + 120);
					/*
					if(this.maxMyImages <= 0) {
						imageTop = this.top + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + parseInt((this.max_digitalAndArt-1)/4 + 2) + parseInt((this.max_plantsAndFlowers-1)/4 + 1) + parseInt((this.max_placesAndLandscape-1)/4 + 1)) + 120);
					}
					else {
						this.imageTop =   (this.top + (107 * (parseInt((this.maxMyImages-1)/4) + 1) + 10)) 
										            + (107 * (parseInt((i-1)/4) + parseInt((this.maxMyImages-1)/4) + parseInt((this.max_digitalAndArt-1)/4 + 2) + parseInt((this.max_plantsAndFlowers-1)/4 + 1) + parseInt((this.max_placesAndLandscape-1)/4 + 1)) + 120);
					}
					*/
				}
				
				imageLeft = this.left + 176 * parseInt((i-1)%4);
				
				// html 작성
				updateVariation(i);
				$(this.wrapper).prepend(imageHTMLString);
				
				
				// css 생성
				switch(this.category) {
					case "cell" :
						if(kind == "myImages")urlOfImage = selectCellImage.myImages.url[i];
						else if(kind == "nature")urlOfImage = selectCellImage.nature.url[i];						
					
						var tmpWidth;
						var tmpHeight;
						var inWrapper = this.wrapper;
						
						function setCss(width, height, order, tmpUrl, tmpTop, tmpLeft) {
							tmpWidth = width;
							tmpHeight = height;
							
							// 세로 비율이 더 크다면, 세로 높이를 최대화 한것을 기준으로 가로 설정
							if((tmpWidth / 160) < (tmpHeight / 90)) {								
								$(inWrapper + " ." + kind + "_" + order).css({
									"background-image":"url(" + tmpUrl + ")",
									"background-size":"auto 100%",
									"background-position-x": "50%",
									"background-repeat": "no-repeat",
									"position":"absolute",
									"display":"block",
									top:tmpTop,
									left:tmpLeft,
									"width":"160px",
									"height":"90px",
									"border":"1px solid #fff"
									
								});
							}
							
							// 가로 비율이 더 크다면, 가로 높이를 최대화 한것을 기준으로 세로 설정
							else  {							
								$(inWrapper + " ." + kind + "_" + order).css({
									"background-image":"url(" + tmpUrl + ")",
									"background-size":"100% auto",
									"background-position-y": "50%",
									"background-repeat": "no-repeat",
									"position":"absolute",
									"display":"block",
									top:tmpTop,
									left:tmpLeft,
									"width":"160px",
									"height":"90px",
									"border":"1px solid #fff"
								});
							}

							$(inWrapper + " ." + kind + "_" + order).hover(
								function(){
									$(this).css({
										"border":"3px solid #00d7ff",
										top:"-=2px",
										left:"-=2px"
									});
								},
								function(){
									$(this).css({	
										"border":"1px solid #fff",
										top:"+=2px",
										left:"+=2px"	
									});
								}
							);
						}

						getMeta(urlOfImage, i, imageTop, imageLeft, setCss);
					
						
						break;
					case "background" :
						if(kind == "myImages")urlOfImage = selectBackgroundImage.myImages.url[i];
						else if(kind == "digitalAndArt")urlOfImage = selectBackgroundImage.digitalAndArt.url[i];
						else if(kind == "plantsAndFlowers")urlOfImage = selectBackgroundImage.plantsAndFlowers.url[i];
						else if(kind == "placesAndLandscape")urlOfImage = selectBackgroundImage.placesAndLandscape.url[i];
						else if(kind == "natureAndAnimals")urlOfImage = selectBackgroundImage.natureAndAnimals.url[i];
						
						$(this.wrapper + " ." + kind + "_" + i).css({
							"background-image":"url(" + urlOfImage + ")",
							"background-size":"100% 100%",
							//"background-position-x": "0",
							//"background-position-y": "0",
							"background-repeat": "no-repeat",
							"position":"absolute",
							"display":"block",
							top:imageTop,
							left:imageLeft,
							"width":"160px",
							"height":"90px"
						});
								
						
						$(this.wrapper + " ." + kind + "_" + i).hover(
							function(){
								$(this).css({
									"border":"3px solid #00d7ff",
									top:"-=3px",
									left:"-=3px"
								});
							},
							function(){
								$(this).css({
									"border":"none",
									top:"+=3px",
									left:"+=3px"	
								});
							}
						);
						
						break;
				}
			}
		}
		
		function updateVariation(order) {
			imageHTMLString =  '<a id="' + kind + 'Id_' + order + '" href="#"><div id = "' + order + '" class="' + kind + '_' + order + ' ' + kind + 'Img"><div class="delete"></div></div></a>';					
		}

		function getMeta(url, order, tmpImageTop, tmpImageLeft, callback) {
			var img = new Image();
			img.src = url;
			img.onload = function() {
				callback(this.width, this.height, order, url, tmpImageTop, tmpImageLeft);
			}
		}
	};
}
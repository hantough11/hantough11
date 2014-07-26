// Playlist Class 정의
function Playlist() {
	this.background = new Object();
	this.background.kind = new String;
	this.background.color = new String;
	this.background.image = new Object();
	this.background.image.url = new String;
	
	this.cell = new Array();
	for(var i=1; i<=25; i++){
		this.cell[i] = new Object();
		this.cell[i].kind = new String;
		this.cell[i].x = new Number;
		this.cell[i].y = new Number;
		
		this.cell[i].image = new Object();
		this.cell[i].image.theFirstOrderFiveImages = new Number;
		this.cell[i].image.selectedFiveImageNo = 0;
		
		this.cell[i].image.url = new Array();
		this.cell[i].image.url[1] = new String;
		this.cell[i].image.url[2] = new String;
		this.cell[i].image.url[3] = new String;
		this.cell[i].image.url[4] = new String;
		this.cell[i].image.url[5] = new String;
		
		this.cell[i].image.imageInCellPercentage = new Array();
		this.cell[i].image.imageInCellTop = new Array();
		this.cell[i].image.imageInCellLeft = new Array();
		this.cell[i].image.imageInCellWidth = new Array();
		this.cell[i].image.imageInCellHeight = new Array();
		this.cell[i].image.imageInEditPercentage = new Array();
		this.cell[i].image.imageInEditPositionX = new Array();
		this.cell[i].image.imageInEditPositionY = new Array();
		
		this.cell[i].text = new Object();
		this.cell[i].text.contents = new String;
		this.cell[i].text.font_size = new Number;
		this.cell[i].text.font_color = new String;
		this.cell[i].text.font_family = new String;
		this.cell[i].text.font_align = new String;
		this.cell[i].text.font_back_color = new String;
		this.cell[i].text.font_weight = new String;
		this.cell[i].text.font_vertical = new String;
	}	
}

// Playlist Class 초기화
Playlist.prototype.divided = 0;

// playlist 인스턴스 생성
playlist = new Array();


/*
// playlist 1 정의 (p34)
playlist[1] = new Playlist();
playlist[1].divided = 3;
playlist[1].background.kind= "image";
playlist[1].background.image.url= "../websrc/img/main/background_sample_1.jpg";

playlist[1].cell[1].kind = "image";
playlist[1].cell[1].x = 1;
playlist[1].cell[1].y = 5;
playlist[1].cell[1].image.url[1] = "../websrc/img/main/image_sample_1.jpg";
playlist[1].cell[1].image.url[2] = "../websrc/img/main/image_sample_2.jpg";


playlist[1].cell[2].kind = "text";
playlist[1].cell[2].x = 4;
playlist[1].cell[2].y = 1;
playlist[1].cell[2].text.contents = "안녕하세요 1";
playlist[1].cell[2].text.font_size = 48;
playlist[1].cell[2].text.font_color = "#000";
playlist[1].cell[2].text.font_family = "돋움체";
playlist[1].cell[2].text.font_align = "center";
playlist[1].cell[2].text.font_back_color = "#ccc";
playlist[1].cell[2].text.font_weight = "normal";

playlist[1].cell[7].kind = "empty";
playlist[1].cell[7].x = 4;
playlist[1].cell[7].y = 4;

// playlist 2 정의 (p51)
playlist[2] = new Playlist();
playlist[2].divided = 6;
playlist[2].background.kind= "color";
playlist[2].background.color= "#ff0";

playlist[2].cell[1].kind = "image";
playlist[2].cell[1].x = 2;
playlist[2].cell[1].y = 1;
playlist[2].cell[1].image.url[1] = "../websrc/img/main/image_sample_2.jpg";
playlist[2].cell[1].image.url[2] = "../websrc/img/main/image_sample_3.jpg";
playlist[2].cell[1].image.url[3] = "../websrc/img/main/image_sample_4.jpg";
playlist[2].cell[1].image.url[4] = "../websrc/img/main/image_sample_5.jpg";

playlist[2].cell[3].kind = "image";
playlist[2].cell[3].x = 3;
playlist[2].cell[3].y = 1;
playlist[2].cell[3].image.url[1] = "../websrc/img/main/image_sample_3.jpg";
playlist[2].cell[3].image.url[2] = "../websrc/img/main/image_sample_4.jpg";
playlist[2].cell[3].image.url[3] = "../websrc/img/main/image_sample_5.jpg";
playlist[2].cell[3].image.url[4] = "../websrc/img/main/image_sample_1.jpg";
playlist[2].cell[3].image.url[5] = "../websrc/img/main/image_sample_2.jpg";

playlist[2].cell[6].kind = "image";
playlist[2].cell[6].x = 1;
playlist[2].cell[6].y = 4;
playlist[2].cell[6].image.url[1] = "../websrc/img/main/image_sample_4.jpg";
playlist[2].cell[6].image.url[2] = "../websrc/img/main/image_sample_5.jpg";
playlist[2].cell[6].image.url[3] = "../websrc/img/main/image_sample_1.jpg";
playlist[2].cell[6].image.url[4] = "../websrc/img/main/image_sample_2.jpg";
playlist[2].cell[6].image.url[5] = "../websrc/img/main/image_sample_3.jpg";

playlist[2].cell[7].kind = "empty";
playlist[2].cell[7].x = 3;
playlist[2].cell[7].y = 3;

playlist[2].cell[10].kind = "image";
playlist[2].cell[10].x = 1;
playlist[2].cell[10].y = 3;
playlist[2].cell[10].image.url[1] = "../websrc/img/main/image_sample_5.jpg";
playlist[2].cell[10].image.url[2] = "../websrc/img/main/image_sample_1.jpg";
playlist[2].cell[10].image.url[3] = "../websrc/img/main/image_sample_2.jpg";
playlist[2].cell[10].image.url[4] = "../websrc/img/main/image_sample_3.jpg";
playlist[2].cell[10].image.url[5] = "../websrc/img/main/image_sample_4.jpg";

playlist[2].cell[22].kind = "text";
playlist[2].cell[22].x = 4;
playlist[2].cell[22].y = 1;
playlist[2].cell[22].text.contents = "안녕하세요 2";
playlist[2].cell[22].text.font_size = 48;
playlist[2].cell[22].text.font_color = "#000";
playlist[2].cell[22].text.font_family = "돋움체";
playlist[2].cell[22].text.font_align = "center";
playlist[2].cell[22].text.font_back_color = "#ccc";
playlist[2].cell[22].text.font_weight = "normal";
*/

//publishEditKind = new Playlist();


/*
for(var list=1; ; list++){
	if(!playlist[list])break;
	console.log("\n************ PlayList [" + list + "] ************");
	console.log("playlist[" + list + "].background.kind : " + playlist[list].background.kind);
	console.log("playlist[" + list + "].background.color : " + playlist[list].background.color);
	if(playlist[list].background.image.url)console.log("playlist[" + list + "].background.image.url : " + playlist[list].background.image.url);	
	console.log("playlist[" + list + "].divided : " + playlist[list].divided);
	console.log("\n");
	for(var cellNo=1; cellNo<=25; cellNo++){		
		if(playlist[list].cell[cellNo].kind){
			console.log("playlist[" + list + "].cell[" + cellNo + "].kind : " + playlist[list].cell[cellNo].kind);
			console.log("playlist[" + list + "].cell[" + cellNo + "].x : " + playlist[list].cell[cellNo].x);
			console.log("playlist[" + list + "].cell[" + cellNo + "].y : " + playlist[list].cell[cellNo].y);
		}
		if(playlist[list].cell[cellNo].kind == "image"){
			console.log("playlist[" + list + "].cell[" + cellNo + "].image.url[1] : " + playlist[list].cell[cellNo].image.url[1]);
			console.log("playlist[" + list + "].cell[" + cellNo + "].image.url[2] : " + playlist[list].cell[cellNo].image.url[2]);
			console.log("playlist[" + list + "].cell[" + cellNo + "].image.url[3] : " + playlist[list].cell[cellNo].image.url[3]);
			console.log("playlist[" + list + "].cell[" + cellNo + "].image.url[4] : " + playlist[list].cell[cellNo].image.url[4]);
			console.log("playlist[" + list + "].cell[" + cellNo + "].image.url[5] : " + playlist[list].cell[cellNo].image.url[5]);
		}		
		console.log("\n");
	}	
}
*/		
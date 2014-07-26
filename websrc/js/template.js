// Template Class 정의
function Template() {
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
		this.cell[i].belongTo = new Number;
		
		this.cell[i].image = new Object();
		this.cell[i].image.theFirstOrderFiveImages = 1;
		this.cell[i].image.selectedFiveImageNo = 0;
		
		this.cell[i].image.url = new Array();
		this.cell[i].image.url[1] = new String;
		this.cell[i].image.url[2] = new String;
		this.cell[i].image.url[3] = new String;
		this.cell[i].image.url[4] = new String;
		this.cell[i].image.url[5] = new String;
		
		this.cell[i].image.imageInCellPercentage = new Array();
		this.cell[i].image.imageInCellPercentage[1] = 100;
		this.cell[i].image.imageInCellTop = new Array();
		this.cell[i].image.imageInCellLeft = new Array();
		this.cell[i].image.imageInCellWidth = new Array();
		this.cell[i].image.imageInCellHeight = new Array();
		this.cell[i].image.imageInEditPercentage = new Array();
		this.cell[i].image.imageInEditPercentage[1] = 100;
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

// Template Class 초기화
Template.prototype.divided = 0;


// template 인스턴스 생성
template = new Array();


// template 1 정의
template[1] = new Template();
template[1].divided = 2;

template[1].background.kind = "image"
template[1].background.image.url = "../websrc/img/theme_background/01.jpg";

template[1].cell[1].kind = "image";
template[1].cell[1].x = 5;
template[1].cell[1].y = 4;
template[1].cell[1].image.url[1] = "../websrc/img/theme/01/img01.jpg";

template[1].cell[21].kind = "image";
template[1].cell[21].x = 5;
template[1].cell[21].y = 1;
template[1].cell[21].image.url[1] = "../websrc/img/theme/01/img02.jpg";


// template 2 정의
template[2] = new Template();
template[2].divided = 2;

template[2].background.kind = "image"
template[2].background.image.url = "../websrc/img/theme_background/02.jpg";

template[2].cell[1].kind = "image";
template[2].cell[1].x = 5;
template[2].cell[1].y = 4;
template[2].cell[1].image.url[1] = "../websrc/img/theme/02/img01.jpg";

template[2].cell[21].kind = "widgets";
template[2].cell[21].x = 1;
template[2].cell[21].y = 1;
template[2].cell[21].image.url[1] = "../websrc/img/theme/02/w_time_seoul.png";

template[2].cell[22].kind = "widgets";
template[2].cell[22].x = 1;
template[2].cell[22].y = 1;
template[2].cell[22].image.url[1] = "../websrc/img/theme/02/w_time_newyork.png";

template[2].cell[23].kind = "widgets";
template[2].cell[23].x = 1;
template[2].cell[23].y = 1;
template[2].cell[23].image.url[1] = "../websrc/img/theme/02/w_time_London.png";

template[2].cell[24].kind = "widgets";
template[2].cell[24].x = 1;
template[2].cell[24].y = 1;
template[2].cell[24].image.url[1] = "../websrc/img/theme/02/w_time_Paris.png";

template[2].cell[25].kind = "widgets";
template[2].cell[25].x = 1;
template[2].cell[25].y = 1;
template[2].cell[25].image.url[1] = "../websrc/img/theme/02/w_time_HongKong.png";


// template 3 정의
template[3] = new Template();
template[3].divided = 2;

template[3].background.kind = "image"
template[3].background.image.url = "../websrc/img/theme_background/03.jpg";

template[3].cell[1].kind = "image";
template[3].cell[1].x = 5;
template[3].cell[1].y = 4;
template[3].cell[1].image.url[1] = "../websrc/img/theme/03/img01.jpg";

template[3].cell[21].kind = "widgets";
template[3].cell[21].x = 1;
template[3].cell[21].y = 1;
template[3].cell[21].image.url[1] = "../websrc/img/theme/03/w_time_seoul.png";

template[3].cell[22].kind = "widgets";
template[3].cell[22].x = 1;
template[3].cell[22].y = 1;
template[3].cell[22].image.url[1] = "../websrc/img/theme/03/w_weather_Today.png";

template[3].cell[23].kind = "widgets";
template[3].cell[23].x = 1;
template[3].cell[23].y = 1;
template[3].cell[23].image.url[1] = "../websrc/img/theme/03/w_weather_Tomorrow.png";

template[3].cell[24].kind = "widgets";
template[3].cell[24].x = 1;
template[3].cell[24].y = 1;
template[3].cell[24].image.url[1] = "../websrc/img/theme/03/w_weather_Wed27.png";

template[3].cell[25].kind = "widgets";
template[3].cell[25].x = 1;
template[3].cell[25].y = 1;
template[3].cell[25].image.url[1] = "../websrc/img/theme/03/w_weather_Thu28.png";


// template 4 정의
template[4] = new Template();
template[4].divided = 2;

template[4].background.kind = "image"
template[4].background.image.url = "../websrc/img/theme_background/03-1.jpg";

template[4].cell[1].kind = "image";
template[4].cell[1].x = 5;
template[4].cell[1].y = 2;
template[4].cell[1].image.url[1] = "../websrc/img/theme/03-1/img01.jpg";

template[4].cell[11].kind = "image";
template[4].cell[11].x = 5;
template[4].cell[11].y = 3;
template[4].cell[11].image.url[1] = "../websrc/img/theme/03-1/img02.jpg";


// template 5 정의
template[5] = new Template();
template[5].divided = 3;

template[5].background.kind = "image"
template[5].background.image.url = "../websrc/img/theme_background/03-2.jpg";

template[5].cell[1].kind = "image";
template[5].cell[1].x = 5;
template[5].cell[1].y = 2;
template[5].cell[1].image.url[1] = "../websrc/img/theme/03-2/img01.jpg";

template[5].cell[11].kind = "image";
template[5].cell[11].x = 5;
template[5].cell[11].y = 2;
template[5].cell[11].image.url[1] = "../websrc/img/theme/03-2/img02.jpg";

template[5].cell[21].kind = "image";
template[5].cell[21].x = 5;
template[5].cell[21].y = 1;
template[5].cell[21].image.url[1] = "../websrc/img/theme/03-2/img03.jpg";


// template 6 정의
template[6] = new Template();
template[6].divided = 3;

template[6].background.kind = "image"
template[6].background.image.url = "../websrc/img/theme_background/04.jpg";

template[6].cell[1].kind = "widgets";
template[6].cell[1].x = 1;
template[6].cell[1].y = 1;
template[6].cell[1].image.url[1] = "../websrc/img/theme/04/w_time_seoul.png";

template[6].cell[2].kind = "image";
template[6].cell[2].x = 4;
template[6].cell[2].y = 5;
template[6].cell[2].image.url[1] = "../websrc/img/theme/04/img01.jpg";

template[6].cell[6].kind = "widgets";
template[6].cell[6].x = 1;
template[6].cell[6].y = 1;
template[6].cell[6].image.url[1] = "../websrc/img/theme/04/w_weather_Today.png";

template[6].cell[11].kind = "widgets";
template[6].cell[11].x = 1;
template[6].cell[11].y = 1;
template[6].cell[11].image.url[1] = "../websrc/img/theme/04/w_weather_Tomorrow.png";

template[6].cell[16].kind = "widgets";
template[6].cell[16].x = 1;
template[6].cell[16].y = 1;
template[6].cell[16].image.url[1] = "../websrc/img/theme/04/w_weather_Wed27.png";

template[6].cell[21].kind = "widgets";
template[6].cell[21].x = 1;
template[6].cell[21].y = 1;
template[6].cell[21].image.url[1] = "../websrc/img/theme/04/w_weather_Thu28.png";


// template 7 정의
template[7] = new Template();
template[7].divided = 3;

template[7].background.kind = "image"
template[7].background.image.url = "../websrc/img/theme_background/05.jpg";

template[7].cell[1].kind = "image";
template[7].cell[1].x = 4;
template[7].cell[1].y = 5;
template[7].cell[1].image.url[1] = "../websrc/img/theme/05/img.jpg";

template[7].cell[5].kind = "widgets";
template[7].cell[5].x = 1;
template[7].cell[5].y = 1;
template[7].cell[5].image.url[1] = "../websrc/img/theme/05/w_time_seoul.png";

template[7].cell[10].kind = "widgets";
template[7].cell[10].x = 1;
template[7].cell[10].y = 1;
template[7].cell[10].image.url[1] = "../websrc/img/theme/05/w_time_newyork.png";

template[7].cell[15].kind = "widgets";
template[7].cell[15].x = 1;
template[7].cell[15].y = 1;
template[7].cell[15].image.url[1] = "../websrc/img/theme/05/w_time_London.png";

template[7].cell[20].kind = "widgets";
template[7].cell[20].x = 1;
template[7].cell[20].y = 2;
template[7].cell[20].image.url[1] = "../websrc/img/theme/05/w_weather_Today2.png";


// template 8 정의
template[8] = new Template();
template[8].divided = 3;

template[8].background.kind = "image"
template[8].background.image.url = "../websrc/img/theme_background/06.jpg";

template[8].cell[1].kind = "widgets";
template[8].cell[1].x = 1;
template[8].cell[1].y = 1;
template[8].cell[1].image.url[1] = "../websrc/img/theme/06/w_time_seoul.png";

template[8].cell[2].kind = "image";
template[8].cell[2].x = 4;
template[8].cell[2].y = 4;
template[8].cell[2].image.url[1] = "../websrc/img/theme/06/img01.jpg";

template[8].cell[6].kind = "widgets";
template[8].cell[6].x = 1;
template[8].cell[6].y = 1;
template[8].cell[6].image.url[1] = "../websrc/img/theme/06/w_weather_Today.png";

template[8].cell[11].kind = "widgets";
template[8].cell[11].x = 1;
template[8].cell[11].y = 1;
template[8].cell[11].image.url[1] = "../websrc/img/theme/06/w_weather_Tomorrow.png";

template[8].cell[16].kind = "widgets";
template[8].cell[16].x = 1;
template[8].cell[16].y = 1;
template[8].cell[16].image.url[1] = "../websrc/img/theme/06/w_weather_Wed27.png";

template[8].cell[21].kind = "image";
template[8].cell[21].x = 5;
template[8].cell[21].y = 1;
template[8].cell[21].image.url[1] = "../websrc/img/theme/06/img02.jpg";


// template 9 정의
template[9] = new Template();
template[9].divided = 3;

template[9].background.kind = "image"
template[9].background.image.url = "../websrc/img/theme_background/07.jpg";

template[9].cell[1].kind = "widgets";
template[9].cell[1].x = 1;
template[9].cell[1].y = 1;
template[9].cell[1].image.url[1] = "../websrc/img/theme/07/w_time_seoul.png";

template[9].cell[2].kind = "image";
template[9].cell[2].x = 4;
template[9].cell[2].y = 4;
template[9].cell[2].image.url[1] = "../websrc/img/theme/07/img01.jpg";

template[9].cell[6].kind = "widgets";
template[9].cell[6].x = 1;
template[9].cell[6].y = 1;
template[9].cell[6].image.url[1] = "../websrc/img/theme/07/w_time_newyork.png";

template[9].cell[11].kind = "widgets";
template[9].cell[11].x = 1;
template[9].cell[11].y = 1;
template[9].cell[11].image.url[1] = "../websrc/img/theme/07/w_time_London.png";

template[9].cell[16].kind = "widgets";
template[9].cell[16].x = 1;
template[9].cell[16].y = 1;
template[9].cell[16].image.url[1] = "../websrc/img/theme/07/w_time_Paris.png";

template[9].cell[21].kind = "image";
template[9].cell[21].x = 5;
template[9].cell[21].y = 1;
template[9].cell[21].image.url[1] = "../websrc/img/theme/07/img02.jpg";


// template 10 정의
template[10] = new Template();
template[10].divided = 3;

template[10].background.kind = "image"
template[10].background.image.url = "../websrc/img/theme_background/08.jpg";

template[10].cell[1].kind = "widgets";
template[10].cell[1].x = 1;
template[10].cell[1].y = 1;
template[10].cell[1].image.url[1] = "../websrc/img/theme/08/w_time_seoul.png";

template[10].cell[2].kind = "image";
template[10].cell[2].x = 4;
template[10].cell[2].y = 1;
template[10].cell[2].image.url[1] = "../websrc/img/theme/08/img01.jpg";

template[10].cell[6].kind = "widgets";
template[10].cell[6].x = 1;
template[10].cell[6].y = 1;
template[10].cell[6].image.url[1] = "../websrc/img/theme/08/w_weather_Today.png";

template[10].cell[7].kind = "image";
template[10].cell[7].x = 4;
template[10].cell[7].y = 4;
template[10].cell[7].image.url[1] = "../websrc/img/theme/08/img02.jpg";

template[10].cell[11].kind = "widgets";
template[10].cell[11].x = 1;
template[10].cell[11].y = 1;
template[10].cell[11].image.url[1] = "../websrc/img/theme/08/w_weather_Tomorrow.png";

template[10].cell[16].kind = "widgets";
template[10].cell[16].x = 1;
template[10].cell[16].y = 1;
template[10].cell[16].image.url[1] = "../websrc/img/theme/08/w_weather_Wed27.png";


// template 11 정의
template[11] = new Template();
template[11].divided = 3;

template[11].background.kind = "image"
template[11].background.image.url = "../websrc/img/theme_background/08-3.jpg";

template[11].cell[1].kind = "image";
template[11].cell[1].x = 4;
template[11].cell[1].y = 4;
template[11].cell[1].image.url[1] = "../websrc/img/theme/08-3/img01.jpg";

template[11].cell[5].kind = "widgets";
template[11].cell[5].x = 1;
template[11].cell[5].y = 1;
template[11].cell[5].image.url[1] = "../websrc/img/theme/08-3/w_time_seoul.png";

template[11].cell[10].kind = "widgets";
template[11].cell[10].x = 1;
template[11].cell[10].y = 1;
template[11].cell[10].image.url[1] = "../websrc/img/theme/08-3/w_weather_Today.png";

template[11].cell[15].kind = "widgets";
template[11].cell[15].x = 1;
template[11].cell[15].y = 1;
template[11].cell[15].image.url[1] = "../websrc/img/theme/08-3/w_weather_Tomorrow.png";

template[11].cell[20].kind = "widgets";
template[11].cell[20].x = 1;
template[11].cell[20].y = 1;
template[11].cell[20].image.url[1] = "../websrc/img/theme/08-3/w_weather_Wed27.png";

template[11].cell[21].kind = "image";
template[11].cell[21].x = 5;
template[11].cell[21].y = 1;
template[11].cell[21].image.url[1] = "../websrc/img/theme/08-3/img02.jpg";


// template 12 정의
template[12] = new Template();
template[12].divided = 3;

template[12].background.kind = "image"
template[12].background.image.url = "../websrc/img/theme_background/08-4.jpg";

template[12].cell[1].kind = "image";
template[12].cell[1].x = 4;
template[12].cell[1].y = 4;
template[12].cell[1].image.url[1] = "../websrc/img/theme/08-4/img01.jpg";

template[12].cell[5].kind = "widgets";
template[12].cell[5].x = 1;
template[12].cell[5].y = 1;
template[12].cell[5].image.url[1] = "../websrc/img/theme/08-4/w_time_seoul.png";

template[12].cell[10].kind = "widgets";
template[12].cell[10].x = 1;
template[12].cell[10].y = 1;
template[12].cell[10].image.url[1] = "../websrc/img/theme/08-4/w_time_newyork.png";

template[12].cell[15].kind = "widgets";
template[12].cell[15].x = 1;
template[12].cell[15].y = 1;
template[12].cell[15].image.url[1] = "../websrc/img/theme/08-4/w_time_London.png";

template[12].cell[20].kind = "widgets";
template[12].cell[20].x = 1;
template[12].cell[20].y = 1;
template[12].cell[20].image.url[1] = "../websrc/img/theme/08-4/w_time_Paris.png";

template[12].cell[21].kind = "image";
template[12].cell[21].x = 5;
template[12].cell[21].y = 1;
template[12].cell[21].image.url[1] = "../websrc/img/theme/08-4/img02.jpg";


// template 13 정의
template[13] = new Template();
template[13].divided = 3;

template[13].background.kind = "image"
template[13].background.image.url = "../websrc/img/theme_background/09.jpg";

template[13].cell[1].kind = "image";
template[13].cell[1].x = 1;
template[13].cell[1].y = 5;
template[13].cell[1].image.url[1] = "../websrc/img/theme/09/img01.jpg";

template[13].cell[2].kind = "image";
template[13].cell[2].x = 4;
template[13].cell[2].y = 4;
template[13].cell[2].image.url[1] = "../websrc/img/theme/09/img02.jpg";

template[13].cell[22].kind = "widgets";
template[13].cell[22].x = 1;
template[13].cell[22].y = 1;
template[13].cell[22].image.url[1] = "../websrc/img/theme/09/w_time_seoul.png";

template[13].cell[23].kind = "widgets";
template[13].cell[23].x = 1;
template[13].cell[23].y = 1;
template[13].cell[23].image.url[1] = "../websrc/img/theme/09/w_weather_Today.png";

template[13].cell[24].kind = "widgets";
template[13].cell[24].x = 1;
template[13].cell[24].y = 1;
template[13].cell[24].image.url[1] = "../websrc/img/theme/09/w_weather_Tomorrow.png";

template[13].cell[25].kind = "widgets";
template[13].cell[25].x = 1;
template[13].cell[25].y = 1;
template[13].cell[25].image.url[1] = "../websrc/img/theme/09/w_weather_Wed27.png";


// template 14 정의
template[14] = new Template();
template[14].divided = 3;

template[14].background.kind = "image"
template[14].background.image.url = "../websrc/img/theme_background/09-5.jpg";

template[14].cell[1].kind = "image";
template[14].cell[1].x = 4;
template[14].cell[1].y = 4;
template[14].cell[1].image.url[1] = "../websrc/img/theme/09-5/img01.jpg";

template[14].cell[5].kind = "image";
template[14].cell[5].x = 1;
template[14].cell[5].y = 5;
template[14].cell[5].image.url[1] = "../websrc/img/theme/09-5/img02.jpg";

template[14].cell[21].kind = "widgets";
template[14].cell[21].x = 1;
template[14].cell[21].y = 1;
template[14].cell[21].image.url[1] = "../websrc/img/theme/09-5/w_time_seoul.png";

template[14].cell[22].kind = "widgets";
template[14].cell[22].x = 1;
template[14].cell[22].y = 1;
template[14].cell[22].image.url[1] = "../websrc/img/theme/09-5/w_weather_Today.png";

template[14].cell[23].kind = "widgets";
template[14].cell[23].x = 1;
template[14].cell[23].y = 1;
template[14].cell[23].image.url[1] = "../websrc/img/theme/09-5/w_weather_Tomorrow.png";

template[14].cell[24].kind = "widgets";
template[14].cell[24].x = 1;
template[14].cell[24].y = 1;
template[14].cell[24].image.url[1] = "../websrc/img/theme/09-5/w_weather_Wed27.png";


// template 15 정의
template[15] = new Template();
template[15].divided = 3;

template[15].background.kind = "image"
template[15].background.image.url = "../websrc/img/theme_background/10.jpg";

template[15].cell[1].kind = "widgets";
template[15].cell[1].x = 1;
template[15].cell[1].y = 1;
template[15].cell[1].image.url[1] = "../websrc/img/theme/10/w_time_seoul.png";

template[15].cell[2].kind = "widgets";
template[15].cell[2].x = 1;
template[15].cell[2].y = 1;
template[15].cell[2].image.url[1] = "../websrc/img/theme/10/w_time_newyork.png";

template[15].cell[6].kind = "widgets";
template[15].cell[6].x = 1;
template[15].cell[6].y = 2;
template[15].cell[6].image.url[1] = "../websrc/img/theme/10/w_weather_Today2.png";

template[15].cell[7].kind = "widgets";
template[15].cell[7].x = 1;
template[15].cell[7].y = 1;
template[15].cell[7].image.url[1] = "../websrc/img/theme/10/w_weather_Tomorrow.png";

template[15].cell[12].kind = "widgets";
template[15].cell[12].x = 1;
template[15].cell[12].y = 1;
template[15].cell[12].image.url[1] = "../websrc/img/theme/10/w_weather_Wed27.png";

template[15].cell[3].kind = "image";
template[15].cell[3].x = 3;
template[15].cell[3].y = 3;
template[15].cell[3].image.url[1] = "../websrc/img/theme/10/img01.jpg";

template[15].cell[16].kind = "image";
template[15].cell[16].x = 5;
template[15].cell[16].y = 2;
template[15].cell[16].image.url[1] = "../websrc/img/theme/10/img02.jpg";


// template 16 정의
template[16] = new Template();
template[16].divided = 3;

template[16].background.kind = "image"
template[16].background.image.url = "../websrc/img/theme_background/11.jpg";

template[16].cell[1].kind = "image";
template[16].cell[1].x = 3;
template[16].cell[1].y = 3;
template[16].cell[1].image.url[1] = "../websrc/img/theme/11/img01.jpg";

template[16].cell[4].kind = "widgets";
template[16].cell[4].x = 1;
template[16].cell[4].y = 1;
template[16].cell[4].image.url[1] = "../websrc/img/theme/11/w_time_seoul.png";

template[16].cell[5].kind = "widgets";
template[16].cell[5].x = 1;
template[16].cell[5].y = 1;
template[16].cell[5].image.url[1] = "../websrc/img/theme/11/w_time_newyork.png";

template[16].cell[9].kind = "widgets";
template[16].cell[9].x = 1;
template[16].cell[9].y = 2;
template[16].cell[9].image.url[1] = "../websrc/img/theme/11/w_weather_Today2.png";

template[16].cell[10].kind = "widgets";
template[16].cell[10].x = 1;
template[16].cell[10].y = 1;
template[16].cell[10].image.url[1] = "../websrc/img/theme/11/w_weather_Tomorrow.png";

template[16].cell[15].kind = "widgets";
template[16].cell[15].x = 1;
template[16].cell[15].y = 1;
template[16].cell[15].image.url[1] = "../websrc/img/theme/11/w_weather_Wed27.png";

template[16].cell[16].kind = "image";
template[16].cell[16].x = 5;
template[16].cell[16].y = 2;
template[16].cell[16].image.url[1] = "../websrc/img/theme/11/img02.jpg";


// template 17 정의
template[17] = new Template();
template[17].divided = 3;

template[17].background.kind = "image"
template[17].background.image.url = "../websrc/img/theme_background/12.jpg";

template[17].cell[1].kind = "image";
template[17].cell[1].x = 3;
template[17].cell[1].y = 3;
template[17].cell[1].image.url[1] = "../websrc/img/theme/12/img01.jpg";

template[17].cell[4].kind = "image";
template[17].cell[4].x = 2;
template[17].cell[4].y = 3;
template[17].cell[4].image.url[1] = "../websrc/img/theme/12/img02.jpg";

template[17].cell[16].kind = "image";
template[17].cell[16].x = 5;
template[17].cell[16].y = 2;
template[17].cell[16].image.url[1] = "../websrc/img/theme/12/img03.jpg";


// template 18 정의
template[18] = new Template();
template[18].divided = 3;

template[18].background.kind = "image"
template[18].background.image.url = "../websrc/img/theme_background/13.jpg";

template[18].cell[1].kind = "image";
template[18].cell[1].x = 3;
template[18].cell[1].y = 4;
template[18].cell[1].image.url[1] = "../websrc/img/theme/13/img01.jpg";

template[18].cell[4].kind = "image";
template[18].cell[4].x = 2;
template[18].cell[4].y = 4;
template[18].cell[4].image.url[1] = "../websrc/img/theme/13/img02.jpg";

template[18].cell[21].kind = "image";
template[18].cell[21].x = 5;
template[18].cell[21].y = 1;
template[18].cell[21].image.url[1] = "../websrc/img/theme/13/img03.jpg";


// template 19 정의
template[19] = new Template();
template[19].divided = 3;

template[19].background.kind = "image"
template[19].background.image.url = "../websrc/img/theme_background/14.jpg";

template[19].cell[1].kind = "image";
template[19].cell[1].x = 2;
template[19].cell[1].y = 3;
template[19].cell[1].image.url[1] = "../websrc/img/theme/14/img01.jpg";

template[19].cell[3].kind = "image";
template[19].cell[3].x = 3;
template[19].cell[3].y = 3;
template[19].cell[3].image.url[1] = "../websrc/img/theme/14/img02.jpg";

template[19].cell[16].kind = "widgets";
template[19].cell[16].x = 1;
template[19].cell[16].y = 2;
template[19].cell[16].image.url[1] = "../websrc/img/theme/14/w_weather_Today2.png";

template[19].cell[17].kind = "widgets";
template[19].cell[17].x = 1;
template[19].cell[17].y = 1;
template[19].cell[17].image.url[1] = "../websrc/img/theme/14/w_weather_Tomorrow.png";

template[19].cell[18].kind = "image";
template[19].cell[18].x = 3;
template[19].cell[18].y = 2;
template[19].cell[18].image.url[1] = "../websrc/img/theme/14/img03.jpg";

template[19].cell[22].kind = "widgets";
template[19].cell[22].x = 1;
template[19].cell[22].y = 1;
template[19].cell[22].image.url[1] = "../websrc/img/theme/14/w_weather_Wed27.png";


// template 20 정의
template[20] = new Template();
template[20].divided = 4;

template[20].background.kind = "image"
template[20].background.image.url = "../websrc/img/theme_background/14-6.jpg";

template[20].cell[1].kind = "image";
template[20].cell[1].x = 5;
template[20].cell[1].y = 1;
template[20].cell[1].image.url[1] = "../websrc/img/theme/14-6/img01.jpg";

template[20].cell[6].kind = "image";
template[20].cell[6].x = 3;
template[20].cell[6].y = 4;
template[20].cell[6].image.url[1] = "../websrc/img/theme/14-6/img02.jpg";

template[20].cell[9].kind = "image";
template[20].cell[9].x = 2;
template[20].cell[9].y = 2;
template[20].cell[9].image.url[1] = "../websrc/img/theme/14-6/img03.jpg";

template[20].cell[19].kind = "image";
template[20].cell[19].x = 2;
template[20].cell[19].y = 2;
template[20].cell[19].image.url[1] = "../websrc/img/theme/14-6/04.jpg";


// template 21 정의
template[21] = new Template();
template[21].divided = 4;

template[21].background.kind = "image"
template[21].background.image.url = "../websrc/img/theme_background/14-7.jpg";

template[21].cell[1].kind = "image";
template[21].cell[1].x = 3;
template[21].cell[1].y = 4;
template[21].cell[1].image.url[1] = "../websrc/img/theme/14-7/img01.jpg";

template[21].cell[4].kind = "image";
template[21].cell[4].x = 2;
template[21].cell[4].y = 2;
template[21].cell[4].image.url[1] = "../websrc/img/theme/14-7/img02.jpg";

template[21].cell[14].kind = "image";
template[21].cell[14].x = 2;
template[21].cell[14].y = 2;
template[21].cell[14].image.url[1] = "../websrc/img/theme/14-7/img03.jpg";

template[21].cell[21].kind = "widgets";
template[21].cell[21].x = 1;
template[21].cell[21].y = 1;
template[21].cell[21].image.url[1] = "../websrc/img/theme/14-7/w_time_seoul.png";

template[21].cell[22].kind = "widgets";
template[21].cell[22].x = 1;
template[21].cell[22].y = 1;
template[21].cell[22].image.url[1] = "../websrc/img/theme/14-7/w_weather_Today.png";

template[21].cell[23].kind = "widgets";
template[21].cell[23].x = 1;
template[21].cell[23].y = 1;
template[21].cell[23].image.url[1] = "../websrc/img/theme/14-7/w_weather_Tomorrow.png";

template[21].cell[24].kind = "widgets";
template[21].cell[24].x = 1;
template[21].cell[24].y = 1;
template[21].cell[24].image.url[1] = "../websrc/img/theme/14-7/w_weather_Wed27.png";

template[21].cell[25].kind = "widgets";
template[21].cell[25].x = 1;
template[21].cell[25].y = 1;
template[21].cell[25].image.url[1] = "../websrc/img/theme/14-7/w_weather_Thu28.png";


// template 22 정의
template[22] = new Template();
template[22].divided = 3;

template[22].background.kind = "image"
template[22].background.image.url = "../websrc/img/theme_background/14-8.jpg";

template[22].cell[1].kind = "image";
template[22].cell[1].x = 3;
template[22].cell[1].y = 2;
template[22].cell[1].image.url[1] = "../websrc/img/theme/14-8/img01.jpg";

template[22].cell[4].kind = "image";
template[22].cell[4].x = 2;
template[22].cell[4].y = 5;
template[22].cell[4].image.url[1] = "../websrc/img/theme/14-8/img03.jpg";

template[22].cell[11].kind = "image";
template[22].cell[11].x = 3;
template[22].cell[11].y = 3;
template[22].cell[11].image.url[1] = "../websrc/img/theme/14-8/img02.jpg";


// template 23 정의
template[23] = new Template();
template[23].divided = 4;

template[23].background.kind = "image"
template[23].background.image.url = "../websrc/img/theme_background/14-9.jpg";

template[23].cell[1].kind = "image";
template[23].cell[1].x = 3;
template[23].cell[1].y = 2;
template[23].cell[1].image.url[1] = "../websrc/img/theme/14-9/img01.jpg";

template[23].cell[4].kind = "image";
template[23].cell[4].x = 2;
template[23].cell[4].y = 4;
template[23].cell[4].image.url[1] = "../websrc/img/theme/14-9/img03.jpg";

template[23].cell[11].kind = "image";
template[23].cell[11].x = 3;
template[23].cell[11].y = 2;
template[23].cell[11].image.url[1] = "../websrc/img/theme/14-9/img02.jpg";

template[23].cell[21].kind = "image";
template[23].cell[21].x = 5;
template[23].cell[21].y = 1;
template[23].cell[21].image.url[1] = "../websrc/img/theme/14-9/img04.jpg";


// template 24 정의
template[24] = new Template();
template[24].divided = 4;

template[24].background.kind = "image"
template[24].background.image.url = "../websrc/img/theme_background/14-10.jpg";

template[24].cell[1].kind = "image";
template[24].cell[1].x = 3;
template[24].cell[1].y = 2;
template[24].cell[1].image.url[1] = "../websrc/img/theme/14-10/img01.jpg";

template[24].cell[4].kind = "image";
template[24].cell[4].x = 2;
template[24].cell[4].y = 4;
template[24].cell[4].image.url[1] = "../websrc/img/theme/14-10/img03.jpg";

template[24].cell[11].kind = "image";
template[24].cell[11].x = 3;
template[24].cell[11].y = 2;
template[24].cell[11].image.url[1] = "../websrc/img/theme/14-10/img02.jpg";

template[24].cell[21].kind = "widgets";
template[24].cell[21].x = 1;
template[24].cell[21].y = 1;
template[24].cell[21].image.url[1] = "../websrc/img/theme/14-10/w_time_seoul.png";

template[24].cell[22].kind = "widgets";
template[24].cell[22].x = 1;
template[24].cell[22].y = 1;
template[24].cell[22].image.url[1] = "../websrc/img/theme/14-10/w_weather_Today.png";

template[24].cell[23].kind = "widgets";
template[24].cell[23].x = 1;
template[24].cell[23].y = 1;
template[24].cell[23].image.url[1] = "../websrc/img/theme/14-10/w_weather_Tomorrow.png";

template[24].cell[24].kind = "widgets";
template[24].cell[24].x = 1;
template[24].cell[24].y = 1;
template[24].cell[24].image.url[1] = "../websrc/img/theme/14-10/w_weather_Wed27.png";

template[24].cell[25].kind = "widgets";
template[24].cell[25].x = 1;
template[24].cell[25].y = 1;
template[24].cell[25].image.url[1] = "../websrc/img/theme/14-10/w_weather_Thu28.png";


// template 25 정의
template[25] = new Template();
template[25].divided = 4;

template[25].background.kind = "image"
template[25].background.image.url = "../websrc/img/theme_background/14-11.jpg";

template[25].cell[1].kind = "image";
template[25].cell[1].x = 3;
template[25].cell[1].y = 2;
template[25].cell[1].image.url[1] = "../websrc/img/theme/14-11/img01.jpg";

template[25].cell[4].kind = "image";
template[25].cell[4].x = 2;
template[25].cell[4].y = 4;
template[25].cell[4].image.url[1] = "../websrc/img/theme/14-11/img03.jpg";

template[25].cell[11].kind = "image";
template[25].cell[11].x = 3;
template[25].cell[11].y = 2;
template[25].cell[11].image.url[1] = "../websrc/img/theme/14-11/img02.jpg";

template[25].cell[21].kind = "widgets";
template[25].cell[21].x = 1;
template[25].cell[21].y = 1;
template[25].cell[21].image.url[1] = "../websrc/img/theme/14-11/w_time_seoul.png";

template[25].cell[22].kind = "widgets";
template[25].cell[22].x = 1;
template[25].cell[22].y = 1;
template[25].cell[22].image.url[1] = "../websrc/img/theme/14-11/w_time_newyork.png";

template[25].cell[23].kind = "widgets";
template[25].cell[23].x = 1;
template[25].cell[23].y = 1;
template[25].cell[23].image.url[1] = "../websrc/img/theme/14-11/w_time_London.png";

template[25].cell[24].kind = "widgets";
template[25].cell[24].x = 1;
template[25].cell[24].y = 1;
template[25].cell[24].image.url[1] = "../websrc/img/theme/14-11/w_time_Paris.png";

template[25].cell[25].kind = "widgets";
template[25].cell[25].x = 1;
template[25].cell[25].y = 1;
template[25].cell[25].image.url[1] = "../websrc/img/theme/14-11/w_time_HongKong.png";


// template 26 정의
template[26] = new Template();
template[26].divided = 3;

template[26].background.kind = "image"
template[26].background.image.url = "../websrc/img/theme_background/14-11.jpg";

template[26].cell[1].kind = "widgets";
template[26].cell[1].x = 1;
template[26].cell[1].y = 1;
template[26].cell[1].image.url[1] = "../websrc/img/theme/14-11/w_time_seoul.png";

template[26].cell[2].kind = "image";
template[26].cell[2].x = 4;
template[26].cell[2].y = 1;
template[26].cell[2].image.url[1] = "../websrc/img/theme/15/img01.jpg";

template[26].cell[6].kind = "image";
template[26].cell[6].x = 2;
template[26].cell[6].y = 3;
template[26].cell[6].image.url[1] = "../websrc/img/theme/15/img02.jpg";

template[26].cell[8].kind = "image";
template[26].cell[8].x = 3;
template[26].cell[8].y = 3;
template[26].cell[8].image.url[1] = "../websrc/img/theme/15/img03.jpg";

template[26].cell[21].kind = "image";
template[26].cell[21].x = 5;
template[26].cell[21].y = 1;
template[26].cell[21].image.url[1] = "../websrc/img/theme/15/img04.jpg";


// template 27 정의
template[27] = new Template();
template[27].divided = 4;

template[27].background.kind = "image"
template[27].background.image.url = "../websrc/img/theme_background/16.jpg";

template[27].cell[1].kind = "image";
template[27].cell[1].x = 1;
template[27].cell[1].y = 5;
template[27].cell[1].image.url[1] = "../websrc/img/theme/16/img01.jpg";

template[27].cell[2].kind = "image";
template[27].cell[2].x = 4;
template[27].cell[2].y = 1;
template[27].cell[2].image.url[1] = "../websrc/img/theme/16/img02.jpg";

template[27].cell[7].kind = "image";
template[27].cell[7].x = 2;
template[27].cell[7].y = 4;
template[27].cell[7].image.url[1] = "../websrc/img/theme/16/img03.jpg";

template[27].cell[9].kind = "image";
template[27].cell[9].x = 2;
template[27].cell[9].y = 4;
template[27].cell[9].image.url[1] = "../websrc/img/theme/16/img04.jpg";


// template 28 정의
template[28] = new Template();
template[28].divided = 4;

template[28].background.kind = "image"
template[28].background.image.url = "../websrc/img/theme_background/17.jpg";

template[28].cell[1].kind = "widgets";
template[28].cell[1].x = 1;
template[28].cell[1].y = 1;
template[28].cell[1].image.url[1] = "../websrc/img/theme/17/w_time_seoul.png";

template[28].cell[2].kind = "widgets";
template[28].cell[2].x = 1;
template[28].cell[2].y = 1;
template[28].cell[2].image.url[1] = "../websrc/img/theme/17/w_weather_Today.png";

template[28].cell[3].kind = "widgets";
template[28].cell[3].x = 1;
template[28].cell[3].y = 1;
template[28].cell[3].image.url[1] = "../websrc/img/theme/17/w_weather_Tomorrow.png";

template[28].cell[4].kind = "widgets";
template[28].cell[4].x = 1;
template[28].cell[4].y = 1;
template[28].cell[4].image.url[1] = "../websrc/img/theme/17/w_weather_Wed27.png";

template[28].cell[5].kind = "image";
template[28].cell[5].x = 1;
template[28].cell[5].y = 4;
template[28].cell[5].image.url[1] = "../websrc/img/theme/17/img03.jpg";

template[28].cell[6].kind = "image";
template[28].cell[6].x = 1;
template[28].cell[6].y = 4;
template[28].cell[6].image.url[1] = "../websrc/img/theme/17/img01.jpg";

template[28].cell[7].kind = "image";
template[28].cell[7].x = 3;
template[28].cell[7].y = 3;
template[28].cell[7].image.url[1] = "../websrc/img/theme/17/img02.jpg";

template[28].cell[22].kind = "image";
template[28].cell[22].x = 4;
template[28].cell[22].y = 1;
template[28].cell[22].image.url[1] = "../websrc/img/theme/17/img04.jpg";


// template 29 정의
template[29] = new Template();
template[29].divided = 4;

template[29].background.kind = "image"
template[29].background.image.url = "../websrc/img/theme_background/18.jpg";

template[29].cell[1].kind = "image";
template[29].cell[1].x = 2;
template[29].cell[1].y = 1;
template[29].cell[1].image.url[1] = "../websrc/img/theme/18/img01.jpg";

template[29].cell[3].kind = "widgets";
template[29].cell[3].x = 1;
template[29].cell[3].y = 1;
template[29].cell[3].image.url[1] = "../websrc/img/theme/18/w_time_seoul.png";

template[29].cell[4].kind = "widgets";
template[29].cell[4].x = 1;
template[29].cell[4].y = 1;
template[29].cell[4].image.url[1] = "../websrc/img/theme/18/w_weather_Today.png";

template[29].cell[5].kind = "widgets";
template[29].cell[5].x = 1;
template[29].cell[5].y = 1;
template[29].cell[5].image.url[1] = "../websrc/img/theme/18/w_weather_Tomorrow.png";

template[29].cell[6].kind = "image";
template[29].cell[6].x = 1;
template[29].cell[6].y = 4;
template[29].cell[6].image.url[1] = "../websrc/img/theme/18/img02.jpg";

template[29].cell[7].kind = "image";
template[29].cell[7].x = 3;
template[29].cell[7].y = 3;
template[29].cell[7].image.url[1] = "../websrc/img/theme/18/img03.jpg";

template[29].cell[10].kind = "image";
template[29].cell[10].x = 1;
template[29].cell[10].y = 3;
template[29].cell[10].image.url[1] = "../websrc/img/theme/18/img04.jpg";

template[29].cell[22].kind = "image";
template[29].cell[22].x = 4;
template[29].cell[22].y = 1;
template[29].cell[22].image.url[1] = "../websrc/img/theme/18/img05.jpg";


// template 30 정의
template[30] = new Template();
template[30].divided = 4;

template[30].background.kind = "image"
template[30].background.image.url = "../websrc/img/theme_background/18-12.jpg";

template[30].cell[1].kind = "image";
template[30].cell[1].x = 5;
template[30].cell[1].y = 1;
template[30].cell[1].image.url[1] = "../websrc/img/theme/18-12/img01.jpg";

template[30].cell[6].kind = "image";
template[30].cell[6].x = 1;
template[30].cell[6].y = 3;
template[30].cell[6].image.url[1] = "../websrc/img/theme/18-12/img02.jpg";

template[30].cell[7].kind = "image";
template[30].cell[7].x = 3;
template[30].cell[7].y = 3;
template[30].cell[7].image.url[1] = "../websrc/img/theme/18-12/img03.jpg";

template[30].cell[10].kind = "image";
template[30].cell[10].x = 1;
template[30].cell[10].y = 3;
template[30].cell[10].image.url[1] = "../websrc/img/theme/18-12/img04.jpg";

template[30].cell[21].kind = "widgets";
template[30].cell[21].x = 1;
template[30].cell[21].y = 1;
template[30].cell[21].image.url[1] = "../websrc/img/theme/18-12/w_time_seoul.png";

template[30].cell[22].kind = "widgets";
template[30].cell[22].x = 1;
template[30].cell[22].y = 1;
template[30].cell[22].image.url[1] = "../websrc/img/theme/18-12/w_weather_Today.png";

template[30].cell[23].kind = "widgets";
template[30].cell[23].x = 1;
template[30].cell[23].y = 1;
template[30].cell[23].image.url[1] = "../websrc/img/theme/18-12/w_weather_Tomorrow.png";

template[30].cell[24].kind = "widgets";
template[30].cell[24].x = 1;
template[30].cell[24].y = 1;
template[30].cell[24].image.url[1] = "../websrc/img/theme/18-12/w_weather_Wed27.png";

template[30].cell[25].kind = "widgets";
template[30].cell[25].x = 1;
template[30].cell[25].y = 1;
template[30].cell[25].image.url[1] = "../websrc/img/theme/18-12/w_weather_Thu28.png";


// template 31 정의
template[31] = new Template();
template[31].divided = 4;

template[31].background.kind = "image"
template[31].background.image.url = "../websrc/img/theme_background/19.jpg";

template[31].cell[1].kind = "image";
template[31].cell[1].x = 4;
template[31].cell[1].y = 1;
template[31].cell[1].image.url[1] = "../websrc/img/theme/19/img01.jpg";

template[31].cell[6].kind = "image";
template[31].cell[6].x = 2;
template[31].cell[6].y = 4;
template[31].cell[6].image.url[1] = "../websrc/img/theme/19/img02.jpg";

template[31].cell[8].kind = "image";
template[31].cell[8].x = 2;
template[31].cell[8].y = 2;
template[31].cell[8].image.url[1] = "../websrc/img/theme/19/img03.jpg";

template[31].cell[18].kind = "image";
template[31].cell[18].x = 2;
template[31].cell[18].y = 2;
template[31].cell[18].image.url[1] = "../websrc/img/theme/19/img04.jpg";

template[31].cell[5].kind = "widgets";
template[31].cell[5].x = 1;
template[31].cell[5].y = 1;
template[31].cell[5].image.url[1] = "../websrc/img/theme/19/w_time_seoul.png";

template[31].cell[10].kind = "widgets";
template[31].cell[10].x = 1;
template[31].cell[10].y = 1;
template[31].cell[10].image.url[1] = "../websrc/img/theme/19/w_weather_Today.png";

template[31].cell[15].kind = "widgets";
template[31].cell[15].x = 1;
template[31].cell[15].y = 1;
template[31].cell[15].image.url[1] = "../websrc/img/theme/19/w_weather_Tomorrow.png";

template[31].cell[20].kind = "widgets";
template[31].cell[20].x = 1;
template[31].cell[20].y = 1;
template[31].cell[20].image.url[1] = "../websrc/img/theme/19/w_weather_Wed27.png";

template[31].cell[25].kind = "widgets";
template[31].cell[25].x = 1;
template[31].cell[25].y = 1;
template[31].cell[25].image.url[1] = "../websrc/img/theme/19/w_weather_Thu28.png";


// template 32 정의
template[32] = new Template();
template[32].divided = 4;

template[32].background.kind = "image"
template[32].background.image.url = "../websrc/img/theme_background/19-14.jpg";

template[32].cell[1].kind = "widgets";
template[32].cell[1].x = 1;
template[32].cell[1].y = 1;
template[32].cell[1].image.url[1] = "../websrc/img/theme/19-14/w_time_seoul.png";

template[32].cell[6].kind = "widgets";
template[32].cell[6].x = 1;
template[32].cell[6].y = 1;
template[32].cell[6].image.url[1] = "../websrc/img/theme/19-14/w_weather_Today.png";

template[32].cell[11].kind = "widgets";
template[32].cell[11].x = 1;
template[32].cell[11].y = 1;
template[32].cell[11].image.url[1] = "../websrc/img/theme/19-14/w_weather_Tomorrow.png";

template[32].cell[16].kind = "widgets";
template[32].cell[16].x = 1;
template[32].cell[16].y = 1;
template[32].cell[16].image.url[1] = "../websrc/img/theme/19-14/w_weather_Wed27.png";

template[32].cell[21].kind = "widgets";
template[32].cell[21].x = 1;
template[32].cell[21].y = 1;
template[32].cell[21].image.url[1] = "../websrc/img/theme/19-14/w_weather_Thu28.png";

template[32].cell[2].kind = "image";
template[32].cell[2].x = 4;
template[32].cell[2].y = 1;
template[32].cell[2].image.url[1] = "../websrc/img/theme/19-14/img01.jpg";

template[32].cell[7].kind = "image";
template[32].cell[7].x = 2;
template[32].cell[7].y = 2;
template[32].cell[7].image.url[1] = "../websrc/img/theme/19-14/img02.jpg";

template[32].cell[9].kind = "image";
template[32].cell[9].x = 2;
template[32].cell[9].y = 2;
template[32].cell[9].image.url[1] = "../websrc/img/theme/19-14/img03.jpg";

template[32].cell[17].kind = "image";
template[32].cell[17].x = 2;
template[32].cell[17].y = 2;
template[32].cell[17].image.url[1] = "../websrc/img/theme/19-14/img04.jpg";

template[32].cell[19].kind = "image";
template[32].cell[19].x = 2;
template[32].cell[19].y = 2;
template[32].cell[19].image.url[1] = "../websrc/img/theme/19-14/img05.jpg";


// template 33 정의
template[33] = new Template();
template[33].divided = 6;

template[33].background.kind = "image"
template[33].background.image.url = "../websrc/img/theme_background/20.jpg";

template[33].cell[1].kind = "image";
template[33].cell[1].x = 5;
template[33].cell[1].y = 1;
template[33].cell[1].image.url[1] = "../websrc/img/theme/20/img01.jpg";

template[33].cell[6].kind = "image";
template[33].cell[6].x = 3;
template[33].cell[6].y = 4;
template[33].cell[6].image.url[1] = "../websrc/img/theme/20/img02.jpg";

template[33].cell[9].kind = "image";
template[33].cell[9].x = 1;
template[33].cell[9].y = 2;
template[33].cell[9].image.url[1] = "../websrc/img/theme/20/img03.jpg";

template[33].cell[10].kind = "image";
template[33].cell[10].x = 1;
template[33].cell[10].y = 2;
template[33].cell[10].image.url[1] = "../websrc/img/theme/20/img04.jpg";

template[33].cell[19].kind = "image";
template[33].cell[19].x = 1;
template[33].cell[19].y = 2;
template[33].cell[19].image.url[1] = "../websrc/img/theme/20/img05.jpg";

template[33].cell[20].kind = "image";
template[33].cell[20].x = 1;
template[33].cell[20].y = 2;
template[33].cell[20].image.url[1] = "../websrc/img/theme/20/img06.jpg";


// template 34 정의
template[34] = new Template();
template[34].divided = 6;

template[34].background.kind = "image"
template[34].background.image.url = "../websrc/img/theme_background/21.jpg";

template[34].cell[1].kind = "image";
template[34].cell[1].x = 4;
template[34].cell[1].y = 1;
template[34].cell[1].image.url[1] = "../websrc/img/theme/21/img01.jpg";

template[34].cell[5].kind = "widgets";
template[34].cell[5].x = 1;
template[34].cell[5].y = 1;
template[34].cell[5].image.url[1] = "../websrc/img/theme/21/w_time_seoul.png";

template[34].cell[6].kind = "image";
template[34].cell[6].x = 2;
template[34].cell[6].y = 4;
template[34].cell[6].image.url[1] = "../websrc/img/theme/21/img02.jpg";

template[34].cell[8].kind = "image";
template[34].cell[8].x = 1;
template[34].cell[8].y = 2;
template[34].cell[8].image.url[1] = "../websrc/img/theme/21/img03.jpg";

template[34].cell[9].kind = "image";
template[34].cell[9].x = 1;
template[34].cell[9].y = 2;
template[34].cell[9].image.url[1] = "../websrc/img/theme/21/img04.jpg";

template[34].cell[10].kind = "image";
template[34].cell[10].x = 1;
template[34].cell[10].y = 2;
template[34].cell[10].image.url[1] = "../websrc/img/theme/21/img05.jpg";

template[34].cell[18].kind = "image";
template[34].cell[18].x = 1;
template[34].cell[18].y = 2;
template[34].cell[18].image.url[1] = "../websrc/img/theme/21/img06.jpg";

template[34].cell[19].kind = "image";
template[34].cell[19].x = 1;
template[34].cell[19].y = 2;
template[34].cell[19].image.url[1] = "../websrc/img/theme/21/img07.jpg";

template[34].cell[20].kind = "image";
template[34].cell[20].x = 1;
template[34].cell[20].y = 2;
template[34].cell[20].image.url[1] = "../websrc/img/theme/21/img08.jpg";


// template 35 정의
template[35] = new Template();
template[35].divided = 5;

template[35].background.kind = "image"
template[35].background.image.url = "../websrc/img/theme_background/22.jpg";

template[35].cell[1].kind = "image";
template[35].cell[1].x = 1;
template[35].cell[1].y = 5;
template[35].cell[1].image.url[1] = "../websrc/img/theme/22/img01.jpg";

template[35].cell[2].kind = "image";
template[35].cell[2].x = 4;
template[35].cell[2].y = 1;
template[35].cell[2].image.url[1] = "../websrc/img/theme/22/img02.jpg";

template[35].cell[7].kind = "image";
template[35].cell[7].x = 2;
template[35].cell[7].y = 2;
template[35].cell[7].image.url[1] = "../websrc/img/theme/22/img03.jpg";

template[35].cell[9].kind = "image";
template[35].cell[9].x = 2;
template[35].cell[9].y = 4;
template[35].cell[9].image.url[1] = "../websrc/img/theme/22/img05.jpg";

template[35].cell[17].kind = "image";
template[35].cell[17].x = 2;
template[35].cell[17].y = 2;
template[35].cell[17].image.url[1] = "../websrc/img/theme/22/img04.jpg";


// template 36 정의
template[36] = new Template();
template[36].divided = 5;

template[36].background.kind = "image"
template[36].background.image.url = "../websrc/img/theme_background/23.jpg";

template[36].cell[1].kind = "widgets";
template[36].cell[1].x = 1;
template[36].cell[1].y = 1;
template[36].cell[1].image.url[1] = "../websrc/img/theme/23/w_time_seoul.png";


template[36].cell[2].kind = "image";
template[36].cell[2].x = 3;
template[36].cell[2].y = 5;
template[36].cell[2].image.url[1] = "../websrc/img/theme/23/img02.jpg";

template[36].cell[5].kind = "image";
template[36].cell[5].x = 1;
template[36].cell[5].y = 5;
template[36].cell[5].image.url[1] = "../websrc/img/theme/23/img03.jpg";

template[36].cell[6].kind = "image";
template[36].cell[6].x = 1;
template[36].cell[6].y = 4;
template[36].cell[6].image.url[1] = "../websrc/img/theme/23/img01.jpg";


// template 37 정의
template[37] = new Template();
template[37].divided = 5;

template[37].background.kind = "image"
template[37].background.image.url = "../websrc/img/theme_background/24.jpg";

template[37].cell[1].kind = "image";
template[37].cell[1].x = 1;
template[37].cell[1].y = 5;
template[37].cell[1].image.url[1] = "../websrc/img/theme/24/img01.jpg";

template[37].cell[2].kind = "widgets";
template[37].cell[2].x = 1;
template[37].cell[2].y = 1;
template[37].cell[2].image.url[1] = "../websrc/img/theme/24/w_time_seoul.png";

template[37].cell[3].kind = "widgets";
template[37].cell[3].x = 1;
template[37].cell[3].y = 1;
template[37].cell[3].image.url[1] = "../websrc/img/theme/24/w_weather_Today.png";

template[37].cell[4].kind = "image";
template[37].cell[4].x = 2;
template[37].cell[4].y = 5;
template[37].cell[4].image.url[1] = "../websrc/img/theme/24/img03.jpg";

template[37].cell[7].kind = "image";
template[37].cell[7].x = 2;
template[37].cell[7].y = 4;
template[37].cell[7].image.url[1] = "../websrc/img/theme/24/img02.jpg";


// template 38 정의
template[38] = new Template();
template[38].divided = 5;

template[38].background.kind = "image"
template[38].background.image.url = "../websrc/img/theme_background/25.jpg";

template[38].cell[1].kind = "image";
template[38].cell[1].x = 3;
template[38].cell[1].y = 4;
template[38].cell[1].image.url[1] = "../websrc/img/theme/25/img01.jpg";

template[38].cell[4].kind = "image";
template[38].cell[4].x = 2;
template[38].cell[4].y = 2;
template[38].cell[4].image.url[1] = "../websrc/img/theme/25/img02.jpg";

template[38].cell[14].kind = "image";
template[38].cell[14].x = 2;
template[38].cell[14].y = 3;
template[38].cell[14].image.url[1] = "../websrc/img/theme/25/img03.jpg";

template[38].cell[21].kind = "widgets";
template[38].cell[21].x = 1;
template[38].cell[21].y = 1;
template[38].cell[21].image.url[1] = "../websrc/img/theme/25/w_time_seoul.png";

template[38].cell[22].kind = "widgets";
template[38].cell[22].x = 1;
template[38].cell[22].y = 1;
template[38].cell[22].image.url[1] = "../websrc/img/theme/25/w_weather_Today.png";

template[38].cell[23].kind = "widgets";
template[38].cell[23].x = 1;
template[38].cell[23].y = 1;
template[38].cell[23].image.url[1] = "../websrc/img/theme/25/w_weather_Tomorrow.png";


// template 39 정의
template[39] = new Template();
template[39].divided = 5;

template[39].background.kind = "image"
template[39].background.image.url = "../websrc/img/theme_background/26.jpg";

template[39].cell[1].kind = "image";
template[39].cell[1].x = 1;
template[39].cell[1].y = 5;
template[39].cell[1].image.url[1] = "../websrc/img/theme/26/img01.jpg";

template[39].cell[2].kind = "widgets";
template[39].cell[2].x = 1;
template[39].cell[2].y = 1;
template[39].cell[2].image.url[1] = "../websrc/img/theme/26/w_time_seoul.png";

template[39].cell[3].kind = "widgets";
template[39].cell[3].x = 1;
template[39].cell[3].y = 1;
template[39].cell[3].image.url[1] = "../websrc/img/theme/26/w_weather_Today.png";

template[39].cell[4].kind = "image";
template[39].cell[4].x = 2;
template[39].cell[4].y = 5;
template[39].cell[4].image.url[1] = "../websrc/img/theme/26/img03.jpg";

template[39].cell[7].kind = "image";
template[39].cell[7].x = 2;
template[39].cell[7].y = 2;
template[39].cell[7].image.url[1] = "../websrc/img/theme/26/img02.jpg";

template[39].cell[17].kind = "image";
template[39].cell[17].x = 2;
template[39].cell[17].y = 2;
template[39].cell[17].image.url[1] = "../websrc/img/theme/26/img04.jpg";


// template 40 정의
template[40] = new Template();
template[40].divided = 5;

template[40].background.kind = "image"
template[40].background.image.url = "../websrc/img/theme_background/27.jpg";

template[40].cell[1].kind = "image";
template[40].cell[1].x = 3;
template[40].cell[1].y = 4;
template[40].cell[1].image.url[1] = "../websrc/img/theme/27/img01.jpg";

template[40].cell[4].kind = "image";
template[40].cell[4].x = 2;
template[40].cell[4].y = 5;
template[40].cell[4].image.url[1] = "../websrc/img/theme/27/img02.jpg";

template[40].cell[21].kind = "widgets";
template[40].cell[21].x = 1;
template[40].cell[21].y = 1;
template[40].cell[21].image.url[1] = "../websrc/img/theme/27/w_time_seoul.png";

template[40].cell[22].kind = "widgets";
template[40].cell[22].x = 1;
template[40].cell[22].y = 1;
template[40].cell[22].image.url[1] = "../websrc/img/theme/27/w_weather_Today.png";

template[40].cell[23].kind = "widgets";
template[40].cell[23].x = 1;
template[40].cell[23].y = 1;
template[40].cell[23].image.url[1] = "../websrc/img/theme/27/w_weather_Tomorrow.png";


// template 41 정의
template[41] = new Template();
template[41].divided = 5;

template[41].background.kind = "image"
template[41].background.image.url = "../websrc/img/theme_background/28.jpg";

template[41].cell[1].kind = "image";
template[41].cell[1].x = 4;
template[41].cell[1].y = 1;
template[41].cell[1].image.url[1] = "../websrc/img/theme/28/img01.jpg";

template[41].cell[5].kind = "widgets";
template[41].cell[5].x = 1;
template[41].cell[5].y = 1;
template[41].cell[5].image.url[1] = "../websrc/img/theme/28/w_time_seoul.png";

template[41].cell[6].kind = "image";
template[41].cell[6].x = 1;
template[41].cell[6].y = 2;
template[41].cell[6].image.url[1] = "../websrc/img/theme/28/img03.jpg";

template[41].cell[7].kind = "image";
template[41].cell[7].x = 2;
template[41].cell[7].y = 4;
template[41].cell[7].image.url[1] = "../websrc/img/theme/28/img02.jpg";

template[41].cell[9].kind = "image";
template[41].cell[9].x = 1;
template[41].cell[9].y = 2;
template[41].cell[9].image.url[1] = "../websrc/img/theme/28/img04.jpg";

template[41].cell[10].kind = "image";
template[41].cell[10].x = 1;
template[41].cell[10].y = 2;
template[41].cell[10].image.url[1] = "../websrc/img/theme/28/img05.jpg";

template[41].cell[16].kind = "image";
template[41].cell[16].x = 1;
template[41].cell[16].y = 2;
template[41].cell[16].image.url[1] = "../websrc/img/theme/28/img06.jpg";

template[41].cell[19].kind = "image";
template[41].cell[19].x = 1;
template[41].cell[19].y = 2;
template[41].cell[19].image.url[1] = "../websrc/img/theme/28/img07.jpg";

template[41].cell[20].kind = "image";
template[41].cell[20].x = 1;
template[41].cell[20].y = 2;
template[41].cell[20].image.url[1] = "../websrc/img/theme/28/img08.jpg";


// template 42 정의
template[42] = new Template();
template[42].divided = 4;

template[42].background.kind = "image"
template[42].background.image.url = "../websrc/img/theme_background/29.jpg";

template[42].cell[1].kind = "image";
template[42].cell[1].x = 5;
template[42].cell[1].y = 1;
template[42].cell[1].image.url[1] = "../websrc/img/theme/29/img01.jpg";

template[42].cell[6].kind = "image";
template[42].cell[6].x = 4;
template[42].cell[6].y = 3;
template[42].cell[6].image.url[1] = "../websrc/img/theme/29/img02.jpg";

template[42].cell[10].kind = "image";
template[42].cell[10].x = 1;
template[42].cell[10].y = 3;
template[42].cell[10].image.url[1] = "../websrc/img/theme/29/img03.jpg";

template[42].cell[21].kind = "widgets";
template[42].cell[21].x = 1;
template[42].cell[21].y = 1;
template[42].cell[21].image.url[1] = "../websrc/img/theme/29/w_time_seoul.png";

template[42].cell[22].kind = "widgets";
template[42].cell[22].x = 1;
template[42].cell[22].y = 1;
template[42].cell[22].image.url[1] = "../websrc/img/theme/29/w_weather_Today.png";

template[42].cell[23].kind = "widgets";
template[42].cell[23].x = 1;
template[42].cell[23].y = 1;
template[42].cell[23].image.url[1] = "../websrc/img/theme/29/w_weather_Tomorrow.png";

template[42].cell[24].kind = "widgets";
template[42].cell[24].x = 1;
template[42].cell[24].y = 1;
template[42].cell[24].image.url[1] = "../websrc/img/theme/29/w_weather_Wed27.png";

template[42].cell[25].kind = "widgets";
template[42].cell[25].x = 1;
template[42].cell[25].y = 1;
template[42].cell[25].image.url[1] = "../websrc/img/theme/29/w_weather_Thu28.png";


// template 43 정의
template[43] = new Template();
template[43].divided = 4;

template[43].background.kind = "image"
template[43].background.image.url = "../websrc/img/theme_background/30.jpg";

template[43].cell[1].kind = "widgets";
template[43].cell[1].x = 1;
template[43].cell[1].y = 1;
template[43].cell[1].image.url[1] = "../websrc/img/theme/30/w_time_seoul.png";

template[43].cell[2].kind = "image";
template[43].cell[2].x = 4;
template[43].cell[2].y = 1;
template[43].cell[2].image.url[1] = "../websrc/img/theme/30/img01.jpg";

template[43].cell[6].kind = "widgets";
template[43].cell[6].x = 1;
template[43].cell[6].y = 1;
template[43].cell[6].image.url[1] = "../websrc/img/theme/30/w_weather_Today.png";

template[43].cell[7].kind = "image";
template[43].cell[7].x = 4;
template[43].cell[7].y = 2;
template[43].cell[7].image.url[1] = "../websrc/img/theme/30/img02.jpg";

template[43].cell[11].kind = "widgets";
template[43].cell[11].x = 1;
template[43].cell[11].y = 1;
template[43].cell[11].image.url[1] = "../websrc/img/theme/30/w_weather_Tomorrow.png";

template[43].cell[16].kind = "widgets";
template[43].cell[16].x = 1;
template[43].cell[16].y = 1;
template[43].cell[16].image.url[1] = "../websrc/img/theme/30/w_weather_Wed27.png";

template[43].cell[17].kind = "image";
template[43].cell[17].x = 2;
template[43].cell[17].y = 2;
template[43].cell[17].image.url[1] = "../websrc/img/theme/30/img03.jpg";

template[43].cell[19].kind = "image";
template[43].cell[19].x = 2;
template[43].cell[19].y = 2;
template[43].cell[19].image.url[1] = "../websrc/img/theme/30/img04.jpg";

template[43].cell[21].kind = "widgets";
template[43].cell[21].x = 1;
template[43].cell[21].y = 1;
template[43].cell[21].image.url[1] = "../websrc/img/theme/30/w_weather_Thu28.png";


// template 44 정의
template[44] = new Template();
template[44].divided = 4;

template[44].background.kind = "image"
template[44].background.image.url = "../websrc/img/theme_background/31.jpg";

template[44].cell[1].kind = "image";
template[44].cell[1].x = 3;
template[44].cell[1].y = 3;
template[44].cell[1].image.url[1] = "../websrc/img/theme/31/img01.jpg";

template[44].cell[4].kind = "image";
template[44].cell[4].x = 2;
template[44].cell[4].y = 5;
template[44].cell[4].image.url[1] = "../websrc/img/theme/31/img03.jpg";

template[44].cell[16].kind = "image";
template[44].cell[16].x = 3;
template[44].cell[16].y = 1;
template[44].cell[16].image.url[1] = "../websrc/img/theme/31/img02.jpg";

template[44].cell[21].kind = "widgets";
template[44].cell[21].x = 1;
template[44].cell[21].y = 1;
template[44].cell[21].image.url[1] = "../websrc/img/theme/31/w_time_seoul.png";

template[44].cell[22].kind = "widgets";
template[44].cell[22].x = 1;
template[44].cell[22].y = 1;
template[44].cell[22].image.url[1] = "../websrc/img/theme/31/w_weather_Today.png";

template[44].cell[23].kind = "widgets";
template[44].cell[23].x = 1;
template[44].cell[23].y = 1;
template[44].cell[23].image.url[1] = "../websrc/img/theme/31/w_weather_Tomorrow.png";


// template 45 정의
template[45] = new Template();
template[45].divided = 4;

template[45].background.kind = "image"
template[45].background.image.url = "../websrc/img/theme_background/32.jpg";

template[45].cell[1].kind = "widgets";
template[45].cell[1].x = 1;
template[45].cell[1].y = 1;
template[45].cell[1].image.url[1] = "../websrc/img/theme/32/w_time_seoul.png";

template[45].cell[2].kind = "widgets";
template[45].cell[2].x = 1;
template[45].cell[2].y = 1;
template[45].cell[2].image.url[1] = "../websrc/img/theme/32/w_weather_Today.png";

template[45].cell[3].kind = "widgets";
template[45].cell[3].x = 1;
template[45].cell[3].y = 1;
template[45].cell[3].image.url[1] = "../websrc/img/theme/32/w_weather_Tomorrow.png";

template[45].cell[4].kind = "image";
template[45].cell[4].x = 2;
template[45].cell[4].y = 5;
template[45].cell[4].image.url[1] = "../websrc/img/theme/32/img03.jpg";

template[45].cell[6].kind = "image";
template[45].cell[6].x = 3;
template[45].cell[6].y = 3;
template[45].cell[6].image.url[1] = "../websrc/img/theme/32/img01.jpg";

template[45].cell[21].kind = "image";
template[45].cell[21].x = 3;
template[45].cell[21].y = 1;
template[45].cell[21].image.url[1] = "../websrc/img/theme/32/img02.jpg";


// template 46 정의
template[46] = new Template();
template[46].divided = 4;

template[46].background.kind = "image"
template[46].background.image.url = "../websrc/img/theme_background/33.jpg";

template[46].cell[1].kind = "widgets";
template[46].cell[1].x = 1;
template[46].cell[1].y = 1;
template[46].cell[1].image.url[1] = "../websrc/img/theme/33/w_time_seoul.png";

template[46].cell[2].kind = "image";
template[46].cell[2].x = 3;
template[46].cell[2].y = 5;
template[46].cell[2].image.url[1] = "../websrc/img/theme/33/img02.jpg";

template[46].cell[5].kind = "image";
template[46].cell[5].x = 1;
template[46].cell[5].y = 5;
template[46].cell[5].image.url[1] = "../websrc/img/theme/33/img03.jpg";

template[46].cell[6].kind = "widgets";
template[46].cell[6].x = 1;
template[46].cell[6].y = 1;
template[46].cell[6].image.url[1] = "../websrc/img/theme/33/w_weather_Today.png";

template[46].cell[11].kind = "image";
template[46].cell[11].x = 1;
template[46].cell[11].y = 3;
template[46].cell[11].image.url[1] = "../websrc/img/theme/33/img01.jpg";


// template 47 정의
template[47] = new Template();
template[47].divided = 4;

template[47].background.kind = "image"
template[47].background.image.url = "../websrc/img/theme_background/34.jpg";

template[47].cell[1].kind = "image";
template[47].cell[1].x = 4;
template[47].cell[1].y = 4;
template[47].cell[1].image.url[1] = "../websrc/img/theme/34/img01.jpg";

template[47].cell[5].kind = "widgets";
template[47].cell[5].x = 1;
template[47].cell[5].y = 1;
template[47].cell[5].image.url[1] = "../websrc/img/theme/34/w_time_seoul.png";

template[47].cell[10].kind = "widgets";
template[47].cell[10].x = 1;
template[47].cell[10].y = 1;
template[47].cell[10].image.url[1] = "../websrc/img/theme/34/w_weather_Today.png";

template[47].cell[15].kind = "image";
template[47].cell[15].x = 1;
template[47].cell[15].y = 2;
template[47].cell[15].image.url[1] = "../websrc/img/theme/34/img02.jpg";

template[47].cell[21].kind = "image";
template[47].cell[21].x = 5;
template[47].cell[21].y = 1;
template[47].cell[21].image.url[1] = "../websrc/img/theme/34/img03.jpg";


// template 48 정의
template[48] = new Template();
template[48].divided = 4;

template[48].background.kind = "image"
template[48].background.image.url = "../websrc/img/theme_background/35.jpg";

template[48].cell[1].kind = "image";
template[48].cell[1].x = 1;
template[48].cell[1].y = 5;
template[48].cell[1].image.url[1] = "../websrc/img/theme/35/img01.jpg";

template[48].cell[2].kind = "image";
template[48].cell[2].x = 2;
template[48].cell[2].y = 3;
template[48].cell[2].image.url[1] = "../websrc/img/theme/35/img02.jpg";

template[48].cell[4].kind = "image";
template[48].cell[4].x = 2;
template[48].cell[4].y = 5;
template[48].cell[4].image.url[1] = "../websrc/img/theme/35/img04.jpg";

template[48].cell[17].kind = "image";
template[48].cell[17].x = 2;
template[48].cell[17].y = 2;
template[48].cell[17].image.url[1] = "../websrc/img/theme/35/img03.jpg";


// template 49 정의
template[49] = new Template();
template[49].divided = 4;

template[49].background.kind = "image"
template[49].background.image.url = "../websrc/img/theme_background/36.jpg";

template[49].cell[1].kind = "image";
template[49].cell[1].x = 1;
template[49].cell[1].y = 1;
template[49].cell[1].image.url[1] = "../websrc/img/theme/36/img01.jpg";

template[49].cell[2].kind = "image";
template[49].cell[2].x = 3;
template[49].cell[2].y = 5;
template[49].cell[2].image.url[1] = "../websrc/img/theme/36/img03.jpg";

template[49].cell[5].kind = "image";
template[49].cell[5].x = 1;
template[49].cell[5].y = 5;
template[49].cell[5].image.url[1] = "../websrc/img/theme/36/img04.jpg";

template[49].cell[6].kind = "widgets";
template[49].cell[6].x = 1;
template[49].cell[6].y = 1;
template[49].cell[6].image.url[1] = "../websrc/img/theme/36/w_time_seoul.png";

template[49].cell[11].kind = "widgets";
template[49].cell[11].x = 1;
template[49].cell[11].y = 1;
template[49].cell[11].image.url[1] = "../websrc/img/theme/36/w_weather_Today.png";

template[49].cell[16].kind = "image";
template[49].cell[16].x = 1;
template[49].cell[16].y = 2;
template[49].cell[16].image.url[1] = "../websrc/img/theme/36/img02.jpg";


// template 50 정의
template[50] = new Template();
template[50].divided = 4;

template[50].background.kind = "image"
template[50].background.image.url = "../websrc/img/theme_background/37.jpg";

template[50].cell[1].kind = "widgets";
template[50].cell[1].x = 1;
template[50].cell[1].y = 1;
template[50].cell[1].image.url[1] = "../websrc/img/theme/37/w_time_seoul.png";

template[50].cell[2].kind = "image";
template[50].cell[2].x = 2;
template[50].cell[2].y = 5;
template[50].cell[2].image.url[1] = "../websrc/img/theme/37/img03.jpg";

template[50].cell[4].kind = "image";
template[50].cell[4].x = 2;
template[50].cell[4].y = 1;
template[50].cell[4].image.url[1] = "../websrc/img/theme/37/img04.jpg";

template[50].cell[6].kind = "image";
template[50].cell[6].x = 1;
template[50].cell[6].y = 2;
template[50].cell[6].image.url[1] = "../websrc/img/theme/37/img01.jpg";

template[50].cell[9].kind = "image";
template[50].cell[9].x = 1;
template[50].cell[9].y = 2;
template[50].cell[9].image.url[1] = "../websrc/img/theme/37/img05.jpg";

template[50].cell[10].kind = "image";
template[50].cell[10].x = 1;
template[50].cell[10].y = 2;
template[50].cell[10].image.url[1] = "../websrc/img/theme/37/img06.jpg";

template[50].cell[4].kind = "image";
template[50].cell[4].x = 2;
template[50].cell[4].y = 1;
template[50].cell[4].image.url[1] = "../websrc/img/theme/37/img04.jpg";

template[50].cell[16].kind = "image";
template[50].cell[16].x = 1;
template[50].cell[16].y = 2;
template[50].cell[16].image.url[1] = "../websrc/img/theme/37/img02.jpg";

template[50].cell[19].kind = "image";
template[50].cell[19].x = 1;
template[50].cell[19].y = 2;
template[50].cell[19].image.url[1] = "../websrc/img/theme/37/img07.jpg";

template[50].cell[20].kind = "image";
template[50].cell[20].x = 1;
template[50].cell[20].y = 2;
template[50].cell[20].image.url[1] = "../websrc/img/theme/37/img08.jpg";
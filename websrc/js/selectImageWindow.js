// SelectImageWindow Class 정의
function SelectImageWindow() {	
	this.myImages = new Object();
	this.myImages.url = new Array();
	this.myImages.fileName = new Array();
	
	//this.nature = new Object();
	//this.nature.url = new Array();
	
	this.digitalAndArt = new Object();
	this.digitalAndArt.url = new Array();
	
	this.plantsAndFlowers = new Object();
	this.plantsAndFlowers.url = new Array();
	
	this.placesAndLandscape = new Object();
	this.placesAndLandscape.url = new Array();
	
	this.natureAndAnimals = new Object();
	this.natureAndAnimals.url = new Array();
}


// selectCellImage 인스턴스 생성
selectCellImage = new SelectImageWindow();

// selectCellImage 정의
/*
selectCellImage.myImages.url[1] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[2] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[3] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[4] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[5] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[6] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[7] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[8] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[9] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[10] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[11] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[12] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[13] = "../websrc/img/cell_images/image_sample_1.jpg"
selectCellImage.myImages.url[14] = "../websrc/img/cell_images/image_sample_1.jpg"
*/
/*
selectCellImage.nature.url[1] = "../websrc/img/cell_images/1.jpg";
selectCellImage.nature.url[2] = "../websrc/img/cell_images/2.jpg";
selectCellImage.nature.url[3] = "../websrc/img/cell_images/3.jpg";
selectCellImage.nature.url[4] = "../websrc/img/cell_images/4.jpg";
selectCellImage.nature.url[5] = "../websrc/img/cell_images/5.jpg";
selectCellImage.nature.url[6] = "../websrc/img/cell_images/6.jpg";
selectCellImage.nature.url[7] = "../websrc/img/cell_images/7.jpg";
selectCellImage.nature.url[8] = "../websrc/img/cell_images/8.jpg";
selectCellImage.nature.url[9] = "../websrc/img/cell_images/9.jpg";
selectCellImage.nature.url[10] = "../websrc/img/cell_images/10.jpg";
selectCellImage.nature.url[11] = "../websrc/img/cell_images/11.jpg";
selectCellImage.nature.url[12] = "../websrc/img/cell_images/12.jpg";
selectCellImage.nature.url[13] = "../websrc/img/cell_images/13.jpg";
selectCellImage.nature.url[14] = "../websrc/img/cell_images/14.jpg";
selectCellImage.nature.url[15] = "../websrc/img/cell_images/15.jpg";
selectCellImage.nature.url[16] = "../websrc/img/cell_images/16.jpg";
selectCellImage.nature.url[17] = "../websrc/img/cell_images/17.jpg";
selectCellImage.nature.url[18] = "../websrc/img/cell_images/18.jpg";
*/

// selectBackgroundImage 인스턴스 생성
selectBackgroundImage = new SelectImageWindow();

// selectCellImage 정의
/*
selectBackgroundImage.myImages.url[1] = "../websrc/img/cell_images/1.jpg";
selectBackgroundImage.myImages.url[2] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[3] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[4] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[5] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[6] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[7] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[8] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[9] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[10] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[11] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[12] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[13] = "../websrc/img/cell_images/image_sample_1.jpg"
selectBackgroundImage.myImages.url[14] = "../websrc/img/cell_images/image_sample_1.jpg"
*/

selectBackgroundImage.digitalAndArt.url[1] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_00.jpg";
selectBackgroundImage.digitalAndArt.url[2] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_01.jpg";
selectBackgroundImage.digitalAndArt.url[3] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_02.jpg";
selectBackgroundImage.digitalAndArt.url[4] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_03.jpg";
selectBackgroundImage.digitalAndArt.url[5] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_04.jpg";
selectBackgroundImage.digitalAndArt.url[6] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_05.jpg";
selectBackgroundImage.digitalAndArt.url[7] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_06.jpg";
selectBackgroundImage.digitalAndArt.url[8] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_07.jpg";

selectBackgroundImage.plantsAndFlowers.url[1] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_00.jpg";
selectBackgroundImage.plantsAndFlowers.url[2] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_01.jpg";
selectBackgroundImage.plantsAndFlowers.url[3] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_02.jpg";
selectBackgroundImage.plantsAndFlowers.url[4] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_03.jpg";
selectBackgroundImage.plantsAndFlowers.url[5] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_04.jpg";
selectBackgroundImage.plantsAndFlowers.url[6] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_05.jpg";
selectBackgroundImage.plantsAndFlowers.url[7] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_06.jpg";
selectBackgroundImage.plantsAndFlowers.url[8] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_07.jpg";
selectBackgroundImage.plantsAndFlowers.url[9] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_08.jpg";
selectBackgroundImage.plantsAndFlowers.url[10] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_09.jpg";
selectBackgroundImage.plantsAndFlowers.url[11] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_10.jpg";
selectBackgroundImage.plantsAndFlowers.url[12] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_11.jpg";
selectBackgroundImage.plantsAndFlowers.url[13] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_12.jpg";
selectBackgroundImage.plantsAndFlowers.url[14] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_13.jpg";
selectBackgroundImage.plantsAndFlowers.url[15] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_14.jpg";
selectBackgroundImage.plantsAndFlowers.url[16] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_15.jpg";

selectBackgroundImage.placesAndLandscape.url[1] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_00.jpg";
selectBackgroundImage.placesAndLandscape.url[2] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_01.jpg";
selectBackgroundImage.placesAndLandscape.url[3] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_02.jpg";
selectBackgroundImage.placesAndLandscape.url[4] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_03.jpg";
selectBackgroundImage.placesAndLandscape.url[5] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_04.jpg";
selectBackgroundImage.placesAndLandscape.url[6] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_05.jpg";
selectBackgroundImage.placesAndLandscape.url[7] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_06.jpg";
selectBackgroundImage.placesAndLandscape.url[8] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_07.jpg";

selectBackgroundImage.natureAndAnimals.url[1] = "../websrc/img/background_images/4.Nature_and_Animals/bg_animals_00.jpg";
selectBackgroundImage.natureAndAnimals.url[2] = "../websrc/img/background_images/4.Nature_and_Animals/bg_animals_01.jpg";
selectBackgroundImage.natureAndAnimals.url[3] = "../websrc/img/background_images/4.Nature_and_Animals/bg_animals_02.jpg";
selectBackgroundImage.natureAndAnimals.url[4] = "../websrc/img/background_images/4.Nature_and_Animals/bg_animals_03.jpg";
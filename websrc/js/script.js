$(function()
{
	// Variable to store your files
	var files;	
	var phpURL = new String;	
	
	// Add events
	$('input[type=file]').on('change', uploadFiles);
			
	// Grab the files and set them to our variable
	function prepareUpload(event)
	{		
		files = event.target.files;
		//if(modeOpenFile == "backgroundsImage") phpURL = "http://www.zyxen.co.kr/petaframe/gridsign/sample_php/websrc/php/submit_background.php";
		//else if(modeOpenFile == "images") phpURL = "http://www.zyxen.co.kr/petaframe/gridsign/sample_php/websrc/php/submit_image.php";
		if(modeOpenFile == "backgroundsImage") phpURL = "../websrc/php/submit_background.php";
		else if(modeOpenFile == "images") phpURL = "../websrc/php/submit_image.php";		
		
		updateMyImageList();
	}
	
	
	function updateMyImageList()
	{		
		var input = event.target;
		var reader = new FileReader();
		
		reader.onload = function(){
			if(modeOpenFile == "backgroundsImage") {	
				//  url 업데이트
				selectBackgroundImage.myImages.url[maxSelectBackgroundImageMyImages] = reader.result;
				
				// my Image UI 추가
				makeSelectBackgroundImage.build("myImages");
				
				// my Image UI 추가에 따른 줄 변환 시, nature 이하 행 변환
				if(maxSelectBackgroundImageMyImages > 1) {
					if(parseInt($(".myImages_" + (maxSelectBackgroundImageMyImages - 1)).css('top')) != parseInt($(".myImages_" + maxSelectBackgroundImageMyImages).css('top'))) {						
						// digitalAndArt
						$("#lay_editor_layer .select_an_image .title_digitalAndArt").css({top:"+=107"});
						for(var i=1; i <= maxSelectBackgroundImage_digitalAndArt; i++) $(".digitalAndArt_" + i).css({top:"+=107"});
						
						// plantsAndFlowers
						$("#lay_editor_layer .select_an_image .title_plantsAndFlowers").css({top:"+=107"});
						for(var i=1; i <= maxSelectBackgroundImage_plantsAndFlowers; i++) $(".plantsAndFlowers_" + i).css({top:"+=107"});
						
						// placesAndLandscape
						$("#lay_editor_layer .select_an_image .title_placesAndLandscape").css({top:"+=107"});
						for(var i=1; i <= maxSelectBackgroundImage_placesAndLandscape; i++) $(".placesAndLandscape_" + i).css({top:"+=107"});
						
						// natureAndAnimals
						$("#lay_editor_layer .select_an_image .title_natureAndAnimals").css({top:"+=107"});
						for(var i=1; i <= maxSelectBackgroundImage_natureAndAnimals; i++) $(".natureAndAnimals_" + i).css({top:"+=107"});
						
						myBackgroundImageScroll.setup();
					}
				}
			}
			else if(modeOpenFile == "images") {
				//  url 업데이트
				selectCellImage.myImages.url[maxSelectCellImageMyImages] = reader.result;
				
				// my Image UI 추가
				makeSelectCellImage.build("myImages");
				
				// my Image UI 추가에 따른 줄 변환 시, nature 이하 행 변환
				if(maxSelectCellImageMyImages > 1) {
					if(parseInt($(".myImages_" + (maxSelectCellImageMyImages - 1)).css('top')) != parseInt($(".myImages_" + maxSelectCellImageMyImages).css('top'))) {						
						//$("#lay_editor_layer .select_an_image .title_nature").css({top:"+=107"});
						//for(var i=1; i <= maxSelectCellImageNature; i++) $(".nature_" + i).css({top:"+=107"});						
						myCellImageScroll.setup();
					}
				}
			}
		};
		reader.readAsDataURL(input.files[0]);
	}
			
			
	// Catch the form submit and upload the files
	function uploadFiles(event)
	{		
		prepareUpload(event);
		
		event.stopPropagation(); // Stop stuff happening
        event.preventDefault(); // Totally stop stuff happening

        // START A LOADING SPINNER HERE

        // Create a formdata object and add the files
		var data = new FormData();
		$.each(files, function(key, value)
		{
			data.append(key, value);
		});
        
        $.ajax({
            url: phpURL + "?files",
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: function(data, textStatus, jqXHR)
            {
            	if(typeof data.error === 'undefined')
            	{
            		// Success so call function to process the form
            		submitForm(event, data);
					alert("submitForm");
            	}
            	else
            	{
            		// Handle errors here
            		console.log('ERRORS: ' + data.error);
					
            	}
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
            	// Handle errors here
            	console.log('ERRORS: ' + textStatus);
            	// STOP LOADING SPINNER
            }
        });
    }

    function submitForm(event, data)
	{		
		// Create a jQuery object from the form
		$form = $(event.target);
		
		// Serialize the form data
		var formData = $form.serialize();
		
		// You should sterilise the file names
		$.each(data.files, function(key, value)
		{
			formData = formData + '&filenames[]=' + value;
		});

		$.ajax({
			url: phpURL,
            type: 'POST',
            data: formData,
            cache: false,
            dataType: 'json',
            success: function(data, textStatus, jqXHR)
            {
            	if(typeof data.error === 'undefined')
            	{
            		// Success so call function to process the form
            		console.log('SUCCESS: ' + data.success);
					
					saveLocalStorage();		
					alert("saveLocalStorage");				
            	}
            	else
            	{
            		// Handle errors here
            		console.log('ERRORS: ' + data.error);
            	}
            },
            error: function(jqXHR, textStatus, errorThrown)
            {
            	// Handle errors here
            	console.log('ERRORS: ' + textStatus);
            },
            complete: function()
            {
            	// STOP LOADING SPINNER
            }
		});
	}
	
	function saveLocalStorage() {
		switch(modeOpenFile) {
			case "backgroundsImage" :			
				var n = maxSelectBackgroundImageMyImages;
				
				localStorage.setItem("maxSelectBackgroundImageMyImages", n);
				console.log("[SAVE]maxSelectBackgroundImageMyImages : " + n);				
			
				localStorage.setItem("selectBackgroundImage.myImages.fileName[" + n + "]", selectBackgroundImage.myImages.fileName[n]);
				console.log("[SAVE]selectBackgroundImage.myImages.fileName[" + n + "] : " + selectBackgroundImage.myImages.fileName[n]);
		
				break;
			case "backgroundsVideo" :
				break;
			case "backgroundsTV" :
				break;
			case "widgetsVideo" :
				break;
			case "images" :
				var n = maxSelectCellImageMyImages;
				
				localStorage.setItem("maxSelectCellImageMyImages", n);
				console.log("[SAVE]maxSelectCellImageMyImages : " + n);				
			
				localStorage.setItem("selectCellImage.myImages.fileName[" + n + "]", selectCellImage.myImages.fileName[n]);
				console.log("[SAVE]selectCellImage.myImages.fileName[" + n + "] : " + selectCellImage.myImages.fileName[n]);
				break;
		}
	}	
});
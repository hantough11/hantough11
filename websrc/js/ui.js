/* Modified at 28 Nov 2012 11:35 */

/* 
	querySelector를	일부브라우져만 지원하므로 
	크롬에서 테스트 하시기 바랍니다. 
*/
//function $(id) {return document.querySelector(id);}
function addEvent(obj, type, fn) { return obj.addEventListener(type, fn, false); }
function removeEvent(obj, type, fn) { return obj.removeEventListener(type, fn, false); }

/**
 * 스크롤 생성하기
 * 스크롤 관련 style및 class명 미리 정의 필요.
 * 사용 방법 : new scr(); 
 *	- new연산자로 함수 생성 및 호출
 */
window.scr = function (kind) {
    
	var _this = this,
	oArea = document.querySelector('.' + kind + '.scr-area'),
	oCont = document.querySelector('.' + kind + '.scr-cont'),
	oBarArea = document.querySelector('.' + kind + '.scr-bar-area'),
	oScr_bar = document.querySelector('.' + kind + '.scr-bar'),
	bScroll = false, bAnimated = false,
	areaH, contH, barAreaH, barH, minH, contY, childH, start = {};
    firstItem = "", lastItem = "";
	
    this.setup = function () {	
		// cellImage -> 3줄 미만시 스크롤바 안 보이게 함
		if(kind == "cellImage") {
			if(maxSelectCellImageMyImages < 9) {
				$("#lay_editor_layer .select_an_image .imageScroll").hide();
				$("#lay_editor_layer .select_an_image .imageScroll .navigator").hide();
			}
			else {
				$("#lay_editor_layer .select_an_image .imageScroll").show();
				$("#lay_editor_layer .select_an_image .imageScroll .navigator").show();
			}
		}
		else if(kind == "backgroundImage") {
			$("#lay_editor_layer .select_an_image .imageScroll").show();
			$("#lay_editor_layer .select_an_image .imageScroll .navigator").show();
		}
		else if(kind == "faq") {
			$("#body_faq .imageScroll").show();
			$("#body_faq .imageScroll .navigator").show();
		}
		
		/*var _this = this,
		oArea = document.querySelector('.' + kind + '.scr-area'),
		oCont = document.querySelector('.' + kind + '.scr-cont'),
		oBarArea = document.querySelector('.' + kind + '.scr-bar-area'),
		oScr_bar = document.querySelector('.' + kind + '.scr-bar'),
		bScroll = false, bAnimated = false,
		areaH, contH, barAreaH, barH, minH, contY, childH, start = {};
		firstItem = "", lastItem = "";*/
	
        var _this = this;
        areaH = oArea.clientHeight,
			contH = oCont.scrollHeight + 30,
			barAreaH = oBarArea.clientHeight,
        //barH = Math.round(areaH / contH * barAreaH),
			barH = $(oScr_bar).height();
        minH = barAreaH - barH;
        childH = $(oCont).children().outerHeight() || 0;
        contY = ((contH - areaH) / (barAreaH - barH));
        //oScr_bar.style.height = barH + 'px';
        oScr_bar.style.top = 0;				
		
		// 첫 아이템, 마지막 아이템 설정
		switch(kind) {
			case "cellImage" :
				firstItem = "myImagesId_1";
				if(maxSelectCellImageMyImages <= 0)lastItem = "myImagesId_1";
				else lastItem = "myImagesId_" + maxSelectCellImageMyImages;					
				break;
			case "backgroundImage" :
				firstItem = "myImagesId_1";
				lastItem = "natureAndAnimalsId_" + maxSelectBackgroundImage_natureAndAnimals;
				break;
			case "faq" :
				firstItem = "faq_1";
				lastItem = "faq_4";
				break;
			
		}	
		
        // 스크롤 높이
        if (areaH >= contH) {
            bScroll = true;
            oBarArea.style.display = 'none';
            return;
        }
        if (!bScroll) {
            addEvent(oScr_bar, 'mousedown', _this.down);
            addEvent(document, 'mouseup', _this.up);
            addEvent(document, 'keydown', _this.keyDown);
            addEvent(oCont, 'mousewheel', _this.wheel);
            /**
            * 스크롤 바 영역에서 벗어낫을 경우 스크롤 해제
            * 사용시 주석해제
            * addEvent(oScr_bar,'mouseout' , _this.up); 
            */
        }
    };

    this.down = function (e) {
        if (bAnimated) return;
        bAnimated = true;

        // 초기 스크롤 높이값 구하기
        var scrTop = oScr_bar.style.top.replace('px', '') * -1;
        start = { top: scrTop, eventY: e.pageY };
        addEvent(document, 'mousemove', _this.move);
    };

    this.move = function (e) {
        if (!bAnimated) return;

        var posY = start.eventY - e.pageY;
        var posTop = start.top + posY;

        // 최소, 최대 이동높이 확인
        if (posTop * -1 < 0) posTop = 0;
        else if (minH < posTop * -1) posTop = -minH;

        // 컨텐츠 이동 높이 구하기
        var contPosY = contY * posTop;

        // 스크롤 이동
        oCont.style.top = contPosY + 'px';
        oScr_bar.style.top = -(posTop) + 'px';
		
		/*console.log("********** scroll movement **********");
		console.log("contPosY : " + contPosY);		
		console.log("posY : " + posY);
		console.log("posTop : " + posTop);
		console.log("minH : " + minH);*/
		
    };

    this.keyDown = function (e) {		
        var delta;
        switch (e.keyCode) {
            case 37: delta = 1; break;
            case 38:
                delta = 1;
                if (nowfocus == "play" || nowfocus == "full") {

                    return;
                }
                break;
            case 39: delta = 1; break;
            case 40:
                if (nowfocus == "play" || nowfocus == "full") {

                    return;
                }
                delta = -1;
                break;
            default: return;
        }
        _this.keyMove(delta);
    };

    this.wheel = function (e) {
        e.stopPropagation();
        var delta = e.wheelDelta / 120; //( 1 or -1 )
        _this.keyMove(delta);
    };

    this.keyMove = function (delta) {
        var moveH = (delta * childH) + oCont.style.top.replace('px', '') * 1;
        var maxH = contH - areaH;

       /* if (nowfocus == firstItem) {
            moveH = 0;
        } else if (nowfocus == lastItem) {
            moveH = -maxH;
        } else if (moveH > 0) {
            moveH = 0;
        } else if (moveH < -maxH) {
            moveH = -maxH;
        }*/
		if (moveH > 0) {
            moveH = 0;
        } else if (moveH < -maxH) {
            moveH = -maxH;
        }
		
        var posTop = moveH / contY;
        oCont.style.top = moveH + 'px';
        oScr_bar.style.top = -posTop + 'px';
    };

    this.up = function (e) {
        if (!bAnimated) return;
        bAnimated = false;
        removeEvent(document, 'mousemove', _this.move);
    };
    // function start
    this.setup();
};

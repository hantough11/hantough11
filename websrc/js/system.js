if (typeof(VK_LEFT)=='undefined') {
	var VK_LEFT = 0x25;
	var VK_UP = 0x26;
	var VK_RIGHT = 0x27;
	var VK_DOWN = 0x28;
}
if (typeof(VK_ENTER)=='undefined') {
	var VK_ENTER = 0x0d;
}
if (typeof(VK_RED)=='undefined') {
	var VK_RED = 0xBC; //','
	var VK_GREEN = 0xBE; //'.'
	var VK_YELLOW = 0xBF; //'/'
	var VK_BLUE = 0xDE; // '''
}
if (typeof(VK_BACK)=='undefined') {
	var VK_BACK = 0x08;
}
if (typeof(VK_0)=='undefined') {
	var VK_0 = 0x30;
	var VK_1 = 0x31;
	var VK_2 = 0x32;
	var VK_3 = 0x33;
	var VK_4 = 0x34;
	var VK_5 = 0x35;
	var VK_6 = 0x36;
	var VK_7 = 0x37;
	var VK_8 = 0x38;
	var VK_9 = 0x39;
}

var system=(function(){
	
	var system = {};
	
	system.isSupportAppMgr = function(){
		if( typeof tvExt != 'undefined') {
			if( typeof tvExt.application != 'undefined' ) {
				if( typeof tvExt.application.appmgr != 'undefined') {
					return true;
				} 
			} 
		}
		
		return false;
	};
	
	system.isSupportStoreApp = function() {
		if( typeof tvExt != 'undefined') {
			if( typeof tvExt.application != 'undefined' ) {
				if( typeof tvExt.application.storeApp != 'undefined') {
					return true;
				} 
			} 
		}
		
		return false;
	};

	system.isSupportChMgr = function() {
		if( typeof tvExt != 'undefined') {
			if( typeof tvExt.broadcast != 'undefined' ) {
				if( typeof tvExt.broadcast.channelManager != 'undefined') {
					return true;
				} 
			} 
		}
		
		return false;
	};
	
	system.isSupportChMeta = function() {
		if( typeof tvExt != 'undefined') {
			if( typeof tvExt.broadcast != 'undefined' ) {
				if( typeof tvExt.broadcast.channelMetadata != 'undefined') {
					return true;
				} 
			} 
		}
		
		return false;
	};
	
	system.isSupportDvcInfo = function() {
		if( typeof tvExt != 'undefined') {
			if( typeof tvExt.device != 'undefined' ) {
				if( typeof tvExt.device.info != 'undefined') {
					return true;
				} 
			} 
		}
		
		return false;
	};
	
	system.isSupportDvcStatus = function() {
		if( typeof tvExt != 'undefined') {
			if( typeof tvExt.device != 'undefined' ) {
				if( typeof tvExt.device.status != 'undefined') {
					return true;
				} 
			} 
		}
		
		return false;
	};		
	
	system.init = function(keyset, visible){
		if( system.isSupportAppMgr() ) {
			tvExt.application.appmgr.setKeySet(keyset);
			
			if( visible != 'undefined' ) {
				if( visible ) {
					tvExt.application.appmgr.showApplication();
				} else {
					tvExt.application.appmgr.hideApplication();
				}
			}
		}else{
			console.log("### This browser does not support smart TV MW ###");
		}
	};
	
	return system;
}());
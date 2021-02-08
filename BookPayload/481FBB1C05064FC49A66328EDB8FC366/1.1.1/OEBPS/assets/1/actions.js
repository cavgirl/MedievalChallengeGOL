pubcoder.projectID = "21284B68F09E4548AC37578FBED7284B";
pubcoder.project.id = "21284B68F09E4548AC37578FBED7284B";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 282;
pubcoder.page.title = "1";
pubcoder.page.number = 1;
pubcoder.page.alias = "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj969_onTap_activeActionGroupIndex = -1;
var obj969_onTap_runningActionsCount = 0;
var obj969_onTap_loopCount = 0;
var obj285_onTap_activeActionGroupIndex = -1;
var obj285_onTap_runningActionsCount = 0;
var obj285_onTap_loopCount = 0;
var obj1029_onTap_activeActionGroupIndex = -1;
var obj1029_onTap_runningActionsCount = 0;
var obj1029_onTap_loopCount = 0;
var obj1025_SCEventRun_activeActionGroupIndex = -1;
var obj1025_SCEventRun_runningActionsCount = 0;
var obj1025_SCEventRun_loopCount = 0;
var obj1021_SCEventRun_activeActionGroupIndex = -1;
var obj1021_SCEventRun_runningActionsCount = 0;
var obj1021_SCEventRun_loopCount = 0;
var obj973_onTap_activeActionGroupIndex = -1;
var obj973_onTap_runningActionsCount = 0;
var obj973_onTap_loopCount = 0;
var obj396_onTap_activeActionGroupIndex = -1;
var obj396_onTap_runningActionsCount = 0;
var obj396_onTap_loopCount = 0;
var obj1042_onTap_activeActionGroupIndex = -1;
var obj1042_onTap_runningActionsCount = 0;
var obj1042_onTap_loopCount = 0;
var obj1038_SCEventRun_activeActionGroupIndex = -1;
var obj1038_SCEventRun_runningActionsCount = 0;
var obj1038_SCEventRun_loopCount = 0;
var obj1034_SCEventRun_activeActionGroupIndex = -1;
var obj1034_SCEventRun_runningActionsCount = 0;
var obj1034_SCEventRun_loopCount = 0;
var obj803_onTap_activeActionGroupIndex = -1;
var obj803_onTap_runningActionsCount = 0;
var obj803_onTap_loopCount = 0;
var obj432_onTap_activeActionGroupIndex = -1;
var obj432_onTap_runningActionsCount = 0;
var obj432_onTap_loopCount = 0;
var obj979_onTap_activeActionGroupIndex = -1;
var obj979_onTap_runningActionsCount = 0;
var obj979_onTap_loopCount = 0;
var obj287_onTap_activeActionGroupIndex = -1;
var obj287_onTap_runningActionsCount = 0;
var obj287_onTap_loopCount = 0;
var obj1055_onTap_activeActionGroupIndex = -1;
var obj1055_onTap_runningActionsCount = 0;
var obj1055_onTap_loopCount = 0;
var obj1051_SCEventRun_activeActionGroupIndex = -1;
var obj1051_SCEventRun_runningActionsCount = 0;
var obj1051_SCEventRun_loopCount = 0;
var obj1047_SCEventRun_activeActionGroupIndex = -1;
var obj1047_SCEventRun_runningActionsCount = 0;
var obj1047_SCEventRun_loopCount = 0;
var obj392_onTap_activeActionGroupIndex = -1;
var obj392_onTap_runningActionsCount = 0;
var obj392_onTap_loopCount = 0;
var obj809_onTap_activeActionGroupIndex = -1;
var obj809_onTap_runningActionsCount = 0;
var obj809_onTap_loopCount = 0;
var obj416_onTap_activeActionGroupIndex = -1;
var obj416_onTap_runningActionsCount = 0;
var obj416_onTap_loopCount = 0;
var obj316_onTap_activeActionGroupIndex = -1;
var obj316_onTap_runningActionsCount = 0;
var obj316_onTap_loopCount = 0;
var obj381_onTap_activeActionGroupIndex = -1;
var obj381_onTap_runningActionsCount = 0;
var obj381_onTap_loopCount = 0;
var obj381_onTouchUp_activeActionGroupIndex = -1;
var obj381_onTouchUp_runningActionsCount = 0;
var obj381_onTouchUp_loopCount = 0;
var obj983_onTap_activeActionGroupIndex = -1;
var obj983_onTap_runningActionsCount = 0;
var obj983_onTap_loopCount = 0;
var obj306_onTap_activeActionGroupIndex = -1;
var obj306_onTap_runningActionsCount = 0;
var obj306_onTap_loopCount = 0;
var obj1068_onTap_activeActionGroupIndex = -1;
var obj1068_onTap_runningActionsCount = 0;
var obj1068_onTap_loopCount = 0;
var obj1064_SCEventRun_activeActionGroupIndex = -1;
var obj1064_SCEventRun_runningActionsCount = 0;
var obj1064_SCEventRun_loopCount = 0;
var obj1060_SCEventRun_activeActionGroupIndex = -1;
var obj1060_SCEventRun_runningActionsCount = 0;
var obj1060_SCEventRun_loopCount = 0;
var obj989_onTap_activeActionGroupIndex = -1;
var obj989_onTap_runningActionsCount = 0;
var obj989_onTap_loopCount = 0;
var obj289_onTap_activeActionGroupIndex = -1;
var obj289_onTap_runningActionsCount = 0;
var obj289_onTap_loopCount = 0;
var obj1081_onTap_activeActionGroupIndex = -1;
var obj1081_onTap_runningActionsCount = 0;
var obj1081_onTap_loopCount = 0;
var obj1077_SCEventRun_activeActionGroupIndex = -1;
var obj1077_SCEventRun_runningActionsCount = 0;
var obj1077_SCEventRun_loopCount = 0;
var obj1073_SCEventRun_activeActionGroupIndex = -1;
var obj1073_SCEventRun_runningActionsCount = 0;
var obj1073_SCEventRun_loopCount = 0;
var obj408_onTap_activeActionGroupIndex = -1;
var obj408_onTap_runningActionsCount = 0;
var obj408_onTap_loopCount = 0;
var obj310_onTap_activeActionGroupIndex = -1;
var obj310_onTap_runningActionsCount = 0;
var obj310_onTap_loopCount = 0;
var obj412_onTap_activeActionGroupIndex = -1;
var obj412_onTap_runningActionsCount = 0;
var obj412_onTap_loopCount = 0;
var obj412_onTouchUp_activeActionGroupIndex = -1;
var obj412_onTouchUp_runningActionsCount = 0;
var obj412_onTouchUp_loopCount = 0;
var obj815_onTap_activeActionGroupIndex = -1;
var obj815_onTap_runningActionsCount = 0;
var obj815_onTap_loopCount = 0;
var obj400_onTap_activeActionGroupIndex = -1;
var obj400_onTap_runningActionsCount = 0;
var obj400_onTap_loopCount = 0;
var obj993_onTap_activeActionGroupIndex = -1;
var obj993_onTap_runningActionsCount = 0;
var obj993_onTap_loopCount = 0;
var obj420_onTap_activeActionGroupIndex = -1;
var obj420_onTap_runningActionsCount = 0;
var obj420_onTap_loopCount = 0;
var obj1094_onTap_activeActionGroupIndex = -1;
var obj1094_onTap_runningActionsCount = 0;
var obj1094_onTap_loopCount = 0;
var obj1090_SCEventRun_activeActionGroupIndex = -1;
var obj1090_SCEventRun_runningActionsCount = 0;
var obj1090_SCEventRun_loopCount = 0;
var obj1086_SCEventRun_activeActionGroupIndex = -1;
var obj1086_SCEventRun_runningActionsCount = 0;
var obj1086_SCEventRun_loopCount = 0;
var obj424_onTap_activeActionGroupIndex = -1;
var obj424_onTap_runningActionsCount = 0;
var obj424_onTap_loopCount = 0;
var obj999_onTap_activeActionGroupIndex = -1;
var obj999_onTap_runningActionsCount = 0;
var obj999_onTap_loopCount = 0;
var obj436_onTap_activeActionGroupIndex = -1;
var obj436_onTap_runningActionsCount = 0;
var obj436_onTap_loopCount = 0;
var obj1107_onTap_activeActionGroupIndex = -1;
var obj1107_onTap_runningActionsCount = 0;
var obj1107_onTap_loopCount = 0;
var obj1103_SCEventRun_activeActionGroupIndex = -1;
var obj1103_SCEventRun_runningActionsCount = 0;
var obj1103_SCEventRun_loopCount = 0;
var obj1099_SCEventRun_activeActionGroupIndex = -1;
var obj1099_SCEventRun_runningActionsCount = 0;
var obj1099_SCEventRun_loopCount = 0;
var obj500_onTap_activeActionGroupIndex = -1;
var obj500_onTap_runningActionsCount = 0;
var obj500_onTap_loopCount = 0;
var obj456_onTap_activeActionGroupIndex = -1;
var obj456_onTap_runningActionsCount = 0;
var obj456_onTap_loopCount = 0;
var obj456_onTouchUp_activeActionGroupIndex = -1;
var obj456_onTouchUp_runningActionsCount = 0;
var obj456_onTouchUp_loopCount = 0;
var obj1005_onTap_activeActionGroupIndex = -1;
var obj1005_onTap_runningActionsCount = 0;
var obj1005_onTap_loopCount = 0;
var obj294_onTap_activeActionGroupIndex = -1;
var obj294_onTap_runningActionsCount = 0;
var obj294_onTap_loopCount = 0;
var obj1120_onTap_activeActionGroupIndex = -1;
var obj1120_onTap_runningActionsCount = 0;
var obj1120_onTap_loopCount = 0;
var obj1116_SCEventRun_activeActionGroupIndex = -1;
var obj1116_SCEventRun_runningActionsCount = 0;
var obj1116_SCEventRun_loopCount = 0;
var obj1112_SCEventRun_activeActionGroupIndex = -1;
var obj1112_SCEventRun_runningActionsCount = 0;
var obj1112_SCEventRun_loopCount = 0;
var obj1009_onTap_activeActionGroupIndex = -1;
var obj1009_onTap_runningActionsCount = 0;
var obj1009_onTap_loopCount = 0;
var obj452_onTap_activeActionGroupIndex = -1;
var obj452_onTap_runningActionsCount = 0;
var obj452_onTap_loopCount = 0;
var obj1133_onTap_activeActionGroupIndex = -1;
var obj1133_onTap_runningActionsCount = 0;
var obj1133_onTap_loopCount = 0;
var obj1129_SCEventRun_activeActionGroupIndex = -1;
var obj1129_SCEventRun_runningActionsCount = 0;
var obj1129_SCEventRun_loopCount = 0;
var obj1125_SCEventRun_activeActionGroupIndex = -1;
var obj1125_SCEventRun_runningActionsCount = 0;
var obj1125_SCEventRun_loopCount = 0;
var obj440_onTap_activeActionGroupIndex = -1;
var obj440_onTap_runningActionsCount = 0;
var obj440_onTap_loopCount = 0;
var obj821_onTap_activeActionGroupIndex = -1;
var obj821_onTap_runningActionsCount = 0;
var obj821_onTap_loopCount = 0;
var obj444_onTap_activeActionGroupIndex = -1;
var obj444_onTap_runningActionsCount = 0;
var obj444_onTap_loopCount = 0;
var obj1015_onTap_activeActionGroupIndex = -1;
var obj1015_onTap_runningActionsCount = 0;
var obj1015_onTap_loopCount = 0;
var obj448_onTap_activeActionGroupIndex = -1;
var obj448_onTap_runningActionsCount = 0;
var obj448_onTap_loopCount = 0;
var obj1146_onTap_activeActionGroupIndex = -1;
var obj1146_onTap_runningActionsCount = 0;
var obj1146_onTap_loopCount = 0;
var obj1142_SCEventRun_activeActionGroupIndex = -1;
var obj1142_SCEventRun_runningActionsCount = 0;
var obj1142_SCEventRun_loopCount = 0;
var obj1138_SCEventRun_activeActionGroupIndex = -1;
var obj1138_SCEventRun_runningActionsCount = 0;
var obj1138_SCEventRun_loopCount = 0;
var obj296_onTap_activeActionGroupIndex = -1;
var obj296_onTap_runningActionsCount = 0;
var obj296_onTap_loopCount = 0;
var obj952_onTap_activeActionGroupIndex = -1;
var obj952_onTap_runningActionsCount = 0;
var obj952_onTap_loopCount = 0;
var obj949_onTap_activeActionGroupIndex = -1;
var obj949_onTap_runningActionsCount = 0;
var obj949_onTap_loopCount = 0;
var obj944_SCEventRun_activeActionGroupIndex = -1;
var obj944_SCEventRun_runningActionsCount = 0;
var obj944_SCEventRun_loopCount = 0;
var obj938_SCEventRun_activeActionGroupIndex = -1;
var obj938_SCEventRun_runningActionsCount = 0;
var obj938_SCEventRun_loopCount = 0;
var obj933_onTap_activeActionGroupIndex = -1;
var obj933_onTap_runningActionsCount = 0;
var obj933_onTap_loopCount = 0;
var obj928_onTap_activeActionGroupIndex = -1;
var obj928_onTap_runningActionsCount = 0;
var obj928_onTap_loopCount = 0;
var obj923_SCEventRun_activeActionGroupIndex = -1;
var obj923_SCEventRun_runningActionsCount = 0;
var obj923_SCEventRun_loopCount = 0;
var obj917_SCEventRun_activeActionGroupIndex = -1;
var obj917_SCEventRun_runningActionsCount = 0;
var obj917_SCEventRun_loopCount = 0;
var obj910_onTap_activeActionGroupIndex = -1;
var obj910_onTap_runningActionsCount = 0;
var obj910_onTap_loopCount = 0;
var obj907_onTap_activeActionGroupIndex = -1;
var obj907_onTap_runningActionsCount = 0;
var obj907_onTap_loopCount = 0;
var obj902_SCEventRun_activeActionGroupIndex = -1;
var obj902_SCEventRun_runningActionsCount = 0;
var obj902_SCEventRun_loopCount = 0;
var obj896_SCEventRun_activeActionGroupIndex = -1;
var obj896_SCEventRun_runningActionsCount = 0;
var obj896_SCEventRun_loopCount = 0;
var obj891_onTap_activeActionGroupIndex = -1;
var obj891_onTap_runningActionsCount = 0;
var obj891_onTap_loopCount = 0;
var obj886_onTap_activeActionGroupIndex = -1;
var obj886_onTap_runningActionsCount = 0;
var obj886_onTap_loopCount = 0;
var obj881_SCEventRun_activeActionGroupIndex = -1;
var obj881_SCEventRun_runningActionsCount = 0;
var obj881_SCEventRun_loopCount = 0;
var obj875_SCEventRun_activeActionGroupIndex = -1;
var obj875_SCEventRun_runningActionsCount = 0;
var obj875_SCEventRun_loopCount = 0;
var obj870_onTap_activeActionGroupIndex = -1;
var obj870_onTap_runningActionsCount = 0;
var obj870_onTap_loopCount = 0;
var obj866_onTap_activeActionGroupIndex = -1;
var obj866_onTap_runningActionsCount = 0;
var obj866_onTap_loopCount = 0;
var obj862_onTap_activeActionGroupIndex = -1;
var obj862_onTap_runningActionsCount = 0;
var obj862_onTap_loopCount = 0;
var obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj852_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj852_SCEventCounterReachedTargetValue_loopCount = 0;
var obj846_SCEventRun_activeActionGroupIndex = -1;
var obj846_SCEventRun_runningActionsCount = 0;
var obj846_SCEventRun_loopCount = 0;
var obj837_SCEventRun_activeActionGroupIndex = -1;
var obj837_SCEventRun_runningActionsCount = 0;
var obj837_SCEventRun_loopCount = 0;
var obj832_onShow_activeActionGroupIndex = -1;
var obj832_onShow_runningActionsCount = 0;
var obj832_onShow_loopCount = 0;
var obj827_onShow_activeActionGroupIndex = -1;
var obj827_onShow_runningActionsCount = 0;
var obj827_onShow_loopCount = 0;
var obj1620_onTap_activeActionGroupIndex = -1;
var obj1620_onTap_runningActionsCount = 0;
var obj1620_onTap_loopCount = 0;
var obj1631_onTap_activeActionGroupIndex = -1;
var obj1631_onTap_runningActionsCount = 0;
var obj1631_onTap_loopCount = 0;
var obj1595_onTap_activeActionGroupIndex = -1;
var obj1595_onTap_runningActionsCount = 0;
var obj1595_onTap_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj852_counterValue = 0;
var obj852_counterTargetValue = 2;
var obj852_counterCanExceedTargetValue = false;
 $(window).load(function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj969_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj969_onTap_activeActionGroupIndex = -1;
		$("#obj969").trigger("obj969_onTap_ended");
		
		return;
	}
	window.obj969_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1025 
runActionList_1156();
function runActionList_1156() {
	window.obj969_onTap_runningActionsCount = obj969_onTap_runningActionsCount + 1;
	$("#obj1025").trigger('SCEventRun');
	setTimeout(function() {
		window.obj969_onTap_runningActionsCount = window.obj969_onTap_runningActionsCount - 1;
if (window.obj969_onTap_runningActionsCount == 0) {
	obj969_onTap_actionGroup1();
}		
	}, 1);
}



};
obj969_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj969_onTap_activeActionGroupIndex = -1;
		$("#obj969").trigger("obj969_onTap_ended");
		
		return;
	}
	window.obj969_onTap_activeActionGroupIndex = 1;
	





















};
obj285_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj285_onTap_activeActionGroupIndex = -1;
		$("#obj285").trigger("obj285_onTap_ended");
		
		return;
	}
	window.obj285_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj285 
hide_972();
function hide_972() {
	var element = "#obj285";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj285_onTap_runningActionsCount = obj285_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj285_onTap_runningActionsCount = window.obj285_onTap_runningActionsCount - 1;
if (window.obj285_onTap_runningActionsCount == 0) {
	obj285_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_972(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj285_onTap_runningActionsCount = window.obj285_onTap_runningActionsCount - 1;
if (window.obj285_onTap_runningActionsCount == 0) {
	obj285_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_461();
function move_461() {
	window.obj285_onTap_runningActionsCount = obj285_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 145;
	var moveY = 160;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj285_onTap_runningActionsCount = window.obj285_onTap_runningActionsCount - 1;
if (window.obj285_onTap_runningActionsCount == 0) {
	obj285_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj285_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj285_onTap_activeActionGroupIndex = -1;
		$("#obj285").trigger("obj285_onTap_ended");
		
		return;
	}
	window.obj285_onTap_activeActionGroupIndex = 1;
	





















};
obj1029_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1029_onTap_activeActionGroupIndex = -1;
		$("#obj1029").trigger("obj1029_onTap_ended");
		
		return;
	}
	window.obj1029_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj396 
hide_1158();
function hide_1158() {
	var element = "#obj396";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1029_onTap_runningActionsCount = obj1029_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1029_onTap_runningActionsCount = window.obj1029_onTap_runningActionsCount - 1;
if (window.obj1029_onTap_runningActionsCount == 0) {
	obj1029_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1158(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1029_onTap_runningActionsCount = window.obj1029_onTap_runningActionsCount - 1;
if (window.obj1029_onTap_runningActionsCount == 0) {
	obj1029_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_1153();
function move_1153() {
	window.obj1029_onTap_runningActionsCount = obj1029_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 217;
	var moveY = 256;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1029_onTap_runningActionsCount = window.obj1029_onTap_runningActionsCount - 1;
if (window.obj1029_onTap_runningActionsCount == 0) {
	obj1029_onTap_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj1021 
runActionList_1031();
function runActionList_1031() {
	window.obj1029_onTap_runningActionsCount = obj1029_onTap_runningActionsCount + 1;
	$("#obj1021").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1029_onTap_runningActionsCount = window.obj1029_onTap_runningActionsCount - 1;
if (window.obj1029_onTap_runningActionsCount == 0) {
	obj1029_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1029_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1029_onTap_activeActionGroupIndex = -1;
		$("#obj1029").trigger("obj1029_onTap_ended");
		
		return;
	}
	window.obj1029_onTap_activeActionGroupIndex = 1;
	





















};
obj1025_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1025_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1025").trigger("obj1025_SCEventRun_ended");
		
		return;
	}
	window.obj1025_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1032 
show_1027();
function show_1027() {
	var element = "#obj1032";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1025_SCEventRun_runningActionsCount = obj1025_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1025_SCEventRun_runningActionsCount = window.obj1025_SCEventRun_runningActionsCount - 1;
if (window.obj1025_SCEventRun_runningActionsCount == 0) {
	obj1025_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1025_SCEventRun_runningActionsCount = window.obj1025_SCEventRun_runningActionsCount - 1;
if (window.obj1025_SCEventRun_runningActionsCount == 0) {
	obj1025_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1025_SCEventRun_runningActionsCount = window.obj1025_SCEventRun_runningActionsCount - 1;
if (window.obj1025_SCEventRun_runningActionsCount == 0) {
	obj1025_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1029 
show_1028();
function show_1028() {
	var element = "#obj1029";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1025_SCEventRun_runningActionsCount = obj1025_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1025_SCEventRun_runningActionsCount = window.obj1025_SCEventRun_runningActionsCount - 1;
if (window.obj1025_SCEventRun_runningActionsCount == 0) {
	obj1025_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1025_SCEventRun_runningActionsCount = window.obj1025_SCEventRun_runningActionsCount - 1;
if (window.obj1025_SCEventRun_runningActionsCount == 0) {
	obj1025_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1025_SCEventRun_runningActionsCount = window.obj1025_SCEventRun_runningActionsCount - 1;
if (window.obj1025_SCEventRun_runningActionsCount == 0) {
	obj1025_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1025_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1025_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1025").trigger("obj1025_SCEventRun_ended");
		
		return;
	}
	window.obj1025_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1021_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1021_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1021").trigger("obj1021_SCEventRun_ended");
		
		return;
	}
	window.obj1021_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1029 
hide_1023();
function hide_1023() {
	var element = "#obj1029";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1021_SCEventRun_runningActionsCount = obj1021_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1021_SCEventRun_runningActionsCount = window.obj1021_SCEventRun_runningActionsCount - 1;
if (window.obj1021_SCEventRun_runningActionsCount == 0) {
	obj1021_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1023(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1021_SCEventRun_runningActionsCount = window.obj1021_SCEventRun_runningActionsCount - 1;
if (window.obj1021_SCEventRun_runningActionsCount == 0) {
	obj1021_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1032 
hide_1024();
function hide_1024() {
	var element = "#obj1032";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1021_SCEventRun_runningActionsCount = obj1021_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1021_SCEventRun_runningActionsCount = window.obj1021_SCEventRun_runningActionsCount - 1;
if (window.obj1021_SCEventRun_runningActionsCount == 0) {
	obj1021_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1024(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1021_SCEventRun_runningActionsCount = window.obj1021_SCEventRun_runningActionsCount - 1;
if (window.obj1021_SCEventRun_runningActionsCount == 0) {
	obj1021_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj285 
show_1289();
function show_1289() {
	var element = "#obj285";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1021_SCEventRun_runningActionsCount = obj1021_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1021_SCEventRun_runningActionsCount = window.obj1021_SCEventRun_runningActionsCount - 1;
if (window.obj1021_SCEventRun_runningActionsCount == 0) {
	obj1021_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1021_SCEventRun_runningActionsCount = window.obj1021_SCEventRun_runningActionsCount - 1;
if (window.obj1021_SCEventRun_runningActionsCount == 0) {
	obj1021_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1021_SCEventRun_runningActionsCount = window.obj1021_SCEventRun_runningActionsCount - 1;
if (window.obj1021_SCEventRun_runningActionsCount == 0) {
	obj1021_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1021_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1021_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1021").trigger("obj1021_SCEventRun_ended");
		
		return;
	}
	window.obj1021_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj973_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj973_onTap_activeActionGroupIndex = -1;
		$("#obj973").trigger("obj973_onTap_ended");
		
		return;
	}
	window.obj973_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1038 
runActionList_1157();
function runActionList_1157() {
	window.obj973_onTap_runningActionsCount = obj973_onTap_runningActionsCount + 1;
	$("#obj1038").trigger('SCEventRun');
	setTimeout(function() {
		window.obj973_onTap_runningActionsCount = window.obj973_onTap_runningActionsCount - 1;
if (window.obj973_onTap_runningActionsCount == 0) {
	obj973_onTap_actionGroup1();
}		
	}, 1);
}



};
obj973_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj973_onTap_activeActionGroupIndex = -1;
		$("#obj973").trigger("obj973_onTap_ended");
		
		return;
	}
	window.obj973_onTap_activeActionGroupIndex = 1;
	





















};
obj396_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj396_onTap_activeActionGroupIndex = -1;
		$("#obj396").trigger("obj396_onTap_ended");
		
		return;
	}
	window.obj396_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj396 
hide_978();
function hide_978() {
	var element = "#obj396";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj396_onTap_runningActionsCount = obj396_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj396_onTap_runningActionsCount = window.obj396_onTap_runningActionsCount - 1;
if (window.obj396_onTap_runningActionsCount == 0) {
	obj396_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_978(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj396_onTap_runningActionsCount = window.obj396_onTap_runningActionsCount - 1;
if (window.obj396_onTap_runningActionsCount == 0) {
	obj396_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_462();
function move_462() {
	window.obj396_onTap_runningActionsCount = obj396_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 215;
	var moveY = 260;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj396_onTap_runningActionsCount = window.obj396_onTap_runningActionsCount - 1;
if (window.obj396_onTap_runningActionsCount == 0) {
	obj396_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj396_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj396_onTap_activeActionGroupIndex = -1;
		$("#obj396").trigger("obj396_onTap_ended");
		
		return;
	}
	window.obj396_onTap_activeActionGroupIndex = 1;
	





















};
obj1042_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1042_onTap_activeActionGroupIndex = -1;
		$("#obj1042").trigger("obj1042_onTap_ended");
		
		return;
	}
	window.obj1042_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1034 
runActionList_1044();
function runActionList_1044() {
	window.obj1042_onTap_runningActionsCount = obj1042_onTap_runningActionsCount + 1;
	$("#obj1034").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1042_onTap_runningActionsCount = window.obj1042_onTap_runningActionsCount - 1;
if (window.obj1042_onTap_runningActionsCount == 0) {
	obj1042_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1042_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1042_onTap_activeActionGroupIndex = -1;
		$("#obj1042").trigger("obj1042_onTap_ended");
		
		return;
	}
	window.obj1042_onTap_activeActionGroupIndex = 1;
	





















};
obj1038_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1038_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1038").trigger("obj1038_SCEventRun_ended");
		
		return;
	}
	window.obj1038_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1045 
show_1040();
function show_1040() {
	var element = "#obj1045";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1038_SCEventRun_runningActionsCount = obj1038_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1038_SCEventRun_runningActionsCount = window.obj1038_SCEventRun_runningActionsCount - 1;
if (window.obj1038_SCEventRun_runningActionsCount == 0) {
	obj1038_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1038_SCEventRun_runningActionsCount = window.obj1038_SCEventRun_runningActionsCount - 1;
if (window.obj1038_SCEventRun_runningActionsCount == 0) {
	obj1038_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1038_SCEventRun_runningActionsCount = window.obj1038_SCEventRun_runningActionsCount - 1;
if (window.obj1038_SCEventRun_runningActionsCount == 0) {
	obj1038_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1042 
show_1041();
function show_1041() {
	var element = "#obj1042";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1038_SCEventRun_runningActionsCount = obj1038_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1038_SCEventRun_runningActionsCount = window.obj1038_SCEventRun_runningActionsCount - 1;
if (window.obj1038_SCEventRun_runningActionsCount == 0) {
	obj1038_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1038_SCEventRun_runningActionsCount = window.obj1038_SCEventRun_runningActionsCount - 1;
if (window.obj1038_SCEventRun_runningActionsCount == 0) {
	obj1038_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1038_SCEventRun_runningActionsCount = window.obj1038_SCEventRun_runningActionsCount - 1;
if (window.obj1038_SCEventRun_runningActionsCount == 0) {
	obj1038_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1038_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1038_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1038").trigger("obj1038_SCEventRun_ended");
		
		return;
	}
	window.obj1038_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1034_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1034_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1034").trigger("obj1034_SCEventRun_ended");
		
		return;
	}
	window.obj1034_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1042 
hide_1036();
function hide_1036() {
	var element = "#obj1042";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1034_SCEventRun_runningActionsCount = obj1034_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1034_SCEventRun_runningActionsCount = window.obj1034_SCEventRun_runningActionsCount - 1;
if (window.obj1034_SCEventRun_runningActionsCount == 0) {
	obj1034_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1036(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1034_SCEventRun_runningActionsCount = window.obj1034_SCEventRun_runningActionsCount - 1;
if (window.obj1034_SCEventRun_runningActionsCount == 0) {
	obj1034_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1045 
hide_1037();
function hide_1037() {
	var element = "#obj1045";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1034_SCEventRun_runningActionsCount = obj1034_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1034_SCEventRun_runningActionsCount = window.obj1034_SCEventRun_runningActionsCount - 1;
if (window.obj1034_SCEventRun_runningActionsCount == 0) {
	obj1034_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1037(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1034_SCEventRun_runningActionsCount = window.obj1034_SCEventRun_runningActionsCount - 1;
if (window.obj1034_SCEventRun_runningActionsCount == 0) {
	obj1034_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj396 
show_1288();
function show_1288() {
	var element = "#obj396";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1034_SCEventRun_runningActionsCount = obj1034_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1034_SCEventRun_runningActionsCount = window.obj1034_SCEventRun_runningActionsCount - 1;
if (window.obj1034_SCEventRun_runningActionsCount == 0) {
	obj1034_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1034_SCEventRun_runningActionsCount = window.obj1034_SCEventRun_runningActionsCount - 1;
if (window.obj1034_SCEventRun_runningActionsCount == 0) {
	obj1034_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1034_SCEventRun_runningActionsCount = window.obj1034_SCEventRun_runningActionsCount - 1;
if (window.obj1034_SCEventRun_runningActionsCount == 0) {
	obj1034_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1034_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1034_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1034").trigger("obj1034_SCEventRun_ended");
		
		return;
	}
	window.obj1034_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj803_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj803_onTap_activeActionGroupIndex = -1;
		$("#obj803").trigger("obj803_onTap_ended");
		
		return;
	}
	window.obj803_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj881 
runActionList_959();
function runActionList_959() {
	window.obj803_onTap_runningActionsCount = obj803_onTap_runningActionsCount + 1;
	$("#obj881").trigger('SCEventRun');
	setTimeout(function() {
		window.obj803_onTap_runningActionsCount = window.obj803_onTap_runningActionsCount - 1;
if (window.obj803_onTap_runningActionsCount == 0) {
	obj803_onTap_actionGroup1();
}		
	}, 1);
}



};
obj803_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj803_onTap_activeActionGroupIndex = -1;
		$("#obj803").trigger("obj803_onTap_ended");
		
		return;
	}
	window.obj803_onTap_activeActionGroupIndex = 1;
	





















};
obj432_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj432_onTap_activeActionGroupIndex = -1;
		$("#obj432").trigger("obj432_onTap_ended");
		
		return;
	}
	window.obj432_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj432 
hide_808();
function hide_808() {
	var element = "#obj432";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj432_onTap_runningActionsCount = obj432_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj432_onTap_runningActionsCount = window.obj432_onTap_runningActionsCount - 1;
if (window.obj432_onTap_runningActionsCount == 0) {
	obj432_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_808(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj432_onTap_runningActionsCount = window.obj432_onTap_runningActionsCount - 1;
if (window.obj432_onTap_runningActionsCount == 0) {
	obj432_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_463();
function move_463() {
	window.obj432_onTap_runningActionsCount = obj432_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 292;
	var moveY = 189;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj432_onTap_runningActionsCount = window.obj432_onTap_runningActionsCount - 1;
if (window.obj432_onTap_runningActionsCount == 0) {
	obj432_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj432_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj432_onTap_activeActionGroupIndex = -1;
		$("#obj432").trigger("obj432_onTap_ended");
		
		return;
	}
	window.obj432_onTap_activeActionGroupIndex = 1;
	





















};
obj979_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj979_onTap_activeActionGroupIndex = -1;
		$("#obj979").trigger("obj979_onTap_ended");
		
		return;
	}
	window.obj979_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1051 
runActionList_1160();
function runActionList_1160() {
	window.obj979_onTap_runningActionsCount = obj979_onTap_runningActionsCount + 1;
	$("#obj1051").trigger('SCEventRun');
	setTimeout(function() {
		window.obj979_onTap_runningActionsCount = window.obj979_onTap_runningActionsCount - 1;
if (window.obj979_onTap_runningActionsCount == 0) {
	obj979_onTap_actionGroup1();
}		
	}, 1);
}



};
obj979_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj979_onTap_activeActionGroupIndex = -1;
		$("#obj979").trigger("obj979_onTap_ended");
		
		return;
	}
	window.obj979_onTap_activeActionGroupIndex = 1;
	





















};
obj287_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj287_onTap_activeActionGroupIndex = -1;
		$("#obj287").trigger("obj287_onTap_ended");
		
		return;
	}
	window.obj287_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj287 
hide_982();
function hide_982() {
	var element = "#obj287";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj287_onTap_runningActionsCount = obj287_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_982(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_464();
function move_464() {
	window.obj287_onTap_runningActionsCount = obj287_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 370;
	var moveY = 91;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj287_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj287_onTap_activeActionGroupIndex = -1;
		$("#obj287").trigger("obj287_onTap_ended");
		
		return;
	}
	window.obj287_onTap_activeActionGroupIndex = 1;
	





















};
obj1055_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1055_onTap_activeActionGroupIndex = -1;
		$("#obj1055").trigger("obj1055_onTap_ended");
		
		return;
	}
	window.obj1055_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj330 
move_1159();
function move_1159() {
	window.obj1055_onTap_runningActionsCount = obj1055_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 451;
	var moveY = 185;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1055_onTap_runningActionsCount = window.obj1055_onTap_runningActionsCount - 1;
if (window.obj1055_onTap_runningActionsCount == 0) {
	obj1055_onTap_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj1047 
runActionList_1057();
function runActionList_1057() {
	window.obj1055_onTap_runningActionsCount = obj1055_onTap_runningActionsCount + 1;
	$("#obj1047").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1055_onTap_runningActionsCount = window.obj1055_onTap_runningActionsCount - 1;
if (window.obj1055_onTap_runningActionsCount == 0) {
	obj1055_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1055_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1055_onTap_activeActionGroupIndex = -1;
		$("#obj1055").trigger("obj1055_onTap_ended");
		
		return;
	}
	window.obj1055_onTap_activeActionGroupIndex = 1;
	





















};
obj1051_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1051_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1051").trigger("obj1051_SCEventRun_ended");
		
		return;
	}
	window.obj1051_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1058 
show_1053();
function show_1053() {
	var element = "#obj1058";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1051_SCEventRun_runningActionsCount = obj1051_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1051_SCEventRun_runningActionsCount = window.obj1051_SCEventRun_runningActionsCount - 1;
if (window.obj1051_SCEventRun_runningActionsCount == 0) {
	obj1051_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1051_SCEventRun_runningActionsCount = window.obj1051_SCEventRun_runningActionsCount - 1;
if (window.obj1051_SCEventRun_runningActionsCount == 0) {
	obj1051_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1051_SCEventRun_runningActionsCount = window.obj1051_SCEventRun_runningActionsCount - 1;
if (window.obj1051_SCEventRun_runningActionsCount == 0) {
	obj1051_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1055 
show_1054();
function show_1054() {
	var element = "#obj1055";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1051_SCEventRun_runningActionsCount = obj1051_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1051_SCEventRun_runningActionsCount = window.obj1051_SCEventRun_runningActionsCount - 1;
if (window.obj1051_SCEventRun_runningActionsCount == 0) {
	obj1051_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1051_SCEventRun_runningActionsCount = window.obj1051_SCEventRun_runningActionsCount - 1;
if (window.obj1051_SCEventRun_runningActionsCount == 0) {
	obj1051_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1051_SCEventRun_runningActionsCount = window.obj1051_SCEventRun_runningActionsCount - 1;
if (window.obj1051_SCEventRun_runningActionsCount == 0) {
	obj1051_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1051_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1051_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1051").trigger("obj1051_SCEventRun_ended");
		
		return;
	}
	window.obj1051_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1047_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1047_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1047").trigger("obj1047_SCEventRun_ended");
		
		return;
	}
	window.obj1047_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1055 
hide_1049();
function hide_1049() {
	var element = "#obj1055";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1047_SCEventRun_runningActionsCount = obj1047_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1047_SCEventRun_runningActionsCount = window.obj1047_SCEventRun_runningActionsCount - 1;
if (window.obj1047_SCEventRun_runningActionsCount == 0) {
	obj1047_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1049(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1047_SCEventRun_runningActionsCount = window.obj1047_SCEventRun_runningActionsCount - 1;
if (window.obj1047_SCEventRun_runningActionsCount == 0) {
	obj1047_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1058 
hide_1050();
function hide_1050() {
	var element = "#obj1058";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1047_SCEventRun_runningActionsCount = obj1047_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1047_SCEventRun_runningActionsCount = window.obj1047_SCEventRun_runningActionsCount - 1;
if (window.obj1047_SCEventRun_runningActionsCount == 0) {
	obj1047_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1050(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1047_SCEventRun_runningActionsCount = window.obj1047_SCEventRun_runningActionsCount - 1;
if (window.obj1047_SCEventRun_runningActionsCount == 0) {
	obj1047_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj287 
show_1287();
function show_1287() {
	var element = "#obj287";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1047_SCEventRun_runningActionsCount = obj1047_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1047_SCEventRun_runningActionsCount = window.obj1047_SCEventRun_runningActionsCount - 1;
if (window.obj1047_SCEventRun_runningActionsCount == 0) {
	obj1047_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1047_SCEventRun_runningActionsCount = window.obj1047_SCEventRun_runningActionsCount - 1;
if (window.obj1047_SCEventRun_runningActionsCount == 0) {
	obj1047_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1047_SCEventRun_runningActionsCount = window.obj1047_SCEventRun_runningActionsCount - 1;
if (window.obj1047_SCEventRun_runningActionsCount == 0) {
	obj1047_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1047_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1047_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1047").trigger("obj1047_SCEventRun_ended");
		
		return;
	}
	window.obj1047_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj392_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj392_onTap_activeActionGroupIndex = -1;
		$("#obj392").trigger("obj392_onTap_ended");
		
		return;
	}
	window.obj392_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj330 
move_465();
function move_465() {
	window.obj392_onTap_runningActionsCount = obj392_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 453;
	var moveY = 185;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj392_onTap_runningActionsCount = window.obj392_onTap_runningActionsCount - 1;
if (window.obj392_onTap_runningActionsCount == 0) {
	obj392_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj392_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj392_onTap_activeActionGroupIndex = -1;
		$("#obj392").trigger("obj392_onTap_ended");
		
		return;
	}
	window.obj392_onTap_activeActionGroupIndex = 1;
	





















};
obj809_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj809_onTap_activeActionGroupIndex = -1;
		$("#obj809").trigger("obj809_onTap_ended");
		
		return;
	}
	window.obj809_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj902 
runActionList_963();
function runActionList_963() {
	window.obj809_onTap_runningActionsCount = obj809_onTap_runningActionsCount + 1;
	$("#obj902").trigger('SCEventRun');
	setTimeout(function() {
		window.obj809_onTap_runningActionsCount = window.obj809_onTap_runningActionsCount - 1;
if (window.obj809_onTap_runningActionsCount == 0) {
	obj809_onTap_actionGroup1();
}		
	}, 1);
}



};
obj809_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj809_onTap_activeActionGroupIndex = -1;
		$("#obj809").trigger("obj809_onTap_ended");
		
		return;
	}
	window.obj809_onTap_activeActionGroupIndex = 1;
	





















};
obj416_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj416_onTap_activeActionGroupIndex = -1;
		$("#obj416").trigger("obj416_onTap_ended");
		
		return;
	}
	window.obj416_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj416 
hide_814();
function hide_814() {
	var element = "#obj416";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj416_onTap_runningActionsCount = obj416_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj416_onTap_runningActionsCount = window.obj416_onTap_runningActionsCount - 1;
if (window.obj416_onTap_runningActionsCount == 0) {
	obj416_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_814(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj416_onTap_runningActionsCount = window.obj416_onTap_runningActionsCount - 1;
if (window.obj416_onTap_runningActionsCount == 0) {
	obj416_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_466();
function move_466() {
	window.obj416_onTap_runningActionsCount = obj416_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 525;
	var moveY = 252;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj416_onTap_runningActionsCount = window.obj416_onTap_runningActionsCount - 1;
if (window.obj416_onTap_runningActionsCount == 0) {
	obj416_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj416_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj416_onTap_activeActionGroupIndex = -1;
		$("#obj416").trigger("obj416_onTap_ended");
		
		return;
	}
	window.obj416_onTap_activeActionGroupIndex = 1;
	





















};
obj316_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj316_onTap_activeActionGroupIndex = -1;
		$("#obj316").trigger("obj316_onTap_ended");
		
		return;
	}
	window.obj316_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj316 
hide_485();
function hide_485() {
	var element = "#obj316";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj316_onTap_runningActionsCount = obj316_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj316_onTap_runningActionsCount = window.obj316_onTap_runningActionsCount - 1;
if (window.obj316_onTap_runningActionsCount == 0) {
	obj316_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_485(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj316_onTap_runningActionsCount = window.obj316_onTap_runningActionsCount - 1;
if (window.obj316_onTap_runningActionsCount == 0) {
	obj316_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj381 
show_486();
function show_486() {
	var element = "#obj381";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj316_onTap_runningActionsCount = obj316_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj316_onTap_runningActionsCount = window.obj316_onTap_runningActionsCount - 1;
if (window.obj316_onTap_runningActionsCount == 0) {
	obj316_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj316_onTap_runningActionsCount = window.obj316_onTap_runningActionsCount - 1;
if (window.obj316_onTap_runningActionsCount == 0) {
	obj316_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj316_onTap_runningActionsCount = window.obj316_onTap_runningActionsCount - 1;
if (window.obj316_onTap_runningActionsCount == 0) {
	obj316_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj330 
move_484();
function move_484() {
	window.obj316_onTap_runningActionsCount = obj316_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 599;
	var moveY = 480;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj316_onTap_runningActionsCount = window.obj316_onTap_runningActionsCount - 1;
if (window.obj316_onTap_runningActionsCount == 0) {
	obj316_onTap_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj846 
runActionList_960();
function runActionList_960() {
	window.obj316_onTap_runningActionsCount = obj316_onTap_runningActionsCount + 1;
	$("#obj846").trigger('SCEventRun');
	setTimeout(function() {
		window.obj316_onTap_runningActionsCount = window.obj316_onTap_runningActionsCount - 1;
if (window.obj316_onTap_runningActionsCount == 0) {
	obj316_onTap_actionGroup1();
}		
	}, 1);
}



};
obj316_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj316_onTap_activeActionGroupIndex = -1;
		$("#obj316").trigger("obj316_onTap_ended");
		
		return;
	}
	window.obj316_onTap_activeActionGroupIndex = 1;
	





















};
obj381_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj381_onTap_activeActionGroupIndex = -1;
		$("#obj381").trigger("obj381_onTap_ended");
		
		return;
	}
	window.obj381_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj381 
hide_489();
function hide_489() {
	var element = "#obj381";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj381_onTap_runningActionsCount = obj381_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj381_onTap_runningActionsCount = window.obj381_onTap_runningActionsCount - 1;
if (window.obj381_onTap_runningActionsCount == 0) {
	obj381_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_489(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj381_onTap_runningActionsCount = window.obj381_onTap_runningActionsCount - 1;
if (window.obj381_onTap_runningActionsCount == 0) {
	obj381_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj316 
show_488();
function show_488() {
	var element = "#obj316";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj381_onTap_runningActionsCount = obj381_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj381_onTap_runningActionsCount = window.obj381_onTap_runningActionsCount - 1;
if (window.obj381_onTap_runningActionsCount == 0) {
	obj381_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj381_onTap_runningActionsCount = window.obj381_onTap_runningActionsCount - 1;
if (window.obj381_onTap_runningActionsCount == 0) {
	obj381_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj381_onTap_runningActionsCount = window.obj381_onTap_runningActionsCount - 1;
if (window.obj381_onTap_runningActionsCount == 0) {
	obj381_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj330 
move_487();
function move_487() {
	window.obj381_onTap_runningActionsCount = obj381_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 449;
	var moveY = 330;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj381_onTap_runningActionsCount = window.obj381_onTap_runningActionsCount - 1;
if (window.obj381_onTap_runningActionsCount == 0) {
	obj381_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj381_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj381_onTap_activeActionGroupIndex = -1;
		$("#obj381").trigger("obj381_onTap_ended");
		
		return;
	}
	window.obj381_onTap_activeActionGroupIndex = 1;
	





















};
obj381_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj381_onTouchUp_activeActionGroupIndex = -1;
		$("#obj381").trigger("obj381_onTouchUp_ended");
		
		return;
	}
	window.obj381_onTouchUp_activeActionGroupIndex = 0;
	








//	action: wait
wait_496();
function wait_496() {
	window.obj381_onTouchUp_runningActionsCount = obj381_onTouchUp_runningActionsCount + 1;
	setTimeout(function() {
		window.obj381_onTouchUp_runningActionsCount = window.obj381_onTouchUp_runningActionsCount - 1;
if (window.obj381_onTouchUp_runningActionsCount == 0) {
	obj381_onTouchUp_actionGroup1();
}
	}, 3000);
}












};
obj381_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj381_onTouchUp_activeActionGroupIndex = -1;
		$("#obj381").trigger("obj381_onTouchUp_ended");
		
		return;
	}
	window.obj381_onTouchUp_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj381 
show_497();
function show_497() {
	var element = "#obj381";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj381_onTouchUp_runningActionsCount = obj381_onTouchUp_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj381_onTouchUp_runningActionsCount = window.obj381_onTouchUp_runningActionsCount - 1;
if (window.obj381_onTouchUp_runningActionsCount == 0) {
	obj381_onTouchUp_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj381_onTouchUp_runningActionsCount = window.obj381_onTouchUp_runningActionsCount - 1;
if (window.obj381_onTouchUp_runningActionsCount == 0) {
	obj381_onTouchUp_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj381_onTouchUp_runningActionsCount = window.obj381_onTouchUp_runningActionsCount - 1;
if (window.obj381_onTouchUp_runningActionsCount == 0) {
	obj381_onTouchUp_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj381_onTouchUp_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj381_onTouchUp_activeActionGroupIndex = -1;
		$("#obj381").trigger("obj381_onTouchUp_ended");
		
		return;
	}
	window.obj381_onTouchUp_activeActionGroupIndex = 2;
	





















};
obj983_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj983_onTap_activeActionGroupIndex = -1;
		$("#obj983").trigger("obj983_onTap_ended");
		
		return;
	}
	window.obj983_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1064 
runActionList_1161();
function runActionList_1161() {
	window.obj983_onTap_runningActionsCount = obj983_onTap_runningActionsCount + 1;
	$("#obj1064").trigger('SCEventRun');
	setTimeout(function() {
		window.obj983_onTap_runningActionsCount = window.obj983_onTap_runningActionsCount - 1;
if (window.obj983_onTap_runningActionsCount == 0) {
	obj983_onTap_actionGroup1();
}		
	}, 1);
}



};
obj983_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj983_onTap_activeActionGroupIndex = -1;
		$("#obj983").trigger("obj983_onTap_ended");
		
		return;
	}
	window.obj983_onTap_activeActionGroupIndex = 1;
	





















};
obj306_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj306_onTap_activeActionGroupIndex = -1;
		$("#obj306").trigger("obj306_onTap_ended");
		
		return;
	}
	window.obj306_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj306 
hide_988();
function hide_988() {
	var element = "#obj306";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj306_onTap_runningActionsCount = obj306_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj306_onTap_runningActionsCount = window.obj306_onTap_runningActionsCount - 1;
if (window.obj306_onTap_runningActionsCount == 0) {
	obj306_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_988(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj306_onTap_runningActionsCount = window.obj306_onTap_runningActionsCount - 1;
if (window.obj306_onTap_runningActionsCount == 0) {
	obj306_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_467();
function move_467() {
	window.obj306_onTap_runningActionsCount = obj306_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 386;
	var moveY = 398;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj306_onTap_runningActionsCount = window.obj306_onTap_runningActionsCount - 1;
if (window.obj306_onTap_runningActionsCount == 0) {
	obj306_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj306_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj306_onTap_activeActionGroupIndex = -1;
		$("#obj306").trigger("obj306_onTap_ended");
		
		return;
	}
	window.obj306_onTap_activeActionGroupIndex = 1;
	





















};
obj1068_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1068_onTap_activeActionGroupIndex = -1;
		$("#obj1068").trigger("obj1068_onTap_ended");
		
		return;
	}
	window.obj1068_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1060 
runActionList_1070();
function runActionList_1070() {
	window.obj1068_onTap_runningActionsCount = obj1068_onTap_runningActionsCount + 1;
	$("#obj1060").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1068_onTap_runningActionsCount = window.obj1068_onTap_runningActionsCount - 1;
if (window.obj1068_onTap_runningActionsCount == 0) {
	obj1068_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1068_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1068_onTap_activeActionGroupIndex = -1;
		$("#obj1068").trigger("obj1068_onTap_ended");
		
		return;
	}
	window.obj1068_onTap_activeActionGroupIndex = 1;
	





















};
obj1064_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1064_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1064").trigger("obj1064_SCEventRun_ended");
		
		return;
	}
	window.obj1064_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1071 
show_1066();
function show_1066() {
	var element = "#obj1071";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1064_SCEventRun_runningActionsCount = obj1064_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1064_SCEventRun_runningActionsCount = window.obj1064_SCEventRun_runningActionsCount - 1;
if (window.obj1064_SCEventRun_runningActionsCount == 0) {
	obj1064_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1064_SCEventRun_runningActionsCount = window.obj1064_SCEventRun_runningActionsCount - 1;
if (window.obj1064_SCEventRun_runningActionsCount == 0) {
	obj1064_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1064_SCEventRun_runningActionsCount = window.obj1064_SCEventRun_runningActionsCount - 1;
if (window.obj1064_SCEventRun_runningActionsCount == 0) {
	obj1064_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1068 
show_1067();
function show_1067() {
	var element = "#obj1068";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1064_SCEventRun_runningActionsCount = obj1064_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1064_SCEventRun_runningActionsCount = window.obj1064_SCEventRun_runningActionsCount - 1;
if (window.obj1064_SCEventRun_runningActionsCount == 0) {
	obj1064_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1064_SCEventRun_runningActionsCount = window.obj1064_SCEventRun_runningActionsCount - 1;
if (window.obj1064_SCEventRun_runningActionsCount == 0) {
	obj1064_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1064_SCEventRun_runningActionsCount = window.obj1064_SCEventRun_runningActionsCount - 1;
if (window.obj1064_SCEventRun_runningActionsCount == 0) {
	obj1064_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1064_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1064_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1064").trigger("obj1064_SCEventRun_ended");
		
		return;
	}
	window.obj1064_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1060_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1060_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1060").trigger("obj1060_SCEventRun_ended");
		
		return;
	}
	window.obj1060_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1068 
hide_1062();
function hide_1062() {
	var element = "#obj1068";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1060_SCEventRun_runningActionsCount = obj1060_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1060_SCEventRun_runningActionsCount = window.obj1060_SCEventRun_runningActionsCount - 1;
if (window.obj1060_SCEventRun_runningActionsCount == 0) {
	obj1060_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1062(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1060_SCEventRun_runningActionsCount = window.obj1060_SCEventRun_runningActionsCount - 1;
if (window.obj1060_SCEventRun_runningActionsCount == 0) {
	obj1060_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1071 
hide_1063();
function hide_1063() {
	var element = "#obj1071";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1060_SCEventRun_runningActionsCount = obj1060_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1060_SCEventRun_runningActionsCount = window.obj1060_SCEventRun_runningActionsCount - 1;
if (window.obj1060_SCEventRun_runningActionsCount == 0) {
	obj1060_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1063(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1060_SCEventRun_runningActionsCount = window.obj1060_SCEventRun_runningActionsCount - 1;
if (window.obj1060_SCEventRun_runningActionsCount == 0) {
	obj1060_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj306 
show_1286();
function show_1286() {
	var element = "#obj306";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1060_SCEventRun_runningActionsCount = obj1060_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1060_SCEventRun_runningActionsCount = window.obj1060_SCEventRun_runningActionsCount - 1;
if (window.obj1060_SCEventRun_runningActionsCount == 0) {
	obj1060_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1060_SCEventRun_runningActionsCount = window.obj1060_SCEventRun_runningActionsCount - 1;
if (window.obj1060_SCEventRun_runningActionsCount == 0) {
	obj1060_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1060_SCEventRun_runningActionsCount = window.obj1060_SCEventRun_runningActionsCount - 1;
if (window.obj1060_SCEventRun_runningActionsCount == 0) {
	obj1060_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1060_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1060_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1060").trigger("obj1060_SCEventRun_ended");
		
		return;
	}
	window.obj1060_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj989_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj989_onTap_activeActionGroupIndex = -1;
		$("#obj989").trigger("obj989_onTap_ended");
		
		return;
	}
	window.obj989_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1077 
runActionList_1163();
function runActionList_1163() {
	window.obj989_onTap_runningActionsCount = obj989_onTap_runningActionsCount + 1;
	$("#obj1077").trigger('SCEventRun');
	setTimeout(function() {
		window.obj989_onTap_runningActionsCount = window.obj989_onTap_runningActionsCount - 1;
if (window.obj989_onTap_runningActionsCount == 0) {
	obj989_onTap_actionGroup1();
}		
	}, 1);
}



};
obj989_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj989_onTap_activeActionGroupIndex = -1;
		$("#obj989").trigger("obj989_onTap_ended");
		
		return;
	}
	window.obj989_onTap_activeActionGroupIndex = 1;
	





















};
obj289_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj289_onTap_activeActionGroupIndex = -1;
		$("#obj289").trigger("obj289_onTap_ended");
		
		return;
	}
	window.obj289_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj289 
hide_992();
function hide_992() {
	var element = "#obj289";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj289_onTap_runningActionsCount = obj289_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj289_onTap_runningActionsCount = window.obj289_onTap_runningActionsCount - 1;
if (window.obj289_onTap_runningActionsCount == 0) {
	obj289_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_992(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj289_onTap_runningActionsCount = window.obj289_onTap_runningActionsCount - 1;
if (window.obj289_onTap_runningActionsCount == 0) {
	obj289_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_468();
function move_468() {
	window.obj289_onTap_runningActionsCount = obj289_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 302;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj289_onTap_runningActionsCount = window.obj289_onTap_runningActionsCount - 1;
if (window.obj289_onTap_runningActionsCount == 0) {
	obj289_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj289_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj289_onTap_activeActionGroupIndex = -1;
		$("#obj289").trigger("obj289_onTap_ended");
		
		return;
	}
	window.obj289_onTap_activeActionGroupIndex = 1;
	





















};
obj1081_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1081_onTap_activeActionGroupIndex = -1;
		$("#obj1081").trigger("obj1081_onTap_ended");
		
		return;
	}
	window.obj1081_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj381 
hide_1165();
function hide_1165() {
	var element = "#obj381";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1081_onTap_runningActionsCount = obj1081_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1081_onTap_runningActionsCount = window.obj1081_onTap_runningActionsCount - 1;
if (window.obj1081_onTap_runningActionsCount == 0) {
	obj1081_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1165(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1081_onTap_runningActionsCount = window.obj1081_onTap_runningActionsCount - 1;
if (window.obj1081_onTap_runningActionsCount == 0) {
	obj1081_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj316 
show_1178();
function show_1178() {
	var element = "#obj316";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1081_onTap_runningActionsCount = obj1081_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1081_onTap_runningActionsCount = window.obj1081_onTap_runningActionsCount - 1;
if (window.obj1081_onTap_runningActionsCount == 0) {
	obj1081_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1081_onTap_runningActionsCount = window.obj1081_onTap_runningActionsCount - 1;
if (window.obj1081_onTap_runningActionsCount == 0) {
	obj1081_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1081_onTap_runningActionsCount = window.obj1081_onTap_runningActionsCount - 1;
if (window.obj1081_onTap_runningActionsCount == 0) {
	obj1081_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj330 
move_1164();
function move_1164() {
	window.obj1081_onTap_runningActionsCount = obj1081_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 452;
	var moveY = 324;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1081_onTap_runningActionsCount = window.obj1081_onTap_runningActionsCount - 1;
if (window.obj1081_onTap_runningActionsCount == 0) {
	obj1081_onTap_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj1073 
runActionList_1083();
function runActionList_1083() {
	window.obj1081_onTap_runningActionsCount = obj1081_onTap_runningActionsCount + 1;
	$("#obj1073").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1081_onTap_runningActionsCount = window.obj1081_onTap_runningActionsCount - 1;
if (window.obj1081_onTap_runningActionsCount == 0) {
	obj1081_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1081_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1081_onTap_activeActionGroupIndex = -1;
		$("#obj1081").trigger("obj1081_onTap_ended");
		
		return;
	}
	window.obj1081_onTap_activeActionGroupIndex = 1;
	





















};
obj1077_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1077_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1077").trigger("obj1077_SCEventRun_ended");
		
		return;
	}
	window.obj1077_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1084 
show_1079();
function show_1079() {
	var element = "#obj1084";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1077_SCEventRun_runningActionsCount = obj1077_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1077_SCEventRun_runningActionsCount = window.obj1077_SCEventRun_runningActionsCount - 1;
if (window.obj1077_SCEventRun_runningActionsCount == 0) {
	obj1077_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1077_SCEventRun_runningActionsCount = window.obj1077_SCEventRun_runningActionsCount - 1;
if (window.obj1077_SCEventRun_runningActionsCount == 0) {
	obj1077_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1077_SCEventRun_runningActionsCount = window.obj1077_SCEventRun_runningActionsCount - 1;
if (window.obj1077_SCEventRun_runningActionsCount == 0) {
	obj1077_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1081 
show_1080();
function show_1080() {
	var element = "#obj1081";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1077_SCEventRun_runningActionsCount = obj1077_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1077_SCEventRun_runningActionsCount = window.obj1077_SCEventRun_runningActionsCount - 1;
if (window.obj1077_SCEventRun_runningActionsCount == 0) {
	obj1077_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1077_SCEventRun_runningActionsCount = window.obj1077_SCEventRun_runningActionsCount - 1;
if (window.obj1077_SCEventRun_runningActionsCount == 0) {
	obj1077_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1077_SCEventRun_runningActionsCount = window.obj1077_SCEventRun_runningActionsCount - 1;
if (window.obj1077_SCEventRun_runningActionsCount == 0) {
	obj1077_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1077_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1077_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1077").trigger("obj1077_SCEventRun_ended");
		
		return;
	}
	window.obj1077_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1073_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1073_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1073").trigger("obj1073_SCEventRun_ended");
		
		return;
	}
	window.obj1073_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1081 
hide_1075();
function hide_1075() {
	var element = "#obj1081";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1073_SCEventRun_runningActionsCount = obj1073_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1073_SCEventRun_runningActionsCount = window.obj1073_SCEventRun_runningActionsCount - 1;
if (window.obj1073_SCEventRun_runningActionsCount == 0) {
	obj1073_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1075(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1073_SCEventRun_runningActionsCount = window.obj1073_SCEventRun_runningActionsCount - 1;
if (window.obj1073_SCEventRun_runningActionsCount == 0) {
	obj1073_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1084 
hide_1076();
function hide_1076() {
	var element = "#obj1084";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1073_SCEventRun_runningActionsCount = obj1073_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1073_SCEventRun_runningActionsCount = window.obj1073_SCEventRun_runningActionsCount - 1;
if (window.obj1073_SCEventRun_runningActionsCount == 0) {
	obj1073_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1076(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1073_SCEventRun_runningActionsCount = window.obj1073_SCEventRun_runningActionsCount - 1;
if (window.obj1073_SCEventRun_runningActionsCount == 0) {
	obj1073_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj289 
show_1285();
function show_1285() {
	var element = "#obj289";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1073_SCEventRun_runningActionsCount = obj1073_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1073_SCEventRun_runningActionsCount = window.obj1073_SCEventRun_runningActionsCount - 1;
if (window.obj1073_SCEventRun_runningActionsCount == 0) {
	obj1073_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1073_SCEventRun_runningActionsCount = window.obj1073_SCEventRun_runningActionsCount - 1;
if (window.obj1073_SCEventRun_runningActionsCount == 0) {
	obj1073_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1073_SCEventRun_runningActionsCount = window.obj1073_SCEventRun_runningActionsCount - 1;
if (window.obj1073_SCEventRun_runningActionsCount == 0) {
	obj1073_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1073_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1073_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1073").trigger("obj1073_SCEventRun_ended");
		
		return;
	}
	window.obj1073_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj408_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj408_onTap_activeActionGroupIndex = -1;
		$("#obj408").trigger("obj408_onTap_ended");
		
		return;
	}
	window.obj408_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj330 
move_469();
function move_469() {
	window.obj408_onTap_runningActionsCount = obj408_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 454;
	var moveY = 652;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj408_onTap_runningActionsCount = window.obj408_onTap_runningActionsCount - 1;
if (window.obj408_onTap_runningActionsCount == 0) {
	obj408_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj408_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj408_onTap_activeActionGroupIndex = -1;
		$("#obj408").trigger("obj408_onTap_ended");
		
		return;
	}
	window.obj408_onTap_activeActionGroupIndex = 1;
	





















};
obj310_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj310_onTap_activeActionGroupIndex = -1;
		$("#obj310").trigger("obj310_onTap_ended");
		
		return;
	}
	window.obj310_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj330 
move_1588();
function move_1588() {
	window.obj310_onTap_runningActionsCount = obj310_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 49;
	var moveY = 65;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj310_onTap_runningActionsCount = window.obj310_onTap_runningActionsCount - 1;
if (window.obj310_onTap_runningActionsCount == 0) {
	obj310_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj310_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj310_onTap_activeActionGroupIndex = -1;
		$("#obj310").trigger("obj310_onTap_ended");
		
		return;
	}
	window.obj310_onTap_activeActionGroupIndex = 1;
	





















};
obj412_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj412_onTap_activeActionGroupIndex = -1;
		$("#obj412").trigger("obj412_onTap_ended");
		
		return;
	}
	window.obj412_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj412 
hide_490();
function hide_490() {
	var element = "#obj412";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj412_onTap_runningActionsCount = obj412_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj412_onTap_runningActionsCount = window.obj412_onTap_runningActionsCount - 1;
if (window.obj412_onTap_runningActionsCount == 0) {
	obj412_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_490(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj412_onTap_runningActionsCount = window.obj412_onTap_runningActionsCount - 1;
if (window.obj412_onTap_runningActionsCount == 0) {
	obj412_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj310 
show_491();
function show_491() {
	var element = "#obj310";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj412_onTap_runningActionsCount = obj412_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj412_onTap_runningActionsCount = window.obj412_onTap_runningActionsCount - 1;
if (window.obj412_onTap_runningActionsCount == 0) {
	obj412_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj412_onTap_runningActionsCount = window.obj412_onTap_runningActionsCount - 1;
if (window.obj412_onTap_runningActionsCount == 0) {
	obj412_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj412_onTap_runningActionsCount = window.obj412_onTap_runningActionsCount - 1;
if (window.obj412_onTap_runningActionsCount == 0) {
	obj412_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj330 
move_470();
function move_470() {
	window.obj412_onTap_runningActionsCount = obj412_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 595;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj412_onTap_runningActionsCount = window.obj412_onTap_runningActionsCount - 1;
if (window.obj412_onTap_runningActionsCount == 0) {
	obj412_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj412_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj412_onTap_activeActionGroupIndex = -1;
		$("#obj412").trigger("obj412_onTap_ended");
		
		return;
	}
	window.obj412_onTap_activeActionGroupIndex = 1;
	





















};
obj412_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj412_onTouchUp_activeActionGroupIndex = -1;
		$("#obj412").trigger("obj412_onTouchUp_ended");
		
		return;
	}
	window.obj412_onTouchUp_activeActionGroupIndex = 0;
	








//	action: wait
wait_498();
function wait_498() {
	window.obj412_onTouchUp_runningActionsCount = obj412_onTouchUp_runningActionsCount + 1;
	setTimeout(function() {
		window.obj412_onTouchUp_runningActionsCount = window.obj412_onTouchUp_runningActionsCount - 1;
if (window.obj412_onTouchUp_runningActionsCount == 0) {
	obj412_onTouchUp_actionGroup1();
}
	}, 3000);
}












};
obj412_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj412_onTouchUp_activeActionGroupIndex = -1;
		$("#obj412").trigger("obj412_onTouchUp_ended");
		
		return;
	}
	window.obj412_onTouchUp_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj412 
show_499();
function show_499() {
	var element = "#obj412";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj412_onTouchUp_runningActionsCount = obj412_onTouchUp_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj412_onTouchUp_runningActionsCount = window.obj412_onTouchUp_runningActionsCount - 1;
if (window.obj412_onTouchUp_runningActionsCount == 0) {
	obj412_onTouchUp_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj412_onTouchUp_runningActionsCount = window.obj412_onTouchUp_runningActionsCount - 1;
if (window.obj412_onTouchUp_runningActionsCount == 0) {
	obj412_onTouchUp_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj412_onTouchUp_runningActionsCount = window.obj412_onTouchUp_runningActionsCount - 1;
if (window.obj412_onTouchUp_runningActionsCount == 0) {
	obj412_onTouchUp_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj412_onTouchUp_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj412_onTouchUp_activeActionGroupIndex = -1;
		$("#obj412").trigger("obj412_onTouchUp_ended");
		
		return;
	}
	window.obj412_onTouchUp_activeActionGroupIndex = 2;
	





















};
obj815_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj815_onTap_activeActionGroupIndex = -1;
		$("#obj815").trigger("obj815_onTap_ended");
		
		return;
	}
	window.obj815_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj923 
runActionList_965();
function runActionList_965() {
	window.obj815_onTap_runningActionsCount = obj815_onTap_runningActionsCount + 1;
	$("#obj923").trigger('SCEventRun');
	setTimeout(function() {
		window.obj815_onTap_runningActionsCount = window.obj815_onTap_runningActionsCount - 1;
if (window.obj815_onTap_runningActionsCount == 0) {
	obj815_onTap_actionGroup1();
}		
	}, 1);
}



};
obj815_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj815_onTap_activeActionGroupIndex = -1;
		$("#obj815").trigger("obj815_onTap_ended");
		
		return;
	}
	window.obj815_onTap_activeActionGroupIndex = 1;
	





















};
obj400_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj400_onTap_activeActionGroupIndex = -1;
		$("#obj400").trigger("obj400_onTap_ended");
		
		return;
	}
	window.obj400_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj400 
hide_820();
function hide_820() {
	var element = "#obj400";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj400_onTap_runningActionsCount = obj400_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj400_onTap_runningActionsCount = window.obj400_onTap_runningActionsCount - 1;
if (window.obj400_onTap_runningActionsCount == 0) {
	obj400_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_820(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj400_onTap_runningActionsCount = window.obj400_onTap_runningActionsCount - 1;
if (window.obj400_onTap_runningActionsCount == 0) {
	obj400_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_471();
function move_471() {
	window.obj400_onTap_runningActionsCount = obj400_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 735;
	var moveY = 654;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj400_onTap_runningActionsCount = window.obj400_onTap_runningActionsCount - 1;
if (window.obj400_onTap_runningActionsCount == 0) {
	obj400_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj400_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj400_onTap_activeActionGroupIndex = -1;
		$("#obj400").trigger("obj400_onTap_ended");
		
		return;
	}
	window.obj400_onTap_activeActionGroupIndex = 1;
	





















};
obj993_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj993_onTap_activeActionGroupIndex = -1;
		$("#obj993").trigger("obj993_onTap_ended");
		
		return;
	}
	window.obj993_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1090 
runActionList_1166();
function runActionList_1166() {
	window.obj993_onTap_runningActionsCount = obj993_onTap_runningActionsCount + 1;
	$("#obj1090").trigger('SCEventRun');
	setTimeout(function() {
		window.obj993_onTap_runningActionsCount = window.obj993_onTap_runningActionsCount - 1;
if (window.obj993_onTap_runningActionsCount == 0) {
	obj993_onTap_actionGroup1();
}		
	}, 1);
}



};
obj993_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj993_onTap_activeActionGroupIndex = -1;
		$("#obj993").trigger("obj993_onTap_ended");
		
		return;
	}
	window.obj993_onTap_activeActionGroupIndex = 1;
	





















};
obj420_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj420_onTap_activeActionGroupIndex = -1;
		$("#obj420").trigger("obj420_onTap_ended");
		
		return;
	}
	window.obj420_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj420 
hide_998();
function hide_998() {
	var element = "#obj420";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj420_onTap_runningActionsCount = obj420_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj420_onTap_runningActionsCount = window.obj420_onTap_runningActionsCount - 1;
if (window.obj420_onTap_runningActionsCount == 0) {
	obj420_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_998(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj420_onTap_runningActionsCount = window.obj420_onTap_runningActionsCount - 1;
if (window.obj420_onTap_runningActionsCount == 0) {
	obj420_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_472();
function move_472() {
	window.obj420_onTap_runningActionsCount = obj420_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 807;
	var moveY = 578;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj420_onTap_runningActionsCount = window.obj420_onTap_runningActionsCount - 1;
if (window.obj420_onTap_runningActionsCount == 0) {
	obj420_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj420_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj420_onTap_activeActionGroupIndex = -1;
		$("#obj420").trigger("obj420_onTap_ended");
		
		return;
	}
	window.obj420_onTap_activeActionGroupIndex = 1;
	





















};
obj1094_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1094_onTap_activeActionGroupIndex = -1;
		$("#obj1094").trigger("obj1094_onTap_ended");
		
		return;
	}
	window.obj1094_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj400 
hide_1168();
function hide_1168() {
	var element = "#obj400";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1094_onTap_runningActionsCount = obj1094_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1094_onTap_runningActionsCount = window.obj1094_onTap_runningActionsCount - 1;
if (window.obj1094_onTap_runningActionsCount == 0) {
	obj1094_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1168(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1094_onTap_runningActionsCount = window.obj1094_onTap_runningActionsCount - 1;
if (window.obj1094_onTap_runningActionsCount == 0) {
	obj1094_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_1167();
function move_1167() {
	window.obj1094_onTap_runningActionsCount = obj1094_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 737;
	var moveY = 652;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1094_onTap_runningActionsCount = window.obj1094_onTap_runningActionsCount - 1;
if (window.obj1094_onTap_runningActionsCount == 0) {
	obj1094_onTap_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj1086 
runActionList_1096();
function runActionList_1096() {
	window.obj1094_onTap_runningActionsCount = obj1094_onTap_runningActionsCount + 1;
	$("#obj1086").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1094_onTap_runningActionsCount = window.obj1094_onTap_runningActionsCount - 1;
if (window.obj1094_onTap_runningActionsCount == 0) {
	obj1094_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1094_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1094_onTap_activeActionGroupIndex = -1;
		$("#obj1094").trigger("obj1094_onTap_ended");
		
		return;
	}
	window.obj1094_onTap_activeActionGroupIndex = 1;
	





















};
obj1090_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1090_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1090").trigger("obj1090_SCEventRun_ended");
		
		return;
	}
	window.obj1090_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1097 
show_1092();
function show_1092() {
	var element = "#obj1097";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1090_SCEventRun_runningActionsCount = obj1090_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1090_SCEventRun_runningActionsCount = window.obj1090_SCEventRun_runningActionsCount - 1;
if (window.obj1090_SCEventRun_runningActionsCount == 0) {
	obj1090_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1090_SCEventRun_runningActionsCount = window.obj1090_SCEventRun_runningActionsCount - 1;
if (window.obj1090_SCEventRun_runningActionsCount == 0) {
	obj1090_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1090_SCEventRun_runningActionsCount = window.obj1090_SCEventRun_runningActionsCount - 1;
if (window.obj1090_SCEventRun_runningActionsCount == 0) {
	obj1090_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1094 
show_1093();
function show_1093() {
	var element = "#obj1094";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1090_SCEventRun_runningActionsCount = obj1090_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1090_SCEventRun_runningActionsCount = window.obj1090_SCEventRun_runningActionsCount - 1;
if (window.obj1090_SCEventRun_runningActionsCount == 0) {
	obj1090_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1090_SCEventRun_runningActionsCount = window.obj1090_SCEventRun_runningActionsCount - 1;
if (window.obj1090_SCEventRun_runningActionsCount == 0) {
	obj1090_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1090_SCEventRun_runningActionsCount = window.obj1090_SCEventRun_runningActionsCount - 1;
if (window.obj1090_SCEventRun_runningActionsCount == 0) {
	obj1090_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1090_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1090_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1090").trigger("obj1090_SCEventRun_ended");
		
		return;
	}
	window.obj1090_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1086_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1086_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1086").trigger("obj1086_SCEventRun_ended");
		
		return;
	}
	window.obj1086_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1094 
hide_1088();
function hide_1088() {
	var element = "#obj1094";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1086_SCEventRun_runningActionsCount = obj1086_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1086_SCEventRun_runningActionsCount = window.obj1086_SCEventRun_runningActionsCount - 1;
if (window.obj1086_SCEventRun_runningActionsCount == 0) {
	obj1086_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1088(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1086_SCEventRun_runningActionsCount = window.obj1086_SCEventRun_runningActionsCount - 1;
if (window.obj1086_SCEventRun_runningActionsCount == 0) {
	obj1086_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1097 
hide_1089();
function hide_1089() {
	var element = "#obj1097";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1086_SCEventRun_runningActionsCount = obj1086_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1086_SCEventRun_runningActionsCount = window.obj1086_SCEventRun_runningActionsCount - 1;
if (window.obj1086_SCEventRun_runningActionsCount == 0) {
	obj1086_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1089(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1086_SCEventRun_runningActionsCount = window.obj1086_SCEventRun_runningActionsCount - 1;
if (window.obj1086_SCEventRun_runningActionsCount == 0) {
	obj1086_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj420 
show_1284();
function show_1284() {
	var element = "#obj420";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1086_SCEventRun_runningActionsCount = obj1086_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1086_SCEventRun_runningActionsCount = window.obj1086_SCEventRun_runningActionsCount - 1;
if (window.obj1086_SCEventRun_runningActionsCount == 0) {
	obj1086_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1086_SCEventRun_runningActionsCount = window.obj1086_SCEventRun_runningActionsCount - 1;
if (window.obj1086_SCEventRun_runningActionsCount == 0) {
	obj1086_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1086_SCEventRun_runningActionsCount = window.obj1086_SCEventRun_runningActionsCount - 1;
if (window.obj1086_SCEventRun_runningActionsCount == 0) {
	obj1086_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1086_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1086_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1086").trigger("obj1086_SCEventRun_ended");
		
		return;
	}
	window.obj1086_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj424_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj424_onTap_activeActionGroupIndex = -1;
		$("#obj424").trigger("obj424_onTap_ended");
		
		return;
	}
	window.obj424_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj330 
move_473();
function move_473() {
	window.obj424_onTap_runningActionsCount = obj424_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 871;
	var moveY = 505;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj424_onTap_runningActionsCount = window.obj424_onTap_runningActionsCount - 1;
if (window.obj424_onTap_runningActionsCount == 0) {
	obj424_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj424_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj424_onTap_activeActionGroupIndex = -1;
		$("#obj424").trigger("obj424_onTap_ended");
		
		return;
	}
	window.obj424_onTap_activeActionGroupIndex = 1;
	





















};
obj999_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj999_onTap_activeActionGroupIndex = -1;
		$("#obj999").trigger("obj999_onTap_ended");
		
		return;
	}
	window.obj999_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1103 
runActionList_1169();
function runActionList_1169() {
	window.obj999_onTap_runningActionsCount = obj999_onTap_runningActionsCount + 1;
	$("#obj1103").trigger('SCEventRun');
	setTimeout(function() {
		window.obj999_onTap_runningActionsCount = window.obj999_onTap_runningActionsCount - 1;
if (window.obj999_onTap_runningActionsCount == 0) {
	obj999_onTap_actionGroup1();
}		
	}, 1);
}



};
obj999_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj999_onTap_activeActionGroupIndex = -1;
		$("#obj999").trigger("obj999_onTap_ended");
		
		return;
	}
	window.obj999_onTap_activeActionGroupIndex = 1;
	





















};
obj436_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj436_onTap_activeActionGroupIndex = -1;
		$("#obj436").trigger("obj436_onTap_ended");
		
		return;
	}
	window.obj436_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj436 
hide_1004();
function hide_1004() {
	var element = "#obj436";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj436_onTap_runningActionsCount = obj436_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj436_onTap_runningActionsCount = window.obj436_onTap_runningActionsCount - 1;
if (window.obj436_onTap_runningActionsCount == 0) {
	obj436_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1004(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj436_onTap_runningActionsCount = window.obj436_onTap_runningActionsCount - 1;
if (window.obj436_onTap_runningActionsCount == 0) {
	obj436_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_474();
function move_474() {
	window.obj436_onTap_runningActionsCount = obj436_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 951;
	var moveY = 439;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj436_onTap_runningActionsCount = window.obj436_onTap_runningActionsCount - 1;
if (window.obj436_onTap_runningActionsCount == 0) {
	obj436_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj436_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj436_onTap_activeActionGroupIndex = -1;
		$("#obj436").trigger("obj436_onTap_ended");
		
		return;
	}
	window.obj436_onTap_activeActionGroupIndex = 1;
	





















};
obj1107_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1107_onTap_activeActionGroupIndex = -1;
		$("#obj1107").trigger("obj1107_onTap_ended");
		
		return;
	}
	window.obj1107_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj294 
hide_1171();
function hide_1171() {
	var element = "#obj294";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1107_onTap_runningActionsCount = obj1107_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1107_onTap_runningActionsCount = window.obj1107_onTap_runningActionsCount - 1;
if (window.obj1107_onTap_runningActionsCount == 0) {
	obj1107_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1171(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1107_onTap_runningActionsCount = window.obj1107_onTap_runningActionsCount - 1;
if (window.obj1107_onTap_runningActionsCount == 0) {
	obj1107_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_1170();
function move_1170() {
	window.obj1107_onTap_runningActionsCount = obj1107_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 791;
	var moveY = 283;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1107_onTap_runningActionsCount = window.obj1107_onTap_runningActionsCount - 1;
if (window.obj1107_onTap_runningActionsCount == 0) {
	obj1107_onTap_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj1099 
runActionList_1109();
function runActionList_1109() {
	window.obj1107_onTap_runningActionsCount = obj1107_onTap_runningActionsCount + 1;
	$("#obj1099").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1107_onTap_runningActionsCount = window.obj1107_onTap_runningActionsCount - 1;
if (window.obj1107_onTap_runningActionsCount == 0) {
	obj1107_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1107_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1107_onTap_activeActionGroupIndex = -1;
		$("#obj1107").trigger("obj1107_onTap_ended");
		
		return;
	}
	window.obj1107_onTap_activeActionGroupIndex = 1;
	





















};
obj1103_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1103_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1103").trigger("obj1103_SCEventRun_ended");
		
		return;
	}
	window.obj1103_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1110 
show_1105();
function show_1105() {
	var element = "#obj1110";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1103_SCEventRun_runningActionsCount = obj1103_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1103_SCEventRun_runningActionsCount = window.obj1103_SCEventRun_runningActionsCount - 1;
if (window.obj1103_SCEventRun_runningActionsCount == 0) {
	obj1103_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1103_SCEventRun_runningActionsCount = window.obj1103_SCEventRun_runningActionsCount - 1;
if (window.obj1103_SCEventRun_runningActionsCount == 0) {
	obj1103_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1103_SCEventRun_runningActionsCount = window.obj1103_SCEventRun_runningActionsCount - 1;
if (window.obj1103_SCEventRun_runningActionsCount == 0) {
	obj1103_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1107 
show_1106();
function show_1106() {
	var element = "#obj1107";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1103_SCEventRun_runningActionsCount = obj1103_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1103_SCEventRun_runningActionsCount = window.obj1103_SCEventRun_runningActionsCount - 1;
if (window.obj1103_SCEventRun_runningActionsCount == 0) {
	obj1103_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1103_SCEventRun_runningActionsCount = window.obj1103_SCEventRun_runningActionsCount - 1;
if (window.obj1103_SCEventRun_runningActionsCount == 0) {
	obj1103_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1103_SCEventRun_runningActionsCount = window.obj1103_SCEventRun_runningActionsCount - 1;
if (window.obj1103_SCEventRun_runningActionsCount == 0) {
	obj1103_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1103_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1103_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1103").trigger("obj1103_SCEventRun_ended");
		
		return;
	}
	window.obj1103_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1099_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1099_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1099").trigger("obj1099_SCEventRun_ended");
		
		return;
	}
	window.obj1099_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1107 
hide_1101();
function hide_1101() {
	var element = "#obj1107";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1099_SCEventRun_runningActionsCount = obj1099_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1099_SCEventRun_runningActionsCount = window.obj1099_SCEventRun_runningActionsCount - 1;
if (window.obj1099_SCEventRun_runningActionsCount == 0) {
	obj1099_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1101(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1099_SCEventRun_runningActionsCount = window.obj1099_SCEventRun_runningActionsCount - 1;
if (window.obj1099_SCEventRun_runningActionsCount == 0) {
	obj1099_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1110 
hide_1102();
function hide_1102() {
	var element = "#obj1110";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1099_SCEventRun_runningActionsCount = obj1099_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1099_SCEventRun_runningActionsCount = window.obj1099_SCEventRun_runningActionsCount - 1;
if (window.obj1099_SCEventRun_runningActionsCount == 0) {
	obj1099_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1102(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1099_SCEventRun_runningActionsCount = window.obj1099_SCEventRun_runningActionsCount - 1;
if (window.obj1099_SCEventRun_runningActionsCount == 0) {
	obj1099_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj436 
show_1283();
function show_1283() {
	var element = "#obj436";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1099_SCEventRun_runningActionsCount = obj1099_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1099_SCEventRun_runningActionsCount = window.obj1099_SCEventRun_runningActionsCount - 1;
if (window.obj1099_SCEventRun_runningActionsCount == 0) {
	obj1099_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1099_SCEventRun_runningActionsCount = window.obj1099_SCEventRun_runningActionsCount - 1;
if (window.obj1099_SCEventRun_runningActionsCount == 0) {
	obj1099_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1099_SCEventRun_runningActionsCount = window.obj1099_SCEventRun_runningActionsCount - 1;
if (window.obj1099_SCEventRun_runningActionsCount == 0) {
	obj1099_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1099_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1099_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1099").trigger("obj1099_SCEventRun_ended");
		
		return;
	}
	window.obj1099_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj500_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj500_onTap_activeActionGroupIndex = -1;
		$("#obj500").trigger("obj500_onTap_ended");
		
		return;
	}
	window.obj500_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj330 
move_502();
function move_502() {
	window.obj500_onTap_runningActionsCount = obj500_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1003;
	var moveY = 138;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj500_onTap_runningActionsCount = window.obj500_onTap_runningActionsCount - 1;
if (window.obj500_onTap_runningActionsCount == 0) {
	obj500_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj500_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj500_onTap_activeActionGroupIndex = -1;
		$("#obj500").trigger("obj500_onTap_ended");
		
		return;
	}
	window.obj500_onTap_activeActionGroupIndex = 1;
	





















};
obj456_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj456_onTap_activeActionGroupIndex = -1;
		$("#obj456").trigger("obj456_onTap_ended");
		
		return;
	}
	window.obj456_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj456 
hide_505();
function hide_505() {
	var element = "#obj456";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj456_onTap_runningActionsCount = obj456_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj456_onTap_runningActionsCount = window.obj456_onTap_runningActionsCount - 1;
if (window.obj456_onTap_runningActionsCount == 0) {
	obj456_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_505(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj456_onTap_runningActionsCount = window.obj456_onTap_runningActionsCount - 1;
if (window.obj456_onTap_runningActionsCount == 0) {
	obj456_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj500 
show_506();
function show_506() {
	var element = "#obj500";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj456_onTap_runningActionsCount = obj456_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj456_onTap_runningActionsCount = window.obj456_onTap_runningActionsCount - 1;
if (window.obj456_onTap_runningActionsCount == 0) {
	obj456_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj456_onTap_runningActionsCount = window.obj456_onTap_runningActionsCount - 1;
if (window.obj456_onTap_runningActionsCount == 0) {
	obj456_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj456_onTap_runningActionsCount = window.obj456_onTap_runningActionsCount - 1;
if (window.obj456_onTap_runningActionsCount == 0) {
	obj456_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj330 
move_475();
function move_475() {
	window.obj456_onTap_runningActionsCount = obj456_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 877;
	var moveY = 368;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj456_onTap_runningActionsCount = window.obj456_onTap_runningActionsCount - 1;
if (window.obj456_onTap_runningActionsCount == 0) {
	obj456_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj456_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj456_onTap_activeActionGroupIndex = -1;
		$("#obj456").trigger("obj456_onTap_ended");
		
		return;
	}
	window.obj456_onTap_activeActionGroupIndex = 1;
	





















};
obj456_onTouchUp_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj456_onTouchUp_activeActionGroupIndex = -1;
		$("#obj456").trigger("obj456_onTouchUp_ended");
		
		return;
	}
	window.obj456_onTouchUp_activeActionGroupIndex = 0;
	








//	action: wait
wait_507();
function wait_507() {
	window.obj456_onTouchUp_runningActionsCount = obj456_onTouchUp_runningActionsCount + 1;
	setTimeout(function() {
		window.obj456_onTouchUp_runningActionsCount = window.obj456_onTouchUp_runningActionsCount - 1;
if (window.obj456_onTouchUp_runningActionsCount == 0) {
	obj456_onTouchUp_actionGroup1();
}
	}, 3000);
}












};
obj456_onTouchUp_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj456_onTouchUp_activeActionGroupIndex = -1;
		$("#obj456").trigger("obj456_onTouchUp_ended");
		
		return;
	}
	window.obj456_onTouchUp_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj456 
show_508();
function show_508() {
	var element = "#obj456";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj456_onTouchUp_runningActionsCount = obj456_onTouchUp_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj456_onTouchUp_runningActionsCount = window.obj456_onTouchUp_runningActionsCount - 1;
if (window.obj456_onTouchUp_runningActionsCount == 0) {
	obj456_onTouchUp_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj456_onTouchUp_runningActionsCount = window.obj456_onTouchUp_runningActionsCount - 1;
if (window.obj456_onTouchUp_runningActionsCount == 0) {
	obj456_onTouchUp_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj456_onTouchUp_runningActionsCount = window.obj456_onTouchUp_runningActionsCount - 1;
if (window.obj456_onTouchUp_runningActionsCount == 0) {
	obj456_onTouchUp_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj456_onTouchUp_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj456_onTouchUp_activeActionGroupIndex = -1;
		$("#obj456").trigger("obj456_onTouchUp_ended");
		
		return;
	}
	window.obj456_onTouchUp_activeActionGroupIndex = 2;
	





















};
obj1005_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1005_onTap_activeActionGroupIndex = -1;
		$("#obj1005").trigger("obj1005_onTap_ended");
		
		return;
	}
	window.obj1005_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1116 
runActionList_1172();
function runActionList_1172() {
	window.obj1005_onTap_runningActionsCount = obj1005_onTap_runningActionsCount + 1;
	$("#obj1116").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1005_onTap_runningActionsCount = window.obj1005_onTap_runningActionsCount - 1;
if (window.obj1005_onTap_runningActionsCount == 0) {
	obj1005_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1005_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1005_onTap_activeActionGroupIndex = -1;
		$("#obj1005").trigger("obj1005_onTap_ended");
		
		return;
	}
	window.obj1005_onTap_activeActionGroupIndex = 1;
	





















};
obj294_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj294_onTap_activeActionGroupIndex = -1;
		$("#obj294").trigger("obj294_onTap_ended");
		
		return;
	}
	window.obj294_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj294 
hide_1008();
function hide_1008() {
	var element = "#obj294";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj294_onTap_runningActionsCount = obj294_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj294_onTap_runningActionsCount = window.obj294_onTap_runningActionsCount - 1;
if (window.obj294_onTap_runningActionsCount == 0) {
	obj294_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1008(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj294_onTap_runningActionsCount = window.obj294_onTap_runningActionsCount - 1;
if (window.obj294_onTap_runningActionsCount == 0) {
	obj294_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_476();
function move_476() {
	window.obj294_onTap_runningActionsCount = obj294_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 791;
	var moveY = 279;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj294_onTap_runningActionsCount = window.obj294_onTap_runningActionsCount - 1;
if (window.obj294_onTap_runningActionsCount == 0) {
	obj294_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj294_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj294_onTap_activeActionGroupIndex = -1;
		$("#obj294").trigger("obj294_onTap_ended");
		
		return;
	}
	window.obj294_onTap_activeActionGroupIndex = 1;
	





















};
obj1120_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1120_onTap_activeActionGroupIndex = -1;
		$("#obj1120").trigger("obj1120_onTap_ended");
		
		return;
	}
	window.obj1120_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj330 
move_1173();
function move_1173() {
	window.obj1120_onTap_runningActionsCount = obj1120_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 641;
	var moveY = 124;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1120_onTap_runningActionsCount = window.obj1120_onTap_runningActionsCount - 1;
if (window.obj1120_onTap_runningActionsCount == 0) {
	obj1120_onTap_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj1112 
runActionList_1122();
function runActionList_1122() {
	window.obj1120_onTap_runningActionsCount = obj1120_onTap_runningActionsCount + 1;
	$("#obj1112").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1120_onTap_runningActionsCount = window.obj1120_onTap_runningActionsCount - 1;
if (window.obj1120_onTap_runningActionsCount == 0) {
	obj1120_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1120_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1120_onTap_activeActionGroupIndex = -1;
		$("#obj1120").trigger("obj1120_onTap_ended");
		
		return;
	}
	window.obj1120_onTap_activeActionGroupIndex = 1;
	





















};
obj1116_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1116_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1116").trigger("obj1116_SCEventRun_ended");
		
		return;
	}
	window.obj1116_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1123 
show_1118();
function show_1118() {
	var element = "#obj1123";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1116_SCEventRun_runningActionsCount = obj1116_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1116_SCEventRun_runningActionsCount = window.obj1116_SCEventRun_runningActionsCount - 1;
if (window.obj1116_SCEventRun_runningActionsCount == 0) {
	obj1116_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1116_SCEventRun_runningActionsCount = window.obj1116_SCEventRun_runningActionsCount - 1;
if (window.obj1116_SCEventRun_runningActionsCount == 0) {
	obj1116_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1116_SCEventRun_runningActionsCount = window.obj1116_SCEventRun_runningActionsCount - 1;
if (window.obj1116_SCEventRun_runningActionsCount == 0) {
	obj1116_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1120 
show_1119();
function show_1119() {
	var element = "#obj1120";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1116_SCEventRun_runningActionsCount = obj1116_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1116_SCEventRun_runningActionsCount = window.obj1116_SCEventRun_runningActionsCount - 1;
if (window.obj1116_SCEventRun_runningActionsCount == 0) {
	obj1116_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1116_SCEventRun_runningActionsCount = window.obj1116_SCEventRun_runningActionsCount - 1;
if (window.obj1116_SCEventRun_runningActionsCount == 0) {
	obj1116_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1116_SCEventRun_runningActionsCount = window.obj1116_SCEventRun_runningActionsCount - 1;
if (window.obj1116_SCEventRun_runningActionsCount == 0) {
	obj1116_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1116_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1116_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1116").trigger("obj1116_SCEventRun_ended");
		
		return;
	}
	window.obj1116_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1112_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1112_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1112").trigger("obj1112_SCEventRun_ended");
		
		return;
	}
	window.obj1112_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1120 
hide_1114();
function hide_1114() {
	var element = "#obj1120";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1112_SCEventRun_runningActionsCount = obj1112_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1112_SCEventRun_runningActionsCount = window.obj1112_SCEventRun_runningActionsCount - 1;
if (window.obj1112_SCEventRun_runningActionsCount == 0) {
	obj1112_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1114(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1112_SCEventRun_runningActionsCount = window.obj1112_SCEventRun_runningActionsCount - 1;
if (window.obj1112_SCEventRun_runningActionsCount == 0) {
	obj1112_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1123 
hide_1115();
function hide_1115() {
	var element = "#obj1123";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1112_SCEventRun_runningActionsCount = obj1112_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1112_SCEventRun_runningActionsCount = window.obj1112_SCEventRun_runningActionsCount - 1;
if (window.obj1112_SCEventRun_runningActionsCount == 0) {
	obj1112_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1115(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1112_SCEventRun_runningActionsCount = window.obj1112_SCEventRun_runningActionsCount - 1;
if (window.obj1112_SCEventRun_runningActionsCount == 0) {
	obj1112_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj294 
show_1282();
function show_1282() {
	var element = "#obj294";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1112_SCEventRun_runningActionsCount = obj1112_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1112_SCEventRun_runningActionsCount = window.obj1112_SCEventRun_runningActionsCount - 1;
if (window.obj1112_SCEventRun_runningActionsCount == 0) {
	obj1112_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1112_SCEventRun_runningActionsCount = window.obj1112_SCEventRun_runningActionsCount - 1;
if (window.obj1112_SCEventRun_runningActionsCount == 0) {
	obj1112_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1112_SCEventRun_runningActionsCount = window.obj1112_SCEventRun_runningActionsCount - 1;
if (window.obj1112_SCEventRun_runningActionsCount == 0) {
	obj1112_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1112_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1112_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1112").trigger("obj1112_SCEventRun_ended");
		
		return;
	}
	window.obj1112_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1009_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1009_onTap_activeActionGroupIndex = -1;
		$("#obj1009").trigger("obj1009_onTap_ended");
		
		return;
	}
	window.obj1009_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1129 
runActionList_1174();
function runActionList_1174() {
	window.obj1009_onTap_runningActionsCount = obj1009_onTap_runningActionsCount + 1;
	$("#obj1129").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1009_onTap_runningActionsCount = window.obj1009_onTap_runningActionsCount - 1;
if (window.obj1009_onTap_runningActionsCount == 0) {
	obj1009_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1009_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1009_onTap_activeActionGroupIndex = -1;
		$("#obj1009").trigger("obj1009_onTap_ended");
		
		return;
	}
	window.obj1009_onTap_activeActionGroupIndex = 1;
	





















};
obj452_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj452_onTap_activeActionGroupIndex = -1;
		$("#obj452").trigger("obj452_onTap_ended");
		
		return;
	}
	window.obj452_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj452 
hide_1014();
function hide_1014() {
	var element = "#obj452";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj452_onTap_runningActionsCount = obj452_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj452_onTap_runningActionsCount = window.obj452_onTap_runningActionsCount - 1;
if (window.obj452_onTap_runningActionsCount == 0) {
	obj452_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1014(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj452_onTap_runningActionsCount = window.obj452_onTap_runningActionsCount - 1;
if (window.obj452_onTap_runningActionsCount == 0) {
	obj452_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_477();
function move_477() {
	window.obj452_onTap_runningActionsCount = obj452_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 711;
	var moveY = 195;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj452_onTap_runningActionsCount = window.obj452_onTap_runningActionsCount - 1;
if (window.obj452_onTap_runningActionsCount == 0) {
	obj452_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj452_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj452_onTap_activeActionGroupIndex = -1;
		$("#obj452").trigger("obj452_onTap_ended");
		
		return;
	}
	window.obj452_onTap_activeActionGroupIndex = 1;
	





















};
obj1133_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1133_onTap_activeActionGroupIndex = -1;
		$("#obj1133").trigger("obj1133_onTap_ended");
		
		return;
	}
	window.obj1133_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1125 
runActionList_1135();
function runActionList_1135() {
	window.obj1133_onTap_runningActionsCount = obj1133_onTap_runningActionsCount + 1;
	$("#obj1125").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1133_onTap_runningActionsCount = window.obj1133_onTap_runningActionsCount - 1;
if (window.obj1133_onTap_runningActionsCount == 0) {
	obj1133_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1133_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1133_onTap_activeActionGroupIndex = -1;
		$("#obj1133").trigger("obj1133_onTap_ended");
		
		return;
	}
	window.obj1133_onTap_activeActionGroupIndex = 1;
	





















};
obj1129_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1129_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1129").trigger("obj1129_SCEventRun_ended");
		
		return;
	}
	window.obj1129_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1136 
show_1131();
function show_1131() {
	var element = "#obj1136";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1129_SCEventRun_runningActionsCount = obj1129_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1129_SCEventRun_runningActionsCount = window.obj1129_SCEventRun_runningActionsCount - 1;
if (window.obj1129_SCEventRun_runningActionsCount == 0) {
	obj1129_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1129_SCEventRun_runningActionsCount = window.obj1129_SCEventRun_runningActionsCount - 1;
if (window.obj1129_SCEventRun_runningActionsCount == 0) {
	obj1129_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1129_SCEventRun_runningActionsCount = window.obj1129_SCEventRun_runningActionsCount - 1;
if (window.obj1129_SCEventRun_runningActionsCount == 0) {
	obj1129_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1133 
show_1132();
function show_1132() {
	var element = "#obj1133";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1129_SCEventRun_runningActionsCount = obj1129_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1129_SCEventRun_runningActionsCount = window.obj1129_SCEventRun_runningActionsCount - 1;
if (window.obj1129_SCEventRun_runningActionsCount == 0) {
	obj1129_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1129_SCEventRun_runningActionsCount = window.obj1129_SCEventRun_runningActionsCount - 1;
if (window.obj1129_SCEventRun_runningActionsCount == 0) {
	obj1129_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1129_SCEventRun_runningActionsCount = window.obj1129_SCEventRun_runningActionsCount - 1;
if (window.obj1129_SCEventRun_runningActionsCount == 0) {
	obj1129_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1129_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1129_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1129").trigger("obj1129_SCEventRun_ended");
		
		return;
	}
	window.obj1129_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1125_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1125_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1125").trigger("obj1125_SCEventRun_ended");
		
		return;
	}
	window.obj1125_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1133 
hide_1127();
function hide_1127() {
	var element = "#obj1133";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1125_SCEventRun_runningActionsCount = obj1125_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1125_SCEventRun_runningActionsCount = window.obj1125_SCEventRun_runningActionsCount - 1;
if (window.obj1125_SCEventRun_runningActionsCount == 0) {
	obj1125_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1127(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1125_SCEventRun_runningActionsCount = window.obj1125_SCEventRun_runningActionsCount - 1;
if (window.obj1125_SCEventRun_runningActionsCount == 0) {
	obj1125_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1136 
hide_1128();
function hide_1128() {
	var element = "#obj1136";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1125_SCEventRun_runningActionsCount = obj1125_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1125_SCEventRun_runningActionsCount = window.obj1125_SCEventRun_runningActionsCount - 1;
if (window.obj1125_SCEventRun_runningActionsCount == 0) {
	obj1125_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1128(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1125_SCEventRun_runningActionsCount = window.obj1125_SCEventRun_runningActionsCount - 1;
if (window.obj1125_SCEventRun_runningActionsCount == 0) {
	obj1125_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj452 
show_1281();
function show_1281() {
	var element = "#obj452";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1125_SCEventRun_runningActionsCount = obj1125_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1125_SCEventRun_runningActionsCount = window.obj1125_SCEventRun_runningActionsCount - 1;
if (window.obj1125_SCEventRun_runningActionsCount == 0) {
	obj1125_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1125_SCEventRun_runningActionsCount = window.obj1125_SCEventRun_runningActionsCount - 1;
if (window.obj1125_SCEventRun_runningActionsCount == 0) {
	obj1125_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1125_SCEventRun_runningActionsCount = window.obj1125_SCEventRun_runningActionsCount - 1;
if (window.obj1125_SCEventRun_runningActionsCount == 0) {
	obj1125_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1125_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1125_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1125").trigger("obj1125_SCEventRun_ended");
		
		return;
	}
	window.obj1125_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj440_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj440_onTap_activeActionGroupIndex = -1;
		$("#obj440").trigger("obj440_onTap_ended");
		
		return;
	}
	window.obj440_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj330 
move_478();
function move_478() {
	window.obj440_onTap_runningActionsCount = obj440_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 707;
	var moveY = 49;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj440_onTap_runningActionsCount = window.obj440_onTap_runningActionsCount - 1;
if (window.obj440_onTap_runningActionsCount == 0) {
	obj440_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj440_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj440_onTap_activeActionGroupIndex = -1;
		$("#obj440").trigger("obj440_onTap_ended");
		
		return;
	}
	window.obj440_onTap_activeActionGroupIndex = 1;
	





















};
obj821_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj821_onTap_activeActionGroupIndex = -1;
		$("#obj821").trigger("obj821_onTap_ended");
		
		return;
	}
	window.obj821_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj944 
runActionList_967();
function runActionList_967() {
	window.obj821_onTap_runningActionsCount = obj821_onTap_runningActionsCount + 1;
	$("#obj944").trigger('SCEventRun');
	setTimeout(function() {
		window.obj821_onTap_runningActionsCount = window.obj821_onTap_runningActionsCount - 1;
if (window.obj821_onTap_runningActionsCount == 0) {
	obj821_onTap_actionGroup1();
}		
	}, 1);
}



};
obj821_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj821_onTap_activeActionGroupIndex = -1;
		$("#obj821").trigger("obj821_onTap_ended");
		
		return;
	}
	window.obj821_onTap_activeActionGroupIndex = 1;
	





















};
obj444_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj444_onTap_activeActionGroupIndex = -1;
		$("#obj444").trigger("obj444_onTap_ended");
		
		return;
	}
	window.obj444_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj444 
hide_826();
function hide_826() {
	var element = "#obj444";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj444_onTap_runningActionsCount = obj444_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj444_onTap_runningActionsCount = window.obj444_onTap_runningActionsCount - 1;
if (window.obj444_onTap_runningActionsCount == 0) {
	obj444_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_826(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj444_onTap_runningActionsCount = window.obj444_onTap_runningActionsCount - 1;
if (window.obj444_onTap_runningActionsCount == 0) {
	obj444_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_479();
function move_479() {
	window.obj444_onTap_runningActionsCount = obj444_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 641;
	var moveY = 124;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj444_onTap_runningActionsCount = window.obj444_onTap_runningActionsCount - 1;
if (window.obj444_onTap_runningActionsCount == 0) {
	obj444_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj444_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj444_onTap_activeActionGroupIndex = -1;
		$("#obj444").trigger("obj444_onTap_ended");
		
		return;
	}
	window.obj444_onTap_activeActionGroupIndex = 1;
	





















};
obj1015_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1015_onTap_activeActionGroupIndex = -1;
		$("#obj1015").trigger("obj1015_onTap_ended");
		
		return;
	}
	window.obj1015_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1142 
runActionList_1152();
function runActionList_1152() {
	window.obj1015_onTap_runningActionsCount = obj1015_onTap_runningActionsCount + 1;
	$("#obj1142").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1015_onTap_runningActionsCount = window.obj1015_onTap_runningActionsCount - 1;
if (window.obj1015_onTap_runningActionsCount == 0) {
	obj1015_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj1142 
runActionList_1177();
function runActionList_1177() {
	window.obj1015_onTap_runningActionsCount = obj1015_onTap_runningActionsCount + 1;
	$("#obj1142").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1015_onTap_runningActionsCount = window.obj1015_onTap_runningActionsCount - 1;
if (window.obj1015_onTap_runningActionsCount == 0) {
	obj1015_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1015_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1015_onTap_activeActionGroupIndex = -1;
		$("#obj1015").trigger("obj1015_onTap_ended");
		
		return;
	}
	window.obj1015_onTap_activeActionGroupIndex = 1;
	





















};
obj448_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj448_onTap_activeActionGroupIndex = -1;
		$("#obj448").trigger("obj448_onTap_ended");
		
		return;
	}
	window.obj448_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj448 
hide_1020();
function hide_1020() {
	var element = "#obj448";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj448_onTap_runningActionsCount = obj448_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj448_onTap_runningActionsCount = window.obj448_onTap_runningActionsCount - 1;
if (window.obj448_onTap_runningActionsCount == 0) {
	obj448_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1020(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj448_onTap_runningActionsCount = window.obj448_onTap_runningActionsCount - 1;
if (window.obj448_onTap_runningActionsCount == 0) {
	obj448_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_480();
function move_480() {
	window.obj448_onTap_runningActionsCount = obj448_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 851;
	var moveY = 55;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj448_onTap_runningActionsCount = window.obj448_onTap_runningActionsCount - 1;
if (window.obj448_onTap_runningActionsCount == 0) {
	obj448_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj448_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj448_onTap_activeActionGroupIndex = -1;
		$("#obj448").trigger("obj448_onTap_ended");
		
		return;
	}
	window.obj448_onTap_activeActionGroupIndex = 1;
	





















};
obj1146_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1146_onTap_activeActionGroupIndex = -1;
		$("#obj1146").trigger("obj1146_onTap_ended");
		
		return;
	}
	window.obj1146_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj330 
move_1151();
function move_1151() {
	window.obj1146_onTap_runningActionsCount = obj1146_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 999;
	var moveY = 149;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1146_onTap_runningActionsCount = window.obj1146_onTap_runningActionsCount - 1;
if (window.obj1146_onTap_runningActionsCount == 0) {
	obj1146_onTap_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj1138 
runActionList_1148();
function runActionList_1148() {
	window.obj1146_onTap_runningActionsCount = obj1146_onTap_runningActionsCount + 1;
	$("#obj1138").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1146_onTap_runningActionsCount = window.obj1146_onTap_runningActionsCount - 1;
if (window.obj1146_onTap_runningActionsCount == 0) {
	obj1146_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1146_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1146_onTap_activeActionGroupIndex = -1;
		$("#obj1146").trigger("obj1146_onTap_ended");
		
		return;
	}
	window.obj1146_onTap_activeActionGroupIndex = 1;
	





















};
obj1142_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1142_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1142").trigger("obj1142_SCEventRun_ended");
		
		return;
	}
	window.obj1142_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1149 
show_1144();
function show_1144() {
	var element = "#obj1149";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1142_SCEventRun_runningActionsCount = obj1142_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1142_SCEventRun_runningActionsCount = window.obj1142_SCEventRun_runningActionsCount - 1;
if (window.obj1142_SCEventRun_runningActionsCount == 0) {
	obj1142_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1142_SCEventRun_runningActionsCount = window.obj1142_SCEventRun_runningActionsCount - 1;
if (window.obj1142_SCEventRun_runningActionsCount == 0) {
	obj1142_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1142_SCEventRun_runningActionsCount = window.obj1142_SCEventRun_runningActionsCount - 1;
if (window.obj1142_SCEventRun_runningActionsCount == 0) {
	obj1142_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1146 
show_1145();
function show_1145() {
	var element = "#obj1146";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1142_SCEventRun_runningActionsCount = obj1142_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1142_SCEventRun_runningActionsCount = window.obj1142_SCEventRun_runningActionsCount - 1;
if (window.obj1142_SCEventRun_runningActionsCount == 0) {
	obj1142_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1142_SCEventRun_runningActionsCount = window.obj1142_SCEventRun_runningActionsCount - 1;
if (window.obj1142_SCEventRun_runningActionsCount == 0) {
	obj1142_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1142_SCEventRun_runningActionsCount = window.obj1142_SCEventRun_runningActionsCount - 1;
if (window.obj1142_SCEventRun_runningActionsCount == 0) {
	obj1142_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1142_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1142_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1142").trigger("obj1142_SCEventRun_ended");
		
		return;
	}
	window.obj1142_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj1138_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1138_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1138").trigger("obj1138_SCEventRun_ended");
		
		return;
	}
	window.obj1138_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1146 
hide_1140();
function hide_1140() {
	var element = "#obj1146";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1138_SCEventRun_runningActionsCount = obj1138_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1138_SCEventRun_runningActionsCount = window.obj1138_SCEventRun_runningActionsCount - 1;
if (window.obj1138_SCEventRun_runningActionsCount == 0) {
	obj1138_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1140(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1138_SCEventRun_runningActionsCount = window.obj1138_SCEventRun_runningActionsCount - 1;
if (window.obj1138_SCEventRun_runningActionsCount == 0) {
	obj1138_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1149 
hide_1141();
function hide_1141() {
	var element = "#obj1149";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1138_SCEventRun_runningActionsCount = obj1138_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1138_SCEventRun_runningActionsCount = window.obj1138_SCEventRun_runningActionsCount - 1;
if (window.obj1138_SCEventRun_runningActionsCount == 0) {
	obj1138_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1141(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1138_SCEventRun_runningActionsCount = window.obj1138_SCEventRun_runningActionsCount - 1;
if (window.obj1138_SCEventRun_runningActionsCount == 0) {
	obj1138_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj448 
show_1280();
function show_1280() {
	var element = "#obj448";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1138_SCEventRun_runningActionsCount = obj1138_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1138_SCEventRun_runningActionsCount = window.obj1138_SCEventRun_runningActionsCount - 1;
if (window.obj1138_SCEventRun_runningActionsCount == 0) {
	obj1138_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1138_SCEventRun_runningActionsCount = window.obj1138_SCEventRun_runningActionsCount - 1;
if (window.obj1138_SCEventRun_runningActionsCount == 0) {
	obj1138_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1138_SCEventRun_runningActionsCount = window.obj1138_SCEventRun_runningActionsCount - 1;
if (window.obj1138_SCEventRun_runningActionsCount == 0) {
	obj1138_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1138_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1138_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1138").trigger("obj1138_SCEventRun_ended");
		
		return;
	}
	window.obj1138_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj296_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj296_onTap_activeActionGroupIndex = -1;
		$("#obj296").trigger("obj296_onTap_ended");
		
		return;
	}
	window.obj296_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj296 
hide_1629();
function hide_1629() {
	var element = "#obj296";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj296_onTap_runningActionsCount = obj296_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj296_onTap_runningActionsCount = window.obj296_onTap_runningActionsCount - 1;
if (window.obj296_onTap_runningActionsCount == 0) {
	obj296_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1629(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj296_onTap_runningActionsCount = window.obj296_onTap_runningActionsCount - 1;
if (window.obj296_onTap_runningActionsCount == 0) {
	obj296_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj330 
move_481();
function move_481() {
	window.obj296_onTap_runningActionsCount = obj296_onTap_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1003;
	var moveY = 149;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj296_onTap_runningActionsCount = window.obj296_onTap_runningActionsCount - 1;
if (window.obj296_onTap_runningActionsCount == 0) {
	obj296_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj296_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj296_onTap_activeActionGroupIndex = -1;
		$("#obj296").trigger("obj296_onTap_ended");
		
		return;
	}
	window.obj296_onTap_activeActionGroupIndex = 1;
	





















};
obj952_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj952_onTap_activeActionGroupIndex = -1;
		$("#obj952").trigger("obj952_onTap_ended");
		
		return;
	}
	window.obj952_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj827 
show_954();
function show_954() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj952_onTap_runningActionsCount = obj952_onTap_runningActionsCount + 1;

	var animationType = "bounce";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj952_onTap_runningActionsCount = window.obj952_onTap_runningActionsCount - 1;
if (window.obj952_onTap_runningActionsCount == 0) {
	obj952_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj952_onTap_runningActionsCount = window.obj952_onTap_runningActionsCount - 1;
if (window.obj952_onTap_runningActionsCount == 0) {
	obj952_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj952_onTap_runningActionsCount = window.obj952_onTap_runningActionsCount - 1;
if (window.obj952_onTap_runningActionsCount == 0) {
	obj952_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj952_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj952_onTap_activeActionGroupIndex = -1;
		$("#obj952").trigger("obj952_onTap_ended");
		
		return;
	}
	window.obj952_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_955();
function wait_955() {
	window.obj952_onTap_runningActionsCount = obj952_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj952_onTap_runningActionsCount = window.obj952_onTap_runningActionsCount - 1;
if (window.obj952_onTap_runningActionsCount == 0) {
	obj952_onTap_actionGroup2();
}
	}, 1000);
}












};
obj952_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj952_onTap_activeActionGroupIndex = -1;
		$("#obj952").trigger("obj952_onTap_ended");
		
		return;
	}
	window.obj952_onTap_activeActionGroupIndex = 2;
	


















//	action: run action list container
//	target: obj938 
runActionList_956();
function runActionList_956() {
	window.obj952_onTap_runningActionsCount = obj952_onTap_runningActionsCount + 1;
	$("#obj938").trigger('SCEventRun');
	setTimeout(function() {
		window.obj952_onTap_runningActionsCount = window.obj952_onTap_runningActionsCount - 1;
if (window.obj952_onTap_runningActionsCount == 0) {
	obj952_onTap_actionGroup3();
}		
	}, 1);
}



};
obj952_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj952_onTap_activeActionGroupIndex = -1;
		$("#obj952").trigger("obj952_onTap_ended");
		
		return;
	}
	window.obj952_onTap_activeActionGroupIndex = 3;
	





















};
obj949_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj949_onTap_activeActionGroupIndex = -1;
		$("#obj949").trigger("obj949_onTap_ended");
		
		return;
	}
	window.obj949_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj832 
show_951();
function show_951() {
	var element = "#obj832";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj949_onTap_runningActionsCount = obj949_onTap_runningActionsCount + 1;

	var animationType = "shake";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj949_onTap_runningActionsCount = window.obj949_onTap_runningActionsCount - 1;
if (window.obj949_onTap_runningActionsCount == 0) {
	obj949_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj949_onTap_runningActionsCount = window.obj949_onTap_runningActionsCount - 1;
if (window.obj949_onTap_runningActionsCount == 0) {
	obj949_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj949_onTap_runningActionsCount = window.obj949_onTap_runningActionsCount - 1;
if (window.obj949_onTap_runningActionsCount == 0) {
	obj949_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj949_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj949_onTap_activeActionGroupIndex = -1;
		$("#obj949").trigger("obj949_onTap_ended");
		
		return;
	}
	window.obj949_onTap_activeActionGroupIndex = 1;
	





















};
obj944_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj944_SCEventRun_activeActionGroupIndex = -1;
		$("#obj944").trigger("obj944_SCEventRun_ended");
		
		return;
	}
	window.obj944_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj957 
show_946();
function show_946() {
	var element = "#obj957";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj944_SCEventRun_runningActionsCount = obj944_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj944_SCEventRun_runningActionsCount = window.obj944_SCEventRun_runningActionsCount - 1;
if (window.obj944_SCEventRun_runningActionsCount == 0) {
	obj944_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj944_SCEventRun_runningActionsCount = window.obj944_SCEventRun_runningActionsCount - 1;
if (window.obj944_SCEventRun_runningActionsCount == 0) {
	obj944_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj944_SCEventRun_runningActionsCount = window.obj944_SCEventRun_runningActionsCount - 1;
if (window.obj944_SCEventRun_runningActionsCount == 0) {
	obj944_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj949 
show_947();
function show_947() {
	var element = "#obj949";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj944_SCEventRun_runningActionsCount = obj944_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj944_SCEventRun_runningActionsCount = window.obj944_SCEventRun_runningActionsCount - 1;
if (window.obj944_SCEventRun_runningActionsCount == 0) {
	obj944_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj944_SCEventRun_runningActionsCount = window.obj944_SCEventRun_runningActionsCount - 1;
if (window.obj944_SCEventRun_runningActionsCount == 0) {
	obj944_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj944_SCEventRun_runningActionsCount = window.obj944_SCEventRun_runningActionsCount - 1;
if (window.obj944_SCEventRun_runningActionsCount == 0) {
	obj944_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj952 
show_948();
function show_948() {
	var element = "#obj952";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj944_SCEventRun_runningActionsCount = obj944_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj944_SCEventRun_runningActionsCount = window.obj944_SCEventRun_runningActionsCount - 1;
if (window.obj944_SCEventRun_runningActionsCount == 0) {
	obj944_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj944_SCEventRun_runningActionsCount = window.obj944_SCEventRun_runningActionsCount - 1;
if (window.obj944_SCEventRun_runningActionsCount == 0) {
	obj944_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj944_SCEventRun_runningActionsCount = window.obj944_SCEventRun_runningActionsCount - 1;
if (window.obj944_SCEventRun_runningActionsCount == 0) {
	obj944_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj944_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj944_SCEventRun_activeActionGroupIndex = -1;
		$("#obj944").trigger("obj944_SCEventRun_ended");
		
		return;
	}
	window.obj944_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj938_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj938_SCEventRun_activeActionGroupIndex = -1;
		$("#obj938").trigger("obj938_SCEventRun_ended");
		
		return;
	}
	window.obj938_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj827 
hide_940();
function hide_940() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj938_SCEventRun_runningActionsCount = obj938_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_940(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj949 
hide_941();
function hide_941() {
	var element = "#obj949";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj938_SCEventRun_runningActionsCount = obj938_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_941(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj952 
hide_942();
function hide_942() {
	var element = "#obj952";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj938_SCEventRun_runningActionsCount = obj938_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_942(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj957 
hide_943();
function hide_943() {
	var element = "#obj957";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj938_SCEventRun_runningActionsCount = obj938_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_943(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj444 
show_1279();
function show_1279() {
	var element = "#obj444";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj938_SCEventRun_runningActionsCount = obj938_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj330 
move_968();
function move_968() {
	window.obj938_SCEventRun_runningActionsCount = obj938_SCEventRun_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 707;
	var moveY = 55;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj938_SCEventRun_runningActionsCount = window.obj938_SCEventRun_runningActionsCount - 1;
if (window.obj938_SCEventRun_runningActionsCount == 0) {
	obj938_SCEventRun_actionGroup1();
}
		}, 1);
	});
}



















};
obj938_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj938_SCEventRun_activeActionGroupIndex = -1;
		$("#obj938").trigger("obj938_SCEventRun_ended");
		
		return;
	}
	window.obj938_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj933_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj933_onTap_activeActionGroupIndex = -1;
		$("#obj933").trigger("obj933_onTap_ended");
		
		return;
	}
	window.obj933_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj832 
show_935();
function show_935() {
	var element = "#obj832";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj933_onTap_runningActionsCount = obj933_onTap_runningActionsCount + 1;

	var animationType = "shake";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj933_onTap_runningActionsCount = window.obj933_onTap_runningActionsCount - 1;
if (window.obj933_onTap_runningActionsCount == 0) {
	obj933_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj933_onTap_runningActionsCount = window.obj933_onTap_runningActionsCount - 1;
if (window.obj933_onTap_runningActionsCount == 0) {
	obj933_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj933_onTap_runningActionsCount = window.obj933_onTap_runningActionsCount - 1;
if (window.obj933_onTap_runningActionsCount == 0) {
	obj933_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj933_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj933_onTap_activeActionGroupIndex = -1;
		$("#obj933").trigger("obj933_onTap_ended");
		
		return;
	}
	window.obj933_onTap_activeActionGroupIndex = 1;
	





















};
obj928_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj928_onTap_activeActionGroupIndex = -1;
		$("#obj928").trigger("obj928_onTap_ended");
		
		return;
	}
	window.obj928_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj827 
show_930();
function show_930() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj928_onTap_runningActionsCount = obj928_onTap_runningActionsCount + 1;

	var animationType = "bounce";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj928_onTap_runningActionsCount = window.obj928_onTap_runningActionsCount - 1;
if (window.obj928_onTap_runningActionsCount == 0) {
	obj928_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj928_onTap_runningActionsCount = window.obj928_onTap_runningActionsCount - 1;
if (window.obj928_onTap_runningActionsCount == 0) {
	obj928_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj928_onTap_runningActionsCount = window.obj928_onTap_runningActionsCount - 1;
if (window.obj928_onTap_runningActionsCount == 0) {
	obj928_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj928_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj928_onTap_activeActionGroupIndex = -1;
		$("#obj928").trigger("obj928_onTap_ended");
		
		return;
	}
	window.obj928_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_931();
function wait_931() {
	window.obj928_onTap_runningActionsCount = obj928_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj928_onTap_runningActionsCount = window.obj928_onTap_runningActionsCount - 1;
if (window.obj928_onTap_runningActionsCount == 0) {
	obj928_onTap_actionGroup2();
}
	}, 1000);
}












};
obj928_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj928_onTap_activeActionGroupIndex = -1;
		$("#obj928").trigger("obj928_onTap_ended");
		
		return;
	}
	window.obj928_onTap_activeActionGroupIndex = 2;
	


















//	action: run action list container
//	target: obj917 
runActionList_932();
function runActionList_932() {
	window.obj928_onTap_runningActionsCount = obj928_onTap_runningActionsCount + 1;
	$("#obj917").trigger('SCEventRun');
	setTimeout(function() {
		window.obj928_onTap_runningActionsCount = window.obj928_onTap_runningActionsCount - 1;
if (window.obj928_onTap_runningActionsCount == 0) {
	obj928_onTap_actionGroup3();
}		
	}, 1);
}



};
obj928_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj928_onTap_activeActionGroupIndex = -1;
		$("#obj928").trigger("obj928_onTap_ended");
		
		return;
	}
	window.obj928_onTap_activeActionGroupIndex = 3;
	





















};
obj923_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj923_SCEventRun_activeActionGroupIndex = -1;
		$("#obj923").trigger("obj923_SCEventRun_ended");
		
		return;
	}
	window.obj923_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj936 
show_925();
function show_925() {
	var element = "#obj936";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj923_SCEventRun_runningActionsCount = obj923_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj923_SCEventRun_runningActionsCount = window.obj923_SCEventRun_runningActionsCount - 1;
if (window.obj923_SCEventRun_runningActionsCount == 0) {
	obj923_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj923_SCEventRun_runningActionsCount = window.obj923_SCEventRun_runningActionsCount - 1;
if (window.obj923_SCEventRun_runningActionsCount == 0) {
	obj923_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj923_SCEventRun_runningActionsCount = window.obj923_SCEventRun_runningActionsCount - 1;
if (window.obj923_SCEventRun_runningActionsCount == 0) {
	obj923_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj928 
show_926();
function show_926() {
	var element = "#obj928";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj923_SCEventRun_runningActionsCount = obj923_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj923_SCEventRun_runningActionsCount = window.obj923_SCEventRun_runningActionsCount - 1;
if (window.obj923_SCEventRun_runningActionsCount == 0) {
	obj923_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj923_SCEventRun_runningActionsCount = window.obj923_SCEventRun_runningActionsCount - 1;
if (window.obj923_SCEventRun_runningActionsCount == 0) {
	obj923_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj923_SCEventRun_runningActionsCount = window.obj923_SCEventRun_runningActionsCount - 1;
if (window.obj923_SCEventRun_runningActionsCount == 0) {
	obj923_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj933 
show_927();
function show_927() {
	var element = "#obj933";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj923_SCEventRun_runningActionsCount = obj923_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj923_SCEventRun_runningActionsCount = window.obj923_SCEventRun_runningActionsCount - 1;
if (window.obj923_SCEventRun_runningActionsCount == 0) {
	obj923_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj923_SCEventRun_runningActionsCount = window.obj923_SCEventRun_runningActionsCount - 1;
if (window.obj923_SCEventRun_runningActionsCount == 0) {
	obj923_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj923_SCEventRun_runningActionsCount = window.obj923_SCEventRun_runningActionsCount - 1;
if (window.obj923_SCEventRun_runningActionsCount == 0) {
	obj923_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj923_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj923_SCEventRun_activeActionGroupIndex = -1;
		$("#obj923").trigger("obj923_SCEventRun_ended");
		
		return;
	}
	window.obj923_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj917_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj917_SCEventRun_activeActionGroupIndex = -1;
		$("#obj917").trigger("obj917_SCEventRun_ended");
		
		return;
	}
	window.obj917_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj827 
hide_919();
function hide_919() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj917_SCEventRun_runningActionsCount = obj917_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_919(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj928 
hide_920();
function hide_920() {
	var element = "#obj928";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj917_SCEventRun_runningActionsCount = obj917_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_920(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj933 
hide_921();
function hide_921() {
	var element = "#obj933";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj917_SCEventRun_runningActionsCount = obj917_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_921(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj936 
hide_922();
function hide_922() {
	var element = "#obj936";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj917_SCEventRun_runningActionsCount = obj917_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_922(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj400 
show_1278();
function show_1278() {
	var element = "#obj400";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj917_SCEventRun_runningActionsCount = obj917_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj330 
move_966();
function move_966() {
	window.obj917_SCEventRun_runningActionsCount = obj917_SCEventRun_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 874;
	var moveY = 508;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj917_SCEventRun_runningActionsCount = window.obj917_SCEventRun_runningActionsCount - 1;
if (window.obj917_SCEventRun_runningActionsCount == 0) {
	obj917_SCEventRun_actionGroup1();
}
		}, 1);
	});
}



















};
obj917_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj917_SCEventRun_activeActionGroupIndex = -1;
		$("#obj917").trigger("obj917_SCEventRun_ended");
		
		return;
	}
	window.obj917_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj910_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj910_onTap_activeActionGroupIndex = -1;
		$("#obj910").trigger("obj910_onTap_ended");
		
		return;
	}
	window.obj910_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj827 
show_912();
function show_912() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj910_onTap_runningActionsCount = obj910_onTap_runningActionsCount + 1;

	var animationType = "bounce";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj910_onTap_runningActionsCount = window.obj910_onTap_runningActionsCount - 1;
if (window.obj910_onTap_runningActionsCount == 0) {
	obj910_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj910_onTap_runningActionsCount = window.obj910_onTap_runningActionsCount - 1;
if (window.obj910_onTap_runningActionsCount == 0) {
	obj910_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj910_onTap_runningActionsCount = window.obj910_onTap_runningActionsCount - 1;
if (window.obj910_onTap_runningActionsCount == 0) {
	obj910_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj910_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj910_onTap_activeActionGroupIndex = -1;
		$("#obj910").trigger("obj910_onTap_ended");
		
		return;
	}
	window.obj910_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_913();
function wait_913() {
	window.obj910_onTap_runningActionsCount = obj910_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj910_onTap_runningActionsCount = window.obj910_onTap_runningActionsCount - 1;
if (window.obj910_onTap_runningActionsCount == 0) {
	obj910_onTap_actionGroup2();
}
	}, 1000);
}












};
obj910_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj910_onTap_activeActionGroupIndex = -1;
		$("#obj910").trigger("obj910_onTap_ended");
		
		return;
	}
	window.obj910_onTap_activeActionGroupIndex = 2;
	


















//	action: run action list container
//	target: obj896 
runActionList_914();
function runActionList_914() {
	window.obj910_onTap_runningActionsCount = obj910_onTap_runningActionsCount + 1;
	$("#obj896").trigger('SCEventRun');
	setTimeout(function() {
		window.obj910_onTap_runningActionsCount = window.obj910_onTap_runningActionsCount - 1;
if (window.obj910_onTap_runningActionsCount == 0) {
	obj910_onTap_actionGroup3();
}		
	}, 1);
}



};
obj910_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj910_onTap_activeActionGroupIndex = -1;
		$("#obj910").trigger("obj910_onTap_ended");
		
		return;
	}
	window.obj910_onTap_activeActionGroupIndex = 3;
	





















};
obj907_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj907_onTap_activeActionGroupIndex = -1;
		$("#obj907").trigger("obj907_onTap_ended");
		
		return;
	}
	window.obj907_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj832 
show_909();
function show_909() {
	var element = "#obj832";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj907_onTap_runningActionsCount = obj907_onTap_runningActionsCount + 1;

	var animationType = "shake";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj907_onTap_runningActionsCount = window.obj907_onTap_runningActionsCount - 1;
if (window.obj907_onTap_runningActionsCount == 0) {
	obj907_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj907_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj907_onTap_activeActionGroupIndex = -1;
		$("#obj907").trigger("obj907_onTap_ended");
		
		return;
	}
	window.obj907_onTap_activeActionGroupIndex = 1;
	





















};
obj902_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj902_SCEventRun_activeActionGroupIndex = -1;
		$("#obj902").trigger("obj902_SCEventRun_ended");
		
		return;
	}
	window.obj902_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj915 
show_904();
function show_904() {
	var element = "#obj915";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj902_SCEventRun_runningActionsCount = obj902_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj902_SCEventRun_runningActionsCount = window.obj902_SCEventRun_runningActionsCount - 1;
if (window.obj902_SCEventRun_runningActionsCount == 0) {
	obj902_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj902_SCEventRun_runningActionsCount = window.obj902_SCEventRun_runningActionsCount - 1;
if (window.obj902_SCEventRun_runningActionsCount == 0) {
	obj902_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj902_SCEventRun_runningActionsCount = window.obj902_SCEventRun_runningActionsCount - 1;
if (window.obj902_SCEventRun_runningActionsCount == 0) {
	obj902_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj907 
show_905();
function show_905() {
	var element = "#obj907";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj902_SCEventRun_runningActionsCount = obj902_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj902_SCEventRun_runningActionsCount = window.obj902_SCEventRun_runningActionsCount - 1;
if (window.obj902_SCEventRun_runningActionsCount == 0) {
	obj902_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj902_SCEventRun_runningActionsCount = window.obj902_SCEventRun_runningActionsCount - 1;
if (window.obj902_SCEventRun_runningActionsCount == 0) {
	obj902_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj902_SCEventRun_runningActionsCount = window.obj902_SCEventRun_runningActionsCount - 1;
if (window.obj902_SCEventRun_runningActionsCount == 0) {
	obj902_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj910 
show_906();
function show_906() {
	var element = "#obj910";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj902_SCEventRun_runningActionsCount = obj902_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj902_SCEventRun_runningActionsCount = window.obj902_SCEventRun_runningActionsCount - 1;
if (window.obj902_SCEventRun_runningActionsCount == 0) {
	obj902_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj902_SCEventRun_runningActionsCount = window.obj902_SCEventRun_runningActionsCount - 1;
if (window.obj902_SCEventRun_runningActionsCount == 0) {
	obj902_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj902_SCEventRun_runningActionsCount = window.obj902_SCEventRun_runningActionsCount - 1;
if (window.obj902_SCEventRun_runningActionsCount == 0) {
	obj902_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj902_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj902_SCEventRun_activeActionGroupIndex = -1;
		$("#obj902").trigger("obj902_SCEventRun_ended");
		
		return;
	}
	window.obj902_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj896_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj896_SCEventRun_activeActionGroupIndex = -1;
		$("#obj896").trigger("obj896_SCEventRun_ended");
		
		return;
	}
	window.obj896_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj827 
hide_898();
function hide_898() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj896_SCEventRun_runningActionsCount = obj896_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_898(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj907 
hide_899();
function hide_899() {
	var element = "#obj907";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj896_SCEventRun_runningActionsCount = obj896_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_899(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj910 
hide_900();
function hide_900() {
	var element = "#obj910";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj896_SCEventRun_runningActionsCount = obj896_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_900(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj915 
hide_901();
function hide_901() {
	var element = "#obj915";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj896_SCEventRun_runningActionsCount = obj896_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_901(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj416 
show_1277();
function show_1277() {
	var element = "#obj416";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj896_SCEventRun_runningActionsCount = obj896_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj330 
move_964();
function move_964() {
	window.obj896_SCEventRun_runningActionsCount = obj896_SCEventRun_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 450;
	var moveY = 649;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj896_SCEventRun_runningActionsCount = window.obj896_SCEventRun_runningActionsCount - 1;
if (window.obj896_SCEventRun_runningActionsCount == 0) {
	obj896_SCEventRun_actionGroup1();
}
		}, 1);
	});
}



















};
obj896_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj896_SCEventRun_activeActionGroupIndex = -1;
		$("#obj896").trigger("obj896_SCEventRun_ended");
		
		return;
	}
	window.obj896_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj891_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj891_onTap_activeActionGroupIndex = -1;
		$("#obj891").trigger("obj891_onTap_ended");
		
		return;
	}
	window.obj891_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj832 
show_893();
function show_893() {
	var element = "#obj832";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj891_onTap_runningActionsCount = obj891_onTap_runningActionsCount + 1;

	var animationType = "shake";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj891_onTap_runningActionsCount = window.obj891_onTap_runningActionsCount - 1;
if (window.obj891_onTap_runningActionsCount == 0) {
	obj891_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj891_onTap_runningActionsCount = window.obj891_onTap_runningActionsCount - 1;
if (window.obj891_onTap_runningActionsCount == 0) {
	obj891_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj891_onTap_runningActionsCount = window.obj891_onTap_runningActionsCount - 1;
if (window.obj891_onTap_runningActionsCount == 0) {
	obj891_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj891_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj891_onTap_activeActionGroupIndex = -1;
		$("#obj891").trigger("obj891_onTap_ended");
		
		return;
	}
	window.obj891_onTap_activeActionGroupIndex = 1;
	





















};
obj886_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj886_onTap_activeActionGroupIndex = -1;
		$("#obj886").trigger("obj886_onTap_ended");
		
		return;
	}
	window.obj886_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj827 
show_888();
function show_888() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj886_onTap_runningActionsCount = obj886_onTap_runningActionsCount + 1;

	var animationType = "bounce";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj886_onTap_runningActionsCount = window.obj886_onTap_runningActionsCount - 1;
if (window.obj886_onTap_runningActionsCount == 0) {
	obj886_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj886_onTap_runningActionsCount = window.obj886_onTap_runningActionsCount - 1;
if (window.obj886_onTap_runningActionsCount == 0) {
	obj886_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj886_onTap_runningActionsCount = window.obj886_onTap_runningActionsCount - 1;
if (window.obj886_onTap_runningActionsCount == 0) {
	obj886_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj886_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj886_onTap_activeActionGroupIndex = -1;
		$("#obj886").trigger("obj886_onTap_ended");
		
		return;
	}
	window.obj886_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_889();
function wait_889() {
	window.obj886_onTap_runningActionsCount = obj886_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj886_onTap_runningActionsCount = window.obj886_onTap_runningActionsCount - 1;
if (window.obj886_onTap_runningActionsCount == 0) {
	obj886_onTap_actionGroup2();
}
	}, 1000);
}












};
obj886_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj886_onTap_activeActionGroupIndex = -1;
		$("#obj886").trigger("obj886_onTap_ended");
		
		return;
	}
	window.obj886_onTap_activeActionGroupIndex = 2;
	


















//	action: run action list container
//	target: obj875 
runActionList_890();
function runActionList_890() {
	window.obj886_onTap_runningActionsCount = obj886_onTap_runningActionsCount + 1;
	$("#obj875").trigger('SCEventRun');
	setTimeout(function() {
		window.obj886_onTap_runningActionsCount = window.obj886_onTap_runningActionsCount - 1;
if (window.obj886_onTap_runningActionsCount == 0) {
	obj886_onTap_actionGroup3();
}		
	}, 1);
}



};
obj886_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj886_onTap_activeActionGroupIndex = -1;
		$("#obj886").trigger("obj886_onTap_ended");
		
		return;
	}
	window.obj886_onTap_activeActionGroupIndex = 3;
	





















};
obj881_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj881_SCEventRun_activeActionGroupIndex = -1;
		$("#obj881").trigger("obj881_SCEventRun_ended");
		
		return;
	}
	window.obj881_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj894 
show_883();
function show_883() {
	var element = "#obj894";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj881_SCEventRun_runningActionsCount = obj881_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj881_SCEventRun_runningActionsCount = window.obj881_SCEventRun_runningActionsCount - 1;
if (window.obj881_SCEventRun_runningActionsCount == 0) {
	obj881_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj881_SCEventRun_runningActionsCount = window.obj881_SCEventRun_runningActionsCount - 1;
if (window.obj881_SCEventRun_runningActionsCount == 0) {
	obj881_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj881_SCEventRun_runningActionsCount = window.obj881_SCEventRun_runningActionsCount - 1;
if (window.obj881_SCEventRun_runningActionsCount == 0) {
	obj881_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj886 
show_884();
function show_884() {
	var element = "#obj886";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj881_SCEventRun_runningActionsCount = obj881_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj881_SCEventRun_runningActionsCount = window.obj881_SCEventRun_runningActionsCount - 1;
if (window.obj881_SCEventRun_runningActionsCount == 0) {
	obj881_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj881_SCEventRun_runningActionsCount = window.obj881_SCEventRun_runningActionsCount - 1;
if (window.obj881_SCEventRun_runningActionsCount == 0) {
	obj881_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj881_SCEventRun_runningActionsCount = window.obj881_SCEventRun_runningActionsCount - 1;
if (window.obj881_SCEventRun_runningActionsCount == 0) {
	obj881_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj891 
show_885();
function show_885() {
	var element = "#obj891";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj881_SCEventRun_runningActionsCount = obj881_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj881_SCEventRun_runningActionsCount = window.obj881_SCEventRun_runningActionsCount - 1;
if (window.obj881_SCEventRun_runningActionsCount == 0) {
	obj881_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj881_SCEventRun_runningActionsCount = window.obj881_SCEventRun_runningActionsCount - 1;
if (window.obj881_SCEventRun_runningActionsCount == 0) {
	obj881_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj881_SCEventRun_runningActionsCount = window.obj881_SCEventRun_runningActionsCount - 1;
if (window.obj881_SCEventRun_runningActionsCount == 0) {
	obj881_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj881_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj881_SCEventRun_activeActionGroupIndex = -1;
		$("#obj881").trigger("obj881_SCEventRun_ended");
		
		return;
	}
	window.obj881_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj875_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj875_SCEventRun_activeActionGroupIndex = -1;
		$("#obj875").trigger("obj875_SCEventRun_ended");
		
		return;
	}
	window.obj875_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj827 
hide_877();
function hide_877() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj875_SCEventRun_runningActionsCount = obj875_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_877(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj886 
hide_878();
function hide_878() {
	var element = "#obj886";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj875_SCEventRun_runningActionsCount = obj875_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_878(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj891 
hide_879();
function hide_879() {
	var element = "#obj891";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj875_SCEventRun_runningActionsCount = obj875_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_879(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj894 
hide_880();
function hide_880() {
	var element = "#obj894";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj875_SCEventRun_runningActionsCount = obj875_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_880(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj432 
show_1276();
function show_1276() {
	var element = "#obj432";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj875_SCEventRun_runningActionsCount = obj875_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj330 
move_962();
function move_962() {
	window.obj875_SCEventRun_runningActionsCount = obj875_SCEventRun_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 450;
	var moveY = 185;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj875_SCEventRun_runningActionsCount = window.obj875_SCEventRun_runningActionsCount - 1;
if (window.obj875_SCEventRun_runningActionsCount == 0) {
	obj875_SCEventRun_actionGroup1();
}
		}, 1);
	});
}



















};
obj875_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj875_SCEventRun_activeActionGroupIndex = -1;
		$("#obj875").trigger("obj875_SCEventRun_ended");
		
		return;
	}
	window.obj875_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj870_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj870_onTap_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onTap_ended");
		
		return;
	}
	window.obj870_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj832 
show_872();
function show_872() {
	var element = "#obj832";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj870_onTap_runningActionsCount = obj870_onTap_runningActionsCount + 1;

	var animationType = "shake";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj870_onTap_runningActionsCount = window.obj870_onTap_runningActionsCount - 1;
if (window.obj870_onTap_runningActionsCount == 0) {
	obj870_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj870_onTap_runningActionsCount = window.obj870_onTap_runningActionsCount - 1;
if (window.obj870_onTap_runningActionsCount == 0) {
	obj870_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj870_onTap_runningActionsCount = window.obj870_onTap_runningActionsCount - 1;
if (window.obj870_onTap_runningActionsCount == 0) {
	obj870_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj870_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj870_onTap_activeActionGroupIndex = -1;
		$("#obj870").trigger("obj870_onTap_ended");
		
		return;
	}
	window.obj870_onTap_activeActionGroupIndex = 1;
	





















};
obj866_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj866_onTap_activeActionGroupIndex = -1;
		$("#obj866").trigger("obj866_onTap_ended");
		
		return;
	}
	window.obj866_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj866 
hide_1625();
function hide_1625() {
	var element = "#obj866";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj866_onTap_runningActionsCount = obj866_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj866_onTap_runningActionsCount = window.obj866_onTap_runningActionsCount - 1;
if (window.obj866_onTap_runningActionsCount == 0) {
	obj866_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1625(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj866_onTap_runningActionsCount = window.obj866_onTap_runningActionsCount - 1;
if (window.obj866_onTap_runningActionsCount == 0) {
	obj866_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj858 
show_868();
function show_868() {
	var element = "#obj858";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj866_onTap_runningActionsCount = obj866_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj866_onTap_runningActionsCount = window.obj866_onTap_runningActionsCount - 1;
if (window.obj866_onTap_runningActionsCount == 0) {
	obj866_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj866_onTap_runningActionsCount = window.obj866_onTap_runningActionsCount - 1;
if (window.obj866_onTap_runningActionsCount == 0) {
	obj866_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj866_onTap_runningActionsCount = window.obj866_onTap_runningActionsCount - 1;
if (window.obj866_onTap_runningActionsCount == 0) {
	obj866_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}














//	action: increment counter
//	target: obj852 
incrementCounter_869();
function incrementCounter_869() {
	window.obj866_onTap_runningActionsCount = obj866_onTap_runningActionsCount + 1;

	var oldValue = obj852_counterValue;
	obj852_counterValue = obj852_counterValue + 1;
	if (! obj852_counterCanExceedTargetValue && obj852_counterValue > obj852_counterTargetValue) {
		obj852_counterValue = obj852_counterTargetValue;
	}
	if (oldValue != obj852_counterValue) {
		$("#obj852").trigger('SCEventCounterValueChange');
		$("#obj852").trigger('SCEventCounterIncrease');
		if (obj852_counterValue == obj852_counterTargetValue)
			$("#obj852").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj866_onTap_runningActionsCount = window.obj866_onTap_runningActionsCount - 1;
if (window.obj866_onTap_runningActionsCount == 0) {
	obj866_onTap_actionGroup1();
} }, 1);
}





};
obj866_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj866_onTap_activeActionGroupIndex = -1;
		$("#obj866").trigger("obj866_onTap_ended");
		
		return;
	}
	window.obj866_onTap_activeActionGroupIndex = 1;
	





















};
obj862_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj862_onTap_activeActionGroupIndex = -1;
		$("#obj862").trigger("obj862_onTap_ended");
		
		return;
	}
	window.obj862_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj862 
hide_1624();
function hide_1624() {
	var element = "#obj862";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj862_onTap_runningActionsCount = obj862_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj862_onTap_runningActionsCount = window.obj862_onTap_runningActionsCount - 1;
if (window.obj862_onTap_runningActionsCount == 0) {
	obj862_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1624(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj862_onTap_runningActionsCount = window.obj862_onTap_runningActionsCount - 1;
if (window.obj862_onTap_runningActionsCount == 0) {
	obj862_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj860 
show_864();
function show_864() {
	var element = "#obj860";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj862_onTap_runningActionsCount = obj862_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj862_onTap_runningActionsCount = window.obj862_onTap_runningActionsCount - 1;
if (window.obj862_onTap_runningActionsCount == 0) {
	obj862_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj862_onTap_runningActionsCount = window.obj862_onTap_runningActionsCount - 1;
if (window.obj862_onTap_runningActionsCount == 0) {
	obj862_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj862_onTap_runningActionsCount = window.obj862_onTap_runningActionsCount - 1;
if (window.obj862_onTap_runningActionsCount == 0) {
	obj862_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}














//	action: increment counter
//	target: obj852 
incrementCounter_865();
function incrementCounter_865() {
	window.obj862_onTap_runningActionsCount = obj862_onTap_runningActionsCount + 1;

	var oldValue = obj852_counterValue;
	obj852_counterValue = obj852_counterValue + 1;
	if (! obj852_counterCanExceedTargetValue && obj852_counterValue > obj852_counterTargetValue) {
		obj852_counterValue = obj852_counterTargetValue;
	}
	if (oldValue != obj852_counterValue) {
		$("#obj852").trigger('SCEventCounterValueChange');
		$("#obj852").trigger('SCEventCounterIncrease');
		if (obj852_counterValue == obj852_counterTargetValue)
			$("#obj852").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj862_onTap_runningActionsCount = window.obj862_onTap_runningActionsCount - 1;
if (window.obj862_onTap_runningActionsCount == 0) {
	obj862_onTap_actionGroup1();
} }, 1);
}





};
obj862_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj862_onTap_activeActionGroupIndex = -1;
		$("#obj862").trigger("obj862_onTap_ended");
		
		return;
	}
	window.obj862_onTap_activeActionGroupIndex = 1;
	





















};
obj852_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	








//	action: wait
wait_854();
function wait_854() {
	window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = obj852_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = window.obj852_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj852_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj852_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 500);
}












};
obj852_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj827 
show_855();
function show_855() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = obj852_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var animationType = "bounce";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = window.obj852_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj852_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj852_SCEventCounterReachedTargetValue_actionGroup2();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = window.obj852_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj852_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj852_SCEventCounterReachedTargetValue_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = window.obj852_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj852_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj852_SCEventCounterReachedTargetValue_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj852_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	








//	action: wait
wait_856();
function wait_856() {
	window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = obj852_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	setTimeout(function() {
		window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = window.obj852_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj852_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj852_SCEventCounterReachedTargetValue_actionGroup3();
}
	}, 1000);
}












};
obj852_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

















//	action: set counter value
//	target: obj852 
setCounterValue_1179();
function setCounterValue_1179() {
	window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = obj852_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var oldValue = obj852_counterValue;
	obj852_counterValue = 0;
	if (obj852_counterValue < 0) {
		obj852_counterValue = 0;
	} else if (! obj852_counterCanExceedTargetValue && obj852_counterValue > obj852_counterTargetValue) {
		obj852_counterValue = obj852_counterTargetValue;
	}
	if (oldValue != obj852_counterValue) {
		$("#obj852").trigger('SCEventCounterValueChange');
		if (obj852_counterValue == obj852_counterTargetValue)
			$("#obj852").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = window.obj852_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj852_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj852_SCEventCounterReachedTargetValue_actionGroup4();
} }, 1);
}

//	action: run action list container
//	target: obj837 
runActionList_857();
function runActionList_857() {
	window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = obj852_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj837").trigger('SCEventRun');
	setTimeout(function() {
		window.obj852_SCEventCounterReachedTargetValue_runningActionsCount = window.obj852_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj852_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj852_SCEventCounterReachedTargetValue_actionGroup4();
}		
	}, 1);
}



};
obj852_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj852").trigger("obj852_SCEventCounterReachedTargetValue_ended");
		
		return;
	}
	window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	





















};
obj846_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj846_SCEventRun_activeActionGroupIndex = -1;
		$("#obj846").trigger("obj846_SCEventRun_ended");
		
		return;
	}
	window.obj846_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj873 
show_848();
function show_848() {
	var element = "#obj873";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj846_SCEventRun_runningActionsCount = obj846_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj870 
show_849();
function show_849() {
	var element = "#obj870";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj846_SCEventRun_runningActionsCount = obj846_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj866 
show_850();
function show_850() {
	var element = "#obj866";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj846_SCEventRun_runningActionsCount = obj846_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj862 
show_851();
function show_851() {
	var element = "#obj862";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj846_SCEventRun_runningActionsCount = obj846_SCEventRun_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj846_SCEventRun_runningActionsCount = window.obj846_SCEventRun_runningActionsCount - 1;
if (window.obj846_SCEventRun_runningActionsCount == 0) {
	obj846_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj846_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj846_SCEventRun_activeActionGroupIndex = -1;
		$("#obj846").trigger("obj846_SCEventRun_ended");
		
		return;
	}
	window.obj846_SCEventRun_activeActionGroupIndex = 1;
	





















};
obj837_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj837_SCEventRun_activeActionGroupIndex = -1;
		$("#obj837").trigger("obj837_SCEventRun_ended");
		
		return;
	}
	window.obj837_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj827 
hide_839();
function hide_839() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj837_SCEventRun_runningActionsCount = obj837_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_839(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj858 
hide_840();
function hide_840() {
	var element = "#obj858";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj837_SCEventRun_runningActionsCount = obj837_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_840(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj860 
hide_841();
function hide_841() {
	var element = "#obj860";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj837_SCEventRun_runningActionsCount = obj837_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_841(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj862 
hide_842();
function hide_842() {
	var element = "#obj862";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj837_SCEventRun_runningActionsCount = obj837_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_842(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj866 
hide_843();
function hide_843() {
	var element = "#obj866";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj837_SCEventRun_runningActionsCount = obj837_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_843(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj870 
hide_844();
function hide_844() {
	var element = "#obj870";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj837_SCEventRun_runningActionsCount = obj837_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_844(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj873 
hide_845();
function hide_845() {
	var element = "#obj873";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj837_SCEventRun_runningActionsCount = obj837_SCEventRun_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_845(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj837_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj837_SCEventRun_activeActionGroupIndex = -1;
		$("#obj837").trigger("obj837_SCEventRun_ended");
		
		return;
	}
	window.obj837_SCEventRun_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj330 
move_961();
function move_961() {
	window.obj837_SCEventRun_runningActionsCount = obj837_SCEventRun_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj330");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 453;
	var moveY = 651;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj837_SCEventRun_runningActionsCount = window.obj837_SCEventRun_runningActionsCount - 1;
if (window.obj837_SCEventRun_runningActionsCount == 0) {
	obj837_SCEventRun_actionGroup2();
}
		}, 1);
	});
}



















};
obj837_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj837_SCEventRun_activeActionGroupIndex = -1;
		$("#obj837").trigger("obj837_SCEventRun_ended");
		
		return;
	}
	window.obj837_SCEventRun_activeActionGroupIndex = 2;
	





















};
obj832_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj832_onShow_activeActionGroupIndex = -1;
		$("#obj832").trigger("obj832_onShow_ended");
		
		return;
	}
	window.obj832_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_835();
function wait_835() {
	window.obj832_onShow_runningActionsCount = obj832_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj832_onShow_runningActionsCount = window.obj832_onShow_runningActionsCount - 1;
if (window.obj832_onShow_runningActionsCount == 0) {
	obj832_onShow_actionGroup1();
}
	}, 1000);
}












};
obj832_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj832_onShow_activeActionGroupIndex = -1;
		$("#obj832").trigger("obj832_onShow_ended");
		
		return;
	}
	window.obj832_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj832 
hide_836();
function hide_836() {
	var element = "#obj832";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj832_onShow_runningActionsCount = obj832_onShow_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj832_onShow_runningActionsCount = window.obj832_onShow_runningActionsCount - 1;
if (window.obj832_onShow_runningActionsCount == 0) {
	obj832_onShow_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_836(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj832_onShow_runningActionsCount = window.obj832_onShow_runningActionsCount - 1;
if (window.obj832_onShow_runningActionsCount == 0) {
	obj832_onShow_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj832_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj832_onShow_activeActionGroupIndex = -1;
		$("#obj832").trigger("obj832_onShow_ended");
		
		return;
	}
	window.obj832_onShow_activeActionGroupIndex = 2;
	





















};
obj827_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onShow_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onShow_ended");
		
		return;
	}
	window.obj827_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_830();
function wait_830() {
	window.obj827_onShow_runningActionsCount = obj827_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj827_onShow_runningActionsCount = window.obj827_onShow_runningActionsCount - 1;
if (window.obj827_onShow_runningActionsCount == 0) {
	obj827_onShow_actionGroup1();
}
	}, 1500);
}












};
obj827_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj827_onShow_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onShow_ended");
		
		return;
	}
	window.obj827_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj827 
hide_831();
function hide_831() {
	var element = "#obj827";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj827_onShow_runningActionsCount = obj827_onShow_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj827_onShow_runningActionsCount = window.obj827_onShow_runningActionsCount - 1;
if (window.obj827_onShow_runningActionsCount == 0) {
	obj827_onShow_actionGroup2();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_831(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj827_onShow_runningActionsCount = window.obj827_onShow_runningActionsCount - 1;
if (window.obj827_onShow_runningActionsCount == 0) {
	obj827_onShow_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj827_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj827_onShow_activeActionGroupIndex = -1;
		$("#obj827").trigger("obj827_onShow_ended");
		
		return;
	}
	window.obj827_onShow_activeActionGroupIndex = 2;
	





















};
obj1620_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1620_onTap_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_onTap_ended");
		
		return;
	}
	window.obj1620_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1595 
show_1622();
function show_1622() {
	var element = "#obj1595";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1620_onTap_runningActionsCount = obj1620_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1620_onTap_runningActionsCount = window.obj1620_onTap_runningActionsCount - 1;
if (window.obj1620_onTap_runningActionsCount == 0) {
	obj1620_onTap_actionGroup1();
}
			$(element).trigger('SCEventShow');
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	setTimeout(function() {
		$(element).css("display", "block");
		window.obj1620_onTap_runningActionsCount = window.obj1620_onTap_runningActionsCount - 1;
if (window.obj1620_onTap_runningActionsCount == 0) {
	obj1620_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1620_onTap_runningActionsCount = window.obj1620_onTap_runningActionsCount - 1;
if (window.obj1620_onTap_runningActionsCount == 0) {
	obj1620_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1620_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1620_onTap_activeActionGroupIndex = -1;
		$("#obj1620").trigger("obj1620_onTap_ended");
		
		return;
	}
	window.obj1620_onTap_activeActionGroupIndex = 1;
	





















};
obj1631_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1631_onTap_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_onTap_ended");
		
		return;
	}
	window.obj1631_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1631 
hide_1634();
function hide_1634() {
	var element = "#obj1631";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1631_onTap_runningActionsCount = obj1631_onTap_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1631_onTap_runningActionsCount = window.obj1631_onTap_runningActionsCount - 1;
if (window.obj1631_onTap_runningActionsCount == 0) {
	obj1631_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1634(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1631_onTap_runningActionsCount = window.obj1631_onTap_runningActionsCount - 1;
if (window.obj1631_onTap_runningActionsCount == 0) {
	obj1631_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1631_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1631_onTap_activeActionGroupIndex = -1;
		$("#obj1631").trigger("obj1631_onTap_ended");
		
		return;
	}
	window.obj1631_onTap_activeActionGroupIndex = 1;
	





















};
obj1595_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1595_onTap_activeActionGroupIndex = -1;
		$("#obj1595").trigger("obj1595_onTap_ended");
		
		return;
	}
	window.obj1595_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1595 
hide_1600();
function hide_1600() {
	var element = "#obj1595";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1595_onTap_runningActionsCount = obj1595_onTap_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1595_onTap_runningActionsCount = window.obj1595_onTap_runningActionsCount - 1;
if (window.obj1595_onTap_runningActionsCount == 0) {
	obj1595_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(element).css("animation-duration", animationDurationMs + "ms");
	$(element).css("animation-iteration-count", animationIterationCount);
	// var node = $(element)[0];
	if ($(element).attr("sccurrentanimation") != null) {
		$(element).trigger("animationend", $(element).attr("sccurrentanimation"));
		// node.classList.remove('animated', $(element).attr("sccurrentanimation"));
		// $(element).attr("sccurrentanimation", null);
		setTimeout(hide_1600(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1595_onTap_runningActionsCount = window.obj1595_onTap_runningActionsCount - 1;
if (window.obj1595_onTap_runningActionsCount == 0) {
	obj1595_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1595_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1595_onTap_activeActionGroupIndex = -1;
		$("#obj1595").trigger("obj1595_onTap_ended");
		
		return;
	}
	window.obj1595_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		
























/*
 *
 *   obj969: Event Touch Down
 *
 */
 
$("#obj969").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj969_onTap_activeActionGroupIndex != -1) return;
var obj969_onTap_runningActionsCount = 0;
var obj969_onTap_loopCount = 0;
obj969_onTap_actionGroup0();
});







/*
 *
 *   obj285: Event Touch Down
 *
 */
 
$("#obj285").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj285_onTap_activeActionGroupIndex != -1) return;
var obj285_onTap_runningActionsCount = 0;
var obj285_onTap_loopCount = 0;
obj285_onTap_actionGroup0();
});














/*
 *
 *   obj1029: Event Touch Down
 *
 */
 
$("#obj1029").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1029_onTap_activeActionGroupIndex != -1) return;
var obj1029_onTap_runningActionsCount = 0;
var obj1029_onTap_loopCount = 0;
obj1029_onTap_actionGroup0();
});










/*
 *
 *   obj1025: Event SCEventRun
 *
 */
$("#obj1025").bind("SCEventRun", function(event) {
	if (window.obj1025_SCEventRun_activeActionGroupIndex != -1) return;
var obj1025_SCEventRun_runningActionsCount = 0;
var obj1025_SCEventRun_loopCount = 0;
obj1025_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1021: Event SCEventRun
 *
 */
$("#obj1021").bind("SCEventRun", function(event) {
	if (window.obj1021_SCEventRun_activeActionGroupIndex != -1) return;
var obj1021_SCEventRun_runningActionsCount = 0;
var obj1021_SCEventRun_loopCount = 0;
obj1021_SCEventRun_actionGroup0();
});



/*
 *
 *   obj973: Event Touch Down
 *
 */
 
$("#obj973").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj973_onTap_activeActionGroupIndex != -1) return;
var obj973_onTap_runningActionsCount = 0;
var obj973_onTap_loopCount = 0;
obj973_onTap_actionGroup0();
});







/*
 *
 *   obj396: Event Touch Down
 *
 */
 
$("#obj396").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj396_onTap_activeActionGroupIndex != -1) return;
var obj396_onTap_runningActionsCount = 0;
var obj396_onTap_loopCount = 0;
obj396_onTap_actionGroup0();
});














/*
 *
 *   obj1042: Event Touch Down
 *
 */
 
$("#obj1042").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1042_onTap_activeActionGroupIndex != -1) return;
var obj1042_onTap_runningActionsCount = 0;
var obj1042_onTap_loopCount = 0;
obj1042_onTap_actionGroup0();
});










/*
 *
 *   obj1038: Event SCEventRun
 *
 */
$("#obj1038").bind("SCEventRun", function(event) {
	if (window.obj1038_SCEventRun_activeActionGroupIndex != -1) return;
var obj1038_SCEventRun_runningActionsCount = 0;
var obj1038_SCEventRun_loopCount = 0;
obj1038_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1034: Event SCEventRun
 *
 */
$("#obj1034").bind("SCEventRun", function(event) {
	if (window.obj1034_SCEventRun_activeActionGroupIndex != -1) return;
var obj1034_SCEventRun_runningActionsCount = 0;
var obj1034_SCEventRun_loopCount = 0;
obj1034_SCEventRun_actionGroup0();
});



/*
 *
 *   obj803: Event Touch Down
 *
 */
 
$("#obj803").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj803_onTap_activeActionGroupIndex != -1) return;
var obj803_onTap_runningActionsCount = 0;
var obj803_onTap_loopCount = 0;
obj803_onTap_actionGroup0();
});







/*
 *
 *   obj432: Event Touch Down
 *
 */
 
$("#obj432").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj432_onTap_activeActionGroupIndex != -1) return;
var obj432_onTap_runningActionsCount = 0;
var obj432_onTap_loopCount = 0;
obj432_onTap_actionGroup0();
});







/*
 *
 *   obj979: Event Touch Down
 *
 */
 
$("#obj979").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj979_onTap_activeActionGroupIndex != -1) return;
var obj979_onTap_runningActionsCount = 0;
var obj979_onTap_loopCount = 0;
obj979_onTap_actionGroup0();
});







/*
 *
 *   obj287: Event Touch Down
 *
 */
 
$("#obj287").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj287_onTap_activeActionGroupIndex != -1) return;
var obj287_onTap_runningActionsCount = 0;
var obj287_onTap_loopCount = 0;
obj287_onTap_actionGroup0();
});














/*
 *
 *   obj1055: Event Touch Down
 *
 */
 
$("#obj1055").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1055_onTap_activeActionGroupIndex != -1) return;
var obj1055_onTap_runningActionsCount = 0;
var obj1055_onTap_loopCount = 0;
obj1055_onTap_actionGroup0();
});










/*
 *
 *   obj1051: Event SCEventRun
 *
 */
$("#obj1051").bind("SCEventRun", function(event) {
	if (window.obj1051_SCEventRun_activeActionGroupIndex != -1) return;
var obj1051_SCEventRun_runningActionsCount = 0;
var obj1051_SCEventRun_loopCount = 0;
obj1051_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1047: Event SCEventRun
 *
 */
$("#obj1047").bind("SCEventRun", function(event) {
	if (window.obj1047_SCEventRun_activeActionGroupIndex != -1) return;
var obj1047_SCEventRun_runningActionsCount = 0;
var obj1047_SCEventRun_loopCount = 0;
obj1047_SCEventRun_actionGroup0();
});



/*
 *
 *   obj392: Event Touch Down
 *
 */
 
$("#obj392").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj392_onTap_activeActionGroupIndex != -1) return;
var obj392_onTap_runningActionsCount = 0;
var obj392_onTap_loopCount = 0;
obj392_onTap_actionGroup0();
});







/*
 *
 *   obj809: Event Touch Down
 *
 */
 
$("#obj809").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj809_onTap_activeActionGroupIndex != -1) return;
var obj809_onTap_runningActionsCount = 0;
var obj809_onTap_loopCount = 0;
obj809_onTap_actionGroup0();
});







/*
 *
 *   obj416: Event Touch Down
 *
 */
 
$("#obj416").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj416_onTap_activeActionGroupIndex != -1) return;
var obj416_onTap_runningActionsCount = 0;
var obj416_onTap_loopCount = 0;
obj416_onTap_actionGroup0();
});







/*
 *
 *   obj316: Event Touch Down
 *
 */
 
$("#obj316").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj316_onTap_activeActionGroupIndex != -1) return;
var obj316_onTap_runningActionsCount = 0;
var obj316_onTap_loopCount = 0;
obj316_onTap_actionGroup0();
});







/*
 *
 *   obj381: Event Touch Down
 *
 */
 
$("#obj381").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj381_onTap_activeActionGroupIndex != -1) return;
var obj381_onTap_runningActionsCount = 0;
var obj381_onTap_loopCount = 0;
obj381_onTap_actionGroup0();
});
/*
 *
 *   obj381: Event Touch Up
 *
 */
$("#obj381").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj381").unbind("obj381_onTouchDown_ended", startActionList);
	    if (window.obj381_onTouchUp_activeActionGroupIndex != -1) return;
var obj381_onTouchUp_runningActionsCount = 0;
var obj381_onTouchUp_loopCount = 0;
obj381_onTouchUp_actionGroup0();
	};
	if ((window['obj381_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj381_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj381").bind("obj381_onTouchDown_ended", startActionList);
	}
});






/*
 *
 *   obj983: Event Touch Down
 *
 */
 
$("#obj983").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj983_onTap_activeActionGroupIndex != -1) return;
var obj983_onTap_runningActionsCount = 0;
var obj983_onTap_loopCount = 0;
obj983_onTap_actionGroup0();
});







/*
 *
 *   obj306: Event Touch Down
 *
 */
 
$("#obj306").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj306_onTap_activeActionGroupIndex != -1) return;
var obj306_onTap_runningActionsCount = 0;
var obj306_onTap_loopCount = 0;
obj306_onTap_actionGroup0();
});














/*
 *
 *   obj1068: Event Touch Down
 *
 */
 
$("#obj1068").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1068_onTap_activeActionGroupIndex != -1) return;
var obj1068_onTap_runningActionsCount = 0;
var obj1068_onTap_loopCount = 0;
obj1068_onTap_actionGroup0();
});










/*
 *
 *   obj1064: Event SCEventRun
 *
 */
$("#obj1064").bind("SCEventRun", function(event) {
	if (window.obj1064_SCEventRun_activeActionGroupIndex != -1) return;
var obj1064_SCEventRun_runningActionsCount = 0;
var obj1064_SCEventRun_loopCount = 0;
obj1064_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1060: Event SCEventRun
 *
 */
$("#obj1060").bind("SCEventRun", function(event) {
	if (window.obj1060_SCEventRun_activeActionGroupIndex != -1) return;
var obj1060_SCEventRun_runningActionsCount = 0;
var obj1060_SCEventRun_loopCount = 0;
obj1060_SCEventRun_actionGroup0();
});



/*
 *
 *   obj989: Event Touch Down
 *
 */
 
$("#obj989").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj989_onTap_activeActionGroupIndex != -1) return;
var obj989_onTap_runningActionsCount = 0;
var obj989_onTap_loopCount = 0;
obj989_onTap_actionGroup0();
});







/*
 *
 *   obj289: Event Touch Down
 *
 */
 
$("#obj289").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj289_onTap_activeActionGroupIndex != -1) return;
var obj289_onTap_runningActionsCount = 0;
var obj289_onTap_loopCount = 0;
obj289_onTap_actionGroup0();
});














/*
 *
 *   obj1081: Event Touch Down
 *
 */
 
$("#obj1081").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1081_onTap_activeActionGroupIndex != -1) return;
var obj1081_onTap_runningActionsCount = 0;
var obj1081_onTap_loopCount = 0;
obj1081_onTap_actionGroup0();
});










/*
 *
 *   obj1077: Event SCEventRun
 *
 */
$("#obj1077").bind("SCEventRun", function(event) {
	if (window.obj1077_SCEventRun_activeActionGroupIndex != -1) return;
var obj1077_SCEventRun_runningActionsCount = 0;
var obj1077_SCEventRun_loopCount = 0;
obj1077_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1073: Event SCEventRun
 *
 */
$("#obj1073").bind("SCEventRun", function(event) {
	if (window.obj1073_SCEventRun_activeActionGroupIndex != -1) return;
var obj1073_SCEventRun_runningActionsCount = 0;
var obj1073_SCEventRun_loopCount = 0;
obj1073_SCEventRun_actionGroup0();
});



/*
 *
 *   obj408: Event Touch Down
 *
 */
 
$("#obj408").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj408_onTap_activeActionGroupIndex != -1) return;
var obj408_onTap_runningActionsCount = 0;
var obj408_onTap_loopCount = 0;
obj408_onTap_actionGroup0();
});







/*
 *
 *   obj310: Event Touch Down
 *
 */
 
$("#obj310").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj310_onTap_activeActionGroupIndex != -1) return;
var obj310_onTap_runningActionsCount = 0;
var obj310_onTap_loopCount = 0;
obj310_onTap_actionGroup0();
});







/*
 *
 *   obj412: Event Touch Down
 *
 */
 
$("#obj412").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj412_onTap_activeActionGroupIndex != -1) return;
var obj412_onTap_runningActionsCount = 0;
var obj412_onTap_loopCount = 0;
obj412_onTap_actionGroup0();
});
/*
 *
 *   obj412: Event Touch Up
 *
 */
$("#obj412").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj412").unbind("obj412_onTouchDown_ended", startActionList);
	    if (window.obj412_onTouchUp_activeActionGroupIndex != -1) return;
var obj412_onTouchUp_runningActionsCount = 0;
var obj412_onTouchUp_loopCount = 0;
obj412_onTouchUp_actionGroup0();
	};
	if ((window['obj412_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj412_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj412").bind("obj412_onTouchDown_ended", startActionList);
	}
});






/*
 *
 *   obj815: Event Touch Down
 *
 */
 
$("#obj815").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj815_onTap_activeActionGroupIndex != -1) return;
var obj815_onTap_runningActionsCount = 0;
var obj815_onTap_loopCount = 0;
obj815_onTap_actionGroup0();
});







/*
 *
 *   obj400: Event Touch Down
 *
 */
 
$("#obj400").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj400_onTap_activeActionGroupIndex != -1) return;
var obj400_onTap_runningActionsCount = 0;
var obj400_onTap_loopCount = 0;
obj400_onTap_actionGroup0();
});







/*
 *
 *   obj993: Event Touch Down
 *
 */
 
$("#obj993").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj993_onTap_activeActionGroupIndex != -1) return;
var obj993_onTap_runningActionsCount = 0;
var obj993_onTap_loopCount = 0;
obj993_onTap_actionGroup0();
});







/*
 *
 *   obj420: Event Touch Down
 *
 */
 
$("#obj420").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj420_onTap_activeActionGroupIndex != -1) return;
var obj420_onTap_runningActionsCount = 0;
var obj420_onTap_loopCount = 0;
obj420_onTap_actionGroup0();
});














/*
 *
 *   obj1094: Event Touch Down
 *
 */
 
$("#obj1094").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1094_onTap_activeActionGroupIndex != -1) return;
var obj1094_onTap_runningActionsCount = 0;
var obj1094_onTap_loopCount = 0;
obj1094_onTap_actionGroup0();
});










/*
 *
 *   obj1090: Event SCEventRun
 *
 */
$("#obj1090").bind("SCEventRun", function(event) {
	if (window.obj1090_SCEventRun_activeActionGroupIndex != -1) return;
var obj1090_SCEventRun_runningActionsCount = 0;
var obj1090_SCEventRun_loopCount = 0;
obj1090_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1086: Event SCEventRun
 *
 */
$("#obj1086").bind("SCEventRun", function(event) {
	if (window.obj1086_SCEventRun_activeActionGroupIndex != -1) return;
var obj1086_SCEventRun_runningActionsCount = 0;
var obj1086_SCEventRun_loopCount = 0;
obj1086_SCEventRun_actionGroup0();
});



/*
 *
 *   obj424: Event Touch Down
 *
 */
 
$("#obj424").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj424_onTap_activeActionGroupIndex != -1) return;
var obj424_onTap_runningActionsCount = 0;
var obj424_onTap_loopCount = 0;
obj424_onTap_actionGroup0();
});







/*
 *
 *   obj999: Event Touch Down
 *
 */
 
$("#obj999").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj999_onTap_activeActionGroupIndex != -1) return;
var obj999_onTap_runningActionsCount = 0;
var obj999_onTap_loopCount = 0;
obj999_onTap_actionGroup0();
});







/*
 *
 *   obj436: Event Touch Down
 *
 */
 
$("#obj436").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj436_onTap_activeActionGroupIndex != -1) return;
var obj436_onTap_runningActionsCount = 0;
var obj436_onTap_loopCount = 0;
obj436_onTap_actionGroup0();
});














/*
 *
 *   obj1107: Event Touch Down
 *
 */
 
$("#obj1107").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1107_onTap_activeActionGroupIndex != -1) return;
var obj1107_onTap_runningActionsCount = 0;
var obj1107_onTap_loopCount = 0;
obj1107_onTap_actionGroup0();
});










/*
 *
 *   obj1103: Event SCEventRun
 *
 */
$("#obj1103").bind("SCEventRun", function(event) {
	if (window.obj1103_SCEventRun_activeActionGroupIndex != -1) return;
var obj1103_SCEventRun_runningActionsCount = 0;
var obj1103_SCEventRun_loopCount = 0;
obj1103_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1099: Event SCEventRun
 *
 */
$("#obj1099").bind("SCEventRun", function(event) {
	if (window.obj1099_SCEventRun_activeActionGroupIndex != -1) return;
var obj1099_SCEventRun_runningActionsCount = 0;
var obj1099_SCEventRun_loopCount = 0;
obj1099_SCEventRun_actionGroup0();
});



/*
 *
 *   obj500: Event Touch Down
 *
 */
 
$("#obj500").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj500_onTap_activeActionGroupIndex != -1) return;
var obj500_onTap_runningActionsCount = 0;
var obj500_onTap_loopCount = 0;
obj500_onTap_actionGroup0();
});







/*
 *
 *   obj456: Event Touch Down
 *
 */
 
$("#obj456").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj456_onTap_activeActionGroupIndex != -1) return;
var obj456_onTap_runningActionsCount = 0;
var obj456_onTap_loopCount = 0;
obj456_onTap_actionGroup0();
});
/*
 *
 *   obj456: Event Touch Up
 *
 */
$("#obj456").bind(window.touchUpEvent, function(event) {
	event.preventDefault();
	var startActionList = function() {
		$("#obj456").unbind("obj456_onTouchDown_ended", startActionList);
	    if (window.obj456_onTouchUp_activeActionGroupIndex != -1) return;
var obj456_onTouchUp_runningActionsCount = 0;
var obj456_onTouchUp_loopCount = 0;
obj456_onTouchUp_actionGroup0();
	};
	if ((window['obj456_onTouchDown_activeActionGroupIndex'] == undefined) || window.obj456_onTouchDown_activeActionGroupIndex == -1) {
		startActionList();
	} else {
		$("#obj456").bind("obj456_onTouchDown_ended", startActionList);
	}
});






/*
 *
 *   obj1005: Event Touch Down
 *
 */
 
$("#obj1005").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1005_onTap_activeActionGroupIndex != -1) return;
var obj1005_onTap_runningActionsCount = 0;
var obj1005_onTap_loopCount = 0;
obj1005_onTap_actionGroup0();
});







/*
 *
 *   obj294: Event Touch Down
 *
 */
 
$("#obj294").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj294_onTap_activeActionGroupIndex != -1) return;
var obj294_onTap_runningActionsCount = 0;
var obj294_onTap_loopCount = 0;
obj294_onTap_actionGroup0();
});














/*
 *
 *   obj1120: Event Touch Down
 *
 */
 
$("#obj1120").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1120_onTap_activeActionGroupIndex != -1) return;
var obj1120_onTap_runningActionsCount = 0;
var obj1120_onTap_loopCount = 0;
obj1120_onTap_actionGroup0();
});










/*
 *
 *   obj1116: Event SCEventRun
 *
 */
$("#obj1116").bind("SCEventRun", function(event) {
	if (window.obj1116_SCEventRun_activeActionGroupIndex != -1) return;
var obj1116_SCEventRun_runningActionsCount = 0;
var obj1116_SCEventRun_loopCount = 0;
obj1116_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1112: Event SCEventRun
 *
 */
$("#obj1112").bind("SCEventRun", function(event) {
	if (window.obj1112_SCEventRun_activeActionGroupIndex != -1) return;
var obj1112_SCEventRun_runningActionsCount = 0;
var obj1112_SCEventRun_loopCount = 0;
obj1112_SCEventRun_actionGroup0();
});



/*
 *
 *   obj1009: Event Touch Down
 *
 */
 
$("#obj1009").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1009_onTap_activeActionGroupIndex != -1) return;
var obj1009_onTap_runningActionsCount = 0;
var obj1009_onTap_loopCount = 0;
obj1009_onTap_actionGroup0();
});







/*
 *
 *   obj452: Event Touch Down
 *
 */
 
$("#obj452").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj452_onTap_activeActionGroupIndex != -1) return;
var obj452_onTap_runningActionsCount = 0;
var obj452_onTap_loopCount = 0;
obj452_onTap_actionGroup0();
});














/*
 *
 *   obj1133: Event Touch Down
 *
 */
 
$("#obj1133").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1133_onTap_activeActionGroupIndex != -1) return;
var obj1133_onTap_runningActionsCount = 0;
var obj1133_onTap_loopCount = 0;
obj1133_onTap_actionGroup0();
});










/*
 *
 *   obj1129: Event SCEventRun
 *
 */
$("#obj1129").bind("SCEventRun", function(event) {
	if (window.obj1129_SCEventRun_activeActionGroupIndex != -1) return;
var obj1129_SCEventRun_runningActionsCount = 0;
var obj1129_SCEventRun_loopCount = 0;
obj1129_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1125: Event SCEventRun
 *
 */
$("#obj1125").bind("SCEventRun", function(event) {
	if (window.obj1125_SCEventRun_activeActionGroupIndex != -1) return;
var obj1125_SCEventRun_runningActionsCount = 0;
var obj1125_SCEventRun_loopCount = 0;
obj1125_SCEventRun_actionGroup0();
});



/*
 *
 *   obj440: Event Touch Down
 *
 */
 
$("#obj440").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj440_onTap_activeActionGroupIndex != -1) return;
var obj440_onTap_runningActionsCount = 0;
var obj440_onTap_loopCount = 0;
obj440_onTap_actionGroup0();
});







/*
 *
 *   obj821: Event Touch Down
 *
 */
 
$("#obj821").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj821_onTap_activeActionGroupIndex != -1) return;
var obj821_onTap_runningActionsCount = 0;
var obj821_onTap_loopCount = 0;
obj821_onTap_actionGroup0();
});







/*
 *
 *   obj444: Event Touch Down
 *
 */
 
$("#obj444").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj444_onTap_activeActionGroupIndex != -1) return;
var obj444_onTap_runningActionsCount = 0;
var obj444_onTap_loopCount = 0;
obj444_onTap_actionGroup0();
});







/*
 *
 *   obj1015: Event Touch Down
 *
 */
 
$("#obj1015").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1015_onTap_activeActionGroupIndex != -1) return;
var obj1015_onTap_runningActionsCount = 0;
var obj1015_onTap_loopCount = 0;
obj1015_onTap_actionGroup0();
});







/*
 *
 *   obj448: Event Touch Down
 *
 */
 
$("#obj448").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj448_onTap_activeActionGroupIndex != -1) return;
var obj448_onTap_runningActionsCount = 0;
var obj448_onTap_loopCount = 0;
obj448_onTap_actionGroup0();
});














/*
 *
 *   obj1146: Event Touch Down
 *
 */
 
$("#obj1146").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1146_onTap_activeActionGroupIndex != -1) return;
var obj1146_onTap_runningActionsCount = 0;
var obj1146_onTap_loopCount = 0;
obj1146_onTap_actionGroup0();
});










/*
 *
 *   obj1142: Event SCEventRun
 *
 */
$("#obj1142").bind("SCEventRun", function(event) {
	if (window.obj1142_SCEventRun_activeActionGroupIndex != -1) return;
var obj1142_SCEventRun_runningActionsCount = 0;
var obj1142_SCEventRun_loopCount = 0;
obj1142_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1138: Event SCEventRun
 *
 */
$("#obj1138").bind("SCEventRun", function(event) {
	if (window.obj1138_SCEventRun_activeActionGroupIndex != -1) return;
var obj1138_SCEventRun_runningActionsCount = 0;
var obj1138_SCEventRun_loopCount = 0;
obj1138_SCEventRun_actionGroup0();
});










/*
 *
 *   obj296: Event Touch Down
 *
 */
 
$("#obj296").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj296_onTap_activeActionGroupIndex != -1) return;
var obj296_onTap_runningActionsCount = 0;
var obj296_onTap_loopCount = 0;
obj296_onTap_actionGroup0();
});














/*
 *
 *   obj952: Event Touch Down
 *
 */
 
$("#obj952").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj952_onTap_activeActionGroupIndex != -1) return;
var obj952_onTap_runningActionsCount = 0;
var obj952_onTap_loopCount = 0;
obj952_onTap_actionGroup0();
});







/*
 *
 *   obj949: Event Touch Down
 *
 */
 
$("#obj949").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj949_onTap_activeActionGroupIndex != -1) return;
var obj949_onTap_runningActionsCount = 0;
var obj949_onTap_loopCount = 0;
obj949_onTap_actionGroup0();
});










/*
 *
 *   obj944: Event SCEventRun
 *
 */
$("#obj944").bind("SCEventRun", function(event) {
	if (window.obj944_SCEventRun_activeActionGroupIndex != -1) return;
var obj944_SCEventRun_runningActionsCount = 0;
var obj944_SCEventRun_loopCount = 0;
obj944_SCEventRun_actionGroup0();
});







/*
 *
 *   obj938: Event SCEventRun
 *
 */
$("#obj938").bind("SCEventRun", function(event) {
	if (window.obj938_SCEventRun_activeActionGroupIndex != -1) return;
var obj938_SCEventRun_runningActionsCount = 0;
var obj938_SCEventRun_loopCount = 0;
obj938_SCEventRun_actionGroup0();
});










/*
 *
 *   obj933: Event Touch Down
 *
 */
 
$("#obj933").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj933_onTap_activeActionGroupIndex != -1) return;
var obj933_onTap_runningActionsCount = 0;
var obj933_onTap_loopCount = 0;
obj933_onTap_actionGroup0();
});







/*
 *
 *   obj928: Event Touch Down
 *
 */
 
$("#obj928").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj928_onTap_activeActionGroupIndex != -1) return;
var obj928_onTap_runningActionsCount = 0;
var obj928_onTap_loopCount = 0;
obj928_onTap_actionGroup0();
});










/*
 *
 *   obj923: Event SCEventRun
 *
 */
$("#obj923").bind("SCEventRun", function(event) {
	if (window.obj923_SCEventRun_activeActionGroupIndex != -1) return;
var obj923_SCEventRun_runningActionsCount = 0;
var obj923_SCEventRun_loopCount = 0;
obj923_SCEventRun_actionGroup0();
});







/*
 *
 *   obj917: Event SCEventRun
 *
 */
$("#obj917").bind("SCEventRun", function(event) {
	if (window.obj917_SCEventRun_activeActionGroupIndex != -1) return;
var obj917_SCEventRun_runningActionsCount = 0;
var obj917_SCEventRun_loopCount = 0;
obj917_SCEventRun_actionGroup0();
});










/*
 *
 *   obj910: Event Touch Down
 *
 */
 
$("#obj910").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj910_onTap_activeActionGroupIndex != -1) return;
var obj910_onTap_runningActionsCount = 0;
var obj910_onTap_loopCount = 0;
obj910_onTap_actionGroup0();
});







/*
 *
 *   obj907: Event Touch Down
 *
 */
 
$("#obj907").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj907_onTap_activeActionGroupIndex != -1) return;
var obj907_onTap_runningActionsCount = 0;
var obj907_onTap_loopCount = 0;
obj907_onTap_actionGroup0();
});










/*
 *
 *   obj902: Event SCEventRun
 *
 */
$("#obj902").bind("SCEventRun", function(event) {
	if (window.obj902_SCEventRun_activeActionGroupIndex != -1) return;
var obj902_SCEventRun_runningActionsCount = 0;
var obj902_SCEventRun_loopCount = 0;
obj902_SCEventRun_actionGroup0();
});







/*
 *
 *   obj896: Event SCEventRun
 *
 */
$("#obj896").bind("SCEventRun", function(event) {
	if (window.obj896_SCEventRun_activeActionGroupIndex != -1) return;
var obj896_SCEventRun_runningActionsCount = 0;
var obj896_SCEventRun_loopCount = 0;
obj896_SCEventRun_actionGroup0();
});










/*
 *
 *   obj891: Event Touch Down
 *
 */
 
$("#obj891").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj891_onTap_activeActionGroupIndex != -1) return;
var obj891_onTap_runningActionsCount = 0;
var obj891_onTap_loopCount = 0;
obj891_onTap_actionGroup0();
});







/*
 *
 *   obj886: Event Touch Down
 *
 */
 
$("#obj886").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj886_onTap_activeActionGroupIndex != -1) return;
var obj886_onTap_runningActionsCount = 0;
var obj886_onTap_loopCount = 0;
obj886_onTap_actionGroup0();
});










/*
 *
 *   obj881: Event SCEventRun
 *
 */
$("#obj881").bind("SCEventRun", function(event) {
	if (window.obj881_SCEventRun_activeActionGroupIndex != -1) return;
var obj881_SCEventRun_runningActionsCount = 0;
var obj881_SCEventRun_loopCount = 0;
obj881_SCEventRun_actionGroup0();
});







/*
 *
 *   obj875: Event SCEventRun
 *
 */
$("#obj875").bind("SCEventRun", function(event) {
	if (window.obj875_SCEventRun_activeActionGroupIndex != -1) return;
var obj875_SCEventRun_runningActionsCount = 0;
var obj875_SCEventRun_loopCount = 0;
obj875_SCEventRun_actionGroup0();
});










/*
 *
 *   obj870: Event Touch Down
 *
 */
 
$("#obj870").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj870_onTap_activeActionGroupIndex != -1) return;
var obj870_onTap_runningActionsCount = 0;
var obj870_onTap_loopCount = 0;
obj870_onTap_actionGroup0();
});







/*
 *
 *   obj866: Event Touch Down
 *
 */
 
$("#obj866").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj866_onTap_activeActionGroupIndex != -1) return;
var obj866_onTap_runningActionsCount = 0;
var obj866_onTap_loopCount = 0;
obj866_onTap_actionGroup0();
});







/*
 *
 *   obj862: Event Touch Down
 *
 */
 
$("#obj862").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj862_onTap_activeActionGroupIndex != -1) return;
var obj862_onTap_runningActionsCount = 0;
var obj862_onTap_loopCount = 0;
obj862_onTap_actionGroup0();
});
























/*
 *
 *   obj852: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj852").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj852_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) return;
var obj852_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj852_SCEventCounterReachedTargetValue_loopCount = 0;
obj852_SCEventCounterReachedTargetValue_actionGroup0();
});







/*
 *
 *   obj846: Event SCEventRun
 *
 */
$("#obj846").bind("SCEventRun", function(event) {
	if (window.obj846_SCEventRun_activeActionGroupIndex != -1) return;
var obj846_SCEventRun_runningActionsCount = 0;
var obj846_SCEventRun_loopCount = 0;
obj846_SCEventRun_actionGroup0();
});







/*
 *
 *   obj837: Event SCEventRun
 *
 */
$("#obj837").bind("SCEventRun", function(event) {
	if (window.obj837_SCEventRun_activeActionGroupIndex != -1) return;
var obj837_SCEventRun_runningActionsCount = 0;
var obj837_SCEventRun_loopCount = 0;
obj837_SCEventRun_actionGroup0();
});





/*
 *
 *   obj832: Event Show
 *
 */
 
$("#obj832").bind('SCEventShow', function(event) {
	if (window.obj832_onShow_activeActionGroupIndex != -1) return;
var obj832_onShow_runningActionsCount = 0;
var obj832_onShow_loopCount = 0;
obj832_onShow_actionGroup0();
});







/*
 *
 *   obj827: Event Show
 *
 */
 
$("#obj827").bind('SCEventShow', function(event) {
	if (window.obj827_onShow_activeActionGroupIndex != -1) return;
var obj827_onShow_runningActionsCount = 0;
var obj827_onShow_loopCount = 0;
obj827_onShow_actionGroup0();
});





/*
 *
 *   obj1620: Event Touch Down
 *
 */
 
$("#obj1620").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1620_onTap_activeActionGroupIndex != -1) return;
var obj1620_onTap_runningActionsCount = 0;
var obj1620_onTap_loopCount = 0;
obj1620_onTap_actionGroup0();
});







/*
 *
 *   obj1631: Event Touch Down
 *
 */
 
$("#obj1631").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1631_onTap_activeActionGroupIndex != -1) return;
var obj1631_onTap_runningActionsCount = 0;
var obj1631_onTap_loopCount = 0;
obj1631_onTap_actionGroup0();
});







/*
 *
 *   obj1595: Event Touch Down
 *
 */
 
$("#obj1595").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1595_onTap_activeActionGroupIndex != -1) return;
var obj1595_onTap_runningActionsCount = 0;
var obj1595_onTap_loopCount = 0;
obj1595_onTap_actionGroup0();
});




		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		if (askAudioPermission) {
	$("#SCAudioPermissionAllowButton").click(function () {
		$( "audio" ).each(function( index ) {
			this.play();
			this.pause();
		});
		$(window).trigger(PubCoder.Events.PagePlay);
	});
	$("#SCAudioPermissionCancelButton").click(function () {
		$(window).trigger(PubCoder.Events.PagePlay);
	});
	var remodalInst = $('[data-remodal-id=SCAudioPermissionAlert]').remodal().open();
} else {
	setTimeout(function() {
		$(window).trigger(PubCoder.Events.PagePlay);
	}, 200);
}
	 }
});
var orientationDevice = getOrientation(PubCoder.isAndroidReader);
$(window).on(PubCoder.Events.PagePlay, function() {
	
$("#obj283").trigger('SCEventShow');
$("#obj330").trigger('SCEventShow');
$("#obj1234").trigger('SCEventShow');
$("#obj969").trigger('SCEventShow');
$("#obj285").trigger('SCEventShow');
$("#obj973").trigger('SCEventShow');
$("#obj396").trigger('SCEventShow');
$("#obj803").trigger('SCEventShow');
$("#obj432").trigger('SCEventShow');
$("#obj979").trigger('SCEventShow');
$("#obj287").trigger('SCEventShow');
$("#obj392").trigger('SCEventShow');
$("#obj809").trigger('SCEventShow');
$("#obj416").trigger('SCEventShow');
$("#obj316").trigger('SCEventShow');
$("#obj381").trigger('SCEventShow');
$("#obj983").trigger('SCEventShow');
$("#obj306").trigger('SCEventShow');
$("#obj989").trigger('SCEventShow');
$("#obj289").trigger('SCEventShow');
$("#obj408").trigger('SCEventShow');
$("#obj412").trigger('SCEventShow');
$("#obj815").trigger('SCEventShow');
$("#obj400").trigger('SCEventShow');
$("#obj993").trigger('SCEventShow');
$("#obj420").trigger('SCEventShow');
$("#obj424").trigger('SCEventShow');
$("#obj999").trigger('SCEventShow');
$("#obj436").trigger('SCEventShow');
$("#obj500").trigger('SCEventShow');
$("#obj456").trigger('SCEventShow');
$("#obj1005").trigger('SCEventShow');
$("#obj294").trigger('SCEventShow');
$("#obj1009").trigger('SCEventShow');
$("#obj452").trigger('SCEventShow');
$("#obj440").trigger('SCEventShow');
$("#obj821").trigger('SCEventShow');
$("#obj444").trigger('SCEventShow');
$("#obj1015").trigger('SCEventShow');
$("#obj448").trigger('SCEventShow');
$("#obj1626").trigger('SCEventShow');
$("#obj296").trigger('SCEventShow');
$("#obj1620").trigger('SCEventShow');
$("#obj1631").trigger('SCEventShow');
$("#obj1595").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});
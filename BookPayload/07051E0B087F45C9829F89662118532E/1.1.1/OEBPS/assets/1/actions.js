pubcoder.projectID = "21284B68F09E4548AC37578FBED7284B";
pubcoder.project.id = "21284B68F09E4548AC37578FBED7284B";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 1407;
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
var obj1416_onShow_activeActionGroupIndex = -1;
var obj1416_onShow_runningActionsCount = 0;
var obj1416_onShow_loopCount = 0;
var obj1552_onShow_activeActionGroupIndex = -1;
var obj1552_onShow_runningActionsCount = 0;
var obj1552_onShow_loopCount = 0;
var obj1518_onTap_activeActionGroupIndex = -1;
var obj1518_onTap_runningActionsCount = 0;
var obj1518_onTap_loopCount = 0;
var obj1512_onTap_activeActionGroupIndex = -1;
var obj1512_onTap_runningActionsCount = 0;
var obj1512_onTap_loopCount = 0;
var obj1506_onTap_activeActionGroupIndex = -1;
var obj1506_onTap_runningActionsCount = 0;
var obj1506_onTap_loopCount = 0;
var obj1502_onTap_activeActionGroupIndex = -1;
var obj1502_onTap_runningActionsCount = 0;
var obj1502_onTap_loopCount = 0;
var obj1497_onTap_activeActionGroupIndex = -1;
var obj1497_onTap_runningActionsCount = 0;
var obj1497_onTap_loopCount = 0;
var obj1426_onTap_activeActionGroupIndex = -1;
var obj1426_onTap_runningActionsCount = 0;
var obj1426_onTap_loopCount = 0;
var obj1422_onTap_activeActionGroupIndex = -1;
var obj1422_onTap_runningActionsCount = 0;
var obj1422_onTap_loopCount = 0;
var obj1435_onTap_activeActionGroupIndex = -1;
var obj1435_onTap_runningActionsCount = 0;
var obj1435_onTap_loopCount = 0;
var obj1440_onTap_activeActionGroupIndex = -1;
var obj1440_onTap_runningActionsCount = 0;
var obj1440_onTap_loopCount = 0;
var obj1440_onShow_activeActionGroupIndex = -1;
var obj1440_onShow_runningActionsCount = 0;
var obj1440_onShow_loopCount = 0;
var obj1452_onTap_activeActionGroupIndex = -1;
var obj1452_onTap_runningActionsCount = 0;
var obj1452_onTap_loopCount = 0;
var obj1458_onTap_activeActionGroupIndex = -1;
var obj1458_onTap_runningActionsCount = 0;
var obj1458_onTap_loopCount = 0;
var obj1465_onTap_activeActionGroupIndex = -1;
var obj1465_onTap_runningActionsCount = 0;
var obj1465_onTap_loopCount = 0;
var obj1468_onTap_activeActionGroupIndex = -1;
var obj1468_onTap_runningActionsCount = 0;
var obj1468_onTap_loopCount = 0;
var obj1482_SCEventRun_activeActionGroupIndex = -1;
var obj1482_SCEventRun_runningActionsCount = 0;
var obj1482_SCEventRun_loopCount = 0;
var obj1526_SCEventRun_activeActionGroupIndex = -1;
var obj1526_SCEventRun_runningActionsCount = 0;
var obj1526_SCEventRun_loopCount = 0;
var obj1582_onShow_activeActionGroupIndex = -1;
var obj1582_onShow_runningActionsCount = 0;
var obj1582_onShow_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
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
		
obj1416_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1416_onShow_activeActionGroupIndex = -1;
		$("#obj1416").trigger("obj1416_onShow_ended");
		
		return;
	}
	window.obj1416_onShow_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1416 
rotate_1581();
function rotate_1581() {
	window.obj1416_onShow_runningActionsCount = obj1416_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj1416";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1416';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = 1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1581_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:1, onComplete:rotate_1581_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1581_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1581_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1581_completed() {
	setTimeout(function() {
		window.obj1416_onShow_runningActionsCount = window.obj1416_onShow_runningActionsCount - 1;
if (window.obj1416_onShow_runningActionsCount == 0) {
	obj1416_onShow_actionGroup1();
}
	}, 1);
}














};
obj1416_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1416_onShow_activeActionGroupIndex = -1;
		$("#obj1416").trigger("obj1416_onShow_ended");
		
		return;
	}
	window.obj1416_onShow_activeActionGroupIndex = 1;
	





















};
obj1552_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1552_onShow_activeActionGroupIndex = -1;
		$("#obj1552").trigger("obj1552_onShow_ended");
		
		return;
	}
	window.obj1552_onShow_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1552 
rotate_1555();
function rotate_1555() {
	window.obj1552_onShow_runningActionsCount = obj1552_onShow_runningActionsCount + 1;
	
	var targetObjectId = "#obj1552";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1552';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '365';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = true;
	if (isInfinite) { rotate_1555_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_1555_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1555_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1555_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1555_completed() {
	setTimeout(function() {
		window.obj1552_onShow_runningActionsCount = window.obj1552_onShow_runningActionsCount - 1;
if (window.obj1552_onShow_runningActionsCount == 0) {
	obj1552_onShow_actionGroup1();
}
	}, 1);
}














};
obj1552_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1552_onShow_activeActionGroupIndex = -1;
		$("#obj1552").trigger("obj1552_onShow_ended");
		
		return;
	}
	window.obj1552_onShow_activeActionGroupIndex = 1;
	





















};
obj1518_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1518_onTap_activeActionGroupIndex = -1;
		$("#obj1518").trigger("obj1518_onTap_ended");
		
		return;
	}
	window.obj1518_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1518 
hide_1521();
function hide_1521() {
	var element = "#obj1518";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1518_onTap_runningActionsCount = obj1518_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1518_onTap_runningActionsCount = window.obj1518_onTap_runningActionsCount - 1;
if (window.obj1518_onTap_runningActionsCount == 0) {
	obj1518_onTap_actionGroup1();
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
		setTimeout(hide_1521(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1518_onTap_runningActionsCount = window.obj1518_onTap_runningActionsCount - 1;
if (window.obj1518_onTap_runningActionsCount == 0) {
	obj1518_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj1418 
move_1520();
function move_1520() {
	window.obj1518_onTap_runningActionsCount = obj1518_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 137;
	var moveY = 160;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1518_onTap_runningActionsCount = window.obj1518_onTap_runningActionsCount - 1;
if (window.obj1518_onTap_runningActionsCount == 0) {
	obj1518_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj1518_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1518_onTap_activeActionGroupIndex = -1;
		$("#obj1518").trigger("obj1518_onTap_ended");
		
		return;
	}
	window.obj1518_onTap_activeActionGroupIndex = 1;
	





















};
obj1512_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1512_onTap_activeActionGroupIndex = -1;
		$("#obj1512").trigger("obj1512_onTap_ended");
		
		return;
	}
	window.obj1512_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1512 
hide_1515();
function hide_1515() {
	var element = "#obj1512";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1512_onTap_runningActionsCount = obj1512_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1512_onTap_runningActionsCount = window.obj1512_onTap_runningActionsCount - 1;
if (window.obj1512_onTap_runningActionsCount == 0) {
	obj1512_onTap_actionGroup1();
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
		setTimeout(hide_1515(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1512_onTap_runningActionsCount = window.obj1512_onTap_runningActionsCount - 1;
if (window.obj1512_onTap_runningActionsCount == 0) {
	obj1512_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj1418 
move_1514();
function move_1514() {
	window.obj1512_onTap_runningActionsCount = obj1512_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 210;
	var moveY = 260;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1512_onTap_runningActionsCount = window.obj1512_onTap_runningActionsCount - 1;
if (window.obj1512_onTap_runningActionsCount == 0) {
	obj1512_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj1512_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1512_onTap_activeActionGroupIndex = -1;
		$("#obj1512").trigger("obj1512_onTap_ended");
		
		return;
	}
	window.obj1512_onTap_activeActionGroupIndex = 1;
	





















};
obj1506_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1506_onTap_activeActionGroupIndex = -1;
		$("#obj1506").trigger("obj1506_onTap_ended");
		
		return;
	}
	window.obj1506_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1506 
hide_1509();
function hide_1509() {
	var element = "#obj1506";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1506_onTap_runningActionsCount = obj1506_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1506_onTap_runningActionsCount = window.obj1506_onTap_runningActionsCount - 1;
if (window.obj1506_onTap_runningActionsCount == 0) {
	obj1506_onTap_actionGroup1();
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
		setTimeout(hide_1509(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1506_onTap_runningActionsCount = window.obj1506_onTap_runningActionsCount - 1;
if (window.obj1506_onTap_runningActionsCount == 0) {
	obj1506_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj1418 
move_1508();
function move_1508() {
	window.obj1506_onTap_runningActionsCount = obj1506_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 286;
	var moveY = 185;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1506_onTap_runningActionsCount = window.obj1506_onTap_runningActionsCount - 1;
if (window.obj1506_onTap_runningActionsCount == 0) {
	obj1506_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj1506_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1506_onTap_activeActionGroupIndex = -1;
		$("#obj1506").trigger("obj1506_onTap_ended");
		
		return;
	}
	window.obj1506_onTap_activeActionGroupIndex = 1;
	





















};
obj1502_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1502_onTap_activeActionGroupIndex = -1;
		$("#obj1502").trigger("obj1502_onTap_ended");
		
		return;
	}
	window.obj1502_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1502 
hide_1505();
function hide_1505() {
	var element = "#obj1502";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1502_onTap_runningActionsCount = obj1502_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1502_onTap_runningActionsCount = window.obj1502_onTap_runningActionsCount - 1;
if (window.obj1502_onTap_runningActionsCount == 0) {
	obj1502_onTap_actionGroup1();
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
		setTimeout(hide_1505(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1502_onTap_runningActionsCount = window.obj1502_onTap_runningActionsCount - 1;
if (window.obj1502_onTap_runningActionsCount == 0) {
	obj1502_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj1418 
move_1504();
function move_1504() {
	window.obj1502_onTap_runningActionsCount = obj1502_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 369;
	var moveY = 88;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1502_onTap_runningActionsCount = window.obj1502_onTap_runningActionsCount - 1;
if (window.obj1502_onTap_runningActionsCount == 0) {
	obj1502_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj1502_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1502_onTap_activeActionGroupIndex = -1;
		$("#obj1502").trigger("obj1502_onTap_ended");
		
		return;
	}
	window.obj1502_onTap_activeActionGroupIndex = 1;
	





















};
obj1497_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1497_onTap_activeActionGroupIndex = -1;
		$("#obj1497").trigger("obj1497_onTap_ended");
		
		return;
	}
	window.obj1497_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1418 
move_1499();
function move_1499() {
	window.obj1497_onTap_runningActionsCount = obj1497_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 454;
	var moveY = 185;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1497_onTap_runningActionsCount = window.obj1497_onTap_runningActionsCount - 1;
if (window.obj1497_onTap_runningActionsCount == 0) {
	obj1497_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj1497_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1497_onTap_activeActionGroupIndex = -1;
		$("#obj1497").trigger("obj1497_onTap_ended");
		
		return;
	}
	window.obj1497_onTap_activeActionGroupIndex = 1;
	





















};
obj1426_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1426_onTap_activeActionGroupIndex = -1;
		$("#obj1426").trigger("obj1426_onTap_ended");
		
		return;
	}
	window.obj1426_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1562 
hide_1573();
function hide_1573() {
	var element = "#obj1562";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1426_onTap_runningActionsCount = obj1426_onTap_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
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
		setTimeout(hide_1573(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1552 
hide_1557();
function hide_1557() {
	var element = "#obj1552";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1426_onTap_runningActionsCount = obj1426_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
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
		setTimeout(hide_1557(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1475 
hide_1428();
function hide_1428() {
	var element = "#obj1475";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1426_onTap_runningActionsCount = obj1426_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
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
		setTimeout(hide_1428(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1426 
hide_1429();
function hide_1429() {
	var element = "#obj1426";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1426_onTap_runningActionsCount = obj1426_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
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
		setTimeout(hide_1429(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1416 
hide_1430();
function hide_1430() {
	var element = "#obj1416";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1426_onTap_runningActionsCount = obj1426_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
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
		setTimeout(hide_1430(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1413 
show_1431();
function show_1431() {
	var element = "#obj1413";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1426_onTap_runningActionsCount = obj1426_onTap_runningActionsCount + 1;

	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
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
		window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1426_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1426_onTap_activeActionGroupIndex = -1;
		$("#obj1426").trigger("obj1426_onTap_ended");
		
		return;
	}
	window.obj1426_onTap_activeActionGroupIndex = 1;
	


















//	action: run action list container
//	target: obj1526 
runActionList_1536();
function runActionList_1536() {
	window.obj1426_onTap_runningActionsCount = obj1426_onTap_runningActionsCount + 1;
	$("#obj1526").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1426_onTap_runningActionsCount = window.obj1426_onTap_runningActionsCount - 1;
if (window.obj1426_onTap_runningActionsCount == 0) {
	obj1426_onTap_actionGroup2();
}		
	}, 1);
}



};
obj1426_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1426_onTap_activeActionGroupIndex = -1;
		$("#obj1426").trigger("obj1426_onTap_ended");
		
		return;
	}
	window.obj1426_onTap_activeActionGroupIndex = 2;
	





















};
obj1422_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1422_onTap_activeActionGroupIndex = -1;
		$("#obj1422").trigger("obj1422_onTap_ended");
		
		return;
	}
	window.obj1422_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1582 
hide_1587();
function hide_1587() {
	var element = "#obj1582";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1422_onTap_runningActionsCount = obj1422_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1422_onTap_runningActionsCount = window.obj1422_onTap_runningActionsCount - 1;
if (window.obj1422_onTap_runningActionsCount == 0) {
	obj1422_onTap_actionGroup1();
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
		setTimeout(hide_1587(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1422_onTap_runningActionsCount = window.obj1422_onTap_runningActionsCount - 1;
if (window.obj1422_onTap_runningActionsCount == 0) {
	obj1422_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1422 
hide_1424();
function hide_1424() {
	var element = "#obj1422";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1422_onTap_runningActionsCount = obj1422_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1422_onTap_runningActionsCount = window.obj1422_onTap_runningActionsCount - 1;
if (window.obj1422_onTap_runningActionsCount == 0) {
	obj1422_onTap_actionGroup1();
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
		setTimeout(hide_1424(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1422_onTap_runningActionsCount = window.obj1422_onTap_runningActionsCount - 1;
if (window.obj1422_onTap_runningActionsCount == 0) {
	obj1422_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1422_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1422_onTap_activeActionGroupIndex = -1;
		$("#obj1422").trigger("obj1422_onTap_ended");
		
		return;
	}
	window.obj1422_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1422 
hide_1569();
function hide_1569() {
	var element = "#obj1422";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1422_onTap_runningActionsCount = obj1422_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1422_onTap_runningActionsCount = window.obj1422_onTap_runningActionsCount - 1;
if (window.obj1422_onTap_runningActionsCount == 0) {
	obj1422_onTap_actionGroup2();
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
		setTimeout(hide_1569(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1422_onTap_runningActionsCount = window.obj1422_onTap_runningActionsCount - 1;
if (window.obj1422_onTap_runningActionsCount == 0) {
	obj1422_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

















//	action: run action list container
//	target: obj1482 
runActionList_1489();
function runActionList_1489() {
	window.obj1422_onTap_runningActionsCount = obj1422_onTap_runningActionsCount + 1;
	$("#obj1482").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1422_onTap_runningActionsCount = window.obj1422_onTap_runningActionsCount - 1;
if (window.obj1422_onTap_runningActionsCount == 0) {
	obj1422_onTap_actionGroup2();
}		
	}, 1);
}



};
obj1422_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1422_onTap_activeActionGroupIndex = -1;
		$("#obj1422").trigger("obj1422_onTap_ended");
		
		return;
	}
	window.obj1422_onTap_activeActionGroupIndex = 2;
	





















};
obj1435_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1435_onTap_activeActionGroupIndex = -1;
		$("#obj1435").trigger("obj1435_onTap_ended");
		
		return;
	}
	window.obj1435_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1561 
hide_1437();
function hide_1437() {
	var element = "#obj1561";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1435_onTap_runningActionsCount = obj1435_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1435_onTap_runningActionsCount = window.obj1435_onTap_runningActionsCount - 1;
if (window.obj1435_onTap_runningActionsCount == 0) {
	obj1435_onTap_actionGroup1();
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
		setTimeout(hide_1437(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1435_onTap_runningActionsCount = window.obj1435_onTap_runningActionsCount - 1;
if (window.obj1435_onTap_runningActionsCount == 0) {
	obj1435_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1468 
show_1438();
function show_1438() {
	var element = "#obj1468";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1435_onTap_runningActionsCount = obj1435_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1435_onTap_runningActionsCount = window.obj1435_onTap_runningActionsCount - 1;
if (window.obj1435_onTap_runningActionsCount == 0) {
	obj1435_onTap_actionGroup1();
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
		window.obj1435_onTap_runningActionsCount = window.obj1435_onTap_runningActionsCount - 1;
if (window.obj1435_onTap_runningActionsCount == 0) {
	obj1435_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1435_onTap_runningActionsCount = window.obj1435_onTap_runningActionsCount - 1;
if (window.obj1435_onTap_runningActionsCount == 0) {
	obj1435_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1435_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1435_onTap_activeActionGroupIndex = -1;
		$("#obj1435").trigger("obj1435_onTap_ended");
		
		return;
	}
	window.obj1435_onTap_activeActionGroupIndex = 1;
	





















};
obj1440_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1440_onTap_activeActionGroupIndex = -1;
		$("#obj1440").trigger("obj1440_onTap_ended");
		
		return;
	}
	window.obj1440_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1479 
hide_1579();
function hide_1579() {
	var element = "#obj1479";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1440_onTap_runningActionsCount = obj1440_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
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
		setTimeout(hide_1579(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1479 
hide_1444();
function hide_1444() {
	var element = "#obj1479";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1440_onTap_runningActionsCount = obj1440_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
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
		setTimeout(hide_1444(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1418 
show_1539();
function show_1539() {
	var element = "#obj1418";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1440_onTap_runningActionsCount = obj1440_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
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
		window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1561 
show_1576();
function show_1576() {
	var element = "#obj1561";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1440_onTap_runningActionsCount = obj1440_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
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
		window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj1418 
move_1442();
function move_1442() {
	window.obj1440_onTap_runningActionsCount = obj1440_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 377;
	var moveY = 399;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
}
		}, 1);
	});
}













//	action: Run JavaScript
runjs_1443();
function runjs_1443() {
	window.obj1440_onTap_runningActionsCount = obj1440_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1435"));
	setTimeout(function() {
		window.obj1440_onTap_runningActionsCount = window.obj1440_onTap_runningActionsCount - 1;
if (window.obj1440_onTap_runningActionsCount == 0) {
	obj1440_onTap_actionGroup1();
}
	}, 1);
}






};
obj1440_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1440_onTap_activeActionGroupIndex = -1;
		$("#obj1440").trigger("obj1440_onTap_ended");
		
		return;
	}
	window.obj1440_onTap_activeActionGroupIndex = 1;
	





















};
obj1440_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1440_onShow_activeActionGroupIndex = -1;
		$("#obj1440").trigger("obj1440_onShow_ended");
		
		return;
	}
	window.obj1440_onShow_activeActionGroupIndex = 0;
	

//	action: show 
//	target: obj1479 
show_1575();
function show_1575() {
	var element = "#obj1479";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1440_onShow_runningActionsCount = obj1440_onShow_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1440_onShow_runningActionsCount = window.obj1440_onShow_runningActionsCount - 1;
if (window.obj1440_onShow_runningActionsCount == 0) {
	obj1440_onShow_actionGroup1();
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
		window.obj1440_onShow_runningActionsCount = window.obj1440_onShow_runningActionsCount - 1;
if (window.obj1440_onShow_runningActionsCount == 0) {
	obj1440_onShow_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1440_onShow_runningActionsCount = window.obj1440_onShow_runningActionsCount - 1;
if (window.obj1440_onShow_runningActionsCount == 0) {
	obj1440_onShow_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj1479 
move_1574();
function move_1574() {
	window.obj1440_onShow_runningActionsCount = obj1440_onShow_runningActionsCount + 1;

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
	var targetObject = $("#obj1479");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=217";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1440_onShow_runningActionsCount = window.obj1440_onShow_runningActionsCount - 1;
if (window.obj1440_onShow_runningActionsCount == 0) {
	obj1440_onShow_actionGroup1();
}
		}, 1);
	});
}



















};
obj1440_onShow_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1440_onShow_activeActionGroupIndex = -1;
		$("#obj1440").trigger("obj1440_onShow_ended");
		
		return;
	}
	window.obj1440_onShow_activeActionGroupIndex = 1;
	





















};
obj1452_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1452_onTap_activeActionGroupIndex = -1;
		$("#obj1452").trigger("obj1452_onTap_ended");
		
		return;
	}
	window.obj1452_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1479 
hide_1454();
function hide_1454() {
	var element = "#obj1479";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1452_onTap_runningActionsCount = obj1452_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1452_onTap_runningActionsCount = window.obj1452_onTap_runningActionsCount - 1;
if (window.obj1452_onTap_runningActionsCount == 0) {
	obj1452_onTap_actionGroup1();
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
		setTimeout(hide_1454(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1452_onTap_runningActionsCount = window.obj1452_onTap_runningActionsCount - 1;
if (window.obj1452_onTap_runningActionsCount == 0) {
	obj1452_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1465 
show_1455();
function show_1455() {
	var element = "#obj1465";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1452_onTap_runningActionsCount = obj1452_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1452_onTap_runningActionsCount = window.obj1452_onTap_runningActionsCount - 1;
if (window.obj1452_onTap_runningActionsCount == 0) {
	obj1452_onTap_actionGroup1();
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
		window.obj1452_onTap_runningActionsCount = window.obj1452_onTap_runningActionsCount - 1;
if (window.obj1452_onTap_runningActionsCount == 0) {
	obj1452_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1452_onTap_runningActionsCount = window.obj1452_onTap_runningActionsCount - 1;
if (window.obj1452_onTap_runningActionsCount == 0) {
	obj1452_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1452_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1452_onTap_activeActionGroupIndex = -1;
		$("#obj1452").trigger("obj1452_onTap_ended");
		
		return;
	}
	window.obj1452_onTap_activeActionGroupIndex = 1;
	





















};
obj1458_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1458_onTap_activeActionGroupIndex = -1;
		$("#obj1458").trigger("obj1458_onTap_ended");
		
		return;
	}
	window.obj1458_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1479 
hide_1462();
function hide_1462() {
	var element = "#obj1479";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1458_onTap_runningActionsCount = obj1458_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
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
		setTimeout(hide_1462(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1563 
hide_1572();
function hide_1572() {
	var element = "#obj1563";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1458_onTap_runningActionsCount = obj1458_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
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
		setTimeout(hide_1572(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1458 
hide_1461();
function hide_1461() {
	var element = "#obj1458";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1458_onTap_runningActionsCount = obj1458_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
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
		setTimeout(hide_1461(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1562 
show_1567();
function show_1567() {
	var element = "#obj1562";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1458_onTap_runningActionsCount = obj1458_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
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
		window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1416 
show_1556();
function show_1556() {
	var element = "#obj1416";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1458_onTap_runningActionsCount = obj1458_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
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
		window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1416 
show_1551();
function show_1551() {
	var element = "#obj1416";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1458_onTap_runningActionsCount = obj1458_onTap_runningActionsCount + 1;

	var animationType = "bounce";
	var animationDurationMs = 3000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
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
		window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(3000, function() {
	// 		setTimeout(function() {
	// 			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj1418 
move_1460();
function move_1460() {
	window.obj1458_onTap_runningActionsCount = obj1458_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 451;
	var moveY = 187;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj1458_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1458_onTap_activeActionGroupIndex = -1;
		$("#obj1458").trigger("obj1458_onTap_ended");
		
		return;
	}
	window.obj1458_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_1568();
function wait_1568() {
	window.obj1458_onTap_runningActionsCount = obj1458_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup2();
}
	}, 1000);
}












};
obj1458_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1458_onTap_activeActionGroupIndex = -1;
		$("#obj1458").trigger("obj1458_onTap_ended");
		
		return;
	}
	window.obj1458_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	target: obj1475 
show_1463();
function show_1463() {
	var element = "#obj1475";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1458_onTap_runningActionsCount = obj1458_onTap_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup3();
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
		window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup3();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1458_onTap_runningActionsCount = window.obj1458_onTap_runningActionsCount - 1;
if (window.obj1458_onTap_runningActionsCount == 0) {
	obj1458_onTap_actionGroup3();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1458_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1458_onTap_activeActionGroupIndex = -1;
		$("#obj1458").trigger("obj1458_onTap_ended");
		
		return;
	}
	window.obj1458_onTap_activeActionGroupIndex = 3;
	





















};
obj1465_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1465_onTap_activeActionGroupIndex = -1;
		$("#obj1465").trigger("obj1465_onTap_ended");
		
		return;
	}
	window.obj1465_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page2
goToPage_1467();
function goToPage_1467() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../2/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(2))},200);
	}
}





















};
obj1465_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1465_onTap_activeActionGroupIndex = -1;
		$("#obj1465").trigger("obj1465_onTap_ended");
		
		return;
	}
	window.obj1465_onTap_activeActionGroupIndex = 1;
	





















};
obj1468_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1468_onTap_activeActionGroupIndex = -1;
		$("#obj1468").trigger("obj1468_onTap_ended");
		
		return;
	}
	window.obj1468_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1468 
hide_1471();
function hide_1471() {
	var element = "#obj1468";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1468_onTap_runningActionsCount = obj1468_onTap_runningActionsCount + 1;
	
	var animationType = "zoomOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1468_onTap_runningActionsCount = window.obj1468_onTap_runningActionsCount - 1;
if (window.obj1468_onTap_runningActionsCount == 0) {
	obj1468_onTap_actionGroup1();
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
		setTimeout(hide_1471(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1468_onTap_runningActionsCount = window.obj1468_onTap_runningActionsCount - 1;
if (window.obj1468_onTap_runningActionsCount == 0) {
	obj1468_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: hide
//	target: obj1440 
hide_1472();
function hide_1472() {
	var element = "#obj1440";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1468_onTap_runningActionsCount = obj1468_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1468_onTap_runningActionsCount = window.obj1468_onTap_runningActionsCount - 1;
if (window.obj1468_onTap_runningActionsCount == 0) {
	obj1468_onTap_actionGroup1();
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
		setTimeout(hide_1472(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1468_onTap_runningActionsCount = window.obj1468_onTap_runningActionsCount - 1;
if (window.obj1468_onTap_runningActionsCount == 0) {
	obj1468_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}

//	action: move
//	target: obj1418 
move_1470();
function move_1470() {
	window.obj1468_onTap_runningActionsCount = obj1468_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 519;
	var moveY = 261;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1468_onTap_runningActionsCount = window.obj1468_onTap_runningActionsCount - 1;
if (window.obj1468_onTap_runningActionsCount == 0) {
	obj1468_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1479 
move_1473();
function move_1473() {
	window.obj1468_onTap_runningActionsCount = obj1468_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1479");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 615;
	var moveY = 235;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1468_onTap_runningActionsCount = window.obj1468_onTap_runningActionsCount - 1;
if (window.obj1468_onTap_runningActionsCount == 0) {
	obj1468_onTap_actionGroup1();
}
		}, 1);
	});
}



















};
obj1468_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1468_onTap_activeActionGroupIndex = -1;
		$("#obj1468").trigger("obj1468_onTap_ended");
		
		return;
	}
	window.obj1468_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	target: obj1479 
show_1474();
function show_1474() {
	var element = "#obj1479";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1468_onTap_runningActionsCount = obj1468_onTap_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1468_onTap_runningActionsCount = window.obj1468_onTap_runningActionsCount - 1;
if (window.obj1468_onTap_runningActionsCount == 0) {
	obj1468_onTap_actionGroup2();
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
		window.obj1468_onTap_runningActionsCount = window.obj1468_onTap_runningActionsCount - 1;
if (window.obj1468_onTap_runningActionsCount == 0) {
	obj1468_onTap_actionGroup2();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1468_onTap_runningActionsCount = window.obj1468_onTap_runningActionsCount - 1;
if (window.obj1468_onTap_runningActionsCount == 0) {
	obj1468_onTap_actionGroup2();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1468_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1468_onTap_activeActionGroupIndex = -1;
		$("#obj1468").trigger("obj1468_onTap_ended");
		
		return;
	}
	window.obj1468_onTap_activeActionGroupIndex = 2;
	





















};
obj1482_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	target: obj1416 
hide_1571();
function hide_1571() {
	var element = "#obj1416";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup1();
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
		setTimeout(hide_1571(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1563 
show_1570();
function show_1570() {
	var element = "#obj1563";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;

	var animationType = "bounce";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup1();
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
		window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup1();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup1();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj1418 
move_1484();
function move_1484() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 142;
	var moveY = 164;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup1();
}
		}, 1);
	});
}



















};
obj1482_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 1;
	








//	action: wait
wait_1491();
function wait_1491() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup2();
}
	}, 100);
}












};
obj1482_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj1418 
move_1485();
function move_1485() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 213;
	var moveY = 257;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup3();
}
		}, 1);
	});
}



















};
obj1482_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 3;
	








//	action: wait
wait_1493();
function wait_1493() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup4();
}
	}, 100);
}












};
obj1482_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1418 
move_1486();
function move_1486() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 290;
	var moveY = 187;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup5();
}
		}, 1);
	});
}



















};
obj1482_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 5;
	








//	action: wait
wait_1494();
function wait_1494() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup6();
}
	}, 100);
}












};
obj1482_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 6;
	


//	action: move
//	target: obj1418 
move_1487();
function move_1487() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 365;
	var moveY = 89;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup7();
}
		}, 1);
	});
}



















};
obj1482_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 7;
	








//	action: wait
wait_1492();
function wait_1492() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup8();
}
	}, 100);
}












};
obj1482_SCEventRun_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 8;
	


//	action: move
//	target: obj1418 
move_1488();
function move_1488() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 451;
	var moveY = 187;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup9();
}
		}, 1);
	});
}



















};
obj1482_SCEventRun_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 9;
	








//	action: wait
wait_1522();
function wait_1522() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup10();
}
	}, 100);
}












};
obj1482_SCEventRun_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 10;
	

//	action: show 
//	target: obj1458 
show_1524();
function show_1524() {
	var element = "#obj1458";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup11();
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
		window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup11();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup11();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1479 
show_1525();
function show_1525() {
	var element = "#obj1479";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup11();
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
		window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup11();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup11();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: move
//	target: obj1418 
move_1523();
function move_1523() {
	window.obj1482_SCEventRun_runningActionsCount = obj1482_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 59;
	var moveY = 70;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1482_SCEventRun_runningActionsCount = window.obj1482_SCEventRun_runningActionsCount - 1;
if (window.obj1482_SCEventRun_runningActionsCount == 0) {
	obj1482_SCEventRun_actionGroup11();
}
		}, 1);
	});
}



















};
obj1482_SCEventRun_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1482_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1482").trigger("obj1482_SCEventRun_ended");
		
		return;
	}
	window.obj1482_SCEventRun_activeActionGroupIndex = 11;
	





















};
obj1526_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1526_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1526").trigger("obj1526_SCEventRun_ended");
		
		return;
	}
	window.obj1526_SCEventRun_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1418 
move_1529();
function move_1529() {
	window.obj1526_SCEventRun_runningActionsCount = obj1526_SCEventRun_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 518;
	var moveY = 252;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup1();
}
		}, 1);
	});
}



















};
obj1526_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1526_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1526").trigger("obj1526_SCEventRun_ended");
		
		return;
	}
	window.obj1526_SCEventRun_activeActionGroupIndex = 1;
	








//	action: wait
wait_1530();
function wait_1530() {
	window.obj1526_SCEventRun_runningActionsCount = obj1526_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup2();
}
	}, 200);
}












};
obj1526_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1526_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1526").trigger("obj1526_SCEventRun_ended");
		
		return;
	}
	window.obj1526_SCEventRun_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj1418 
move_1531();
function move_1531() {
	window.obj1526_SCEventRun_runningActionsCount = obj1526_SCEventRun_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 452;
	var moveY = 320;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup3();
}
		}, 1);
	});
}



















};
obj1526_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1526_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1526").trigger("obj1526_SCEventRun_ended");
		
		return;
	}
	window.obj1526_SCEventRun_activeActionGroupIndex = 3;
	








//	action: wait
wait_1532();
function wait_1532() {
	window.obj1526_SCEventRun_runningActionsCount = obj1526_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup4();
}
	}, 200);
}












};
obj1526_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1526_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1526").trigger("obj1526_SCEventRun_ended");
		
		return;
	}
	window.obj1526_SCEventRun_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1418 
move_1533();
function move_1533() {
	window.obj1526_SCEventRun_runningActionsCount = obj1526_SCEventRun_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj1418");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 377;
	var moveY = 393;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 500, easing, function() {
		setTimeout(function() {
			window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup5();
}
		}, 1);
	});
}



















};
obj1526_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1526_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1526").trigger("obj1526_SCEventRun_ended");
		
		return;
	}
	window.obj1526_SCEventRun_activeActionGroupIndex = 5;
	

//	action: hide
//	target: obj1418 
hide_1534();
function hide_1534() {
	var element = "#obj1418";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1526_SCEventRun_runningActionsCount = obj1526_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup6();
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
		setTimeout(hide_1534(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup6();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}
//	action: show 
//	target: obj1416 
show_1546();
function show_1546() {
	var element = "#obj1416";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1526_SCEventRun_runningActionsCount = obj1526_SCEventRun_runningActionsCount + 1;

	var animationType = "fadeIn";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup6();
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
		window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup6();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(1000, function() {
	// 		setTimeout(function() {
	// 			window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup6();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}
//	action: show 
//	target: obj1440 
show_1537();
function show_1537() {
	var element = "#obj1440";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	window.obj1526_SCEventRun_runningActionsCount = obj1526_SCEventRun_runningActionsCount + 1;

	var animationType = "zoomIn";
	var animationDurationMs = 500;
	var animationIterationCount = "1";
	if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "block");
			window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup6();
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
		window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup6();
}
		$(element).trigger('SCEventShow');
	}, animationDurationMs);
	// node.classList.add('animated', animationType);
	$(element).addClass("animated " + animationType);
	$(element).css("display", "block");

	// $(element).fadeIn(500, function() {
	// 		setTimeout(function() {
	// 			window.obj1526_SCEventRun_runningActionsCount = window.obj1526_SCEventRun_runningActionsCount - 1;
if (window.obj1526_SCEventRun_runningActionsCount == 0) {
	obj1526_SCEventRun_actionGroup6();
}
	// 			$(element).trigger('SCEventShow');
	// 		}, 1);
	// 	}
	// );
}



















};
obj1526_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1526_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1526").trigger("obj1526_SCEventRun_ended");
		
		return;
	}
	window.obj1526_SCEventRun_activeActionGroupIndex = 6;
	





















};
obj1582_onShow_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1582_onShow_activeActionGroupIndex = -1;
		$("#obj1582").trigger("obj1582_onShow_ended");
		
		return;
	}
	window.obj1582_onShow_activeActionGroupIndex = 0;
	








//	action: wait
wait_1585();
function wait_1585() {
	window.obj1582_onShow_runningActionsCount = obj1582_onShow_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1582_onShow_runningActionsCount = window.obj1582_onShow_runningActionsCount - 1;
if (window.obj1582_onShow_runningActionsCount == 0) {
	obj1582_onShow_actionGroup1();
}
	}, 3000);
}












};
obj1582_onShow_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1582_onShow_activeActionGroupIndex = -1;
		$("#obj1582").trigger("obj1582_onShow_ended");
		
		return;
	}
	window.obj1582_onShow_activeActionGroupIndex = 1;
	

//	action: hide
//	target: obj1582 
hide_1586();
function hide_1586() {
	var element = "#obj1582";
	$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1582_onShow_runningActionsCount = obj1582_onShow_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(element).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(element).css("display", "none");
			window.obj1582_onShow_runningActionsCount = window.obj1582_onShow_runningActionsCount - 1;
if (window.obj1582_onShow_runningActionsCount == 0) {
	obj1582_onShow_actionGroup2();
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
		setTimeout(hide_1586(), 100);
		return;
	}
	setTimeout(function() {
		$(element).css("display", "none");
		window.obj1582_onShow_runningActionsCount = window.obj1582_onShow_runningActionsCount - 1;
if (window.obj1582_onShow_runningActionsCount == 0) {
	obj1582_onShow_actionGroup2();
}
	}, animationDurationMs);
	$(element).addClass("animated " + animationType);
	// node.classList.add('animated', animationType)
}




















};
obj1582_onShow_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1582_onShow_activeActionGroupIndex = -1;
		$("#obj1582").trigger("obj1582_onShow_ended");
		
		return;
	}
	window.obj1582_onShow_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























/*
 *
 *   obj1416: Event Show
 *
 */
 
$("#obj1416").bind('SCEventShow', function(event) {
	if (window.obj1416_onShow_activeActionGroupIndex != -1) return;
var obj1416_onShow_runningActionsCount = 0;
var obj1416_onShow_loopCount = 0;
obj1416_onShow_actionGroup0();
});







/*
 *
 *   obj1552: Event Show
 *
 */
 
$("#obj1552").bind('SCEventShow', function(event) {
	if (window.obj1552_onShow_activeActionGroupIndex != -1) return;
var obj1552_onShow_runningActionsCount = 0;
var obj1552_onShow_loopCount = 0;
obj1552_onShow_actionGroup0();
});












/*
 *
 *   obj1518: Event Touch Down
 *
 */
 
$("#obj1518").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1518_onTap_activeActionGroupIndex != -1) return;
var obj1518_onTap_runningActionsCount = 0;
var obj1518_onTap_loopCount = 0;
obj1518_onTap_actionGroup0();
});







/*
 *
 *   obj1512: Event Touch Down
 *
 */
 
$("#obj1512").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1512_onTap_activeActionGroupIndex != -1) return;
var obj1512_onTap_runningActionsCount = 0;
var obj1512_onTap_loopCount = 0;
obj1512_onTap_actionGroup0();
});







/*
 *
 *   obj1506: Event Touch Down
 *
 */
 
$("#obj1506").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1506_onTap_activeActionGroupIndex != -1) return;
var obj1506_onTap_runningActionsCount = 0;
var obj1506_onTap_loopCount = 0;
obj1506_onTap_actionGroup0();
});







/*
 *
 *   obj1502: Event Touch Down
 *
 */
 
$("#obj1502").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1502_onTap_activeActionGroupIndex != -1) return;
var obj1502_onTap_runningActionsCount = 0;
var obj1502_onTap_loopCount = 0;
obj1502_onTap_actionGroup0();
});







/*
 *
 *   obj1497: Event Touch Down
 *
 */
 
$("#obj1497").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1497_onTap_activeActionGroupIndex != -1) return;
var obj1497_onTap_runningActionsCount = 0;
var obj1497_onTap_loopCount = 0;
obj1497_onTap_actionGroup0();
});







/*
 *
 *   obj1426: Event Touch Down
 *
 */
 
$("#obj1426").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1426_onTap_activeActionGroupIndex != -1) return;
var obj1426_onTap_runningActionsCount = 0;
var obj1426_onTap_loopCount = 0;
obj1426_onTap_actionGroup0();
});







/*
 *
 *   obj1422: Event Touch Down
 *
 */
 
$("#obj1422").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1422_onTap_activeActionGroupIndex != -1) return;
var obj1422_onTap_runningActionsCount = 0;
var obj1422_onTap_loopCount = 0;
obj1422_onTap_actionGroup0();
});







/*
 *
 *   obj1435: Event Touch Down
 *
 */
 
$("#obj1435").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1435_onTap_activeActionGroupIndex != -1) return;
var obj1435_onTap_runningActionsCount = 0;
var obj1435_onTap_loopCount = 0;
obj1435_onTap_actionGroup0();
});







/*
 *
 *   obj1440: Event Touch Down
 *
 */
 
$("#obj1440").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1440_onTap_activeActionGroupIndex != -1) return;
var obj1440_onTap_runningActionsCount = 0;
var obj1440_onTap_loopCount = 0;
obj1440_onTap_actionGroup0();
});

/*
 *
 *   obj1440: Event Show
 *
 */
 
$("#obj1440").bind('SCEventShow', function(event) {
	if (window.obj1440_onShow_activeActionGroupIndex != -1) return;
var obj1440_onShow_runningActionsCount = 0;
var obj1440_onShow_loopCount = 0;
obj1440_onShow_actionGroup0();
});





/*
 *
 *   obj1452: Event Touch Down
 *
 */
 
$("#obj1452").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1452_onTap_activeActionGroupIndex != -1) return;
var obj1452_onTap_runningActionsCount = 0;
var obj1452_onTap_loopCount = 0;
obj1452_onTap_actionGroup0();
});







/*
 *
 *   obj1458: Event Touch Down
 *
 */
 
$("#obj1458").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1458_onTap_activeActionGroupIndex != -1) return;
var obj1458_onTap_runningActionsCount = 0;
var obj1458_onTap_loopCount = 0;
obj1458_onTap_actionGroup0();
});







/*
 *
 *   obj1465: Event Touch Down
 *
 */
 
$("#obj1465").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1465_onTap_activeActionGroupIndex != -1) return;
var obj1465_onTap_runningActionsCount = 0;
var obj1465_onTap_loopCount = 0;
obj1465_onTap_actionGroup0();
});







/*
 *
 *   obj1468: Event Touch Down
 *
 */
 
$("#obj1468").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1468_onTap_activeActionGroupIndex != -1) return;
var obj1468_onTap_runningActionsCount = 0;
var obj1468_onTap_loopCount = 0;
obj1468_onTap_actionGroup0();
});






































/*
 *
 *   obj1482: Event SCEventRun
 *
 */
$("#obj1482").bind("SCEventRun", function(event) {
	if (window.obj1482_SCEventRun_activeActionGroupIndex != -1) return;
var obj1482_SCEventRun_runningActionsCount = 0;
var obj1482_SCEventRun_loopCount = 0;
obj1482_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1526: Event SCEventRun
 *
 */
$("#obj1526").bind("SCEventRun", function(event) {
	if (window.obj1526_SCEventRun_activeActionGroupIndex != -1) return;
var obj1526_SCEventRun_runningActionsCount = 0;
var obj1526_SCEventRun_loopCount = 0;
obj1526_SCEventRun_actionGroup0();
});





/*
 *
 *   obj1582: Event Show
 *
 */
 
$("#obj1582").bind('SCEventShow', function(event) {
	if (window.obj1582_onShow_activeActionGroupIndex != -1) return;
var obj1582_onShow_runningActionsCount = 0;
var obj1582_onShow_loopCount = 0;
obj1582_onShow_actionGroup0();
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
	
$("#obj1408").trigger('SCEventShow');
$("#obj1563").trigger('SCEventShow');
$("#obj1416").trigger('SCEventShow');
$("#obj1418").trigger('SCEventShow');
$("#obj1518").trigger('SCEventShow');
$("#obj1512").trigger('SCEventShow');
$("#obj1506").trigger('SCEventShow');
$("#obj1502").trigger('SCEventShow');
$("#obj1497").trigger('SCEventShow');
$("#obj1426").trigger('SCEventShow');
$("#obj1422").trigger('SCEventShow');
$("#obj1435").trigger('SCEventShow');
$("#obj1452").trigger('SCEventShow');
$("#obj1582").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});
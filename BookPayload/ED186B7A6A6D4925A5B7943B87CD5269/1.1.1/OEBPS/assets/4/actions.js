pubcoder.projectID = "21284B68F09E4548AC37578FBED7284B";
pubcoder.project.id = "21284B68F09E4548AC37578FBED7284B";
pubcoder.project.title = "Lisa Townsend\'s Project";
pubcoder.page.id = 1729;
pubcoder.page.title = "4";
pubcoder.page.number = 4;
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
var obj1735_onTap_activeActionGroupIndex = -1;
var obj1735_onTap_runningActionsCount = 0;
var obj1735_onTap_loopCount = 0;
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
		
obj1735_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1735_onTap_activeActionGroupIndex = -1;
		$("#obj1735").trigger("obj1735_onTap_ended");
		
		return;
	}
	window.obj1735_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
//	target: page2
goToPage_1740();
function goToPage_1740() {
	var isPreview = false;
	if (isPreview) {
		$(location).attr('href', '../2/page.xhtml');
	} else {
		setTimeout(function(){ parent.SCHtmlController.goToPageViewer(parent.SCHtmlController.getPageForView(2))},200);
	}
}





















};
obj1735_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1735_onTap_activeActionGroupIndex = -1;
		$("#obj1735").trigger("obj1735_onTap_ended");
		
		return;
	}
	window.obj1735_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		










/*
 *
 *   obj1735: Event Touch Down
 *
 */
 
$("#obj1735").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1735_onTap_activeActionGroupIndex != -1) return;
var obj1735_onTap_runningActionsCount = 0;
var obj1735_onTap_loopCount = 0;
obj1735_onTap_actionGroup0();
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
	
$("#obj1741").trigger('SCEventShow');
$("#obj1735").trigger('SCEventShow');
	$(window).trigger(PubCoder.Events.PageReady);
	
});
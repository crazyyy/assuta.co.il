/**
* vspiritsCustomNotes
*  
*/

// vSpirits v5.0
var vspiritsVersion = "5.0";
var vspirits_chat_client = "sa28594-newdesign-vsarussian";
var usercontrol = true;
var proactiveMinTimer = 12000; 
var exitMinTimer = 3000;
var triggerexit = true;
var triggertimer = true;
var triggerbutton = true;
var blockmobile = false;
var triggerexitdialogue = false;
var exitdialoguestring = "Консультант сайта ожидает, чтобы предоставить вам дополнительную информацию";
var buttonside = "left";
var buttonindent = 10;
var buttonbottom = 10;
var windowside = "left";
var windowindent = 0;
var windowbottom = 15;
var startintro = "";
var buttondesign="";

//v50-usercontrol-start

buttondesign='<table class="vspiritsbutton"  cellpadding="0" cellspacing="0" style="BORDER-COLLAPSE:collapse;" dir="ltr"><tr><td valign="center" style="background: url(//www.virtualspirits.com/vsa/images/v50-button-green.png) no-repeat transparent !important; width:214px; height: 55px; padding-left:1px;"><table cellpadding="0" cellspacing="0" dir="ltr"><tr><td class="vspiritsbutton" style="background: transparent !important;"><img height="50" src="//www.virtualspirits.com/vsa/images/agent_woman3.png" style="border: 0px solid #aaaaaa;height:50px;" alt="virtualagent"></td><td style="background: transparent !important;padding-left:5px;"><span style="font-family: Arial;font-size: 16px;font-weight: bold;display:inline-block;text-decoration: none;font-style: normal; color:#000000;  text-shadow: 0px 2px 2px rgba(0,0,0,0.2);">Поболтай с нами</span><br><span style="padding-top:5px; font-family: Arial;font-size: 12px;font-weight: bold;display:inline-block;text-decoration: none;font-style: normal;color: #333333;">Нужна помощь? кликните сюда.</span></td></tr></table></td></tr></table>';
proactiveMinTimer = 8000;
exitMinTimer = 3000;
triggerexit = true;
triggertimer = true;
triggerbutton = true;
triggerexitdialogue = false;
exitdialoguestring = 'A site representative can offer you support';
buttonside = 'left';
buttonindent = 10;
buttonbottom = 10;
windowside = 'left';
windowindent = 30;
windowbottom = 10;
//v50-usercontrol-end

try {
        var vscss = document.createElement('link');
        vscss.rel = 'stylesheet';
        vscss.type = 'text/css';
        vscss.href = '//www.virtualspirits.com/vsa/chat-v5.css';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(vscss, s);
} catch (e) {
// nothing
alert(e);
}	

/**
* COMMON DHTML FUNCTIONS
* These are handy functions I use all the time.
*
* By Seth Banks (webmaster at subimage dot com)
* http://www.subimage.com/
*
* Up to date code can be found at http://www.subimage.com/dhtml/
*
* This code is free for you to use anywhere, just keep this comment block.
*/

/**
* X-browser event handler attachment and detachment
* TH: Switched first true to false per http://www.onlinetools.org/articles/unobtrusivejavascript/chapter4.html
*
* @argument obj - the object to attach event to
* @argument evType - name of the event - DONT ADD "on", pass only "mouseover", etc
* @argument fn - function to call
*/
function addEvent(obj, evType, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evType, fn, false);
        return true;
    } else if (obj.attachEvent) {
        var r = obj.attachEvent("on" + evType, fn);
        return r;
    } else {
        return false;
    }
}

/**
* Code below taken from - http://www.evolt.org/article/document_body_doctype_switching_and_more/17/30655/
*
* Modified 4/22/04 to work with Opera/Moz (by webmaster at subimage dot com)
*
* Gets the full width/height because it's different for most browsers.
*/
function getViewportHeight() {
    if (window.innerHeight != window.undefined) return window.innerHeight;
    if (document.compatMode == 'CSS1Compat') return document.documentElement.clientHeight;
    if (document.body) return document.body.clientHeight;

    return window.undefined;
}
function getViewportWidth() {
    var offset = 17;
    var width = null;
    if (window.innerWidth != window.undefined) return window.innerWidth;
    if (document.compatMode == 'CSS1Compat') return document.documentElement.clientWidth;
    if (document.body) return document.body.clientWidth;
}

/**
* Gets the real scroll top
*/
function getScrollTop() {
    if (self.pageYOffset) // all except Explorer
    {
        return self.pageYOffset;
    }
    else if (document.documentElement && document.documentElement.scrollTop)
    // Explorer 6 Strict
    {
        return document.documentElement.scrollTop;
    }
    else if (document.body) // all other Explorers
    {
        return document.body.scrollTop;
    }
}
function getScrollLeft() {
    if (self.pageXOffset) // all except Explorer
    {
        return self.pageXOffset;
    }
    else if (document.documentElement && document.documentElement.scrollLeft)
    // Explorer 6 Strict
    {
        return document.documentElement.scrollLeft;
    }
    else if (document.body) // all other Explorers
    {
        return document.body.scrollLeft;
    }
}

/**
* SUBMODAL v1.6
* Used for displaying DHTML only popups instead of using buggy modal windows.
*
* By Subimage LLC
* http://www.subimage.com
*
* Contributions by:
* 	Eric Angel - tab index code
* 	Scott - hiding/showing selects for IE users
*	Todd Huss - inserting modal dynamically and anchor classes
*
* Up to date code can be found at http://submodal.googlecode.com
*/

// Popup code
var gPopupMask = null;
var gPopupContainer = null;
var gReturnFunc;
var gPopupIsShown = false;
var gDefaultPage = "/loading.html";
var gHideSelects = false;
var gReturnVal = null;

var gTabIndexes = new Array();
// Pre-defined list of tags we want to disable/enable tabbing into
var gTabbableTags = new Array("A", "BUTTON", "TEXTAREA", "INPUT", "IFRAME");

// If using Mozilla or Firefox, use Tab-key trap.
if (!document.all) {
    document.onkeypress = keyDownHandler;
}

/* virtual spirits */
var agentstatus;
var activepage = false;
var activeexit = false;
var activetimer = false;
var activebutton = false;
var mobileagent = false;
var title_param;
var referrer_param;
var url_param;
var timeInterval;
var loadTime = new Date();
var initTime;
var exitTime;
var chatTime;
var closeTime;
var posX = 0;
var posY = 200;
var browser;

function initAgent() {

    var x = readCookie('vspirits_status');
    if (x) {
        // a cookie is written if the user has been handled
        // the cookie is removed if the user has closed the chat screen and is pending
        agentstatus = x;
    } else {
        agentstatus = "empty";
    }

    if (agentstatus == "-1") {
        agentstatus = "empty";
    }

    getchatparam();
    var tempref = getdomain(referrer_param);
    var tempurl = getdomain(url_param);

    if (agentstatus == "empty") {
        if (tempref == "") {
            createCookie("vspirits_status", "prospect", 1); // write the cookie
            agentstatus = "prospect";
        } else {
            if (tempurl == tempref) {
                createCookie("vspirits_status", "prospect", 1); // write the cookie
                agentstatus = "prospect";
            } else {
                createCookie("vspirits_status", "prospect", 1); // write the cookie
                agentstatus = "prospect";
            }
        }
    }

    if (agentstatus == "empty") {
        // special demo pages
        if (tempurl.indexOf("virtualspirits.com") != -1) {
            agentstatus = "prospect";
            activepage = true;
        }
        if (tempurl.indexOf("localhost") != -1) {
            agentstatus = "prospect";
            activepage = true;
        }
    }

   if (usercontrol) { filterpages(); }
   filtermobiles();
   setactive();

    if (activeexit || activetimer || activebutton) {
        initPopup();
        // absolute timer
        initTime = new Date();
        timeInterval = initTime - loadTime; // the time since start loading till timer is started
        if (timeInterval > proactiveMinTimer) { proactiveMinTimer = 100; }
        else { proactiveMinTimer = proactiveMinTimer - timeInterval; }
        if (activeexit) { initExit(); }
        if (activebutton) { showButton(); }
        if (activetimer) { setTimeout('proactivechat()', proactiveMinTimer); }
    }
}

function setactive() {
    if (activepage) {
        if (agentstatus == "prospect") {
            activeexit = triggerexit;
            activetimer = triggertimer;
            activebutton = triggerbutton; 
        }
        if (agentstatus == "pending") {
            activeexit = false;
            activetimer = false;
            activebutton = true;
        }
        if (agentstatus == "inprocess") {
            activeexit = false; 
            activetimer = true; 
            activebutton = true;
        }
        if (agentstatus == "handled") {
            activeexit = false;
            activetimer = false;
            activebutton = true;
        }
        if (agentstatus == "closed") {
            activeexit = false;
            activetimer = false;
            activebutton = false;
        }
    } else {
        activeexit = false;
        activetimer = false;
        activebutton = false;
    }
}

function initPopup() {
    // Add the HTML to the body
    theBody = document.getElementsByTagName('BODY')[0];
    popmask = document.createElement('div');
    popmask.id = 'popupMask';
    popcont = document.createElement('div');
    popcont.id = 'popupContainer';
    popcont.innerHTML = '' +
		'<div id="popupInner" style="width:320px;">' +
			'<div id="popupTitleBar">' +
				'<div id="popupTitle"></div>' +
				'<div id="popupControls">' +
					'<a href="#" onclick="setPending();hidePopWin(false);return false;" ><img src="//www.virtualspirits.com/vsa/images/mini.png" id="popCloseBox" border="0" alt="close chat"/></a>' +
				'</div>' +
			'</div>' +
			'<div id="proactive"></div>' +
		'</div>';

    popbutton = document.createElement('div');
    popbutton.id = 'popupButton';

if (buttonside=="left") {
    popbutton.innerHTML = '<div id="openButton" align="right" style="z-index:9000;border:0px solid #000000;position: fixed; bottom: ' + buttonbottom + 'px;  left: ' + buttonindent + 'px; _position:absolute; _top: expression(offsetParent.scrollTop+document.documentElement.offsetHeight-60);direction:ltr;">&nbsp;</div>';
} else {
    popbutton.innerHTML = '<div id="openButton" align="right" style="z-index:9000;border:0px solid #000000;position: fixed; bottom: ' + buttonbottom + 'px;  right: ' + buttonindent + 'px; _position:absolute; _top: expression(offsetParent.scrollTop+document.documentElement.offsetHeight-60);direction:ltr;">&nbsp;</div>'; 
}

    theBody.appendChild(popmask);
    theBody.appendChild(popcont);
    theBody.appendChild(popbutton);

    gPopupMask = document.getElementById("popupMask");
    gPopupContainer = document.getElementById("popupContainer");

    // check to see if this is IE version 6 or lower. hide select boxes if so
    // maybe they'll fix this in version 7?
    var brsVersion = parseInt(window.navigator.appVersion.charAt(0), 10);
    if (brsVersion <= 6 && window.navigator.userAgent.indexOf("MSIE") > -1) {
        // gHideSelects = true;
    }

    //alert("initPopup");
}

getbrowser();
addEvent(window, "load", initAgent);

function initExit() {
    document.onmousemove = function (evt) {
        if (typeof evt == 'undefined') {
            myEvent = window.event;
        }
        else {
            myEvent = evt;
        }

        if (browser == "MSIE") {
            posX = myEvent.clientX;
            posY = myEvent.clientY;
        }
        else {
            posX = myEvent.pageX - window.pageXOffset;
            posY = myEvent.pageY - window.pageYOffset;
        }

        //document.getElementById("openButton").innerHTML = "mouse: " +posY;
        if (posY < 15) {
            //alert("mouse" +posY);
            exitchat();
        }
    }
}

function exitchat() {
    if (activeexit == true) {
        exitTime = new Date();
        timeInterval = exitTime - loadTime;
        if (timeInterval > exitMinTimer) {
            //call exit trigger and only dialog is enabled
            activeexit = false;
            startchat("exit");
            if (triggerexitdialogue){
            if (confirm(exitdialoguestring)) {
                //continue
            }
            else {
                setPending();
                hidePopWin(false);
            }}
        }
    }
}

function proactivechat() {
    if (activetimer == true) {
     if (mobileagent) { 
       showButtonMobile();
       } else {
        startchat("timer");
       }
    }
}

function buttonchat() {
    startchat("button");
}

function setPending() {
    // new design - if visitor closes the chat, it is pending without consideration to timeinterval
    // closeTime = new Date();
    // timeInterval = closeTime - chatTime;
    // if (timeInterval < 45000) {
    createCookie("vspirits_status", "pending", 1); // write the cookie
    agentstatus = "pending";
    setactive();
    if (activebutton) { showButton(); }
}

function setClosed() {
    hideButton(); // hide the button chat
    createCookie("vspirits_status", "closed", 1); // write the cookie
    agentstatus = "closed";
    setactive();
}

function showButton() {
    var buttonstr;
    buttonstr = '<a href="#" onclick="buttonchat();return false;" style="text-decoration: none">' + buttondesign + '</a>';
    document.getElementById("openButton").innerHTML = buttonstr;
}

function showButtonTimer() {
    var buttonstr;
    buttonstr = buttondesign + 
        '<span style="position: absolute; top:20px; _top:25px; right:30px;">' +
		'<img border="0" align="absmiddle" alt="" width="25" height="25" src="//www.virtualspirits.com/vsa/images/progress.gif" /> ' +
		'</span>';
    document.getElementById("openButton").innerHTML = buttonstr;
}

function showButtonMobile() {
    var buttonstr;
    buttonstr = '<a href="#" onclick="buttonchat();return false;">' + buttondesign + 
        '<span style="position: absolute; top:20px; _top:30px; right:10px;">' +
		'<img border="0" align="absmiddle" alt="" width="10" height="10" src="//www.virtualspirits.com/vsa/images/greenblinking.gif" /> ' +
		'</span></a>';
    document.getElementById("openButton").innerHTML = buttonstr;
}

function hideButton() {
    document.getElementById("openButton").innerHTML = "&nbsp;";
}

function getchatparam() {
    title_param = document.title;
    title_param = title_param.replace("<","");
    title_param = title_param.replace(">","");
    title_param = encodeURI(title_param);
    referrer_param = document.referrer;
    url_param = location.href;
    url_param = url_param.toLowerCase();
}

// filterpages begin
function filterpages() {
    tempstr = url_param;    // lowercase and  url encoded
    tempstr = tempstr .replace("http://", "");
    tempstr = tempstr .replace("https://", "");
    tempstr = tempstr.replace("www.", "");

    activepage = true; // all pages
    // if (tempstr=="hello.html") { activepage = false; }  // specific url page hello.html
    // if (tempstr.indexOf("words")!=-1) { activepage = false; }  // page include string words

}// filterpages end

function getdomain(url) {
    if (url != "") {
        url = url.split(/\/+/g)[1];
    }
    return url;
}

function startchat(launcher) {
    chatTime = new Date();
    timeInterval = chatTime - loadTime;

// new design - recurring chat
        createCookie("vspirits_status", "inprocess", 1); // write the cookie for next page
        agentstatus = "handled";
        setactive();

if (mobileagent) {
setPending();
window.open("//www.virtualspirits.com/vsa/" + vspirits_chat_client + ".aspx?launcher=" + launcher + "&launchertime=" + timeInterval + "&startintro=" + startintro + "&referrer=" + referrer_param + "&title=" + title_param,'_blank', 'height=480,width=340');
} else {
    try {
        showButtonTimer(); // show the button chat as timer
        showPopWin("//www.virtualspirits.com/vsa/" + vspirits_chat_client + ".aspx?launcher=" + launcher + "&launchertime=" + timeInterval + "&startintro=" + startintro + "&referrer=" + referrer_param + "&title=" + title_param, 500, 450, null, false);
    } catch (e) {
        // nothing
        //alert(e);
    }}
}

/**
* @argument width - int in pixels
* @argument height - int in pixels
* @argument url - url to display
* @argument returnFunc - function to call when returning true from the window.
* @argument showOverlay - show the body overlay
*/
function showPopWin(url, width, height, returnFunc, showOverlay) {
    // show or hide the window close widget
    document.getElementById("popCloseBox").style.display = "none";

    gPopupIsShown = true;
    disableTabIndexes();

    if (showOverlay) {
        gPopupMask.style.display = "block";
    }

    gPopupContainer.style.display = "block";
    // calculate where to place the window on screen
    centerPopWin(width, height);
    setMaskSize();
    document.getElementById("proactive").innerHTML = "<iframe src=" + url + " style=\"width:1;height:1;background-color:transparent;\" scrolling=\"no\" frameborder=\"0\"  id='iframeContent' name='iframeContent" + Math.round(Math.random() * 1000) + "' allowtransparency=\"true\" id=\"popupFrame\" name=\"popupFrame\" width='1' height='1' onload='custom_showIframe();'></iframe>"

    // for IE
    if (gHideSelects == true) {
        hideSelectBoxes();
    }

}

var gi = 0;
function centerPopWin(width, height) {
    if (gPopupIsShown == true) {
        if (width == null || isNaN(width)) {
            width = gPopupContainer.offsetWidth;
        }
        if (height == null) {
            height = gPopupContainer.offsetHeight;
        }

        //var theBody = document.documentElement;
        var theBody = document.getElementsByTagName("BODY")[0];
        //theBody.style.overflow = "hidden";
        // new model
        //var scTop = parseInt(getScrollTop(),10);
        var scTop = parseInt(getScrollTop(), 0);
        var scLeft = parseInt(theBody.scrollLeft, 10);

        setMaskSize();

        //window.status = gPopupMask.style.top + " " + gPopupMask.style.left + " " + gi++;

        var titleBarHeight = parseInt(document.getElementById("popupTitleBar").offsetHeight, 10);

        var fullHeight = getViewportHeight();
        var fullWidth = getViewportWidth();

        // new design
        var toptemp = scTop + (fullHeight - (height + 1));
        if (toptemp < scTop) { toptemp = scTop; }
        // new design	
        // bottom left and right
        gPopupContainer.style.top = toptemp - windowbottom + "px";
       if (windowside=="left") {      
          gPopupContainer.style.left = (scLeft + 25 + windowindent) + "px";
       } else {
          gPopupContainer.style.left = (fullWidth - width - 20 - windowindent) + "px";
        }
   }
}

addEvent(window, "resize", centerPopWin);
addEvent(window, "scroll", centerPopWin);
window.onscroll = centerPopWin;

/**
* Sets the size of the popup mask.
*
*/
function setMaskSize() {
    var theBody = document.getElementsByTagName("BODY")[0];
    var fullHeight = getViewportHeight();
    var fullWidth = getViewportWidth();

    // Determine what's bigger, scrollHeight or fullHeight / width
    if (fullHeight > theBody.scrollHeight) {
        popHeight = fullHeight;
    } else {
        popHeight = theBody.scrollHeight;
    }

    if (fullWidth > theBody.scrollWidth) {
        popWidth = fullWidth;
    } else {
        popWidth = theBody.scrollWidth;
    }

    gPopupMask.style.height = popHeight + "px";
    gPopupMask.style.width = popWidth + "px";
}

/**
* @argument callReturnFunc - bool - determines if we call the return function specified
* @argument returnVal - anything - return value 
*/
function hidePopWin(callReturnFunc) {
    gPopupIsShown = false;
    document.getElementById("proactive").innerHTML = "&nbsp;";
    var theBody = document.getElementsByTagName("BODY")[0];
    theBody.style.overflow = "";
    restoreTabIndexes();
    if (gPopupMask == null) {
        return;
    }
    gPopupMask.style.display = "none";
    gPopupContainer.style.display = "none";
    if (callReturnFunc == true && gReturnFunc != null) {
        // Set the return code to run in a timeout.
        // Was having issues using with an Ajax.Request();
        gReturnVal = window.frames["popupFrame"].returnVal;
        window.setTimeout('gReturnFunc(gReturnVal);', 1);
    }

    // display all select boxes
    if (gHideSelects == true) {
        displaySelectBoxes();
    }
}

// Tab key trap. iff popup is shown and key was [TAB], suppress it.
// @argument e - event - keyboard event that caused this function to be called.
function keyDownHandler(e) {
    if (gPopupIsShown && e.keyCode == 9) return false;
}

// For IE.  Go through predefined tags and disable tabbing into them.
function disableTabIndexes() {
    if (document.all) {
        var i = 0;
        for (var j = 0; j < gTabbableTags.length; j++) {
            var tagElements = document.getElementsByTagName(gTabbableTags[j]);
            for (var k = 0; k < tagElements.length; k++) {
                gTabIndexes[i] = tagElements[k].tabIndex;
                tagElements[k].tabIndex = "-1";
                i++;
            }
        }
    }
}

// For IE. Restore tab-indexes.
function restoreTabIndexes() {
    if (document.all) {
        var i = 0;
        for (var j = 0; j < gTabbableTags.length; j++) {
            var tagElements = document.getElementsByTagName(gTabbableTags[j]);
            for (var k = 0; k < tagElements.length; k++) {
                tagElements[k].tabIndex = gTabIndexes[i];
                tagElements[k].tabEnabled = true;
                i++;
            }
        }
    }
}

/**
* Hides all drop down form select boxes on the screen so they do not appear above the mask layer.
* IE has a problem with wanted select form tags to always be the topmost z-index or layer
*
* Thanks for the code Scott!
*/
function hideSelectBoxes() {
    var x = document.getElementsByTagName("SELECT");

    for (i = 0; x && i < x.length; i++) {
        x[i].style.visibility = "hidden";
    }
}

/**
* Makes all drop down form select boxes on the screen visible so they do not 
* reappear after the dialog is closed.
* 
* IE has a problem with wanting select form tags to always be the 
* topmost z-index or layer.
*/
function displaySelectBoxes() {
    var x = document.getElementsByTagName("SELECT");

    for (i = 0; x && i < x.length; i++) {
        x[i].style.visibility = "visible";
    }
}

//helper functions below
function custom_showIframe() {
    //jQuery('#proactive').show();//show window
    //proactive_position(); //position the window
    document.getElementById("iframeContent").style.display = "block";

    // new design
    document.getElementById("iframeContent").style.width = "320px";
    document.getElementById("iframeContent").style.height = "460px";
    document.getElementById("popupTitleBar").style.width = "320px";

    document.getElementById("popCloseBox").style.display = "block";
    //document.getElementById("popupTitle").innerHTML = strTitle;
    centerPopWin();
    hideButton(); // hide the button
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function getbrowser() {
    if (navigator.userAgent.indexOf('MSIE') != -1) {
        browser = "MSIE";
    } else {
        if (navigator.userAgent.indexOf('Firefox') != -1) {
            browser = "FF";
        } else {
            if (navigator.userAgent.indexOf('Chrome') != -1) {
                browser = "CH";
            } else {
                browser = "other";
            }
        } 
    }
    //alert(browser);
}

// custom starter
function filtermobiles() {
var fullHeight = getViewportHeight();
// small screens
if (fullHeight <480) { mobileagent=true; }
var temp_useragent;
temp_useragent = navigator.userAgent;
temp_useragent  = temp_useragent.toLowerCase();
if (temp_useragent.indexOf('iphone') != -1) { mobileagent = true; }
if (temp_useragent.indexOf('blackberry') != -1) { mobileagent = true; }
if (temp_useragent.indexOf('mobile') != -1) { mobileagent = true; }
if (blockmobile && mobileagent) { activepage = false; }
// alert(temp_useragent); 
if (mobileagent) { triggerexit= false; }
}





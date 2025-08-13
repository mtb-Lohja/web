//##############################################################################
//# ajax.js                                                                    #
//##############################################################################
//# YaBB: Yet another Bulletin Board                                           #
//# Open-Source Community Software for Webmasters                              #
//# Version:        YaBB 2.3                                                   #
//# Packaged:       October 12, 2008                                           #
//# Distributed by: http://www.yabbforum.com                                   #
//# ===========================================================================#
//# Copyright (c) 2000-2008 YaBB (www.yabbforum.com) - All Rights Reserved.    #
//# Software by:  The YaBB Development Team                                    #
//#               with assistance from the YaBB community.                     #
//# Sponsored by: Xnull Internet Media, Inc. - http://www.ximinc.com           #
//#               Your source for web hosting, web design, and domains.        #
//##############################################################################

//YaBB 2.3 $Revision: 1.1.2.6 $

var xmlHttp = null;
var browser = '';
var imagedir = '';

if(navigator.appName == "Microsoft Internet Explorer") {
	browser = "block"; 
}
else {
	browser = "table"; 
}

function Collapse_All (url,action,imgdir,lng) {
	GetXmlHttpObject();
	if (xmlHttp == null) {
		window.location = url + ";oldcollapse=1";
		return;
	}

	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);

	var i = 0;
	var noboards = "";
	var boards = "";
	var imgsrc = "";
	if (action == 1) { 
		boards = browser;
		noboards = "none";
		imgsrc = "/cat_collapse.gif";
		document.getElementById("expandall").style.display = "none";
		document.getElementById("collapseall").style.display = "";
	} else {
		noboards = "";
		boards = "none";
		imgsrc = "/cat_expand.gif";
		document.getElementById("expandall").style.display = "";
		document.getElementById("collapseall").style.display = "none";
	}
	for (i = 0 ; i < catNames.length; i++) {
		document.getElementById(catNames[i]).style.display = boards;
		document.getElementById("col"+catNames[i]).style.display = noboards;
		document.getElementById("img"+catNames[i]).src = imgdir + imgsrc;
		document.getElementById("img"+catNames[i]).title = lng;
	}
}

function SendRequest (url,cat,imgdir,lng_collapse,lng_expand) {
	GetXmlHttpObject();
	if (xmlHttp == null) {
		window.location = url + ";oldcollapse=1";
		return;
	}

	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);

	var open = 0;
	var closed = 0;
	var board = '';
	if (document.getElementById(cat).style.display == "none") {
		document.getElementById(cat).style.display = browser;
		document.getElementById("col"+cat).style.display = "none";
		document.getElementById("img"+cat).src = imgdir+"/cat_collapse.gif";
		document.getElementById("img"+cat).title = lng_collapse;
		document.getElementById("collapseall").style.display = "";
	} else {
		document.getElementById(cat).style.display = "none";
		document.getElementById("col"+cat).style.display = "";
		document.getElementById("img"+cat).src = imgdir+"/cat_expand.gif";
		document.getElementById("img"+cat).title = lng_expand;
		document.getElementById("expandall").style.display = "";
	}
	for (i = 0; i < catNames.length; i++) {
		if (document.getElementById(catNames[i]).style.display == "none") { closed++; }
		else { open++; }
	}
	if (closed == catNames.length) {
		document.getElementById("collapseall").style.display = "none";
		document.getElementById("expandall").style.display = "";
	}
	if (open == catNames.length) {
		document.getElementById("collapseall").style.display = "";
		document.getElementById("expandall").style.display = "none";
	}
}

function MarkAllAsRead(url,imgdir) {
	GetXmlHttpObject();
	if (xmlHttp == null) {
		window.location = url + ";oldmarkread=1";
		return;
	}
	imagedir = imgdir;
	var imagealert = document.getElementById("ImageAlert");
	imagealert.style.visibility = "visible";
	document.getElementById("ImageAlertText").innerHTML = markallreadlang;
	document.getElementById("ImageAlertPic").innerHTML = '<img src="' + imagedir + '/Rotate.gif">';
	xmlHttp.onreadystatechange=MarkFinished;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}

function MarkFinished() {
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete") { 
		document.getElementById("ImageAlertText").innerHTML = markfinishedlang;
		document.getElementById("ImageAlertPic").innerHTML = '<img src="' + imagedir + '/RotateStop.gif">';
		setTimeout("HideAlert()",1500);
		var images = document.getElementsByTagName("img");
		for (var i=0; i<images.length; i++) {
			var src = images[i].getAttribute("src");
			if (src.match("/on.gif") && !images[i].id.match("no_edit")) {
				images[i].setAttribute("src",src.replace("/on.gif","/off.gif"));
			}
			if (src.match("imclose.gif")) {
				images[i].setAttribute("src",src.replace("imclose.gif","imopen.gif"));
			}
			if (src.match("imclose2.gif")) {
				images[i].setAttribute("src",src.replace("imclose2.gif","imopen2.gif"));
			}
			if (src.match("new.gif")) {
				images[i].style.display = "none";
			}
		}
		var newlinks = document.getElementsByTagName("span");
		for (var e=0; e<newlinks.length; e++) {
			if (newlinks[e].className == "NewLinks") {
				newlinks[e].style.display = "none";
			}
		}
 	} 
}

function HideAlert() {
	document.getElementById("ImageAlert").style.visibility = "hidden";
}

function GetXmlHttpObject() {
	if (xmlHttp != null) return;
	try { // test if ajax is supported
		if (typeof( new XMLHttpRequest() ) == 'object') {
			xmlHttp = new XMLHttpRequest();
		} else if (typeof( new ActiveXObject("Msxml2.XMLHTTP") ) == 'object') {
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		} else if (typeof( new ActiveXObject("Microsoft.XMLHTTP") ) == 'object') {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
	} catch (e) { }
}
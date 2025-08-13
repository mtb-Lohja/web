//##############################################################################
//# YaBB.js                                                                    #
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

//YaBB 2.3 $Revision: 1.1.2.4 $

//scroll fix for IE
window.onload = function () {
			if(document.all) {
				var codeFix = document.all.tags("div");
				for (var codeI = 0; codeI < codeFix.length; codeI++) {
					if (codeFix[codeI].className == "scroll" && (codeFix[codeI].scrollWidth > codeFix[codeI].clientWidth || codeFix[codeI].clientWidth == 0))
					codeFix[codeI].style.height = (codeFix[codeI].clientHeight + 34) + "px";
				}
			}
		}


// for email decoding
function SpamInator(title,v1,v2,adr,subbody) {
	v2 = unescape(v2); var v3 = '';
	for(var v4 = 0; v4 < v1.length; v4++) { v3 += String.fromCharCode(v1.charCodeAt(v4)^v2.charCodeAt(v4)); }
	if (!title) title = v3;
	document.write('<a href="javascript:void(0)" onclick="window.location=\'' + adr + v3 + subbody + '\'">' + title + '</a>');
}


// for QuickLinks display
var hideTimer = null;
var lastOpen = null;
function quickLinks(num) {
	closeLinks(lastOpen);
	document.getElementById("ql"+num).style.visibility = "visible";
	document.getElementById("ql"+num).parentNode.style.zIndex = "1000";
	lastOpen = num;
}
function TimeClose(num) {
	hideTimer = setTimeout("closeLinks('"+num+"')", 1000);
}
function keepLinks(num) {
	clearTimeout(hideTimer);
	hideTimer = null;
}
function closeLinks(num) {
	if(lastOpen != null) {
		document.getElementById("ql"+num).style.visibility = "hidden";
	}
	clearTimeout(hideTimer);
	hideTimer = null;
}


// for email
function checkMailaddr(theMailField) {
	if (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(theMailField)) return true;
	return false;
}


// for attachments
function selectNewattach(file_id) {
	document.getElementById("w_file"+file_id).options[1].selected = true;
}


// for quote buttons
var quote_selection = new Array();

function quoteSelection(quote_name, quote_topic_id, quote_msg_id, quote_date, quote_message) {
	if ((quote_selection[quote_msg_id] && quote_selection[quote_msg_id] != '') || quote_message != '') {
		if (quote_message) quote_selection[quote_msg_id] = quote_message;
		AddText('[quote author=' + quote_name + ' link=' + quote_topic_id + '/' + quote_msg_id + '#' + quote_msg_id + ' date=' + quote_date + ']' + quote_selection[quote_msg_id] + ' [/quote]\r\n');
		quote_selection[quote_msg_id] = '';
		quote_message = '';
	} else {
		alertqq();
	}
}

function get_selection(msg_id) {
	if (document.getSelection) {
		quote_selection[msg_id] = document.getSelection();
	} else {
		quote_selection[msg_id] = document.selection.createRange().text;
	}
	quote_selection[msg_id] = '' + quote_selection[msg_id] + '';
	// quote_selection[msg_id] = quote_selection[msg_id].replace(/\\r\\n/g, "_caret_");
	while (quote_selection[msg_id].indexOf("  ") != -1) quote_selection[msg_id] = quote_selection[msg_id].replace(/  /gi, "");
	// quote_selection[msg_id] = quote_selection[msg_id].replace(/_caret_/g, "\\r\\n");
}


// for image resizing
function resize_images() {
	var tmp_array = new Array ();
	for (var i = 0; i < img_resize_names.length; i++) {
		var tmp_image_name = img_resize_names[i];

		if (document.images[tmp_image_name].complete == false) {
			tmp_array[tmp_array.length] = tmp_image_name;
			// The following is needed since Opera does not load/show
			// style.display='none' images if they are not already in chache.
			if (/Opera/i.test(navigator.userAgent)) {
				document.images[tmp_image_name].width  = document.images[tmp_image_name].width  || 0;
				document.images[tmp_image_name].height = document.images[tmp_image_name].height || 0;
				document.images[tmp_image_name].style.display = 'inline';
			}
			continue;
		}

		var tmp_image = new Image;
		tmp_image.src = document.images[tmp_image_name].src;

		var tmpwidth  = document.images[tmp_image_name].width  || tmp_image.width;
		var tmpheight = document.images[tmp_image_name].height || tmp_image.height;

		if (!tmpwidth && !tmpheight) {
			tmp_array[tmp_array.length] = tmp_image_name;
			continue;
		}

		var type = (tmp_image_name.split("_", 1))[0];

		var maxwidth  = 0;
		var maxheight = 0;
		if (type == 'avatar') {
			maxwidth  = avatar_img_w;
			maxheight = avatar_img_h;
		} else if (type == 'post') {
			maxwidth  = post_img_w;
			maxheight = post_img_h;
		} else if (type == 'attach') {
			maxwidth  = attach_img_w;
			maxheight = attach_img_h;
		} else if (type == 'signat') {
			maxwidth  = signat_img_w;
			maxheight = signat_img_h;
		}

		if (maxwidth != 0 && tmpwidth > maxwidth) {
			tmpheight = tmpheight * maxwidth / tmpwidth;
			tmpwidth  = maxwidth;
		}

		if (maxheight != 0 && tmpheight > maxheight) {
			tmpwidth  = tmpwidth * maxheight / tmpheight;
			tmpheight = maxheight;
		}

		document.images[tmp_image_name].width  = tmpwidth;
		document.images[tmp_image_name].height = tmpheight;
		document.images[tmp_image_name].style.display = 'inline';
	}
	if (tmp_array.length > 0 && resize_time < 10) {
		img_resize_names = tmp_array;
		if (resize_time > 6) {
			for (var i = 0; i < img_resize_names.length; i++) {
				var tmp_image_name = img_resize_names[i];
				document.images[tmp_image_name].src = "$imagesdir/noimg.gif";
				document.images[tmp_image_name].title = "$maintxt{'171'}";
			}
		}
		setTimeout("resize_time++; resize_images();", (1000 * resize_time));
	} else {
		// To prevent window from jumping to other place because
		// of image resize after window is set to the ancor this is needed:
		var ancor = document.URL;
		if (/#/.test(ancor)) location.href = '#' + (ancor.split("#"))[1];
	}
}


/***********************************************
* New_News_Fader 1.0
*
* Fades news bi-directionally between any starting and ending color smoothly
*
* Written for YaBB by Eddy
* 14-Jan-2005
* Original 'fader.js' by NRg (allbrowsers_fader.mod v2.02 01/12/2002)
*
* Based upon uni-directional fading code from:
* Fading Scroller- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/

var ie4 = document.all && !document.getElementById;
var DOM2 = document.getElementById;
var index = 0;
var fadecounter;
var fcontent = new Array();
var begintag = '';
var closetag = '';

function cutHex(h) { return (h.charAt(0)=="#") ? h.substring(1,7) : h}
function HexToR(h) { return parseInt((cutHex(h)).substring(0,2),16) }
function HexToG(h) { return parseInt((cutHex(h)).substring(2,4),16) }
function HexToB(h) { return parseInt((cutHex(h)).substring(4,6),16) }

function changecontent() {
	if (index >= fcontent.length)
		index=0;

	if (DOM2){
		document.getElementById("fscroller").style.color="rgb("+startcolor[0]+", "+startcolor[1]+", "+startcolor[2]+")";
		document.getElementById("fscroller").innerHTML=begintag+fcontent[index]+closetag;
		if (fadelinks)
			linkcolorchange(1);
		colorfadeup(1);
	} else if (ie4) {
		document.all.fscroller.innerHTML=begintag+fcontent[index]+closetag;
	}
	index++
}

function linkcolorchange(step) {
	var obj=document.getElementById("fscroller").getElementsByTagName("A");
	if (obj.length>0) {
		for (i=0;i<obj.length;i++)
			obj[i].style.color=getstepcolor(step);
	}
}

function colorfadeup(step) {
	if (step <= maxsteps) {
		document.getElementById("fscroller").style.color = getstepcolor(step);
		if (fadelinks)
			linkcolorchange(step);
		step++;
		fadecounter = setTimeout("colorfadeup("+step+")", stepdelay);
	} else {
		clearTimeout(fadecounter);
		document.getElementById("fscroller").style.color = "rgb("+endcolor[0]+", "+endcolor[1]+", "+endcolor[2]+")";
		setTimeout("colorfadedown("+maxsteps+")", delay);
	}
}

function colorfadedown(step) {
	if (step > 1) {
		step--;
		document.getElementById("fscroller").style.color = getstepcolor(step);
		if (fadelinks)
			linkcolorchange(step);
		fadecounter = setTimeout("colorfadedown("+step+")", stepdelay);
	} else {
		clearTimeout(fadecounter);
		document.getElementById("fscroller").style.color = "rgb("+startcolor[0]+", "+startcolor[1]+", "+startcolor[2]+")";
		setTimeout("changecontent()", delay / 2);
	}
}

function getstepcolor(step) {
	var diff;
	var newcolor=new Array(3);
	for(var i=0; i<3; i++) {
		diff = (startcolor[i] - endcolor[i]);
		if(diff > 0) {
			newcolor[i] = startcolor[i] - (Math.round((diff/maxsteps))*step);
		} else {
			newcolor[i] = startcolor[i] + (Math.round((Math.abs(diff)/maxsteps))*step);
		}
	}
	return ("rgb(" + newcolor[0] + ", " + newcolor[1] + ", " + newcolor[2] + ")");
}
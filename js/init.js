

/*
 * Copyright (c) 2019 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	
	conor_tm_menu();
	conor_tm_cursor();
	conor_tm_home_rightbox();
	conor_tm_news_image();
	conor_tm_jarallax();
	conor_tm_data_images();
	conor_tm_waypoints();
	conor_tm_imgtosvg();
	conor_tm_contact_form();
	
	jQuery(window).load('body',function(){
		conor_tm_load();
	});
	
});


// -----------------------------------------------------
// ---------------    CURSOR    ------------------------
// -----------------------------------------------------
	
function conor_tm_cursor(){
	
	"use strict";
	
	document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n){
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px"
    });
     
    var e = document.getElementById("pointer");
        
	$(document).mousemove(function(e){
		
		$("body a,.conor_tm_topbar_wrap .trigger")
		.on("mouseenter", function(){	 
			$('.pointer').addClass("large");	  
		})
		.on("mouseleave", function() {	  
			$('.pointer').removeClass("large");	  
		});
		
		$(".conor_tm_button a")
		.on("mouseenter", function(){	 
			$('.pointer').addClass("hidden");	  
		})
		.on("mouseleave", function() {	  
			$('.pointer').removeClass("hidden");	  
		});
		
		$(".conor_tm_footer_wrap .inner_wrap .social ul li a")
		.on("mouseenter", function(){	 
			$('.pointer').addClass("animate");	  
		})
		.on("mouseleave", function() {	  
			$('.pointer').removeClass("animate");	  
		});
		
	});	
}	
	
// -----------------------------------------------------
// ---------------    READY LOAD    --------------------
// -----------------------------------------------------

function conor_tm_load(){
	
	"use strict";
	
	jQuery('.conor_tm_home_wrap .leftbox .texts_wrap').addClass('load');
	jQuery('.conor_tm_main_titles_wrap .inner_wrap .page_title h3').addClass('load');
	jQuery('.conor_tm_main_titles_wrap .inner_wrap .breadcrumbs p').addClass('load');
	jQuery('.conor_tm_universal_box_wrap .content.about .shape').addClass('load');
	jQuery('.conor_tm_portfolio_wrap ul li .inner .overlay').addClass('load');
	jQuery('.conor_tm_portfolio_wrap ul li .image_title a').addClass('load');
	
}

// -----------------------------------------------------
// -----------------    NENU    ------------------------
// -----------------------------------------------------	
	
function conor_tm_menu(){
	
	"use strict";
	
	var t1			= new TimelineMax({paused:true});
	
	t1.to(".conor_tm_topbar_wrap .trigger .first", 0.5,{
		y:6,
		rotation:45,
		ease:Expo.easeinOut
	});
	t1.to(".conor_tm_topbar_wrap .trigger .second", 0.5,{
		y:- 6,
		rotation:-45,
		ease:Expo.easeinOut,
		delay:-0.5
	});	
	t1.to(".conor_tm_menu_wrap",0.5,{
		top:"0%",
		ease:Expo.easeinOut,
		delay:-0.5
	});
	t1.to(".conor_tm_topbar_wrap",0,{
		backgroundColor:"transparent",
		delay:-0.5
	});
	t1.staggerFrom(".conor_tm_menu_wrap .inner_wrap ul li", 0.4, {y:-25, opacity:0, ease:Expo.easeinOut},0.1);
	t1.reverse();
	
	jQuery('.conor_tm_topbar_wrap .trigger').on('click',function(){
		t1.reversed(!t1.reversed());
		return false;
	});
	
	jQuery('.conor_tm_menu_wrap .inner_wrap ul li a').on('click',function(){
		t1.reversed(!t1.reversed());
		var element 	= jQuery(this);
		var url			= element.attr('href');
		var time		= t1.totalTime() * 1000;
		setTimeout(function(){
			window.location = url; 
		},time);
		return false;
	});
}

// -----------------------------------------------------
// ---------------    HOME RIGHTBOX    -----------------
// -----------------------------------------------------

function conor_tm_home_rightbox(){
	
	"use strict";
	
	TweenMax.to('.conor_tm_home_wrap .rightbox .inner',1.5,{
			opacity:1,
			scale:1,
		});
}

// -----------------------------------------------------
// ---------------    NEWS IMAGE    --------------------
// -----------------------------------------------------

function conor_tm_news_image(){
	
	"use strict";
	
	TweenMax.to('.conor_tm_news_single_wrap .hero_image_wrap .image',1.5,{
			opacity:1,
			scale:1,
		});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function conor_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed
		});
	});
}

// -----------------------------------------------------
// -----------------    PROGRESS BAR    ----------------
// -----------------------------------------------------

function tdProgress(container){

	"use strict";

	container.find('.conor_tm_progress').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.conor_tm_bar_wrap');
		var pBar 			= progress.find('.conor_tm_bar');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*500));
	});
}
jQuery('.conor_tm_progress_wrap').each(function() {
	"use strict";
	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.conor_tm_counter').each(function() {

	"use strict";

	var el		= jQuery(this);
	el.waypoint({
		handler: function(){

			if(!el.hasClass('stop')){
				el.addClass('stop').countTo({
					refreshInterval: 50,
					formatter: function (value, options) {
						return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
					},	
				});
			}
		},offset:'80%'	
	});
});

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function conor_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ---------------   WAYPOINTS    ----------------------
// -----------------------------------------------------

function conor_tm_waypoints(){
	
	"use strict";
//	
	var div		= jQuery('.conor_tm_waypoint_effect');
	
	div.each(function(){
		
		var element	= jQuery(this);
		
		element.waypoint({
			handler:function(){
				element.addClass('load');
			},
			offset:"80%"
		});
		
	});
	
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function conor_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function conor_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}
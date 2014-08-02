jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder
        });
    }
    jQuery("#amazingcarousel-3").amazingcarousel({
        jsfolder:jsFolder,
        // width:240,
        // height:180,
        skinsfoldername:"",
        interval:3000,
        itembottomshadowimagetop:99,
        random:false,
        direction:"horizontal",
        arrowheight:28,
        itembackgroundimagewidth:100,
        skin:"Thumbnail",
        responsive:true,
        bottomshadowimage:"",
        navstyle:"none",
        enabletouchswipe:true,
        backgroundimagetop:-40,
        arrowstyle:"always",
        bottomshadowimagetop:95,
        transitionduration:750,
        hoveroverlayimage:"",
        itembottomshadowimage:"",
        showitembottomshadow:false,
        transitioneasing:"easeOutExpo",
        showitembackgroundimage:false,
        itembackgroundimage:"",
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"",
        showbottomshadow:false,
        screenquery:{
	mobile: {
		screenwidth: 600,
		visibleitems: 1,
	}
},
        navimage:"",
        itembackgroundimagetop:0,
        showbackgroundimage:false,
        showplayvideo:true,
        spacing:8,
        scrollitems:1,
        showhoveroverlay:true,
        scrollmode:"item",
        navdirection:"horizontal",
        itembottomshadowimagewidth:100,
        backgroundimage:"",
        arrowwidth:28,
        pauseonmouseover:true,
        navmode:"page",
        arrowhideonmouseleave:1000,
        navwidth:16,
        navspacing:8,
        playvideoimage:"",
        visibleitems:1,
        navswitchonmouseover:false,
        bottomshadowimagewidth:110,
        autoplay:true,
        backgroundimagewidth:110,
        loop:0,
        navheight:16
    });
});

jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initcarousel\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    if ( typeof html5Lightbox === "undefined" )
    {
        html5Lightbox = jQuery(".html5lightbox").html5lightbox({
            skinsfoldername:"",
            jsfolder:jsFolder
        });
    }
    jQuery("#amazingcarousel-1").amazingcarousel({
        jsfolder:jsFolder,  
        skinsfoldername:"",
        interval:3000,
        itembottomshadowimagetop:99,
        random:false,
        direction:"vertical",
        arrowheight:28,
        itembackgroundimagewidth:100,
        skin:"List",
        responsive:true,
        bottomshadowimage:"",
        navstyle:"bullets",
        enabletouchswipe:true,
        backgroundimagetop:-40,
        arrowstyle:"always",
        bottomshadowimagetop:95,
        transitionduration:1000,
        hoveroverlayimage:"",
        itembottomshadowimage:"",
        showitembottomshadow:false,
        transitioneasing:"easeOutExpo",
        showitembackgroundimage:false,
        itembackgroundimage:"",
        playvideoimagepos:"center",
        circular:true,
        arrowimage:"",
        showbottomshadow:false,
        screenquery:{
        mobile: {
        screenwidth: 600,
        visibleitems: 2
    }
},
        navimage:"",
        itembackgroundimagetop:0,
        showbackgroundimage:false,
        showplayvideo:true,
        spacing:2,
        scrollitems:1,
        showhoveroverlay:true,
        scrollmode:"item",
        navdirection:"horizontal",
        itembottomshadowimagewidth:100,
        backgroundimage:"",
        arrowwidth:28,
        pauseonmouseover:true,
        navmode:"page",
        arrowhideonmouseleave:1000,
        navwidth:12,
        navspacing:2,
        playvideoimage:"",
        visibleitems:3,
        navswitchonmouseover:false,
        bottomshadowimagewidth:110,
        autoplay:true,
        backgroundimagewidth:110,
        loop:0,
        navheight:16
    });
});
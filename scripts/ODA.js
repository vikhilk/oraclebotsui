! function(e, t, n, r) {
    function s() {
        try {
            var e;
            if ((e = "string" == typeof this.response ? JSON.parse(this.response) : this.response).url) {
                var n = t.getElementsByTagName("script")[0],
                    r = t.createElement("script");
                r.async = !0, r.src = e.url, n.parentNode.insertBefore(r, n)
            }
        } catch (e) {}
    }
    var o, p, a, i = [],
        c = [];
    e[n] = {
        init: function() {
            o = arguments;
            var e = {
                then: function(t) {
                    return c.push({
                        type: "t",
                        next: t
                    }), e
                },
                catch: function(t) {
                    return c.push({
                        type: "c",
                        next: t
                    }), e
                }
            };
            return e
        },
        on: function() {
            i.push(arguments)
        },
        render: function() {
            p = arguments
        },
        destroy: function() {
            a = arguments
        }
    }, e.__onWebMessengerHostReady__ = function(t) {
        if (delete e.__onWebMessengerHostReady__, e[n] = t, o)
            for (var r = t.init.apply(t, o), s = 0; s < c.length; s++) {
                var u = c[s];
                r = "t" === u.type ? r.then(u.next) : r.catch(u.next)
            }
        p && t.render.apply(t, p), a && t.destroy.apply(t, a);
        for (s = 0; s < i.length; s++) t.on.apply(t, i[s])
    };
    var u = new XMLHttpRequest;
    u.addEventListener("load", s), u.open("GET", r + "/loader.json", !0), u.responseType = "json", u.send()
}(window, document, "Bots", "http://localhost/static");


function loadAppId() {
    var appId = window.localStorage.getItem("appId");
    if (appId) {
        document.getElementById("appId").value = appId;
    }
}

function saveAppId(e) {
    e.preventDefault();
    let appId = document.getElementById("appId").value;
    console.log('Validate appId', appId);
    // validate app id
    initBots(appId)
        .then(function() {
            console.log('AppId is valid');
            window.localStorage.setItem("appId", appId);
            window.location.href = "home.html";
            document.getElementById("loader").style.display = "none";
        })
        .catch(function(err) {
            document.getElementById("loader").style.display = "none";
            document.getElementsByClassName("error")[0].style.display = 'block';
            console.log('AppId validating error', err);
        });

}



 function SendMsg(msg){
    var messageBody = {
        text: msg,
        type: 'text',
        metadata: {
        isHidden: true
        }
    };
    Bots.sendMessage(messageBody);
}
function orderpizza() {
    SendMsg('order pizza');
    }



// Slider Images
function imgurl(n)
{
if(n==1)
window.open("https://online.pizzahut.co.in/home");
else if(n==2)
window.open("https://online.pizzahut.co.in/home");
else if(n==3)
window.open("https://online.pizzahut.co.in/home");

}



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    var messengerDocument = document.getElementById('web-messenger-container').contentDocument;
    var i;
    var slides = messengerDocument.getElementsByClassName("mySlides");
    
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    
    slides[slideIndex - 1].style.display = 'block';
    
}



function showChatButton() {

    console.log('Show Bot');
    clearChat();
    if (window.sessionStorage.getItem('chatEnabled') === null) {
        clearChat();
    }



    var appId = window.localStorage.getItem("appId");

    initBots(appId)
        .then(function() {
            console.log("init complete");
            window.sessionStorage.setItem('chatEnabled', 'true');
        })
        .catch(function(err) {
            console.log(err);
        });
}

function clearChat(e) {
	if (e) {
		e.preventDefault()
	}
	var keys = Object.keys(localStorage);
	for (var i = 0; i < keys.length; i++) {
		console.log(i,keys[i]);
		var keyid = keys[i];

		if(keyid.includes("appUserId") || keyid.includes("sessionToken") || keyid.includes("clientId"))
		{
			localStorage.removeItem(keys[i]);
			console.log(keys[i]); 
		}
	}
}



function initBots(appId) {
    return Bots.init({
        appId: appId,
        businessName: "Hi !",
        introductionText: 'Your Digital Consumer Care Virtual Assistant',
        businessIconUrl: '/static/images/Ask-Paddy-icon-small.png',
        buttonIconUrl: '/static/images/Ask-Paddy-1-small.png',
        buttonWidth: '120px',
        buttonHeight: '120px',
        backgroundImageUrl: '/static/images/background-small.png',
        avatarUrl: '/static/images/Ask-Paddy-1-small.png',
        customColors: {
            brandColor: '86b300',
            conversationColor: '86b300',
            actionColor: '86b300',
        },
        customText: {
            introductionText: 'This is Paddy, your personal digital assistant ',
            messageTimestampFormat: 'hh:mm A',
            // headerText: 'OMCE, How can we help?'
        }


    }).then(function (res){
        /* CUSTOM - START*/
Bots.on('message', function(message) {
var messengerDocument = document.getElementById('web-messenger-container').contentDocument;
// Find handle to the carousel description(s)
var cdescItems = messengerDocument.querySelectorAll('.carousel-description');
if(cdescItems != null) {
// apply style to each of the carousel items
cdescItems.forEach(function(singleCDesc) {
singleCDesc.style="margin: 0px 8px 13px; font-size: 13px; color: rgb(179, 179, 179); white-space: pre-wrap; flex: 2 1"; // AUTO REMOVED
});
}
});
/* CUSTOM - END*/
      

    Bots.on('message', function(message) {
    var messengerDocument = document.getElementById('web-messenger-container').contentDocument;
    messengerDocument.getElementById("conversation").style.visibility="visible";
    messengerDocument.getElementById("selfin").style.display = "none";
    messengerDocument.getElementById("textintro").style.display = "none";
    messengerDocument.getElementById("footer").style.visibility = "visible";
    messengerDocument.getElementById("cslider").style.display = "none";
    messengerDocument.getElementById("footer").style.position = "relative";
    messengerDocument.getElementById("flashmsg").style.display = "none";
    messengerDocument.getElementById("blog").style.display = "none";
    });




    }).then(customUI);
}
function Close()
{
    var messengerDocument = document.getElementById('web-messenger-container').contentDocument;
    messengerDocument.getElementById("prompt").style.display="grid";
    messengerDocument.getElementById("conversation").style.opacity="0.2";
    messengerDocument.getElementById("selfin").style.opacity="0.2";
    messengerDocument.getElementById("textintro").style.opacity="0.2";
    messengerDocument.getElementById("cslider").style.opacity="0.2";
    messengerDocument.getElementById("footer").style.opacity="0.2";
    messengerDocument.getElementById("headerEl").style.opacity="0.2";
    messengerDocument.getElementById("feedback").style.opacity="0.2";
    messengerDocument.getElementById("flashmsg").style.opacity="0.2";
    messengerDocument.getElementById("blog").style.opacity="0.2";
    messengerDocument.getElementById("conversation").style.pointerEvents ="none";
    messengerDocument.getElementById("selfin").style.pointerEvents ="none";
    messengerDocument.getElementById("textintro").style.pointerEvents ="none";
    messengerDocument.getElementById("cslider").style.pointerEvents ="none";
    messengerDocument.getElementById("footer").style.pointerEvents ="none";
    messengerDocument.getElementById("headerEl").style.pointerEvents ="none";
    messengerDocument.getElementById("feedback").style.pointerEvents ="none";
}
function CloseYes()
{
 Bots.destroy();
    clearChat();
    var appId = window.localStorage.getItem("appId");

    initBots(appId)
        .then(function() {
            window.sessionStorage.setItem('chatEnabled', 'true');
        })
        .catch(function(err) {
            console.log(err);
        });
}
function CloseNo()
{
    var messengerDocument = document.getElementById('web-messenger-container').contentDocument;
    messengerDocument.getElementById("prompt").style.display="none";
    messengerDocument.getElementById("conversation").style.opacity="1";
    messengerDocument.getElementById("selfin").style.opacity="1";
    messengerDocument.getElementById("textintro").style.opacity="1";
    messengerDocument.getElementById("cslider").style.opacity="1";
    messengerDocument.getElementById("footer").style.opacity="1";
    messengerDocument.getElementById("flashmsg").style.opacity="1";
    messengerDocument.getElementById("blog").style.opacity="1";
    messengerDocument.getElementById("headerEl").style.opacity="1";
    messengerDocument.getElementById("feedback").style.opacity="1";
    messengerDocument.getElementById("conversation").style.pointerEvents ="all";
    messengerDocument.getElementById("selfin").style.pointerEvents ="all";
    messengerDocument.getElementById("textintro").style.pointerEvents ="all";
    messengerDocument.getElementById("cslider").style.pointerEvents ="all";
    messengerDocument.getElementById("footer").style.pointerEvents ="all";
    messengerDocument.getElementById("headerEl").style.pointerEvents ="all";
    messengerDocument.getElementById("feedback").style.pointerEvents ="all";
    messengerDocument.getElementById("flashmsg").style.pointerEvents ="all";
    messengerDocument.getElementById("blog").style.pointerEvents ="all";
}
function Feedback()
{
    var messengerDocument = document.getElementById('web-messenger-container').contentDocument;
    messengerDocument.getElementById("feedback").style.display="grid";
    messengerDocument.getElementById("selfin").style.display = "none";
    messengerDocument.getElementById("textintro").style.display = "none";
    messengerDocument.getElementById("footer").style.pointerEvents ="none";
    messengerDocument.getElementById("cslider").style.display = "none";
    messengerDocument.getElementById("conversation").style.display = "none";

}
function SetFeedback(feedback)
{   var messengerDocument = document.getElementById('web-messenger-container').contentDocument;
    messengerDocument.getElementById("conversation").style.display = "none";
    messengerDocument.getElementById("Whole").style.visibility = "visible";
    messengerDocument.getElementById("C1").checked=false;
    messengerDocument.getElementById("C2").checked=false;
    messengerDocument.getElementById("C3").checked=false;
    messengerDocument.getElementById("C4").checked=false;
    messengerDocument.getElementById("C5").checked=false;
    if(feedback==1){
    messengerDocument.getElementById("FCheck").style.display="none";
    window.FB="Extremely Easy";}
    else if(feedback==2){
    messengerDocument.getElementById("FCheck").style.display="none";
    window.FB="Easy";}
    else if(feedback==3){
    messengerDocument.getElementById("FCheck").style.display="none";
    window.FB="Undecided";}
    else if(feedback==4){
    messengerDocument.getElementById("FCheck").style.display="block";
    window.FB="Difficult";}
    else if(feedback==5){
    messengerDocument.getElementById("FCheck").style.display="block";
    window.FB="Extemely Difficult";}
    messengerDocument.getElementById("Conbutton").style.pointerEvents ="all";
}
function SubmitFB(){
var messengerDocument = document.getElementById('web-messenger-container').contentDocument;
messengerDocument.getElementById("footer").style.pointerEvents ="all";
if(messengerDocument.getElementById("C1").checked){
    window.C1=1;
}
else{
    window.C1=0;
}
if(messengerDocument.getElementById("C2").checked){
    window.C2=1;
}
else{
    window.C2=0;
}
if(messengerDocument.getElementById("C3").checked){
    window.C3=1;
}
else{
    window.C3=0;
}
if(messengerDocument.getElementById("C4").checked){
    window.C4=1;
}
else{
    window.C4=0;
}
if(messengerDocument.getElementById("C5").checked){
    window.C5=1;
}
else{
    window.C5=0;
}
window.comment = messengerDocument.getElementById("comments").value;
var Feedback = '{"Feedback":"'+window.FB+'","C1":"'+window.C1+'","C2":"'+window.C2+'","C3":"'+window.C3+'","C4":"'+window.C4+'","C5":"'+window.C5+'","comment":"'+window.comment+'"}';


messengerDocument.getElementById("feedback").style.display="none";
messengerDocument.getElementById("feed").style.color="black";
messengerDocument.getElementById("feed").style.pointerEvents="none";
messengerDocument.getElementById("footer").style.pointerEvents ="all";
messengerDocument.getElementById("conversation").style.display = "block";
SendMsg(Feedback);
}
function minimize()
{
  

    Bots.close();


}  
// to get the url paramters
function getUrlData() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    
    return vars["bot"];
}

function backtochat(){

    var messengerDocument = document.getElementById('web-messenger-container').contentDocument;
    //messengerDocument.getElementById("flashmsg").style.display="none";
    messengerDocument.getElementById("blog").style.display="none";
    messengerDocument.getElementById("cslider").style.display="grid";
    messengerDocument.getElementById("textintro").style.display="grid";
    messengerDocument.getElementById("selfin").style.display="grid";



}
function specialoffer(){

    var messengerDocument = document.getElementById('web-messenger-container').contentDocument;
    //messengerDocument.getElementById("flash").style.display="none";
    messengerDocument.getElementById("blog").style.display="grid";
    //messengerDocument.getElementById("conversation").style.opacity="0.2";
    messengerDocument.getElementById("selfin").style.display="none";
    messengerDocument.getElementById("textintro").style.display="none";
    messengerDocument.getElementById("cslider").style.display="none";
    //messengerDocument.getElementById("footer").style.opacity="0.2";
    // messengerDocument.getElementById("headerEl").style.display="grid";
    //messengerDocument.getElementById("feedback").style.opacity="0.2";
    messengerDocument.getElementById("form").style.opacity="0.7";
    messengerDocument.getElementById("eve").style.opacity="0.7";
    //messengerDocument.getElementById("conversation").style.pointerEvents ="none";
    messengerDocument.getElementById("selfin").style.pointerEvents ="none";
    messengerDocument.getElementById("textintro").style.pointerEvents ="none";
    messengerDocument.getElementById("cslider").style.pointerEvents ="none";
    //messengerDocument.getElementById("footer").style.pointerEvents ="none";
    // messengerDocument.getElementById("headerEl").style.pointerEvents ="none";
    messengerDocument.getElementById("feedback").style.pointerEvents ="none";
    messengerDocument.getElementById("eve").style.pointerEvents ="none";
    messengerDocument.getElementById("form").style.pointerEvents ="none";
    messengerDocument.getElementById("table").style.pointerEvents ="none";



}

// Decision whether bot should be open or not
function botOpenFunction(data) {

    url = "on";

    if (url == data) {
        Bots.open();
        console.log("qr code has been scanned.");
    } else if(url == data){
        console.log("qr code has not been scanned.");
    }

}
function customUI() {

    // var css = `<style>
    
       

    //             </style>`;


    // create style




    // var style = document.createElement('style');
    // style.innerHTML = css;
    // style.type = 'text/css';
    // access messenger iframe document element
    var messengerDocument = document.getElementById('web-messenger-container').contentDocument;

    // Add the custom CSS to the message container frame.
    messengerDocument.head.innerHTML += "\n<link rel='stylesheet' href='/static/styles/styleUI.css' type='text/css'></link>\n";
    messengerDocument.head.innerHTML += "\n<link rel='stylesheet' href='/static/styles/emoji.css' rel='stylesheet'></link>\n";

    var headerElement = messengerDocument.getElementById('header');
    var introElement = messengerDocument.querySelector('.intro-pane');
    // Hide the Introductio Header.
    introElement.style.display='none';
    headerElement.innerText = '';
    headerElement.innerHTML = introElement.innerHTML + headerElement.innerHTML;
    //quick response button//selfin
	headerElement.insertAdjacentHTML("afterend", "<div id='selfin'> <left> <p id='spara'></p> <span class='action-elem'><span style='position:relative;' onclick='javascript:window.parent.specialoffer()'>Special offers<img style='position:absolute;left:100%;top:-16px;width:30px;' src='http://localhost/static/images/offers_red.svg'></span></span><a class='selfin-style' href='javascript:window.parent.orderpizza();'>Order Pizza</a></div>");
    //conversation intro text//textintro
    headerElement.insertAdjacentHTML("afterend", "<div id='textintro'>How can I help you today?</div>");
    //with next prev button slider//cslider
	headerElement.insertAdjacentHTML("afterend", "<div id='cslider'> <div class='slideshow-container'> <div class='mySlides fade'> <div class='numbertext'>1 / 3</div> <a class='tooltip' href='javascript:window.parent.imgurl(1)' ;><img src='/static/images/slider/1.jpg' style='width:100%'><span class='tooltiptext'>Best Offer</span></a> <div class='text'></div> </div> <div class='mySlides fade'> <div class='numbertext'>2 / 3</div> <a class='tooltip' href='javascript:window.parent.imgurl(1)' ;><img src='/static/images/slider/2.jpg' style='width:100%'><span class='tooltiptext'>Best Offer</span></a> <div class='text'></div> </div> <div class='mySlides fade'> <div class='numbertext'>3 / 3</div> <a class='tooltip' href='javascript:window.parent.imgurl(2);'> <img class='simg' src='/static/images/slider/3.jpg' style='width:100%'> <span class='tooltiptext'>Best Offer </span></a> <div class='text'></div> </div> <a class='prev' href='javascript:window.parent.plusSlides(-1);'>&#10094;</a><a class='next' href='javascript:window.parent.plusSlides(1);'>&#10095;</a> </div> <br> <div style='text-align:center'> </div></div>");
    //our customized header//headerEl
    
   headerElement.insertAdjacentHTML("afterend","<div id='feedback' class='feedback'><div><h1>Overall, how easy was it to get the help you wanted today ?</h1><br><div class='FB1'><div class='FBexD'> <label for='4'> <input class='FB3' type='radio' name='feedback' id='4' value='4'> <span id='ExDiff' color='white' onclick='javascript:window.parent.SetFeedback(5);'>Very<br>Difficult</span> </label></div><div class='FBD'> <label for='3'> <input class='FB3' type='radio' name='feedback' id='3' value='3'> <span id='Diff' onclick='javascript:window.parent.SetFeedback(4);'>Difficult</span> </label></div><div class='FBUn'> <label for='2'> <input class='FB3' type='radio' name='feedback' id='2' value='2'> <span id='NotDec' onclick='javascript:window.parent.SetFeedback(3);'>Neither</span> </label></div><div class='FBE'> <label for='1'> <input class='FB3' type='radio' name='feedback' id='1' value='1'> <span id='Easy' onclick='javascript:window.parent.SetFeedback(2);'>Easy</span> </label></div><div class='FBexE'> <label for='0'> <input class='FB3' type='radio' name='feedback' id='0' value='0'> <span id='ExEasy' onclick='javascript:window.parent.SetFeedback(1)'>Very<br>Easy</span> </label></div></div></div><div id='Whole'><div id='FCheck'><p id='P1'><label>What could we have done better to improve your experience ?</label><br></p><p id='P2'><label>You can select one or more suggestion.</label></p> <input id='C1' type='checkbox'><label id='CL'>Time taken to register query/issue </label><br> <input id='C2' type='checkbox'><label id='CL'>Assistance with discounts and offers </label><br> <input id='C3' type='checkbox'><label id='CL'>Information of Products & Services </label><br> <input id='C4' type='checkbox'><label id='CL'>Ability to understand questions/concerns </label><br> <input id='C5' type='checkbox'><label id='CL'>Others </label><br></div><p id='P3'>Feel free to leave us any additional feedback /suggestions.<br></p><textarea placeholder='Add your comments here' name='comments' id='comments'></textarea><br><br><div id='Conbutton'><a class='submitFB' href='javascript:window.parent.SubmitFB();'>Submit</a></div></div></p></div></div>");
   
   // offer
   headerElement.insertAdjacentHTML("afterend", "<div id='blog'><span style='overflow-y: scroll;' <div id='headingoffer'> Special Offer for You!! <div class='sf-each-offer'> <div class='sf-offers-icon' style='background-image:url(http://localhost/static/images/offer/1.jpg);'> </div> <div style='display: inline-block;width:180px; '><b style='font-size:13px'>HIND CRAFTED STYLE PIZZA </b><br><span style='font-size:11px;color: #6e6e6e;'>Medium Pizza Starting @₹239</span><br><a style='text-decoration:none' onclick='trackBannerOutboundLink(event)' target='_blank' href='https://online.pizzahut.co.in/home'><b style='font-size: 11px;' class='apply-now'>Order Now</b></a></div> </div> <div class='sf-each-offer'> <div class='sf-offers-icon' style='background-image:url(http://localhost/static/images/offer/1.jpg);'> </div> <div style='display: inline-block;width:180px; '><b style='font-size:13px'> WOW EVERYDAY VALUE </b><br><span style='font-size:11px;color: #6e6e6e;'>Two Pizza Starting @₹99</span><br><a style='text-decoration:none' onclick='trackBannerOutboundLink(event)' target='_blank' href='https://online.pizzahut.co.in/home'><b style='font-size: 11px;' class='apply-now'>Order Now</b></a></div> </div> <div class='sf-each-offer'> <div class='sf-offers-icon' style='background-image:url(http://localhost/static/images/offer/1.jpg);'> </div> <div style='display: inline-block;width:180px; '><b style='font-size:13px'> TRIPLE TREAT BOX</b><br><span style='font-size:11px;color: #6e6e6e;'>SAVW UPTO 40%</span><br><a style='text-decoration:none' onclick='trackBannerOutboundLink(event)' target='_blank' href='https://online.pizzahut.co.in/home'><b style='font-size: 11px;' class='apply-now'>Order Now</b><br><br></a></div> </div> </span><a id='b2c' href='javascript:window.parent.backtochat()';> Back to chat</a></div>");
   headerElement.insertAdjacentHTML("afterend","<div id='headerEl' class='header-wrapper' style='background-color:#99cc00'><img class='app-icon' alt='App icon' src='/static/images/Ask-Paddy-icon-small.png'><div class='app-name'>Hi !</div><div class='intro-text'>This is PizzaBot, your personal digital assistant </div><div><div id='min' class='close-handle close-hidden'><a href='javascript:window.parent.minimize();'><i class='fa fa-minus'></i></a>&emsp;<a href='javascript:window.parent.Close();'><i class='fa fa-times'></i></a></div></div></div>")
   //our customized confirmation box
    headerElement.insertAdjacentHTML("afterend","<div id='prompt'>Do you wish to end the conversation?<br><br><a id='Ybut' class='confirmbutton' href='javascript:window.parent.CloseYes();'>Yes</a><a id='Nbut' class='confirmbutton' href='javascript:window.parent.CloseNo();'>No</a></div>");
    //headerElement.insertAdjacentHTML("afterend","<dic id='backchat'><div style=' font-family: calibri; font-weight: 300; font-size: 15px; border: black; background: rgb(0, 87, 184); position: absolute; left: 35%; bottom: 10%; color: white; padding: 8px; border-radius: 10px; '><a> href='javascript:window.parent.backtochat(); Back to chat</a></div></div>");
    window.parent.currentSlide(1);
    botOpenFunction(getUrlData());
    Bots.setDelegate({
        beforeDisplay(messageBody) 
        {
            if (messageBody.metadata && messageBody.metadata.isHidden) {
            return null;
            }
            return messageBody;
            }
        });



   


    /*var headerElement = messengerDocument.getElementById('conversation');
    headerElement.innerHTML='<div><img src="./images/banner.png" height="80" width="395"/></div>' + headerElement.innerHTML
	*/


}



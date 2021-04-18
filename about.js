window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

if(window.mobileAndTabletCheck() == true) {
    $("body").css({
        "overflow-x" : "hidden",
        "-ms-overflow-style" : "none",  /* IE and Edge */
        "scrollbar-width" : "none" /* Firefox */
    })

}
function checkScroll() {
    if(window.mobileAndTabletCheck()== false) {
        console.log(1)
        var scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smartphone: {
                smooth: true
            },
            tablet: {
                smooth: true
            },
            reloadOnContextChange: true,
            smoothMobile: 1
        });
    }
    else {
        $(".intro-para").find("br").remove()
        $(".who-intro").find("br").remove()
        $(".block-intro").find("br").remove()
        $(".about-num").text("XIII")
    }
}

checkScroll();
window.addEventListener("load", checkScroll)

var glitchTarget = document.querySelector(".glitchy");

var textList = ['A','G','T','X','I','I','I'];
var textranColor = ["blue", "yellow", "#E4380A", "red", "orange", "purple", "black", "brown", "beige", "violet"]
function createGlitch() {
    for(var i = 0 ; i < textList.length; i++) {
    var newText= document.createElement("SPAN");
    newText.className = "glitch-letter";
    newText.style.top = Math.random()*((window.innerHeight*25)/120) + "px";
    newText.style.left = Math.random()*((window.innerWidth*34)/120) + "px";
    //newText.style.color = textranColor[Math.floor(Math.random()*10)]
    // var loco = document.createAttribute("data-scroll");
    // var loco1 = document.createAttribute("data-scroll-speed");
    // loco1.value = "3";
    // var delay = document.createAttribute("data-scroll-delay");
    // var direction = document.createAttribute("data-scroll-direction")
    // direction.value = "vertical";
    // delay.value = (i/2).toString();
    // var repeat = document.createAttribute("data-scroll-repeat");
    // newText.setAttributeNode(repeat);
    // newText.setAttributeNode(loco);
    // newText.setAttributeNode(loco1);
    // newText.setAttributeNode(delay);
    //newText.setAttributeNode(direction)
    newText.innerHTML = textList[i];
    glitchTarget.appendChild(newText);
    }
    var distort = baffle(".glitch-letter")
    distort.set({
        characters: 'AGTXIIIAGTXIIIAGTXIII░▓▒▓▓▒███▓███▒░█▓▒',
        speed: 100
    })
    distort.start()
}

createGlitch();

var hasClick = false;
var menuTL = gsap.timeline()
function openMenu() {
    $(".menu").click(function() {
        var path = {
            "/index1.html" : "#home-re",
            "/about.html" : "#about-re",
            "/participants.html" : "#participants-re",
            "/sponsors.html": "#sponsors-re",
            "/history.html" : "#history-re"
        }
        if(hasClick == false) {
            $(".title").css("mix-blend-mode", "normal")
            $(".menu").css("mix-blend-mode", "normal")
            $(path[window.location.pathname]).css("color", "#E4380A")
            $(path[window.location.pathname]).append("<span class = 'pointer-location'><span class = 'pointer-location-slash'>&nbsp;/</span>you are here</span>")
            $(path[window.location.pathname]).css("pointer-events", "none")
            $(".title-menu").css("opacity", "1")
            $(".menu").css("pointer-events", "none")
            setTimeout(function() {$(".menu").css("pointer-events", "all")}, 2500)
            $(".menu-full").addClass("menu-full-background")
            $(".menu-full").css("z-index","99")
            var menuTL = gsap.timeline()
            menuTL.from(".menu-items div", 2, {opacity: 0, stagger: 0.15, top: "50px", ease: Power4.easeOut })
            .from(".menu-e-f div",2, {opacity: 0, stagger: 0.15, bottom: "2%", ease: Power4.easeOut },0)
            .to(".menu a", 0.4, {opacity:0,ease: Power4.easeOut},0)
            .to(".menu a", 0.4, {opacity: 1, ease: Power4.easeOut}, 0.4)
            setTimeout(function() {$(".menu a").text("close")},400)
            hasClick = true
        }
        else if(hasClick == true) {
            setTimeout(function() {
                $(".pointer-location").remove()
                $(".title").css("mix-blend-mode", "difference")
                $(".menu").css("mix-blend-mode", "difference")
            }, 1000)
            $(".title-menu").css("opacity", "0")
            var menuTL = gsap.timeline()
            menuTL.to(".menu a", 0.4, {opacity:0,ease: Power4.easeOut},0)
            .to(".menu a", 0.4, {opacity: 1, ease: Power4.easeOut}, 0.4)
            setTimeout(function() {$(".menu a").text("menu")},400)
            setTimeout(function() { $(".menu-full").css("z-index","-1")},1000)
            setTimeout(function() {$(".menu-full").removeClass("menu-full-background")}, 500)
            hasClick = false;
        }
    })
}

openMenu()


var menuSVG;
function menuHover() {
    if(window.mobileAndTabletCheck() == false) {
        const link = document.querySelectorAll('.menu-item span');
        const cursor = document.querySelector(".menu-cursor")
        const animateit = function (e) {
            const div = this.parentElement;
            const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this.parentElement,

            move = 80,
            xMove = x / width * (move * 3) - move,
            yMove = y / height * (move * 2.5) - move;

            div.style.transform = `translate(${xMove}px, ${yMove}px)`;
            cursor.style.transform = "scale(5.5)"
            if (e.type === 'mouseleave') {
                div.style.transform = '';
                cursor.style.transform = "scale(0)"
            }
        };
        link.forEach(b => b.addEventListener('mousemove', animateit));
        link.forEach(b => b.addEventListener('mouseleave', animateit));

        $(document).mousemove(function(e) {
            $('.menu-cursor').css({
                left: e.clientX,
                top: e.clientY 
            })
        })
    }
    $(".menu-e-f div").hover(
        function() {
            if($(this).find("span").text() == "email") {
                var id = $(this).find("svg").attr("id")
                var jmenusvg = "#" + id;
                $(jmenusvg).css("opacity", "1")
                console.log(id)
                menuSVG = new Vivus(id,
                {
                    type: 'oneByOne', 
                    duration: 400,
                    animTimingFunction: Vivus.EASE_OUT
                })
                menuSVG.play(15);
            }
            if($(this).find("span").text() == "facebook") {
                var id = $(this).find("svg").attr("id")
                var jmenusvg = "#" + id;
                $(jmenusvg).css("opacity", "1")
                console.log(id)
                menuSVG = new Vivus(id,
                {
                    type: 'oneByOne', 
                    duration: 400,
                    animTimingFunction: Vivus.EASE_OUT
                })
                menuSVG.play(15);
            }

            if(window.mobileAndTabletCheck() == true) {
                setTimeout(function(){menuSVG.stop().play(-15)
                },600)
            }
        },
        function() {
            menuSVG.stop().play(-15)

        }
    )


    $(".menu-facebook").click(function() {
        window.location.assign("https://www.facebook.com/agtseasonxiii")
        
    })

    $(".menu-email").click(function() {
        window.location.assign("mailto:agt.seasonxiii@gmail.com");
    })

    $(".menu-item span").click(function(){
        var location = $(this).attr("href")
        window.location.assign(location)
    })
}

menuHover();

$(".nav-container ul li").hover(
    function() {
        $(this).find("path").attr("stroke","#E4380A");
    },
    function() {
        $(this).find("path").attr("stroke","black");
    }
)

$(".contact-about-info li").hover(
    function() {
        console.log(1)
        $(this).find("span").css("opacity", "1");
    },
    function () {
        $(this).find("span").css("opacity", "0");
    }

)

var timeline = gsap.timeline();
timeline.from(".head", 2, {opacity:0, skewY: -20,x:"-30%", ease: Power4.easeOut})
timeline.from(".intro-para", 2, { y:"100%", ease: Power4.easeOut},0)
timeline.from(".nav-container", 2, { y:"100%", ease: Power4.easeOut},0)
timeline.from(".glitch-letter",2,  {opacity:0, ease: Power4.easeOut},0)

var tl = gsap.timeline();
tl.from(".title", {opacity:0, duration: 1.8, y:"20%", ease: Power4.easeOut})
.from(".arrow-icon", {opacity:0, duration: 1.8, y:"20%", ease: Power4.easeOut},0)
.from(".line",2, {width: 0, ease: Power4.easeOut},0)
.from(".nav-container ul li", 2, {width:0, ease: Power4.easeOut},0)

var controller = new ScrollMagic.Controller();
var past = 0;
function createWho() {
    var whotl = gsap.timeline()
    if(past==1) {
        whotl.kill();
    }
    whotl.from(".about-img img", {opacity:0, duration: 2.4, x:"30%", ease: Power4.easeOut},0)
    .to(".about-img img", {opacity:1, duration: 2.4, ease: Power4.easeOut},0)
    .from(".who-intro", {opacity:0, duration:2.4, x: "30%",  skewY: -30, ease: Power4.easeOut },0 )
    .to(".who-intro", {opacity:1, duration: 2.4, ease: Power4.easeOut},0)
    .from(".about-num", {opacity:0, duration:2.4, x: "30%",  skewY: -30, ease: Power4.easeOut },0 )
    .to(".about-num", {opacity:1, duration: 2.4, ease: Power4.easeOut},0)

    var svg = document.querySelector(".is-svg")
    svg.classList.add("is-animate")
}
var whoScene = new ScrollMagic.Scene({
    triggerElement: ".who-title",
    triggerHook: 0.2
  })
  .on('start', function () {
    if(past==0){
    createWho();
    past = 1
    controller = null;
    }
  })
  .addTo(controller);

var navWho = document.querySelector("#nav-who");
navWho.addEventListener("click", function() {
    scroll.scrollTo(document.querySelector(".section2"))
})

var navWhy = document.querySelector("#nav-why");
navWhy.addEventListener("click", function() {
    scroll.scrollTo(document.querySelector(".section3"))
})

var navHow = document.querySelector("#nav-how");
navHow.addEventListener("click", function() {
    scroll.scrollTo(document.querySelector(".section4"))
})

var circleType = new CircleType(document.getElementById("rotated")).radius(30);
// var cirTween = gsap.timeline().from(".circular-text",0.9, {opacity:0, y: "30%", ease: Power4.easeOut},0)
// var controller = new ScrollMagic.Controller();
// var circle = new ScrollMagic.Scene({
//     triggerElement: ".about-img",
//     triggerHook: 0
//   })
//   .setTween(cirTween)
//   .addTo(controller);

var howTween = gsap.timeline({default: Power4.easeOut})
howTween.from(".block-id", 1.5, { stagger: 0.3, opacity:0, skewY: -30, ease: Power4.easeOut},0)
.from(".block-title", 1.5, { opacity:0, stagger:0.3, ease: Power4.easeOut},0)
.from(".block-intro", 1.5, { opacity:0, stagger:0.3, ease: Power4.easeOut},0)

controller = new ScrollMagic.Controller();

var past1 = 0;
var howScene = new ScrollMagic.Scene({
    triggerElement: ".section4",
    triggerHook: 0.9
})
.setTween(howTween)
.on('start', function () {
    if(past1==0){
    past1 = 1
    }
    else {
        controller = null;
    }
})
.addTo(controller)

function contactAboutHover() {
    $(".contact-about-info li").click(
        function(){
            if($(this).text() == "Facebook ⇥") {
                window.location.assign("https://www.facebook.com/agtseasonxiii")
            }
            else if( $(this).text() == "Email ⇥") {
                window.location.assign("mailto:agt.seasonxiii@gmail.com")
            }
            else {
                window.location.assign("https://www.instagram.com/anh1daynguoihot.agt/")

            }


        }
    )
}

contactAboutHover()

//TEXT FOLLOW CURSOR 

// ;(function(){

//     var msg = "FLORESCENCE";
    
//     // Set font's style size for calculating dimensions
//     // Set to number of desired pixels font size (decimal and negative numbers not allowed)
//     var size = 40;
    
//     // Set both to 1 for plain circle, set one of them to 2 for oval
//     // Other numbers & decimals can have interesting effects, keep these low (0 to 3)
//     var circleY = 1; var circleX = 1;
    
//     // The larger this divisor, the smaller the spaces between letters
//     // (decimals allowed, not negative numbers)
//     var letter_spacing = 4;
    
//     // The larger this multiplier, the bigger the circle/oval
//     // (decimals allowed, not negative numbers, some rounding is applied)
//     var diameter = 22;
    
//     // Rotation speed, set it negative if you want it to spin clockwise (decimals allowed)
//     var rotation = 0.2;
    
//     // This is not the rotation speed, its the reaction speed, keep low!
//     // Set this to 1 or a decimal less than one (decimals allowed, not negative numbers)
//     var speed = 0.5;
    
//     ////////////////////// Stop Editing //////////////////////
    
//     if (!window.addEventListener && !window.attachEvent || !document.createElement) return;
    
//     msg = msg.split('');
//     var n = msg.length - 1, a = Math.round(size * diameter * 0.20), currStep = 20,
    
//     ymouse = a * circleY + 20, xmouse = a * circleX + 20, y = [], x = [], Y = [], X = [],
    
//     o = document.createElement('div'), oi = document.createElement('div'),
    
//     b = document.compatMode && document.compatMode != "BackCompat"? document.documentElement : document.body,
    
//     mouse = function(e){
    
//      e = e || window.event;
//      ymouse = !isNaN(e.pageY)? e.pageY : e.clientY; // y-position
//      xmouse = !isNaN(e.pageX)? e.pageX : e.clientX; // x-position
    
//     },
    
//     makecircle = function(){ // rotation/positioning
    
//      if(init.nopy){
    
//       o.style.top = (b || document.body).scrollTop + 'px';
//       o.style.left = (b || document.body).scrollLeft + 'px';
    
//      };
    
//      currStep -= rotation;
    
//      for (var d, i = n; i > -1; --i){ // makes the circle
    
//       d = document.getElementById('iemsg' + i).style;
//       d.top = Math.round(y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15) + 'px';
//       d.left = Math.round(x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX) + 'px';
    
//      };
    
//     },
    
    
    
//     drag = function(){ // makes the resistance
    
//       y[0] = Y[0] += (ymouse - Y[0]) * speed;
//      x[0] = X[0] += (xmouse - 20 - X[0]) * speed;
//      for (var i = n; i > 0; --i){
//       y[i] = Y[i] += (y[i-1] - Y[i]) * speed;
//       x[i] = X[i] += (x[i-1] - X[i]) * speed;
//      };
    
//      makecircle();
    
//     },
    
    
    
//     init = function(){ // appends message divs, & sets initial values for positioning arrays
    
//      if(!isNaN(window.pageYOffset)){
    
//       ymouse += window.pageYOffset;
//       xmouse += window.pageXOffset;
    
//      } else init.nopy = true;
    
//      for (var d, i = n; i > -1; --i){
    
//       d = document.createElement('div'); d.id = 'iemsg' + i;
//       d.style.height = d.style.width = a + 'px';
//       d.appendChild(document.createTextNode(msg[i]));
//       oi.appendChild(d); y[i] = x[i] = Y[i] = X[i] = 0;
    
//      };
     
//      var target = document.querySelector(".section5")
//      o.appendChild(oi); target.appendChild(o);
    
//      setInterval(drag, 25);
    
//     },
    
    
    
//     ascroll = function(){
    
//      ymouse += window.pageYOffset;
//      xmouse += window.pageXOffset;
//      window.removeEventListener('scroll', ascroll, false);
    
//     };
    
    
    
//     o.id = 'outerCircleText'; o.style.fontSize = size + 'px';
    
    
    
//     if (window.addEventListener){
    
//      window.addEventListener('load', init, false);
//      document.addEventListener('mouseover', mouse, false);
//      document.addEventListener('mousemove', mouse, false);
//       if (/Apple/.test(navigator.vendor))
//        window.addEventListener('scroll', ascroll, false);
    
//     }
    
//     else if (window.attachEvent){
    
//      window.attachEvent('onload', init);
//      document.attachEvent('onmousemove', mouse);
    
//     };
    
    
    
// })();


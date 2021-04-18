window.onload = function() {

setTimeout(function () {
   
    }, 1000);

$(window).ready(function() {
    // When the page has loaded
    $("body").fadeIn(2000);
});

window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

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
}

checkScroll();
window.addEventListener("load", checkScroll)


var timeout = 9000;

function loadingAni() {
    var loadTl = gsap.timeline()
    loadTl.to(".load-quote span", 2, {opacity:1, stagger: 0.2, ease: Power4.easeOut})
    .to(".loading-screen",2, {opacity:0, ease: Power4.easeOut, onComplete: function() {
        $(".loading-screen").css("z-index", "-1")
        $(".load-quote span").css("z-index", "-1")
    }})
}



function timelineOne() {
    var sectionOne = gsap.timeline();
    sectionOne.from(".intro-text span",2, {opacity:0, stagger: 0.2, top: "50px", ease: Power4.easeOut})
    .from(".intro-text-circle", 1.5, {scale: 0, ease: Power4.easeOut},0)
    .from(".right-hand-circle", 1.5, {delay: 1, scale: 0, ease: Power4.easeOut},0)
    .from(".left-hand-circle", 1.5, {delay: 1, scale: 0, ease: Power4.easeOut},0)
    .from(".title", 1.5 ,{opacity:0, y: "50%", ease: Power4.easeOut},0 )
    .from(".menu", 1.5 ,{opacity:0, y: "50%", ease: Power4.easeOut},0 )
    .from(".to-playground",1.5, {opacity:0, top: "100px", ease: Power4.easeOut},0)
    setTimeout(function () {
        $(".block-1").addClass("rotate")
    },500)
    $(".to-playground a").hover(
        function() {
            $(".to-playground").addClass("to-playground-rotate")
            console.log("1")
        },
        function() {
            $(".to-playground").removeClass("to-playground-rotate")
        }
    )
}

function svgSectionOne() {
    var leftHand = new Walkway({
        selector: '#left-hand-ani',
        duration: 2000,
        easing: function (t) {
            return t * t;
        }
    });
    var rightHand = new Walkway({
        selector: '#right-hand-ani',
        duration: 2000,
        easing: function (t) {
            return t * t;
        }
    });
    leftHand.draw();
    rightHand.draw();
}

var controller = new ScrollMagic.Controller();
var sceneOne = new ScrollMagic.Scene({
    triggerElement: ".section-1",
    triggerHook: 0.9
})
.on('start', function () {
    loadingAni()
    setTimeout(function() {
        timelineOne();
        svgSectionOne();
    },2000)
})
.addTo(controller);

var i = 0;

$(".left-hand-circle").click(function(){console.log(1)})
$(".left-hand-circle-a").hover(
    function(){
        var tl = gsap.timeline();
        tl.to(".left-hand-circle", {scale: 1.5, ease: Power4.easeOut})
    },
    function(){
        var tl = gsap.timeline();
        tl.to(".left-hand-circle", {scale: 1, ease: Power4.easeOut})

    }
)

$(".right-hand-circle-a").hover(
    function(){
        var tl = gsap.timeline();
        tl.to(".right-hand-circle", {scale: 1.5, ease: Power4.easeOut})
    },
    function(){
        var tl = gsap.timeline();
        tl.to(".right-hand-circle", {scale: 1, ease: Power4.easeOut})

    }
)

$(".intro-text-circle-a").hover(
    function(){
        var tl = gsap.timeline();
        tl.to(".intro-text-circle", {scale: 1.5, ease: Power4.easeOut})
    },
    function(){
        var tl = gsap.timeline();
        tl.to(".intro-text-circle", {scale: 1, ease: Power4.easeOut})

    }
)

$(".hand-interest-circle-a").hover(
    function(){
        var tl = gsap.timeline();
        console.log(1)
        tl.to(".hand-interest-circle", {scale: 1.5, ease: Power4.easeOut})
    },
    function(){
        var tl = gsap.timeline();
        tl.to(".hand-interest-circle", {scale: 1, ease: Power4.easeOut})

    }
)

var trans = $('.about-us-rect').attr('transform');
$('.about-us-rect').attr(trans+' rotate(45deg)');

var stroke = gsap.timeline()
stroke.from(".end-text-stroke", 1, {opacity:0, ease: Power4.easeOut})
.from(".arrow-down", 1, {opacity:0, ease: Power4.easeOut},0.5)
var addSceneTriggerOnce = false
var addScene = new ScrollMagic.Scene({
    triggerElement:".end-text",
    triggerHook: 1.5
})
.setTween(stroke)
.on('start', function() {
    if(addSceneTriggerOnce == true) {
        controller = null
        return
    }
    var endTextStroke = new Walkway({
        selector: ".end-text-stroke",
        duration: 1000,
        easing: function (t) {
            return t * t;
        }
    })
    var arrowDown =  new Walkway({
        selector: ".arrow-down-stroke",
        duration: 3000,
        easing: function (t) {
            return t * t;
        }
    })
    endTextStroke.draw();
    arrowDown.draw();
    addSceneTriggerOnce = true;
    
})
.addTo(controller)



var sectionTwoTL = gsap.timeline();
sectionTwoTL.from(".intro-section span", 2 ,{opacity:0, top: "-30px", stagger: 0.05, ease: Power4.easeOut})
.from(".event-stroke", 2 ,{opacity:0, delay: 1, stagger: 0.05, ease: Power4.easeOut},0)

var sectionTwoKnowMore = gsap.timeline();
sectionTwoKnowMore.from(".know-more span", 3,{opacity:0, top: "-30px", stagger: 0.1, ease: Power4.easeOut},0 )
.from(".hand-interest-circle", 1.5, {scale:0, ease:Power4.easeOut},0)
.from(".hand-interest", 1.5, {opacity:0, top: "20%", ease: Power4.easeOut},0 )


var sectionThreeTl = gsap.timeline();
sectionThreeTl.from(".section-3-nav-header span", 2,{opacity:0, top: "30px", stagger: 0.2, ease: Power4.easeOut},0 )
.from(".section-3-nav-header-hand" , 1.5 , {opacity:0, top: "30vw", ease: Power4.easeOut},0)
.from(".section-3-rows" ,2, {opacity: 0, delay: 0.25, top: "10vh", stagger:0.15, ease: Power4.easeOut},0)
.from(".section-3-nav-title-circle-yellow",2, {scale: 0, ease: Power4.easeOut},0)
.from(".section-3-nav-title-circle-blue",2, {scale: 0, ease: Power4.easeOut},0)

var sectionContactTL = gsap.timeline()
sectionContactTL.from( ".section-3-arrow-to-contact", 2, {opacity:0, ease: Power4.easeOut},0)
.from(".contact-text span", 3,{opacity:0, y: "25%", stagger: 0.1, ease: Power4.easeOut},0)


var sectionContactAGT = gsap.timeline();
sectionContactAGT.from(".agt-wrapper div", 2,{delay:0.5,opacity:0, x: "25%", stagger: 0.1, ease: Power4.easeOut},0 )
.from(".contact-href", 3,{opacity:0, x: "25%", stagger: 0.2, ease: Power4.easeOut},0)

var circleTl = gsap.timeline();
circleTl.from(".inner-circle-text", 3.5, {opacity:0, ease: Power4.easeOut},0)
.from(".outer-circle-text",3.5, {delay:0.5, opacity:0, ease: Power4.easeOut},0)

function sectionTwoSVG() {
    var pointerMore = new Walkway({
        selector: '#pointer-more',
        duration: 1000,
        easing: function (t) {
            return t * t;
        }
    });
    pointerMore.draw();
}

var sceneTwo = new ScrollMagic.Scene({
    triggerElement: ".intro-section",
    triggerHook: 0.9
})
.setTween(sectionTwoTL)
.on('start', function () {
})
.addTo(controller);

var sceneThree = new ScrollMagic.Scene({
    triggerElement: ".know-more",
    triggerHook: 0.9
})
.setTween(sectionTwoKnowMore)
.on('start', function () {
    sectionTwoSVG();
})
.addTo(controller);

var sceneFour = new ScrollMagic.Scene({
    triggerElement: ".know-more-header",
    triggerHook: 0.9
})
.setTween(sectionThreeTl)
.on('start', function () {
})
.addTo(controller);

var sceneFive = new ScrollMagic.Scene({
    triggerElement: ".circle-background",
    triggerHook: 0.9
})
.setTween(circleTl)
.on('start', function () {
})
.addTo(controller);

var sceneSixPast = 0;
var sceneSix = new ScrollMagic.Scene({
    triggerElement: ".contact-section",
    triggerHook: 0.8
})
.setTween(sectionContactTL)
.on('start', function () {
    if(sceneSixPast==0){
        var pointerCont = new Walkway({
            selector: '#pointer-cont',
            duration: 1000,
            easing: function (t) {
                return t * t;
            }
        });
        pointerCont.draw();
        var pointerStr = new Walkway({
            selector: '#pointer-stroke',
            duration: 1000,
            easing: function (t) {
                return t * t;
            }
        });
        pointerStr.draw();
        sceneSixPast = 1;
    }
})
.addTo(controller);

var sceneSeven = new ScrollMagic.Scene({
    triggerElement: "#pointer-stroke",
    triggerHook: 0.6
})
.on('start', function () {
        var pointerStr = new Walkway({
            selector: '#pointer-stroke',
            duration: 1000,
            easing: function (t) {
                return t * t;
            }
        });
        pointerStr.draw();
})
.addTo(controller);

var sceneEight = new ScrollMagic.Scene({
    triggerElement: ".agt-wrapper",
    triggerHook: 0.3
})
.setTween(sectionContactAGT)
.on('start', function () {

})
.addTo(controller);


function createCircleType() {
    var innerCircle = new CircleType(document.getElementById("inner-text")).radius(15);
    var outerCircle = new CircleType(document.getElementById("outer-text")).radius(15);
    //var ctCircle = new CircleType(document.getElementById("agt-ci")).radius(200);
}


createCircleType();


var svg;
var svgLarge;
var i = 0;
var jsvg;
function sectionThreeSVG() {
    if(window.mobileAndTabletCheck() == false) {
        $(".section-3-rows a").hover(
            function() {
                $(".section-3-nav-header").addClass("section-3-header-ani")
                $(".section-3-nav-header-hand").css("opacity", "0")
                if($(this).text() == "About") {
                    console.log(1)
                    var id =  "svg-to-animate-about";
                    var svgID = "section-3-about-svg-large";
                    $(".section-3-nav-title").text("WHO ARE WE?")
                    var hoverTL = gsap.timeline();
                    hoverTL.to(".section-3-nav-title-circle-yellow", 2.5, {top: "-26vw", left: "43vw", ease: Power4.easeOut})
                    hoverTL.to(".section-3-nav-title-circle-blue", 2.5, {left: "56.5vw", top:"-9vw", ease: Power4.easeOut},0)
                }
                else if($(this).text() == "History") {
                    var id =  "svg-to-animate-history";
                    var svgID = "section-3-history-svg-large";
                    $(".section-3-nav-title").text("13 YEARS IN THE MAKING!")
                    var hoverTL = gsap.timeline();
                    hoverTL.to(".section-3-nav-title-circle-yellow", 2.5, {top: "-27.5vw", left: "48.5vw", ease: Power4.easeOut})
                    hoverTL.to(".section-3-nav-title-circle-blue", 2.5, {left: "47vw", top:"-6vw", ease: Power4.easeOut},0)
                }
                else if($(this).text() == "Sponsors") {
                    var id =  "svg-to-animate-sponsors";
                    var svgID = "section-3-sponsors-svg-large";
                    $(".section-3-nav-title").text("SUPPORT US!")
                    var hoverTL = gsap.timeline();
                    hoverTL.to(".section-3-nav-title-circle-yellow", 2.5, {top: "-15vw", left: "70vw", ease: Power4.easeOut})
                    hoverTL.to(".section-3-nav-title-circle-blue", 2.5, {left: "25vw", top:"-15vw", ease: Power4.easeOut},0)
                }
                else if($(this).text() == "Contacts"){
                    var id =  "svg-to-animate-contacts";
                    var svgID = "section-3-contact-svg-large";
                    $(".section-3-nav-title").text("LET'S DO THIS TOGETHER!")
                    var hoverTL = gsap.timeline();
                    hoverTL.to(".section-3-nav-title-circle-yellow", 2.5, {top: "-10vw", left: "53vw", ease: Power4.easeOut})
                    hoverTL.to(".section-3-nav-title-circle-blue", 2.5, {left: "42vw", top:"-20vw", ease: Power4.easeOut},0)
                }
                $(this).parent().find(".section-3-svg").attr("id", id);
                $(this).parent().find(".section-3-svg").css("transition", "")
                $(this).parent().find(".section-3-svg").css("opacity", "1")
                $(".section-3-nav-title").css("transition", "opacity 0.5s ease")
                $(this).parent().find("svg").css("opacity", "1")
                $(".section-3-nav-title").css("opacity", "1")
                jsvg = "#" + svgID;
                $(jsvg).css("opacity", "1")
                svg = new Vivus(id,
                {
                type: 'oneByOne', 
                duration: 400,
                animTimingFunction: Vivus.EASE_OUT
                })
                svgLarge = new Vivus(svgID,
                {
                    type: 'sync', 
                    duration: 600,
                    animTimingFunction: Vivus.EASE_OUT
                })
                svg.play(15);
                setTimeout(function(){svgLarge.play(20)}, 500)
            },
            function() {
                var hoverTL = gsap.timeline();
                hoverTL.to(".section-3-nav-title-circle-yellow", 2.5, {top: "-21vw",left: "60vw", ease: Power4.easeOut})
                hoverTL.to(".section-3-nav-title-circle-blue", 2.5, {top: "-10.9vw",left: "29.5vw", ease: Power4.easeOut},0)
                $(jsvg).css("opacity", "0")
                $(".section-3-nav-title").css("transition", "opacity 0.5s ease")
                $(".section-3-nav-title").css("opacity", "0")
                $(this).parent().find(".section-3-svg").css("transition", "opacity 0.5s ease")
                $(this).parent().find(".section-3-svg").css("transition-delay", "1s")
                $(this).parent().find(".section-3-svg").css("opacity", "0")
                $(".section-3-nav-header").removeClass("section-3-header-ani")
                $(".section-3-nav-header-hand").css("opacity", "1")
                svg.stop().play(-15, function() {
                })
                svgLarge.stop().play(-15, function() {
                })
                setTimeout(function() {
                    $(this).parent().find(".section-3-svg").css("opacity",0)
                    $(this).parent().find(".section-3-svg-large").css("opacity",0)
                })
        }
    )
    $(".section-3-rows a").click(
        function(e) {
            e.preventDefault();
            var target = e.target.href
            TweenMax.to(".content", 0.5, {delay: 0.5, opacity:0, ease: Power4.easeOut})
            setTimeout(function() {
                window.location.href = target
            },1000)
        })
    }
    else {
        $(".section-3-rows a").click(
            function(e) {
                $(".section-3-nav-header").addClass("section-3-header-ani")
                $(".section-3-nav-header-hand").css("opacity", "0")
                if($(this).text() == "About") {
                    console.log(1)
                    var id =  "svg-to-animate-about";
                    var svgID = "section-3-about-svg-large";
                    $(".section-3-nav-title").text("WHO ARE WE?")
                    var hoverTL = gsap.timeline();
                    hoverTL.to(".section-3-nav-title-circle-yellow", 2.5, {top: "-26vw", left: "43vw", ease: Power4.easeOut})
                    hoverTL.to(".section-3-nav-title-circle-blue", 2.5, {left: "56.5vw", top:"-9vw", ease: Power4.easeOut},0)
                }
                else if($(this).text() == "History") {
                    var id =  "svg-to-animate-history";
                    var svgID = "section-3-history-svg-large";
                    $(".section-3-nav-title").text("13 YEARS IN THE MAKING!")
                    var hoverTL = gsap.timeline();
                    hoverTL.to(".section-3-nav-title-circle-yellow", 2.5, {top: "-27.5vw", left: "48.5vw", ease: Power4.easeOut})
                    hoverTL.to(".section-3-nav-title-circle-blue", 2.5, {left: "47vw", top:"-6vw", ease: Power4.easeOut},0)
                }
                else if($(this).text() == "Sponsors") {
                    var id =  "svg-to-animate-sponsors";
                    var svgID = "section-3-sponsors-svg-large";
                    $(".section-3-nav-title").text("SUPPORT US!")
                    var hoverTL = gsap.timeline();
                    hoverTL.to(".section-3-nav-title-circle-yellow", 2.5, {top: "-15vw", left: "70vw", ease: Power4.easeOut})
                    hoverTL.to(".section-3-nav-title-circle-blue", 2.5, {left: "25vw", top:"-15vw", ease: Power4.easeOut},0)
                }
                else if($(this).text() == "Contacts"){
                    var id =  "svg-to-animate-contacts";
                    var svgID = "section-3-contact-svg-large";
                    $(".section-3-nav-title").text("LET'S DO THIS TOGETHER!")
                    var hoverTL = gsap.timeline();
                    hoverTL.to(".section-3-nav-title-circle-yellow", 2.5, {top: "-10vw", left: "53vw", ease: Power4.easeOut})
                    hoverTL.to(".section-3-nav-title-circle-blue", 2.5, {left: "42vw", top:"-20vw", ease: Power4.easeOut},0)
                }
                $(this).parent().find(".section-3-svg").attr("id", id);
                $(this).parent().find(".section-3-svg").css("transition", "")
                $(this).parent().find(".section-3-svg").css("opacity", "1")
                $(".section-3-nav-title").css("transition", "opacity 0.5s ease")
                $(this).parent().find("svg").css("opacity", "1")
                $(".section-3-nav-title").css("opacity", "1")
                jsvg = "#" + svgID;
                $(jsvg).css("opacity", "1")
                svg = new Vivus(id,
                {
                type: 'oneByOne', 
                duration: 400,
                animTimingFunction: Vivus.EASE_OUT
                })
                svgLarge = new Vivus(svgID,
                {
                    type: 'sync', 
                    duration: 600,
                    animTimingFunction: Vivus.EASE_OUT
                })
                svg.play(15);
                setTimeout(function(){svgLarge.play(20)}, 500)
                e.preventDefault();
                var target = e.target.href
                TweenMax.to(".content", 0.5, {delay: 0.5, opacity:0, ease: Power4.easeOut})
                setTimeout(function() {
                    window.location.href = target
                },10000)
            })
        
    }
}

sectionThreeSVG();

var distort;
function contactHover() {
   $(".contact-href a").hover(
       function() {

        var classA = "." + $(this).attr("class")
        console.log(classA)
        distort = baffle(classA)
        distort.set({
            characters: 'XOXO1313',
            speed: 100
        })
        distort.start()
        distort.reveal(1000)
       },
       function() {
           distort.stop()
           $(this).text($(this).attr("class"))
       }
   )
}

contactHover();


function openMail() {
    window.location.assign("mailto:agt.seasonxiii@gmail.com");
}

$(".email").click(function() {
    openMail();
})

$("#email-hover").click(function() {
    openMail();
})

var hasClick = false;
var menuTL = gsap.timeline()
function openMenu() {
    $(".menu").click(function() {
        if(hasClick == false) {
            $(".title").css("mix-blend-mode", "normal")
            $(".menu").css("mix-blend-mode", "normal")
            $("#home-re").css("color", "#E4380A")
            $("#home-re").append("<span class = 'pointer-location'><span class = 'pointer-location-slash'>&nbsp;/</span>you are here</span>")
            $("#home-re").css("pointer-events", "none")
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

                if(window.mobileAndTabletCheck() == true) {
                    setTimeout(function(){menuSVG.stop().play(-15)
                    },600)
                }
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

if(window.mobileAndTabletCheck() == true) {
    $(".content").css({
        "overflow-x" : "hidden",
        "-ms-overflow-style" : "none",  /* IE and Edge */
        "scrollbar-width" : "none" /* Firefox */
    })
}


window.addEventListener("resize", function() {
    //window.location.reload()
})

}
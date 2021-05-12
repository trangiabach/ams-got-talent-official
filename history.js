window.onload = function() {

setTimeout(function(){
    var scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        },
        smoothMobile: 1
    });
},500)

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
            $(path[window.location.pathname]).css("color", "#E4380A")
            $(path[window.location.pathname]).append("<span class = 'pointer-location'><span class = 'pointer-location-slash'>&nbsp;/</span>you are here</span>")
            $(path[window.location.pathname]).css("pointer-events", "none")
            $(".title-menu").css("opacity", "1")
            $(".title").css("opacity", "0")
            $(".menu").css("pointer-events", "none")
            setTimeout(function() {$(".menu").css("pointer-events", "all")}, 2500)
            $(".menu-full").addClass("menu-full-background")
            $(".menu-full").css("z-index","99")
            var menuTL = gsap.timeline()
            menuTL.from(".menu-items div", 2, {opacity: 0, stagger: 0.15, top: "50px", ease: Power4.easeOut })
            .from(".menu-e-f div",2, {opacity: 0, stagger: 0.15, bottom: "2%", ease: Power4.easeOut },0)
            .to(".menu a", 0.4, {opacity:0,ease: Power4.easeOut},0)
            .to(".menu a", 0.4, {opacity: 1, ease: Power4.easeOut}, 0.4)
            if(window.innerWidth < 416) {
                $(".menu").css({
                    "right": "4%",
                    "top": "3%",
                })
            }
            console.log(window.innerWidth)
            setTimeout(function() {
                $(".menu a").text("close")
                if(window.innerWidth < 416) {
                    $(".menu").css({
                        "right": "4%",
                        "top": "3%",
                    })
                }
            },400)
            hasClick = true
        }
        else if(hasClick == true) {
            setTimeout(function() {
                $(".pointer-location").remove()
            }, 1000)
            $(".title-menu").css("opacity", "0")
            $(".title").css("opacity", "1")
            var menuTL = gsap.timeline()
            menuTL.to(".menu a", 0.4, {opacity:0,ease: Power4.easeOut},0)
            .to(".menu a", 0.4, {opacity: 1, ease: Power4.easeOut}, 0.4)
            setTimeout(function() {
                $(".menu a").text("menu")
                if(window.innerWidth < 416) {
                    $(".menu").css({
                        "left": "75%",
                        "top": "90%",
                    })
                }
            },400)
            setTimeout(function() { $(".menu-full").css("z-index","-1")},1000)
            setTimeout(function() {$(".menu-full").removeClass("menu-full-background")}, 500)
            hasClick = false;
        }
    })
}

openMenu()


var menuSVG;
function menuHover() {
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

function historyTL() {
    var historytl = gsap.timeline()
    historytl.from(".history-child", 2, {opacity:0, x: "-20%", stagger: 0.1, ease: Power4.easeOut},0)
    .from(".history-intro", 2 ,{opacity:0, ease: Power4.easeOut},0)
}

historyTL()


function historyHover() {
    const images = {
        florescence: "florescence.JPG",
        flagrantia: "flagrantia.JPG",
        novaturient: "novatur.JPG",
        querencia: "querencia.JPG",
        aquilae: "aquilae.JPG",
        solstice: "solstice.jpg",
        nebulae: "nebulae.jpg",
        iridescence: "iridescence.jpg",
        seasonV: "season V.jpg",
        seasonIV: "season IV.jpg",
        seasonIII: "season III.jpg",
        seasonII: "season II.jpg",
        seasonI: ""
    }
    const cursor = document.querySelector(".history-image-cursor")
    $(document).mousemove(function(e) {
        $('.history-image-cursor').css({
            left: e.clientX - 50,
            top: e.clientY - 50 
        })
    })
    $(".season").hover(
        function() {
            $(this).attr("id", "season-change")
            $(".history-image-cursor img").css("opacity", "1")
            $(".history-slash").css("opacity", "0")
            $("#season-change").css("color", "#E4380A")
            $(".season:not(#season-change)").css("opacity", "0")
            $(".season:not(#season-change)").css("color", "white")
            var key = $(this).text()  
            key = key.replace(/\s+/g, '');
            key = key.toString()
            var imageSrc = images[key]
            console.log(imageSrc)
            $(".history-image-cursor img").attr("src", imageSrc)
        },
        function() {
            $(this).attr("id", "")
            $(".history-image-cursor img").css("opacity", "0")
            $(".history-slash").css("opacity", "1")
            $(".season:not(#season-change)").css("opacity", "1")
            $(".season:not(#season-change)").css("color", "black")
        }
    )
    $(".season").click(function(e){
        window.location.href = $(this).attr("href");
    })
}

historyHover()

}
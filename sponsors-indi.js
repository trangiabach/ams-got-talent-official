//new change
window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

if(window.mobileAndTabletCheck()== false) {
    setTimeout(function() {
        var scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            smoothMobile:1,
            lerp: 0.07,
            multitplier: 1.5,
        });
    },500)
    $("body").css("position", "fixed")
}

//new change


function nextSponsorHover() {
    $("#next_participant_name a").hover(
        function() {
            $(this).css("color", "#E4380A")
        },
        function() {
            $(this).css("color", "black")
        }
    )

    $("#all_participants a").hover(
        function() {
            $(this).css("color", "#E4380A")
        },
        function() {
            $(this).css("color", "black")
        }
    )
}

nextSponsorHover();

var hasClick = false;
var menuTL = gsap.timeline()
function openMenu() {
    $(".menu").click(function() {
        var path = {
            "/index1.html" : "#home-re",
            "/about.html" : "#about-re",
            "/participants.html" : "#participants-re",
            "/sponsors.html": "#sponsors-re",
            "/sace.html": "#sponsors-re",
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

var textcenterTL = gsap.timeline();
textcenterTL.from("#sponsor-name", 2,  {opacity:0, y: "40%", ease: Power4.easeOut}).from(".text-center span", 1.5,  {opacity:0, y: "20%", ease: Power4.easeOut}, 0.5)

var section1TL = gsap.timeline();
section1TL.from("#section-1",1.5, {opacity:0, y: "20%", ease: Power4.easeOut})

var section2TL = gsap.timeline();
section2TL.from("#section-2",1.5, {opacity:0, y: "20%", ease: Power4.easeOut})

var section3TL = gsap.timeline();
section3TL.from("#section-3",1.5, {opacity:0, y: "20%", ease: Power4.easeOut})

var section4TL = gsap.timeline();
section4TL.from("#section-4",1.5, {opacity:0, y: "20%", ease: Power4.easeOut})

var controller = new ScrollMagic.Controller();

var textCenterScene = new ScrollMagic.Scene({
    triggerElement: ".text-center",
    triggerHook: 0.2
})
.setTween(textcenterTL)
.addTo(controller);

var section1Scene = new ScrollMagic.Scene({
    triggerElement: "#section-1",
    triggerHook: 1.2
})
.setTween(section1TL)
.addTo(controller);

var section2Scene = new ScrollMagic.Scene({
    triggerElement: "#section-2",
    triggerHook: 1.2
})
.setTween(section2TL)
.addTo(controller);


var section3Scene = new ScrollMagic.Scene({
    triggerElement: "#section-3",
    triggerHook: 1.2
})
.setTween(section3TL)
.addTo(controller);

var section4Scene = new ScrollMagic.Scene({
    triggerElement: "#section-4",
    triggerHook: 1.2
})
.setTween(section4TL)
.addTo(controller);
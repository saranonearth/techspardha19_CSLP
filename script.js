var intro = anime.timeline({
    easing: 'easeOutExpo',
    duration: 3000
});


intro
    .add({
        targets: '.cloud',
        translateY: -370,
        duration: 1000
    })
    .add({
        targets: '.cloud2',
        translateY: -290,
        duration: 500
    })
    .add({
        targets: '.bulb',
        translateY: -1000,
        duration: 1300
    })

//dot animation

anime({
    targets: '.dot',
    scale: 40,
    duration: 1300,
    delay: 900,
    direction: 'alternate',
    loop: true
})
anime({
    targets: '.dot2',
    scale: 20,
    duration: 1300,
    delay: 500,
    direction: 'alternate',
    loop: true
})
anime({
    targets: '.dot3',
    scale: 15,
    duration: 1300,
    delay: 200,
    direction: 'alternate',
    loop: true
})
anime({
    targets: '.dot4',
    scale: 21,
    duration: 1300,
    delay: 200,
    direction: 'alternate',
    loop: true
})

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml16');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({

    }).add({
        delay: 1000
    })
    .add({
        targets: '.ml16 .letter',
        translateY: [-200, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    })

var textWrapper = document.querySelector('.ml17');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({

    }).add({
        delay: 1000
    })
    .add({
        targets: '.ml17 .letter',
        translateY: [-200, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    })
var textWrapper = document.querySelector('.ml18');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({

    }).add({
        delay: 5000
    })
    .add({
        targets: '.ml18 .letter',
        translateY: [-200, 0],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 30 * i
    })
//icons
let t2 = anime.timeline({
    easing: 'easeOutElastic',
    duration: 500
});

t2.add({
    targets: '#icon1',
    duration: 900,
    opacity: [0, 100],
    translateX: -100
}).add({
    targets: '#icon2',
    duration: 900,
    opacity: [0, 100],
    translateX: -100
})


//counter

setTimeout(() => {
    var countDownDate = new Date("Sep 27, 2019 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}, 2100)

//particles
const particlesJS = window.particlesJS
particlesJS.load('particles-js', './particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});
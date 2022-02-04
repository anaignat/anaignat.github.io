gsap.to(".blob", {
    scrollTrigger: {
        trigger: ".blob",
        start: "-=201",
        end: "+=600",
        scrub: true,
    //    markers: {startColor: "red", endColor: "black", fontSize: "18px", fontWeight: "bold", indent: 20},
    },
    scale: 4
});
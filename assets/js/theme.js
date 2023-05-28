// header functionality
const header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
// toggle
const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  } else {
    nav.classList.add("show");
  }
});

close.addEventListener("click", () => {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
});

// popup
const popupbtn = document.querySelector("#popup");
const popup = document.querySelector(".popup");
const popupclg = document.querySelector(".popup-close");

popupbtn.addEventListener("click", () => {
  popup.classList.add("show");
});

popupclg.addEventListener("click", () => {
  popup.classList.remove("show");
});

// slider

$(".slick-slider").slick({
  dots: false,
  infinite: false,
  arrows: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".slick-slider-1").slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".slick-slider-2").slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".slick-slider-3").slick({
  centerMode: true,
  centerPadding: "0px",
  dots: false,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

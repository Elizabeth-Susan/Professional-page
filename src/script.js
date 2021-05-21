$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: false,
  dots: true,
  autoplay: false,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

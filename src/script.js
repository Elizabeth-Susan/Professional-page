$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    1400: {
      items: 2,
    },
  },
});

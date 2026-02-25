import "slick-carousel";

export class Plugins {
  init() {
    this.TestimonialSlider();
  }

  TestimonialSlider() {
    $(".testimonial-slider").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: ".testimonial-slider-section .prev-arrow",
      nextArrow: ".textimonial-slider-section .next-arrow",
    });
  }
}

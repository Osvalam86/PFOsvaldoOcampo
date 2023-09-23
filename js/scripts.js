document.addEventListener("DOMContentLoaded", () => {
  const path = document.location.pathname,
    hrefDocument = document.location.href.toUpperCase(),
    title = document.title.toUpperCase();

  const $buttonForm = document.querySelector("#buttonForm");

  $buttonForm &&
    $buttonForm.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "../404-error.html";
    });

  // Home functionality
  if (path.includes("index.html") || title.includes("PRINCIPAL")) {
    //DATA
    const $introContainer = document.getElementById("introContainer");

    const getInfo = ($mainSlide) => {
      let width = window.innerWidth,
        info = "";

      if (width >= 480) {
        $mainSlide.classList.add("is-active");
        let $slideActive = document
          .querySelector(".slick-slide.is-active")
          .getAttribute("data-position");
        info = dataHome[parseInt($slideActive)];
      } else {
        $mainSlide.nextSibling.classList.add("is-active");
        let $slideActive = document
          .querySelector(".slick-slide.is-active")
          .getAttribute("data-position");
        info = dataHome[parseInt($slideActive)];
      }

      if (!info) {
        return false;
      }
      const $content = `
        <h2 class="o-font-title mb-3">${info.title}</h2>
        ${info.intro}
        <a href="./views/character-detail.html" class="btn c-btn-primary u-btn-custom-w mt-4"
          >Conoce más</a>
      `;
      $introContainer.innerHTML = $content;
    };

    // SLIDER HOME
    const $mainSlider = $("#mainSlider");

    $mainSlider.on("init", function (event, slick, currentSlide, nextSlide) {
      $prevSlide = document.querySelector(".slick-slide.is-active");
      $prevSlide && $prevSlide.classList.remove("is-active");
      const $element = $(slick.$slides.get(currentSlide));
      const $mainSlide = $element[0].previousElementSibling;
      getInfo($mainSlide);
    });

    $mainSlider.slick({
      infinite: true,
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 300,
      autoplaySpeed: 3500,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1023,
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

    $mainSlider.on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        let $prevSlide = document.querySelector(".slick-slide.is-active");
        $prevSlide && $prevSlide.classList.remove("is-active");
      }
    );

    $mainSlider.on(
      "afterChange",
      function (event, slick, currentSlide, nextSlide) {
        let $prevSlide = document.querySelector(".slick-slide.is-active");
        $prevSlide && $prevSlide.classList.remove("is-active");
        const $element = $(slick.$slides.get(currentSlide));
        const $mainSlide = $element.context.previousElementSibling;
        getInfo($mainSlide);
      }
    );
  }

  // Character Detail functionality
  if (
    path.includes("character-detail.html") ||
    hrefDocument.includes("CHARACTER-DETAIL") ||
    path.includes("comic-detail.html") ||
    hrefDocument.includes("COMIC-DETAIL")
  ) {
    // SLIDERS
    const $leftSlider = $("#leftSlider"),
      $videoSlider = $("#videoSlider");

    $leftSlider.on("init", function (event, slick, currentSlide, nextSlide) {
      const $element = $(slick.$slides.get(currentSlide));
      $element[0].classList.add("is-active");
    });

    $leftSlider.slick({
      infinite: true,
      autoplay: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 300,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $leftSlider.on(
      "afterChange",
      function (event, slick, currentSlide, nextSlide) {
        let $actual = document.querySelector(".c-card.is-active");
        $actual && $actual.classList.remove("is-active");
        const $element = $(slick.$slides.get(currentSlide));
        $element[0].classList.add("is-active");
      }
    );

    $videoSlider &&
      $videoSlider.slick({
        infinite: true,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 300,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }
});

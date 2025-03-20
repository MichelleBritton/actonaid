document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const slides = carousel.children;
  const slidesArray = Array.from(slides);
  const indicatorsWrap = document.getElementById("carousel-indicators");

  let currentIndex = 0;

  for (const i of slidesArray) {
    let button = document.createElement("button");
    button.classList.add("indicator", "h-1", "w-8", "bg-white", "hover:bg-red");
    button.dataset.index = slidesArray.indexOf(i);
    indicatorsWrap.appendChild(button);
  }

  const indicators = [...document.getElementsByClassName("indicator")];

  // Function to update carousel position and active indicator
  const updateCarousel = () => {
    const offset = -currentIndex * slides[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;

    // Update active indicator
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("bg-red"); // Active indicator
        indicator.classList.remove("bg-white");
      } else {
        indicator.classList.add("bg-white");
        indicator.classList.remove("bg-red");
      }
    });
  };

  // Add click event to indicators
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      currentIndex = parseInt(indicator.dataset.index); // Get the slide index
      updateCarousel();
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }, 10000); // Slides every 3 seconds
});

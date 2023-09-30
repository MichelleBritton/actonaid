window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY;
    if (scrollPos > 400) {
       document.getElementById("header").classList.add("shrink");
       document.getElementById("logo").classList.add("shrink");
    } else {
        document.getElementById("header").classList.remove("shrink");
        document.getElementById("logo").classList.remove("shrink");
    }
  });

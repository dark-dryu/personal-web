document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".slideshow").forEach(initSlideshow);

  function initSlideshow(slideshow) {
    const slidesEl = slideshow.querySelector(".slides");
    const dotsEl = slideshow.querySelector(".dots");
    const prevBtn = slideshow.querySelector(".arrow.left");
    const nextBtn = slideshow.querySelector(".arrow.right");

    const slides = Array.from(slidesEl.children);
    let current = 0;
    const total = slides.length;

    // autoplay settings
    const interval = 5000; // 5 seconds
    let timer = null;

    // --- dots ---
    function createDots() {
      for (let i = 0; i < total; i++) {
        const btn = document.createElement("button");
        btn.className = "dot";
        btn.type = "button";
        btn.dataset.index = i;
        // btn.textContent = String(i + 1);
        btn.addEventListener("click", () => goTo(i));
        dotsEl.appendChild(btn);
      }
    }

    function update() {
      slidesEl.style.transform = `translateX(${-current * 100}%)`;

      slides.forEach((s, i) => {
        s.setAttribute("aria-hidden", i === current ? "false" : "true");
      });

      const dotButtons = dotsEl.querySelectorAll(".dot");
      dotButtons.forEach((d, i) => {
        d.classList.toggle("active", i === current);
      });
    }

    function goTo(index) {
      current = (index + total) % total;
      update();
    }

    // autoplay
    function startTimer() {
      stopTimer();
      timer = setInterval(() => goTo(current + 1), interval);
    }
    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // arrows
    if (prevBtn) prevBtn.addEventListener("click", () => { goTo(current - 1); startTimer(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { goTo(current + 1); startTimer(); });

    // pause autoplay on hover/focus
    slideshow.addEventListener("mouseenter", stopTimer);
    slideshow.addEventListener("mouseleave", startTimer);
    slideshow.addEventListener("focusin", stopTimer);
    slideshow.addEventListener("focusout", startTimer);

    // init
    createDots();
    update();
    startTimer();
  }
});

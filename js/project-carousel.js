(() => {
    const hasBootstrapCarousel = typeof window !== "undefined" && window.bootstrap && window.bootstrap.Carousel;
    if (!hasBootstrapCarousel) return;

    const carousels = document.querySelectorAll(".carousel");
    if (!carousels.length) return;

    carousels.forEach((carouselEl) => {
        const instance = window.bootstrap.Carousel.getOrCreateInstance(carouselEl, {
            interval: 3200,
            ride: false,
            pause: "hover",
            touch: true
        });

        let locked = false;
        const unlockAfter = () => {
            window.setTimeout(() => {
                locked = false;
            }, 420);
        };

        carouselEl.addEventListener(
            "wheel",
            (event) => {
                const dominantAxis = Math.abs(event.deltaY) >= Math.abs(event.deltaX);
                const delta = dominantAxis ? event.deltaY : event.deltaX;

                if (delta === 0) return;
                event.preventDefault();

                if (locked) return;
                locked = true;

                if (delta > 0) {
                    instance.next();
                } else {
                    instance.prev();
                }

                unlockAfter();
            },
            { passive: false }
        );
    });
})();

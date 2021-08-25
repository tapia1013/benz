let init = () => {
  // target container
  let container = document.getElementsByClassName('jumbo-slider__container')[0];
  // get all of the slides
  let slides = document.getElementsByClassName('jumbo-slider__slide');
  // get the circles/elipses
  let circles = document.getElementsByClassName('jumbo-slider__circle');
  // Jumbo slider links
  let links = document.getElementsByClassName('jumbo-slider__link');
  // Which slide is currently displaying
  let current = 1;
  // time for sliders
  let time = 6000;


  // add animation class to slide
  slides[0].classList.add('jumbo-slider__slide--active');
  // target links
  links[current - 1].classList.add("'jumbo-slider__link--active");

  // update elipsis and links
  let updateNav = () => {
    console.log(`current: ${current}`);

    for (let i = 0; i < slides.length; i++) {
      links[i].classList.remove('jumbo-slider__link--active');
      circles[i].classList.remove('jumbo-slider__circle--filled');
    }
    //update nav
    links[current - 1].classList.add('jumbo-slider__link--active')
    circles[current - 1].classList.add('jumbo-slider__circle--filled')

  }

  // start sliding
  let startSliding = (current) => {

    setInterval(() => {
      console.log(`current: ${current}`);
      slides[1].classList.add('jumbo-slider__slide--active');
      slides[0].classList.remove('jumbo-slider__slide--active');

      // if less than slides length
      if (current < slides.length) {
        current++;
        updateNav(current);
      } else {
        current = 1
      }

      // where the whole sliding happens
      container.appendChild(slides[0].cloneNode([true]));
      // remove the first one 
      container.removeChild(slides[0]);

    }, time);
  }

};

init();














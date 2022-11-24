'use strict';

{ 
  // Menu
  class MobileMenu {
    constructor(el, text) {
      this.DOM = {};
      this.el = el;
      this.text = text;
      this.DOM.btn = document.querySelector(".mobile-menu__btn");
      this.DOM.container = document.querySelector(this.text);
      this._addEvent();
    }
  
    _toggle() {
      this.DOM.container.classList.toggle(this.el);
    }
    _addEvent() {
      this.DOM.btn.addEventListener('click', this._toggle.bind(this));
    }
  }
  
  new MobileMenu('menu-open', '.global-container');

  new MobileMenu('inview', '.animate-title');
  new MobileMenu('inview', '.animate-title-2');
  new MobileMenu('inview', '.animate-title-3');
  new MobileMenu('inview', '.animate-title-4');
  new MobileMenu('inview', '.animate-title-5');
  new MobileMenu('inview', '.animate-title-6');

   //animate-title
   class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._spritText();
    }
    _spritText() {
        return this.chars.reduce((acc, curr) => {
            return `${acc}<span class="char">${curr}</span>`;
    }, ""); 
    }
  }

  const ta = new TextAnimation('.animate-title');
  const ta2 = new TextAnimation('.animate-title-2');
  const ta3 = new TextAnimation('.animate-title-3');
  const ta4 = new TextAnimation('.animate-title-4');
  const ta5 = new TextAnimation('.animate-title-5');
  const ta6 = new TextAnimation('.animate-title-6');

  //scroll
  class ScrollObserver {
    constructor(els, cb, options) {
      this.els = document.querySelectorAll(els);
      const defaultOptions = {
        threshold: 0,
        rootMargin: '0px 0px -100px',
        once: true
      };
      this.cb = cb;
      this.options = Object.assign(defaultOptions, options); 
      this._init();
    }
    _init() {
      const callback = function(entries, obs) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.cb(entry.target, true);
            obs.unobserve(entry.target);
          } else {
            this.cb(entry.target, false);
          }
        });
      };

      this.io = new IntersectionObserver(callback.bind(this), this.options);
      this.els.forEach(el => this.io.observe(el));
    }
  }

  const cb = function (el, isIntersecting) {
    if(isIntersecting) {
      el.classList.add('appear');
    } else {
      el.classList.remove('appear');
    }
  }
  // const option = {
  //   root: document.querySelector('.concept'),
  //   threshold: 0,
  //   rootMargin: '0px 0px -100px',
  //   once: true
  // };
  const so = new ScrollObserver('.animate', cb);

  // const cb2 = function (el, isIntersecting) {
  //   const spanBtn = document.querySelectorAll('.js-span');
  //   if(isIntersecting) {
      
  //     spanBtn.classList.add('btn-color');
  //     console.log('hello');
     
  //   } else {
  //     console.log('good');
  //   }
  // }

  // const so2 = new ScrollObserver('.concept', cb2);

  //scrollBtn
  const mobileBtn = document.querySelector('.mobile-menu__btn');
  const cb2 = function(entries, observer) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        console.log('in');
      } else {
        console.log('out');
      }
    });
  } 

  const io2 = new IntersectionObserver(cb2);
  
}
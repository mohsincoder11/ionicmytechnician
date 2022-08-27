import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
  sliderOptions = {
    initialSlide: 1,
    loop: false,
    slidesPerView: 1,
    autoplay: {
      disableOnInteraction: false,
      delay: 2500,
    },
    speed: 2500,
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { CallNumber } from "@ionic-native/call-number/ngx";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  constructor(
    public call: CallNumber

  ) { }

  ngOnInit() {
  }
  makeCall() {
    this.call
      .callNumber("+919392037143", true)
      .then((res) => console.log("Launched dialer!", res))
      .catch((e) => {});
  }
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { ToasterService } from "../services/toaster/toaster.service";
import {
  Platform,
} from "@ionic/angular";
declare var $: any;


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  loader_visibility: boolean = true;
  full_name: boolean = false;
  address: boolean = false;
  pincode: boolean = false;
  email: boolean = false;
  session_data = {
    id: "",
    full_name: "",
    pincode: "",
    address: "",
    email: "",
  };
  constructor(
    public storage: Storage,
    public http: HttpClient,
    public url: UrlService,
    public platform: Platform,
    public toaster: ToasterService
  ) {

  }
  ionViewWillEnter() {
    this.storage.get('login_details').then(res => {
      console.log(res);
      this.session_data.full_name = res.full_name;
      this.session_data.pincode = res.pincode;
      this.session_data.address = res.address;
      this.session_data.email = res.email;
      this.session_data.id = res.id;
      this.loader_visibility = false;
    })
  }



  ngOnInit() {
  }


  update_profile(formdata: NgForm) {

    formdata.value.full_name ? this.full_name = false : this.full_name = true;
    formdata.value.pincode.toString().length == 6  ? this.pincode = false : this.pincode = true;
    formdata.value.email ? this.email = false : this.email = true;
    formdata.value.address ? this.address = false : this.address = true;
    if (formdata.value.pincode.toString().length == 6  && formdata.value.full_name && formdata.value.address && formdata.value.email) {
      this.loader_visibility = true;
      var f_data = new FormData();
      formdata.value.id = this.session_data.id;
      this.http
        .post(`${this.url.serverUrl}update_user`, formdata.value)
        .subscribe(
          (res) => {
            if (res) {
              this.storage.set('login_details', res).then(res => {
                this.loader_visibility = false;
              })
              this.toaster.toaster_show('Profile updated successfully', 'success', 'white');


            }
            else {
            }
          },
          (err) => console.log(err)
        );
    }
  }



}

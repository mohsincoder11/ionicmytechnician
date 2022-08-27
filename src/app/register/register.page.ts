import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { UrlService } from "../services/url/url.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  password: boolean = false;
  full_name: boolean = false;
  address: boolean = false;
  pincode: boolean = false;
  mobile: boolean = false;
  mobile_length: boolean = false;
  mobile_no_exist: boolean = false;
  loader_visibility: boolean = false;

  constructor(
    public router: Router,
    public url: UrlService,
    public http: HttpClient,
  ) { }

  ngOnInit() {
  }


  confirm_mobile(formdata: NgForm) {
    formdata.value.password ? this.password = false : this.password = true;
    formdata.value.full_name ? this.full_name = false : this.full_name = true;
    formdata.value.address ? this.address = false : this.address = true;
    formdata.value.pincode.toString().length == 6 ? this.pincode = false : this.pincode = true;
    formdata.value.mobile.toString().length == 10 ? this.mobile_length = false : this.mobile_length = true;
    formdata.value.otp = 1234;

    if (formdata.value.password && formdata.value.full_name && !this.mobile_no_exist &&
      formdata.value.address && formdata.value.pincode.toString().length == 6 && formdata.value.mobile.toString().length == 10) {
      this.loader_visibility = true;
      this.mobile_length = false;
      this.http
        .post(`${this.url.serverUrl}send_otp_for_mobile_verify`, formdata.value)
        .subscribe(
          (res) => {
            this.loader_visibility = false;
            formdata.value.otp = res;
            let navExtra: NavigationExtras = {
              state: {
                regData: formdata.value,
              },
            };
            this.router.navigate(['verifymobile'], navExtra);
          },
          (err) => console.log(err)
        );
    }
  }

  check_exist_mobile(event) {
    if (event.target.value.length == 10) {
      this.mobile_length = false;
      this.loader_visibility = true;
      this.http.get(`${this.url.serverUrl}check_existing_mobile_user?mobile=${event.target.value}`)
        .subscribe(
          (res) => {
            this.loader_visibility = false;
            if (res == 1) {
              this.mobile_no_exist = true;
            }
            else {
              this.mobile_no_exist = false;
            }
          },
          (err) => console.log(err)
        );
    }
  }

  
}

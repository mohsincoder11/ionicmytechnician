import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-installation-request',
  templateUrl: './installation-request.page.html',
  styleUrls: ['./installation-request.page.scss'],
})
export class InstallationRequestPage implements OnInit {
  currentDate;
  all_appliance;
  loader_visibility;
  all_accessory;
  filter_accessories;
  brand_name: boolean = false;
  appliance_id: boolean = false;
  accessory: boolean = false;
  specific_requirement: boolean = false;
  user_id;
  constructor(
    public datepipe: DatePipe,
    public http: HttpClient,
    public url: UrlService,
    public storage: Storage,
  ) {
    this.loader_visibility = true;

    this.get_appliance();
  }

  ngOnInit() {
    this.storage.get('login_details').then(res => {
      this.user_id = res.id;
    })
  }


  ionViewDidEnter() {
    let today_date = new Date();
    this.currentDate = this.datepipe.transform(today_date, 'YYYY-MM-dd');
  }

  get_appliance() {
    this.http.get(`${this.url.serverUrl}get_all_appliance`)
      .subscribe(
        (res) => {
          this.all_appliance = res['all_appliance'];
          this.all_accessory = res['all_accessory'];
          this.loader_visibility = false;
        },
        (err) => console.log(err)
      );
  }

  get_accessory(event) {
    let id = event.detail.value;
    this.filter_accessories = this.all_accessory.filter(function (e) {
      return e.appliance_id == event.detail.value;
    });
  }

  submit_request(formdata: NgForm) {
    formdata.value.brand_name ? this.brand_name = false : this.brand_name = true;
    formdata.value.appliance_id ? this.appliance_id = false : this.appliance_id = true;
    formdata.value.accessory ? this.accessory = false : this.accessory = true;
    formdata.value.specific_requirement ? this.specific_requirement = false : this.specific_requirement = true;
    if (formdata.value.brand_name && formdata.value.appliance_id && formdata.value.accessory && formdata.value.specific_requirement) {
      formdata.value.user_id = this.user_id;
      this.http
        .post(`${this.url.serverUrl}submit_installation_request`, formdata.value)
        .subscribe(
          (res) => {
            formdata.resetForm();
            swal.fire({
              icon: 'success',
              title: '<h3>Request submitted successfully.</h3>',
              showConfirmButton: false,
              timer: 4000
            })

          },
          (err) => console.log(err)
        );
    }
  }



}

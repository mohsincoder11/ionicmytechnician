import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { Storage } from '@ionic/storage-angular';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-only-accessory',
  templateUrl: './only-accessory.page.html',
  styleUrls: ['./only-accessory.page.scss'],
})
export class OnlyAccessoryPage implements OnInit {
  currentDate;
  all_appliance;
  loader_visibility;
  all_accessory;
  filter_accessories;
  selected_appliance;
  selected_accessory;
  product_array = { user_id: '', appliance_id: '', appliance_name: '', accessory_id: '', accessory_name: '' };
  all_product_array = [];
  user_id;
  select_fields: boolean = false;
  add_product_cond: boolean = false;
  constructor(
    public http: HttpClient,
    public url: UrlService,
    public storage: Storage,

  ) {
    this.get_appliance();
  }
  ngOnInit() {
    this.storage.get('login_details').then(res => {
      this.user_id = res.id;
    })
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
    this.selected_appliance = event.detail.value;
    this.filter_accessories = this.all_accessory.filter(function (e) {
      return e.appliance_id == event.detail.value;
    });
  }

  select_accessory(event) {
    this.selected_accessory = event.detail.value;
  }

  add_product() {
    this.selected_appliance && this.selected_accessory ? this.select_fields = false : this.select_fields = true;
    if (this.selected_appliance && this.selected_accessory) {
      let selected_appliance = this.selected_appliance;
      let selected_accessory = this.selected_accessory;
      let appliance_name = this.all_appliance.filter(function (e) {
        return e.id == selected_appliance;
      });
      let accessory_name = this.all_accessory.filter(function (e) {
        return e.id == selected_accessory;
      });
      this.product_array =
      {
        user_id: this.user_id,
        appliance_id: this.selected_appliance,
        appliance_name: appliance_name[0]['appliance_name'],
        accessory_id: this.selected_accessory,
        accessory_name: accessory_name[0]['accessory_name'],
      };
      this.all_product_array.push(this.product_array);
    }

  }


  remove_product(index) {
    this.all_product_array.splice(index, 1);
  }

  place_order(formdata: NgForm) {
    
    console.log(this.all_product_array.length);
    if (this.all_product_array.length > 0) {
      this.add_product_cond = false;
      console.log(JSON.stringify(this.all_product_array));
      this.http
        .post(`${this.url.serverUrl}place_accessory_order`, {all_product_array:JSON.stringify(this.all_product_array)})
        .subscribe(
          (res) => {
            formdata.resetForm();
            swal.fire({
              icon: 'success',
              title: '<h3>Order placed successfully.</h3>',
              showConfirmButton: false,
              timer: 4000
            })
          },
          (err) => console.log(err)
        );
    }
    else
      this.add_product_cond = true;
  }

}

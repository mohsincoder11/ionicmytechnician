
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { Storage } from '@ionic/storage';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2'; 
@Component({
  selector: 'app-extend-warrenty',
  templateUrl: './extend-warrenty.page.html',
  styleUrls: ['./extend-warrenty.page.scss'],
})
export class ExtendWarrentyPage implements OnInit {

  currentDate;
  all_appliance;
  loader_visibility;
  all_accessory;
  filter_accessories;
  brand_name: boolean = false;
  appliance_id: boolean = false;
  user_id;
  snackbar_msg;
  constructor(
    public datepipe: DatePipe,
    public http: HttpClient,
    public url: UrlService,
    public storage: Storage
  ) {
    this.loader_visibility=true; 

    this.get_appliance();
   }

   ngOnInit() {
    this.storage.get('login_details').then(res => {
      this.user_id=res.id;
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



submit_request(formdata: NgForm) {
formdata.value.brand_name ? this.brand_name = false : this.brand_name = true;
formdata.value.appliance_id ? this.appliance_id = false : this.appliance_id = true;
if (formdata.value.brand_name && formdata.value.appliance_id) {      
  formdata.value.user_id=this.user_id;
  this.http
    .post(`${this.url.serverUrl}submit_warrenty_request`, formdata.value)
    .subscribe(
      (res) => {
       
        swal.fire({
          icon: 'success',
          title: '<h3>Request submitted successfully.</h3>',
          text:'Our engineer will call you as soon as possible.',
          showConfirmButton: false,
          timer: 65000
        })
        formdata.resetForm();
      
      },
      (err) => console.log(err)
    );
}
}



}

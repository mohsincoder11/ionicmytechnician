import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, IonContent } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { ToasterService } from "../services/toaster/toaster.service";
declare var $: any;
import { ModalController } from "@ionic/angular";
import { RateTechnicianPage } from "../rate-technician/rate-technician.page";
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  backToTop: boolean = false;
  @ViewChild(IonContent) content: IonContent;

  user_id;
  service_request;
  accessory_request;
  installation_request;
  extend_warranty_request;
  resell_product_request;

  service_request_length: boolean = false;
  accessory_request_length: boolean = false;
  installation_request_length: boolean = false;
  extend_warranty_request_length: boolean = false;
  resell_product_request_length: boolean = false;
  loader_visibility: boolean = true;

  constructor(
    private platform: Platform,
    public storage: Storage,
    public http: HttpClient,
    public url: UrlService,
    public modal: ModalController,
    public router: Router,
    public toaster:ToasterService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.storage.get('login_details').then(res => {
      this.user_id = res.id;
      this.get_user_service(this.user_id);
      this.get_records('resell_product_request');
    })
  }

  get_user_service(id) {
       this.http.get(`${this.url.serverUrl}get_user_service?user_id=${id}`)
      .subscribe(
        (res) => {
          this.service_request=res['service_requests'];
          this.service_request.length > 0 ? this.service_request_length = false : this.service_request_length = true;

          this.installation_request = res['installation_requests'];
          this.installation_request.length > 0 ? this.installation_request_length = false : this.installation_request_length = true;

          this.extend_warranty_request = res['extend_warranties'];
          this.extend_warranty_request.length > 0 ? this.extend_warranty_request_length = false : this.extend_warranty_request_length = true;

          this.accessory_request = res['accessory_order'];
          this.accessory_request.length > 0 ? this.accessory_request_length = false : this.accessory_request_length = true;

          this.resell_product_request = res['resell_order'];
          this.resell_product_request.length > 0 ? this.resell_product_request_length = false : this.resell_product_request_length = true;

          
             $(".no_appointment").hide();

          this.loader_visibility = false;
        },
        (err) => console.log(err)
      );
  }

  get_records(type) {
    $('.calender_Date').removeClass('active');
    $('#' + type).addClass('active');
    $('.visibility').addClass('hide');
    $('#visibility_' + type).removeClass('hide');
    $(".no_appointment").removeClass('show');
    $("#no_appointment_" + type).addClass('show');
  }

  toggle_div(id) {
    $('.section').removeClass("collapsed");
    $('#collapsible' + id).addClass("collapsed");
    $('.downarrow').removeClass("collapsed");
    $('#downarrow' + id).addClass("collapsed");
  }

  cancel_request(index,id,service_type) {
 //   $("#card" + id).addClass("delete");
    this.loader_visibility = true;
    this.http.get(`${this.url.serverUrl}cancel_request?service_id=${id}&service_type=${service_type}`)
      .subscribe(
        (res) => {          
          this.toaster.toaster_show('Cancelled successfully','error','white');

          service_type=='service_request' ? this.service_request[index].status=0 : '';
          service_type=='installation_request' ? this.installation_request[index].status=0 : '';
          service_type=='accessory_request' ? this.accessory_request[index].status=0 : '';
          service_type=='extend_warranty_request' ? this.extend_warranty_request[index].status=0 : '';
          service_type=='resell_product_request' ? this.resell_product_request[index].status=0 : '';
          
          this.loader_visibility = false;

        },
        (err) => console.log(err)
      );
  }

  async rate_technician(index,service_request,service_id) {
    const modal = await this.modal.create({
      component: RateTechnicianPage,
      cssClass: "RateTechnician_modal"
    });
    await modal.present();
    await modal.onDidDismiss().then(async (data) => {
      if (data.data.formdata != null) {
        let formdata = {
          'user_id': this.user_id,
        'service_id': service_id,
        'rating': data.data.formdata.rate_value,
        'review': data.data.formdata.review,
        'rating_for': service_request,
        };
        this.loader_visibility = true;
        this.http
          .post(`${this.url.serverUrl}technician_rating`, formdata)
          .subscribe(
            (res) => {
              this.toaster.toaster_show('Thanks for your rating','success','white');

              service_request=='service_request' ? this.service_request[index].rating=data.data.formdata.rate_value : '';
              service_request=='installation_request' ? this.installation_request[index].rating=data.data.formdata.rate_value : '';
              service_request=='extend_warranty_request' ? this.extend_warranty_request[index].rating=data.data.formdata.rate_value : '';
              service_request=='accessory_request' ? this.accessory_request[index].rating=data.data.formdata.rate_value : '';
              service_request=='resell_product_request' ? this.resell_product_request[index].rating=data.data.formdata.rate_value : '';
               this.loader_visibility = false;
            },
            (err) => console.log(err)
          );
      }
    });
  }


 

}

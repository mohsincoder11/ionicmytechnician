import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";

@Component({
  selector: 'app-admin-section',
  templateUrl: './admin-section.page.html',
  styleUrls: ['./admin-section.page.scss'],
})
export class AdminSectionPage implements OnInit {
  count={
  'service_requests':0,
  'extend_warranties':0,
  'resell_product_request':0,
  'total_user':0,
  'accessory_order':0,
  'feedback':0,
  'installation_requests':0,
  'avg_rating':0
}
  constructor(
    public http: HttpClient,
    public url: UrlService
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.get_count()
  }


  get_count() {
    this.http.get(`${this.url.serverUrl}get_count`)
      .subscribe(
        (res) => {          
          this.count={
            'service_requests':res['service_requests'],
            'extend_warranties':res['extend_warranties'],
            'resell_product_request':res['resell_product_request'],
            'total_user':res['total_user'],
            'accessory_order':res['accessory_order'],
            'feedback':res['feedback'],
            'installation_requests':res['installation_requests'],
            'avg_rating':res['avg_rating']
          }
        },
        (err) => console.log(err)
      );
  }
}

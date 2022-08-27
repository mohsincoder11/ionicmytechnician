import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import swal from 'sweetalert2';
import { Storage } from '@ionic/storage';
import { Platform, IonContent } from '@ionic/angular';
declare var $: any;
@Component({
  selector: 'app-resellproduct',
  templateUrl: './resellproduct.page.html',
  styleUrls: ['./resellproduct.page.scss'],
})
export class ResellproductPage implements OnInit {
  sliderOptions2 = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 5,
    speed: 2000,
  }
  resell_product: any = [];
  resell_product_length: boolean = true;
  resell_image_url = this.url.resell_image;
  session_data;
  loader_visibility: boolean = false;
  skip_limit;
  height_count;
  @ViewChild(IonContent) content: IonContent;

  constructor(
    public http: HttpClient,
    public url: UrlService,
    public storage: Storage,
    private platform: Platform,


  ) { }

  ngOnInit() {
  }



  ionViewDidEnter() {
    this.skip_limit = 0;
    this.height_count = 1;
    this.storage.get('login_details').then(res => {
      this.session_data = res;
      this.get_resell_data();

    })
    this.get_resell_data();
  }

  // show_preview(event) {
  //   $('.main_view').addClass('show');
  //   $("#mainid").attr('src', event.target.src);
  // }

  // close_preview() {
  //   $('.main_view').removeClass('show');
  // }
  // rotate_preview() {
  //   $('.main_view').toggleClass('rotate');
  // }

  get_resell_data() {
    this.loader_visibility = true;
    this.http.get(`${this.url.serverUrl}get_all_resell_product?skip_limit=${this.skip_limit}`)
      .subscribe(
        (res) => {
          this.loader_visibility = false;
          this.resell_product = res;
          this.resell_product.length > 0 ? this.resell_product_length = true : this.resell_product_length = false;
        }
      )
  }


  check_scroll(ev) {
    if (ev.detail.scrollTop > this.platform.height() * this.height_count) {

      this.height_count += 1;
      this.skip_limit += 8;
      this.http.get(`${this.url.serverUrl}get_all_resell_product?skip_limit=${this.skip_limit}`)
        .subscribe(
          (res) => {
            this.resell_product = this.resell_product.concat(res);
          }
        )
    }
  }

  place_resell_order(id, index) {
    this.loader_visibility = true;
    this.http
      .get(`${this.url.serverUrl}place_resell_order?user_id=${this.session_data.id}&resell_product_id=${id}`,)
      .subscribe(
        (res) => {
          this.loader_visibility = false;
          this.resell_product[index].status = 2;
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





}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Platform, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import swal from 'sweetalert2';
 import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  session_data;
  user_name:string;
  session_image;
  double_quote = '""';
  resell_image_url = this.url.resell_image;
  loader_visibility: boolean = false;

  sliderOptions = {
    initialSlide: 0,
    slidesPerView: 1.2,
    spaceBetween: 10,
    autoplay: {
      disableOnInteraction: false,
      delay: 3000,
      loop: false

    },
    speed: 2000,
  }
  sliderOptions2 = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 5,
    speed: 2000,
  }
  resell_product;
  resell_product_length=false;
  constructor(
    public menuCtrl: MenuController,
    public alertController: AlertController,
    private location: Location,
    private platform: Platform,
    private storage: Storage,
    public http: HttpClient,
    public url: UrlService,
    public router: Router,
  ) {

  }

  ngOnInit() {
  }
  async ionViewWillEnter() {
    var status = navigator.onLine;
    if (!status) {
      document.getElementById("internet_error").textContent = "Check internet connection.";
      var x = document.getElementById("internet_snackbar");
      x.className = "show_danger";
      setTimeout(function () {
        x.className = x.className.replace("show_danger", "");
      }, 10000);
    }
    this.menuCtrl.enable(true);
  }

  ionViewDidEnter() {
    this.storage.get('login_details').then(res => {
      this.session_data = res;
      this.user_name = res.full_name;
      this.get_resell_data();

    })

    this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.location.isCurrentPathEqualTo('/dashboard')) {

        // Show Exit Alert!
        navigator['app'].exitApp();

      } else {
        this.location.back();
      }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });

  }

  get_resell_data() {
    this.http.get(`${this.url.serverUrl}get_resell_product`)
      .subscribe(
        (res) => {
          this.resell_product = res;
          this.resell_product.length>0 ? this.resell_product_length=true : this.resell_product_length=false;
        }
      )
  }

  
  place_resell_order(id,index) {
      this.loader_visibility = true;

    this.http
      .get(`${this.url.serverUrl}place_resell_order?user_id=${this.session_data.id}&resell_product_id=${id}`,)
      .subscribe(
        (res) => {
          this.loader_visibility = false;
          this.resell_product[index].status=2
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

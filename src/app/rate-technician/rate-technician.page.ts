import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { Storage } from '@ionic/storage';
import { UrlService } from "../services/url/url.service";
import { HttpClient } from "@angular/common/http";
import { NgForm } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-rate-technician',
  templateUrl: './rate-technician.page.html',
  styleUrls: ['./rate-technician.page.scss'],
})
export class RateTechnicianPage implements OnInit {

  review;
  rate_value=1;
  constructor(
    public modal: ModalController,
    private storage: Storage,
    public url: UrlService,
    public http: HttpClient
  ) { }

  ngOnInit() {
  }

  active_star(id) {
    this.rate_value=id
    $(".star_color").removeClass("active");
    for(var i=1;i<=id;i++){
          $("#star" + i).addClass("active");
    }
 
  }
  submit_rating(formdata:NgForm) {
    if(formdata.value.review)
    {
      formdata.value.rate_value=this.rate_value;
      this.review=false;
      this.modal.dismiss(
        {
          formdata:formdata.value,
        }
      );
    }
    else
      this.review=true;  
  }

  dismiss() {
    this.modal.dismiss(
      {
        formdata: null,
      }
    );
  }
}


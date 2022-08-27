import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
import { Storage } from '@ionic/storage-angular';
import { NgForm } from '@angular/forms';
import {ToasterService} from "../services/toaster/toaster.service";
@Component({
  selector: 'app-app-feedback',
  templateUrl: './app-feedback.page.html',
  styleUrls: ['./app-feedback.page.scss'],
})
export class AppFeedbackPage implements OnInit {
  category;
  feedback;
  user_id;
  snackbar_msg;
  loader_visibility:boolean = false;
  constructor(
    public http: HttpClient,
    public url: UrlService,
    public storage: Storage,
    public toaster:ToasterService
  ) { }

  ngOnInit() {
    this.storage.get('login_details').then(res => {
      this.user_id = res.id;
    })
  }

  submit_fedback(formdata: NgForm) {
    formdata.value.category ? this.category = false : this.category = true;
    formdata.value.feedback ? this.feedback = false : this.feedback = true;
     if (formdata.value.category && formdata.value.feedback) { 
       this.loader_visibility=true;     
      formdata.value.user_id=this.user_id;
      this.http
        .post(`${this.url.serverUrl}submit_app_feedback`, formdata.value)
        .subscribe(
          (res) => {
            this.loader_visibility=false;     

            this.toaster.toaster_show('Feedback submitted successfully','success', 'white');       

            formdata.resetForm();

          },
          (err) => console.log(err)
        );
    }
    }
}

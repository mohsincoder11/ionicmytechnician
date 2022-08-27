import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
declare var $: any;

@Component({
  selector: 'app-resell-request-list',
  templateUrl: './resell-request-list.page.html',
  styleUrls: ['./resell-request-list.page.scss'],
})
export class ResellRequestListPage implements OnInit {
  backToTop: boolean = false;
  resell_product_request;
  resell_product_request_length: boolean = false;
  loader_visibility: boolean = true;
  skip_limit = 0;
  show_more: boolean = true;
  no_more: boolean = false;
  constructor(
    public http: HttpClient,
    public url: UrlService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.skip_limit = 0;
    this.show_more = true;
    this.no_more = false;
    this.get_resell_request_list();
  }

  get_resell_request_list() {
    this.http.get(`${this.url.serverUrl}get_resell_request_list?skip_limit=${this.skip_limit}`)
      .subscribe(
        (res) => {
          this.loader_visibility = false;
          this.resell_product_request = res;
          if (this.resell_product_request.length >0)
            this.resell_product_request_length = false;
          else {
            this.show_more = false;
            this.no_more = false;
            this.resell_product_request_length = true;
          }
        },
        (err) => console.log(err)
      );
  }

  load_more() {
    this.skip_limit += 8;
    this.http.get(`${this.url.serverUrl}get_resell_request_list?skip_limit=${this.skip_limit}`)
      .subscribe(
        (res) => {
          let data = res;
          if (Object.keys(data).length < 1) {
            this.show_more = false;
            this.no_more = true;
          }
          this.resell_product_request = this.resell_product_request.concat(data);
        },
        (err) => console.log(err)
      );
  }

  change_status(index, id, value) {
    this.loader_visibility = true;
    this.http.get(`${this.url.serverUrl}change_product_status?id=${id}&value=${value}&type=resell_request`)
      .subscribe(
        (res) => {
          this.loader_visibility = false;
          this.resell_product_request[index]['status'] = value;
          console.log(this.resell_product_request);

        },
        (err) => console.log(err)
      );
  }

  toggle_div(id) {
    $('.section').removeClass("collapsed");
    $('#collapsible' + id).addClass("collapsed");
    $('.downarrow').removeClass("collapsed");
    $('#downarrow' + id).addClass("collapsed");
  }


}
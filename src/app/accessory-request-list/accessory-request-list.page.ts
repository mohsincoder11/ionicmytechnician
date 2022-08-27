import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "../services/url/url.service";
declare var $: any;
@Component({
  selector: 'app-accessory-request-list',
  templateUrl: './accessory-request-list.page.html',
  styleUrls: ['./accessory-request-list.page.scss'],
})
export class AccessoryRequestListPage implements OnInit {

  accessory_request_list;
  accessory_request_list_length: boolean = false;
  loader_visibility: boolean = true;
  skip_limit = 0;
  show_more:boolean = true;
  no_more:boolean=false; 
  constructor(
    public http: HttpClient,
    public url: UrlService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.skip_limit = 0;
    this.show_more=true;
    this.no_more=false;
    this.get_accessory_request_list();
  }

  get_accessory_request_list() {
    this.http.get(`${this.url.serverUrl}get_accessory_request_list?skip_limit=${this.skip_limit}`)
      .subscribe(
        (res) => {
          console.log(res);
          this.loader_visibility = false;
          this.accessory_request_list = res;
          if (this.accessory_request_list.length >0)
          this.accessory_request_list_length = false;
        else {
          this.show_more = false;
          this.no_more = false;
          this.accessory_request_list_length = true;
        }
        },
        (err) => console.log(err)
      );
  }

  load_more() {
    this.skip_limit += 8;
    this.http.get(`${this.url.serverUrl}get_accessory_request_list?skip_limit=${this.skip_limit}`)
      .subscribe(
        (res) => {
          let data=res;         
          if( Object.keys(data).length < 1)
          {
            this.show_more=false;
            this.no_more=true;
          }
          this.accessory_request_list = this.accessory_request_list.concat(data);
        },
        (err) => console.log(err)
      );
  }

  change_status(index, id, value) {
    this.loader_visibility = true;
    this.http.get(`${this.url.serverUrl}change_product_status?id=${id}&value=${value}&type=accessory_request`)
      .subscribe(
        (res) => {
          this.loader_visibility = false;
          this.accessory_request_list[index]['status'] = value;
          console.log(this.accessory_request_list);

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

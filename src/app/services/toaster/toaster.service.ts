import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'; 

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor() { }


  toaster_show(msg,type,icon_color) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom',
      showConfirmButton: false,
      timer: 4000,
      customClass: {
        popup: 'colored-toast'
      },
    iconColor: icon_color,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })    
    Toast.fire({
      icon: type,
      title:"<span style='color:#fff;font-size:0.8em;'>" + msg + "</span> "
    })

  }



}

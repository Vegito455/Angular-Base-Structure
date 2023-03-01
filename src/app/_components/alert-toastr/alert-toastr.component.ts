import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alert-toastr',
  templateUrl: './alert-toastr.component.html',
  styleUrls: ['./alert-toastr.component.css']
})
export class AlertToastrComponent implements OnInit {

  /*   
    ngx-toastr    Angula r
    6.5.0         4.x
    8.10.2        5.x
    10.1.0        8.x 7.x 6.x
    11.3.3        8.x
    12.1.0        9.x
    13.2.1        10.x 11.x
    current       >= 12.x 
  */


  constructor(private toastrService: ToastrService) {
  }
  ngOnInit(): void {
  }



  public showSuccess(): void {
    this.toastrService.success('Message Success!', 'Title Success!');
  }

  public showInfo(): void {
    this.toastrService.info('Message Info!', 'Title Info!');
  }

  public showWarning(): void {
    this.toastrService.warning('Message Warning!', 'Title Warning!');
  }

  public showError(): void {
    this.toastrService.error('Message Error!', 'Title Error!');
  }

}

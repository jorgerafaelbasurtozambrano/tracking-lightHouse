import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sb-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss']
})
export class NuevoComponent implements OnInit {

  constructor() { }
  getUrl()
  {
    return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
  }
  ngOnInit(): void {
  }

}

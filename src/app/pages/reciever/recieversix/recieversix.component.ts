import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recieversix',
  templateUrl: './recieversix.component.html',
  styleUrls: ['./recieversix.component.scss']
})
export class RecieversixComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goHome(): void{
    this._router.navigate(['../'])
  }
}

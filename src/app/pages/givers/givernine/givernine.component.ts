import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-givernine',
  templateUrl: './givernine.component.html',
  styleUrls: ['./givernine.component.scss']
})
export class GivernineComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goHome(): void{
    this._router.navigate(['../'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giverthree',
  templateUrl: './giverthree.component.html',
  styleUrls: ['./giverthree.component.scss']
})
export class GiverthreeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['/auth/depot/lot'])
  }
  goFour(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille'])
  }
}

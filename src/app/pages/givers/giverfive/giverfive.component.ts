import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giverfive',
  templateUrl: './giverfive.component.html',
  styleUrls: ['./giverfive.component.scss']
})
export class GiverfiveComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille'])
  }
  goSix(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille/photo/compte'])
  }
}

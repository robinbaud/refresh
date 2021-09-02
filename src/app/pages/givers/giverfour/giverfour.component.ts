import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giverfour',
  templateUrl: './giverfour.component.html',
  styleUrls: ['./giverfour.component.scss']
})
export class GiverfourComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['/auth/depot/lot/vêtements'])
  }
  goFive(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille/photo'])
  }
}

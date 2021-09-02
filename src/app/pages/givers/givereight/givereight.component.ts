import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-givereight',
  templateUrl: './givereight.component.html',
  styleUrls: ['./givereight.component.scss']
})
export class GivereightComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille/photo/compte'])
  }
  goLot(): void{
    this._router.navigate(['/auth/depot/lot'])
  }
  goEnd(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille/photo/compte/validation/remerciement'])
  }
}

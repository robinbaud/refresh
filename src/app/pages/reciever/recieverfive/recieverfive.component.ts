import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recieverfive',
  templateUrl: './recieverfive.component.html',
  styleUrls: ['./recieverfive.component.scss']
})
export class RecieverfiveComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['/auth/retrait/taille/selection/validation'])
  }
  goRetrait(): void{
    this._router.navigate(['/auth/retrait'])
  }
  goEnd(): void{
    this._router.navigate(['/auth/retrait/taille/selection/validation/panier/remerciement'])
  }
}

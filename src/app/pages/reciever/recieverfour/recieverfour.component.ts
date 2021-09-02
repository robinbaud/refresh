import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recieverfour',
  templateUrl: './recieverfour.component.html',
  styleUrls: ['./recieverfour.component.scss']
})
export class RecieverfourComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['/auth/retrait/taille/selection'])
  }
  goPanier(): void{
    this._router.navigate(['/auth/retrait/taille/selection/validation/panier'])
  }
}

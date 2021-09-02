import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recieverthree',
  templateUrl: './recieverthree.component.html',
  styleUrls: ['./recieverthree.component.scss']
})
export class RecieverthreeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['/auth/retrait/taille'])
  }
  goValid(): void{
    this._router.navigate(['/auth/retrait/taille/selection/validation'])
  }
}

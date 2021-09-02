import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giversix',
  templateUrl: './giversix.component.html',
  styleUrls: ['./giversix.component.scss']
})
export class GiversixComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille/photo'])
  }
  goCrea(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille/photo/compte/creation'])
  }
  goValid(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille/photo/compte/validation'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giverseven',
  templateUrl: './giverseven.component.html',
  styleUrls: ['./giverseven.component.scss']
})
export class GiversevenComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille/photo/compte'])
  }
  goValid(): void{
    this._router.navigate(['/auth/depot/lot/vêtements/taille/photo/compte/validation'])
  }
}

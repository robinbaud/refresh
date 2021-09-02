import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giverone',
  templateUrl: './giverone.component.html',
  styleUrls: ['./giverone.component.scss']
})
export class GiveroneComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goTwo(): void{
    this._router.navigate(['/auth/depot/lot'])
  }
  goAccount(): void{
    this._router.navigate(['/auth/depot/account'])
  }
}

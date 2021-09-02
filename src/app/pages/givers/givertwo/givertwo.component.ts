import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-givertwo',
  templateUrl: './givertwo.component.html',
  styleUrls: ['./givertwo.component.scss']
})
export class GivertwoComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['../'])
  }
  goNext(): void{
    this._router.navigate(['/auth/depot/lot/vêtements'])
  }
}

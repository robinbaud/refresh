import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giveraccount',
  templateUrl: './giveraccount.component.html',
  styleUrls: ['./giveraccount.component.scss']
})
export class GiveraccountComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['../'])
  }
}

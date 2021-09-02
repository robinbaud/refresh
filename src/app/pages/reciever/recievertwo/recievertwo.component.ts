import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recievertwo',
  templateUrl: './recievertwo.component.html',
  styleUrls: ['./recievertwo.component.scss']
})
export class RecievertwoComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['/auth/retrait'])
  }
  goThree(): void{
    this._router.navigate(['/auth/retrait/taille/selection'])
  }
}

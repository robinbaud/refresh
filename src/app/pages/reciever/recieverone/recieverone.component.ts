import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recieverone',
  templateUrl: './recieverone.component.html',
  styleUrls: ['./recieverone.component.scss']
})
export class RecieveroneComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void{
    this._router.navigate(['../'])
  }
  goTwo(): void{
    this._router.navigate(['/auth/retrait/taille'])
  }

}

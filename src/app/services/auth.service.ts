import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const phpUrl = environment.phpUrl

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _http: HttpClient) { }

  public authenticate(model: any): Observable<any> {
    return this._http.post<any>(`${phpUrl}`, model)
  }
}

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject, tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url = "http://localhost:3000/api"
  constructor(private http: HttpClient) { }

  private _refresh = new Subject<void>();
  get Refresh(){
    return this._refresh;
  }

  getCompanyDetails(): Observable<any> {
    return this.http.get(this.url + '/company');
  }

  addCompany(payload: any): Observable<any> {
    return this.http.post(this.url + '/company', payload).pipe(
      tap(()=>{
        this.Refresh.next();
      })
    )
  }
}


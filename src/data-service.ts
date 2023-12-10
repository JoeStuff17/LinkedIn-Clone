import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }
  public users: BehaviorSubject<any> = new BehaviorSubject<any>(0);
}


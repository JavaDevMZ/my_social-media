import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
    providedIn: 'root',
  })
export class ApiService{
  private baseUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T>{
    return this.http.get<T>(`${this.baseUrl}/{endpoint`);
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.post<T>(`${this.baseUrl}/{endpoint}`, body, {headers})
  }
}

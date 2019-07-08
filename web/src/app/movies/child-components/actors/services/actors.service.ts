import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiResponse } from '../../../../shared/models/api.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = 'http://localhost:3000/api/v1';

@Injectable({providedIn: 'root'})
export class ActorService {
  private url = `${baseUrl}/actors`;
  constructor(private http: HttpClient) {}

  getActors():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url, httpOptions);
  }

  getActorDetails(id):Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.url}/${id}`, httpOptions);
  }

  createActor(body):Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.url, body, httpOptions);
  }

  updateActor(id, body):Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.url}/${id}`, body, httpOptions);
  }
}

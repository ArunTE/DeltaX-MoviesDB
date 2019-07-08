import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiResponse } from '../../../../shared/models/api.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = 'http://localhost:3000/api/v1';

@Injectable({providedIn: 'root'})
export class ProducerService {
  private url = `${baseUrl}/producers`;
  constructor(private http: HttpClient) {}

  getProducers():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url, httpOptions);
  }

  getProducerDetails(id):Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.url}/${id}`, httpOptions);
  }

  createProducer(body):Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.url, body, httpOptions);
  }

  updateProducer(id, body):Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.url}/${id}`, body, httpOptions);
  }
}

import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ApiResponse } from '../../shared/models/api.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const baseUrl = 'http://localhost:3000/api/v1';

@Injectable({providedIn: 'root'})
export class MovieService {
  private url = `${baseUrl}/movies`;
  constructor(private http: HttpClient) {}

  getMovies():Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url, httpOptions);
  }

  createMovie(body):Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.url, body, httpOptions);
  }

  updateMovie(id, body):Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.url}/${id}`, body, httpOptions);
  }

  deleteMovie(id):Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.url}/${id}`, httpOptions);
  }
}

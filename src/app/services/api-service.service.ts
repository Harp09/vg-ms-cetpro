import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cetpro } from '../interfaces/Cetpro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/perfil';

  constructor(
    private http: HttpClient
  ) { }

  getData(state: string): Observable<Cetpro[]> {
    return this.http.get<Cetpro[]>(`${this.baseUrl}/list/${state}`);
  }

  postData(data: Cetpro): Observable<Cetpro> {
    return this.http.post<Cetpro>(`${this.baseUrl}/create`, data);
  }

  updateData(id: string, data: Cetpro): Observable<Cetpro> {
    return this.http.put<Cetpro>(`${this.baseUrl}/update/${id}`, data);
  }

  deleteData(id: string): Observable<Cetpro> {
    return this.http.put<Cetpro>(`${this.baseUrl}/deactivate/${id}`, {});
  }

  restoreData(id: string): Observable<Cetpro> {
    return this.http.put<Cetpro>(`${this.baseUrl}/activate/${id}`, {});
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from './technology';
import { environment } from '../environments/environement';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTechnologies(): Observable<Technology[]> {
    return this.http.get<Technology[]>(`${this.apiServerUrl}/technology/all`);
  }

  public addTechnology(technology: Technology): Observable<Technology> {
    return this.http.post<Technology>(`${this.apiServerUrl}/technology/add`, technology);
  }

  public updateTechnology(id: number, technology: Technology): Observable<Technology> {
    return this.http.put<Technology>(`${this.apiServerUrl}/technology/update/${id}`, technology);
  }

  public deleteTechnology(technologyId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/technology/delete/${technologyId}`);
  }
}

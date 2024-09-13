import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';
import { environment } from '../environments/environement';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  //private apiServerUrl = 'http://localhost:8080';
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/project/all`);
  }

  public addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiServerUrl}/project/add`, project);
  }

  public updateProject(id: number, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiServerUrl}/project/update/${id}`, project);
  }

  public deleteProject(projectId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/project/delete/${projectId}`);
  }

  // Method to get projects for eeach User by User Id
  public getProjectsByUserId(userId: number): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/project/user/${userId}`);
  }
}

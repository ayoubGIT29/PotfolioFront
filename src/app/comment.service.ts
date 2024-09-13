import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment';
import { environment } from '../environments/environement';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiServerUrl}/comment/all`);
  }

  public addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiServerUrl}/comment/add`, comment);
  }

  public updateComment(id: number, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.apiServerUrl}/comment/update/${id}`, comment);
  }

  public deleteComment(commentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/comment/delete/${commentId}`);
  }
}

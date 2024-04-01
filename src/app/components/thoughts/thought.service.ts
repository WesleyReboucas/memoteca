import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {}

  list(): Observable<Thought[]> {
    return this.http.get<Thought[]>(this.API);
  }

  searchThoughtById(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.get<Thought>(url);
  }

  create(thought: Thought): Observable<Thought> {
    return this.http.post<Thought>(this.API, thought);
  }

  edit(thought: Thought): Observable<Thought> {
    const url = `${this.API}/${thought.id}`;
    return this.http.put<Thought>(url, thought);
  }

  delete(id: number): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }
}

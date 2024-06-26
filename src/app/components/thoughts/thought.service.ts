import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/thoughts';

  constructor(private http: HttpClient) {}

  list(
    page: number,
    filter: string,
    favorites: Boolean
  ): Observable<Thought[]> {
    const itemByPage = 6;
    let params = new HttpParams().set('_page', page).set('_limit', itemByPage);

    if (filter.trim().length > 1) {
      params = params.set('q', filter);
    }

    if (favorites) {
      params = params.set('favorite', true);
    }

    return this.http.get<Thought[]>(this.API, { params });
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

  changeFavorite(thought: Thought): Observable<Thought> {
    thought.favorite = !thought.favorite;
    return this.edit(thought);
  }

  delete(id: string): Observable<Thought> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Thought>(url);
  }
}

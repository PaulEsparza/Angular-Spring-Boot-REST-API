import { Injectable } from '@angular/core';

import { Book } from '../model/Book';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  URL = 'http://localhost:8080'
  HEADERS = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');

  constructor(private http:HttpClient) { }

  getBooks(){
    return this.http.get<Book[]>(this.URL+"/books", {headers: this.HEADERS});
  }
}

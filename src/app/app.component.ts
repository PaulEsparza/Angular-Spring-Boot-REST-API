import { Component, OnInit } from '@angular/core';

import { Book } from './model/Book';
import { BookService } from './service/book.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'angularSpringBootREST';
  books:Book[];
  book = {} as Book;

  constructor(private service:BookService){
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.service.getBooks().subscribe(data => {
      //console.log(data);
      this.books = data;
    });
  }

  createBook(){
    this.service.createBook(this.book).subscribe(data => {
      //console.log(data);
      this.getBooks();
    });
    this.book = {} as Book;
  }

}
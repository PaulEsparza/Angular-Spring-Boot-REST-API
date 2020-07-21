import { Component, OnInit } from '@angular/core';

import { Book } from './model/Book';
import { BookService } from './service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'angularSpringBootREST';
  books:Book[];
  book = {} as Book;

  constructor(private service:BookService, private router:Router){
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.service.getBooks().subscribe(data => {
      //console.log(data);
      this.books = data;
    }, error => {
      console.log(error);
    });
  }

  createBook(){
    this.service.createBook(this.book).subscribe(data => {
      //console.log(data);
      this.getBooks();
    }, error => {
      console.log(error);
    });
    this.book = {} as Book;
  }

  editBook(book:Book){
    /*this.service.getBook(book.id).subscribe(data => {
      console.log(data);
    });*/

    localStorage.setItem("idBook", book.id.toString());
    this.router.navigate(["editBook"]);
  }

  deleteBook(book:Book){
    if(confirm("Are you sure you want to delete it?")){
      this.service.deleteBook(book).subscribe(data => {
        //console.log(data);
        this.getBooks();
      }, error => {
        console.log(error);
      });
    }
  }

}
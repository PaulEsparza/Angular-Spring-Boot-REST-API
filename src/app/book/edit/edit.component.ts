import { Component, OnInit } from '@angular/core';

import { Book } from '../../model/Book';
import { BookService } from '../../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  book = {} as Book;
  id:number;

  constructor(private service:BookService, private router:Router) { }

  ngOnInit(): void {
    this.id = parseInt(localStorage.getItem("idBook"));
    this.service.getBook(this.id).subscribe(data => {
      //console.log(data);
      this.book = data;
    }, error => {
      console.log(error);
    });
  }

  updateBook(book:Book){
    this.service.updateBook(book).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });
    this.book = {} as Book;
    this.router.navigate(["/"]);
  }

  cancel(){
    this.book = {} as Book;
    this.router.navigate(["/"]);
  }

}

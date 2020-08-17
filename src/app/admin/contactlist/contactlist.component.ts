import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ContactService } from './../../service/contact/contact.service';
import { Contact } from './../../interface/contact/contact';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {
  constructor(private contact: ContactService) {}
  ngAfterViewInit(): void {
    this.datasource.sort = this.sort;
     this.datasource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.contact.getcotact();
    this.contact.contactlist.subscribe((re: Contact[]) => {
      this.datasource.data = re;
    });
  }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['Date', 'name', 'email', 'phone', 'treatment'];
  datasource = new MatTableDataSource<Contact>();
}

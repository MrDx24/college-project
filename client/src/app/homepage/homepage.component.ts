import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  users = [
    {name: 'test', location: 'Kothrud', type: 'Tree plantation', date: '26/04/2020', time: '06:38 PM'},
    {name: 'test1', location: 'Kothrud', type: 'Tree plantation', date: '26/04/2020', time: '06:38 PM'},
    {name: 'test', location: 'Kothrud', type: 'Tree plantation', date: '26/04/2020', time: '06:38 PM'},
    {name: 'test1', location: 'Kothrud', type: 'Tree plantation', date: '26/04/2020', time: '06:38 PM'},
    {name: 'test', location: 'Kothrud', type: 'Tree plantation', date: '26/04/2020', time: '06:38 PM'},
    {name: 'test1', location: 'Kothrud', type: 'Tree plantation', date: '26/04/2020', time: '06:38 PM'}];
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  getEvents() {

    this.http.get('http://localhost:4200/user/events').subscribe((res: any) => {
      this.users = res.userData;
    }, (err: any) => {
      alert('error in loading data');
    });
  }

}

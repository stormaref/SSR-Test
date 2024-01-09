import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent implements OnInit {
  title = 'exon-test';
  response:any
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
      this.http.get('http://api/test').subscribe((res)=>{
        this.response = JSON.stringify(res)
      })
  }
}

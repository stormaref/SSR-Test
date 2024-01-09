import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environment';


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
      this.http.get( environment.BASE_URL +'api/test').subscribe((res)=>{
        this.response = res
      })
  }
}

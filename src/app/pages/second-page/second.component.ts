import { Component, Inject, OnInit } from '@angular/core';
import {
  CommonModule,
  isPlatformBrowser,
  isPlatformServer,
} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environment';
import { PLATFORM_ID } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent implements OnInit {
  title = 'exon-test';
  response: any;
  baseUrl: string = '';
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    let isBrowser = isPlatformBrowser(platformId);
    let isServer = isPlatformServer(platformId);
    this.baseUrl = isBrowser
      ? 'http://localhost:5000'
      : isServer
      ? 'http://api'
      : 'thanks to j';
  }
 async ngOnInit() {
    let data:any = await lastValueFrom(this.http.get(this.baseUrl + '/test'))
  console.log(data,'data');
  this.response = data.message
  
  }
}

import {
  Component,
  Inject,
  OnInit,
  TransferState,
  makeStateKey,
} from '@angular/core';

import {
  CommonModule,
  isPlatformBrowser,
  isPlatformServer,
} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { PLATFORM_ID } from '@angular/core';
import { lastValueFrom, map, shareReplay } from 'rxjs';
import { ServerTransferStateModule } from '@angular/platform-server';

const MY_KEY = makeStateKey<string>('myKey');
@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, HttpClientModule,ServerTransferStateModule],
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
    @Inject(PLATFORM_ID) platformId: Object,
    private transferState: TransferState
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
    if (this.transferState.hasKey(MY_KEY)) {
      const myData: any = this.transferState.get(MY_KEY, 'defaultValue');
      this.response = myData.message;
    } else {
      let data: any = await lastValueFrom(this.apiCall());
      this.transferState.set(MY_KEY, data);
      this.response = data.message;
    }
  }

  apiCall() {
    return this.http.get(this.baseUrl + '/test').pipe(
      map((receivedData: any) => {
        return receivedData;
      }),
      shareReplay()
    );
  }
}

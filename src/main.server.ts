import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { renderApplication } from '@angular/platform-server';

const bootstrap = () => bootstrapApplication(AppComponent, config);
const options = {
    document: '<!doctype html><html><head></head><body><app-root></app-root></body></html>',
    url: '/'
  };
const output: string = await renderApplication(bootstrap,options);
export default output;

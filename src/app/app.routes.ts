import { Routes } from '@angular/router';
import { SecondComponent } from './pages/second-page/second.component';
import { AppComponent } from './app.component';
import { ThirdComponent } from './pages/third-page/third.component';

export const routes: Routes = [
 
    { path: 'second', component: SecondComponent },
    { path: 'third', component: ThirdComponent },
];

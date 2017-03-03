import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgaThemeModule } from '../framework/theme';

import { AppComponent } from './app.component';
import { NgaCardTestComponent } from './nga-card-test/nga-card-test.component';
import { NgaLayoutTestComponent } from './nga-layout-test/nga-layout-test.component';
import { NgaSidebarTestComponent } from './nga-sidebar-test/nga-sidebar-test.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NgaCardTestComponent,
    NgaLayoutTestComponent,
    NgaSidebarTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NgaThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

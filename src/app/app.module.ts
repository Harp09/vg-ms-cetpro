import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCetproComponent } from './components/Cetpro/list-cetpro/list-cetpro.component';

import { CetproPageComponent } from './pages/cetpro-page/cetpro-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormCetproComponent } from './components/Cetpro/form-cetpro/form-cetpro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsComponent } from './ui/icons/icons.component';
import { ToastrModule } from 'ngx-toastr';
import { ExportAsModule } from 'ngx-export-as';


@NgModule({
  declarations: [
    AppComponent,
    ListCetproComponent,
    CetproPageComponent,
    FormCetproComponent,
    IconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
    }),
    ExportAsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }

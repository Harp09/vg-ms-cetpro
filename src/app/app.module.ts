import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ActualizarFormularioComponent } from './formulario/actualizar-formulario/actualizar-formulario.component';
import { AgregarFormularioComponent } from './formulario/agregar-formulario/agregar-formulario.component';
import { FormularioInactivosComponent } from './formulario/formulario-inactivos/formulario-inactivos.component';
import { ActualizarUserComponent } from './user/actualizar-user/actualizar-user.component';
import { AgregarUserComponent } from './user/agregar-user/agregar-user.component';
import { UserInactivosComponent } from './user/user-inactivos/user-inactivos.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './services/user.service';
import { MenuComponent } from './menu/menu.component';
import { PaginaWebComponent } from './pagina-web/pagina-web.component';
import { LoginComponent } from './login/login.component';
import { StudyProgrammeComponent } from './study-programme/study-programme.component';
import { ActualizarStudyProgrammeComponent } from './study-programme/actualizar-study-programme/actualizar-study-programme.component';
import { AgregarStudyProgrammeComponent } from './study-programme/agregar-study-programme/agregar-study-programme.component';
import { StudyProgrammeInactivosComponent } from './study-programme/study-programme-inactivos/study-programme-inactivos.component';
import { ListCetproComponent } from './components/Cetpro/list-cetpro/list-cetpro.component';
import { CetproPageComponent } from './pages/cetpro-page/cetpro-page.component';
import { FormCetproComponent } from './components/Cetpro/form-cetpro/form-cetpro.component';
import { IconsComponent } from './ui/icons/icons.component';
import { ToastrModule } from 'ngx-toastr';
import { ExportAsModule } from 'ngx-export-as';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ActualizarFormularioComponent,
    AgregarFormularioComponent,
    FormularioInactivosComponent,
    ActualizarUserComponent,
    AgregarUserComponent,
    UserInactivosComponent,
    UserComponent,
    MenuComponent,
    PaginaWebComponent,
    LoginComponent,
    StudyProgrammeComponent,
    ActualizarStudyProgrammeComponent,
    AgregarStudyProgrammeComponent,
    StudyProgrammeInactivosComponent,
    ListCetproComponent,
    CetproPageComponent,
    FormCetproComponent,
    IconsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
    }),
    ExportAsModule
  ],
  providers: [UserService, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }

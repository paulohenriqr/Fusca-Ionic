import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BuscarComponent } from './components/template/buscar/buscar.component';
import { ItensComponent } from './components/template/itens/itens.component';
import { LoginComponent } from './components/template/login/login.component';
import { CadastroComponent } from './components/template/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuscarComponent,
    ItensComponent,
    LoginComponent,
    CadastroComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

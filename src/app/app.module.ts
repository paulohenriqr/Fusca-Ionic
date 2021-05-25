import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItensComponent } from './components/template/itens/itens.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipeBuscarPipe } from './pipe-buscar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItensComponent,
    PipeBuscarPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicModule
  ],
  exports: [
    CommonModule,
  ],
  providers: [
    PipeBuscarPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }





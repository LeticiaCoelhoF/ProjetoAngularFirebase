import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../shared/components/menu/menu.module';
import { CabecalhoModule } from '../shared/components/cabecalho/cabecalho.module';
import { CadastroComponent } from './cadastro.component';
import { FormsModule } from '@angular/forms';
import { ListaModule } from '../lista/lista.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    CabecalhoModule,
    FormsModule,
    ListaModule
  ],
  exports: [
    CadastroComponent
  ]
})
export class CadastroModule { }

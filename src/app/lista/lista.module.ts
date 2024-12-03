import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../shared/components/menu/menu.module';
import { CabecalhoModule } from '../shared/components/cabecalho/cabecalho.module';
import { CabecalhoComponent } from '../shared/components/cabecalho/cabecalho.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    CabecalhoModule
  ]
})
export class ListaModule { }

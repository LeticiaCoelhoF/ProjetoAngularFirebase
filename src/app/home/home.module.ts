import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MenuModule } from '../shared/components/menu/menu.module';
import { CabecalhoModule } from '../shared/components/cabecalho/cabecalho.module';
import { CadastroModule } from '../cadastro/cadastro.module';
import { ListaModule } from '../lista/lista.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenuModule,
    CabecalhoModule,
    CadastroModule,
    ListaModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

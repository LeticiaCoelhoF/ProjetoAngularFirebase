import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  contato: any = {
    modelo: null,
    marca: null,
    anoFabricacao: null,
    tipo: null
  };
  id: any;
  contatos: any;

  constructor(
    public crudService: CrudService
  ) { 
    this.getContatos();
  }

  ngOnInit() {
  }

  cadastrar(){
    this.crudService.insert(this.contato, 'contatos');
    this.getContatos();
  }

  getContatos(){
    this.crudService.fetchAll('contatos')
    .then(dados => {
      console.log(dados);
      this.contatos = dados;
    })
  }

  deletar(id: string){
    this.crudService.remove(id, 'contatos')
    .then(() => {
      this.getContatos();
    })
  }
  
}
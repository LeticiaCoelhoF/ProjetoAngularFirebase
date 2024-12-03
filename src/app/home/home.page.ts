import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  modelo: string = '';
  marca: string = '';
  anoFabricacao: number | null = null;
  tipo: string = '';
  mostrarLista: boolean = false;

  lista: { 
    id: number; 
    modelo: string; 
    marca: string; 
    ano: number; 
    tipo: string 
  }[] = []; // Lista vazia

  constructor() {}

  ngOnInit() {}

  consultar() {
    // Exibe a lista quando o botão Consultar for clicado
    if (this.lista.length === 0) {
    }
    this.mostrarLista = true;
  }

  cadastrar() {
    if (this.modelo && this.marca && this.anoFabricacao && this.tipo) {
      // Adiciona um novo item à lista
      this.lista.push({
        id: this.lista.length + 1,
        modelo: this.modelo,
        marca: this.marca,
        ano: this.anoFabricacao,
        tipo: this.tipo,
      });

      // Limpa os campos do formulário após o cadastro
      this.modelo = '';
      this.marca = '';
      this.anoFabricacao = null;
      this.tipo = '';
    } else {
      alert('Por favor, preencha todos os campos antes de cadastrar.');
    }
  }

  deletar(id: number) {
    // Remove um item da lista pelo ID
    this.lista = this.lista.filter((item) => item.id !== id);

    // Se a lista ficar vazia após deletar, oculta a exibição
    if (this.lista.length === 0) {
      this.mostrarLista = false;
    }
  }
}
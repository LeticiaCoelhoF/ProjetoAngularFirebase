import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  modelo: string = '';
  marca: string = '';
  anoFabricacao: number | null = null;
  tipo: string = '';

  // Lista que armazena os itens cadastrados
  lista: any[] = [];
  mostrarLista: boolean = false;

  constructor() { }

  ngOnInit() {}

  // Método para consultar os itens cadastrados
  consultar() {
    if (this.lista.length === 0) {
      alert('Nenhum item encontrado.');
    }
    this.mostrarLista = true;  // Exibe a lista
  }

  // Método para cadastrar um novo item
  cadastrar() {
    if (this.modelo && this.marca && this.anoFabricacao && this.tipo) {
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
}

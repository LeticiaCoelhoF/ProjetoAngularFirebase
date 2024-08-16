import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  recado = {
    assunto: null,
    mensagem: null
  }

  recados: any = []

  constructor(
    public crudservice: CrudService
  ){ }

  enviar(){
    this.crudservice.insert(this.recado, 'recados');
  }

  carregar(){
    this.recados = [];
    this.crudservice.fetchAll('recados')
    .then((response) => {
        console.log(response);
        this.recados = response;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('Processo finalizado');
    });
  }

  remover(id: string){
    this.crudservice.remove(id, 'recados');
    this.carregar();
  }

 pessoa ={
    foto: 'https://professionalmoron.com/wp-content/uploads/2012/05/alpaca-985158_640.jpg',
    nome: ' Pombinha da Paz Silva',
    objetivo: 'Programador HTML & CSS',
    contato:{
        email: 'prombinha@hotmail.com',
        telefone:'(11) 99999-9999',
        github: 'github.com/pombinha',
        linkedin: 'linkedin.com/pombinha'
    },
    softskills:[
      'Comunicação',
      'Proatividade',
      'Trabalho em grupo'
    ],
    formacao:[
      {
        ano_inicio: '2022',
        ano_fim: '2024',
        instituicao: 'Etec Sales Gomes',
        curso: 'Técnico em Desenvolvimento de Sistemas'
      },
      {
        ano_inicio: '2025',
        ano_fim: '2027',
        instituicao: 'Fatec',
        curso: 'Superior em Análise e Desenvolvimento de Sistemas'
      }
    ],
    projeto:[
      {
        ano: '2022',
        instituicao: 'Etec Sales Gomes',
        nome: 'Etec de Portas Abertas - EPA',
        descricao: 'Lorem'
      }
  ]
 }

}

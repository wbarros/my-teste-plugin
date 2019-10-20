import { Component } from '@angular/core';

declare let PluginAutoid9U;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor() {
    
  }

  singleTag() {
    alert("Iniciando os testes...");
    PluginAutoid9U.singleTag((data) => {
      console.log(data);
    },(err) => {
      console.log(err);
    });
  }




}

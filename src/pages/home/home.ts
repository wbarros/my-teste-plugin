import { Component } from '@angular/core';

declare let PluginAutoid9U;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor() {
    
  }

  open() {
    console.log("Ligando UHF...");
    PluginAutoid9U.open((data) => {
      console.log(data);
    },(err) => {
      console.log(err);
    });
  }

  close() {
    console.log("Desligando UHF...");
    PluginAutoid9U.close((data) => {
      console.log(data);
    },(err) => {
      console.log(err);
    });
  }

  singleTag() {
    PluginAutoid9U.singleTag((data) => {
      console.log(data);
    },(err) => {
      console.log(err);
    });
  }






}

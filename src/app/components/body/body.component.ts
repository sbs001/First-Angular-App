import { Component } from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyCompononent{

  view = true;

  phrase:any = {
    msg: 'A la grande le puse cuca',
    autor: 'Homer Thompson'
  };

  characters:string[] = ['Homer', 'Ralph', 'Hugo', 'Juan Topo', 'Duffman']
}
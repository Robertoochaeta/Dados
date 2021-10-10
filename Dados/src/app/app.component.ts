import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dados';
  DadoIzquierda ="../assets/img/dice1.png";
  DadoDerecha="../assets/img/dice4.png";
  numero1:number=1;
  numero2:number=2;
  tirarDados():void{
    this.numero1= Math.round(Math.random() *5+1);
    this.numero2=Math.round(Math.random() *5 +1 );
    // console.log(this.numero1);
    // console.log(this.numero2)
    this.DadoIzquierda="../assets/img/dice" + this.numero1 + '.png';
    this.DadoDerecha ="../assets/img/dice" + this.numero2 + '.png';
 
  }
}

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
  numero1:number=0;
  numero2:number=0;
  tirarDados():void{
    this.numero1= Math.round(Math.random() *6);
    this.numero2=Math.round(Math.random() *6 );
    console.log(this.numero1);
 
  }
}

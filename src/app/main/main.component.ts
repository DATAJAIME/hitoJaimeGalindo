import { Component, OnInit } from '@angular/core';

import { Alumno } from '../models/Alumno';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  alumnosArray: Alumno[] = [
    { id: 1, name: "Jaime", city: "Madrid", age: "19" },
    { id: 2, name: "Darth Vader", city: "Death Star", age: "45" }
  ]

  alumnoEscogido: Alumno = new Alumno();

  anadir() {
    this.alumnoEscogido.id = this.alumnosArray.length + 1;
    this.alumnosArray.push(this.alumnoEscogido);


    this.alumnoEscogido = new Alumno();
  }

  editar(){
    this.alumnoEscogido = new Alumno();
  }

  elegirEditar(alumno: Alumno) {
    this.alumnoEscogido = alumno;
  }

  eliminar(alumno: Alumno) {
    if(confirm("¿Estás seguro de que quieres eliminar este alumno?")){
      this.alumnosArray = this.alumnosArray.filter(x => x != this.alumnoEscogido);
      this.alumnoEscogido = new Alumno();
    }
  }

  ngOnInit() {

  }

}

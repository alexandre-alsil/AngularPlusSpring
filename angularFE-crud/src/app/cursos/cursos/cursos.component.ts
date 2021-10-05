import { Curso } from './../models/curso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  dataSource: Curso[] = [{ _id:'1', nome: 'Angular', categoria: 'front-end' }];
  displayedColumns = ['nome','categoria'];

  constructor() {

  }

  ngOnInit(): void {
  }

}

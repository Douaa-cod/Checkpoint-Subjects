import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {
@Input() dataParentPersonnes: Personne[]
@Output() sendDataPerson = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  treatDataPerson(dataPerson){
    this.sendDataPerson.emit(dataPerson)
  }

}

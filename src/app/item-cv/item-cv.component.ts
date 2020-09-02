import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {
@Input() dataPersonneItem : Personne
@Output() sendDataPerson = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  clickPerson(){
    this.sendDataPerson.emit(this.dataPersonneItem)
  }

}

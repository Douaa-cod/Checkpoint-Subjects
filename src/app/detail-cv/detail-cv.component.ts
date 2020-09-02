import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../Model/Personne';
import { EmbaucheService } from '../services/embauche.service'

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: [
    './detail-cv.component.css',
    './rotating-card.css',
  ]
})
export class DetailCvComponent implements OnInit {
@Input() dataPerson : Personne
  constructor(
    private embaucheService : EmbaucheService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  embaucher(personne: Personne){
    this.embaucheService.embaucher(personne)
  }
  goToDetails(){
    const LINK = ['CVs', this.dataPerson.id]
    this.router.navigate(LINK)
  }

}

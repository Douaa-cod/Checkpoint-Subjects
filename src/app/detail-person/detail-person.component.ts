import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from '../Model/Personne';
import { CvService } from '../services/cv.service';

const LINK = ['CVs']

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit {
  person : Personne
  constructor(
    private ActivateRoute : ActivatedRoute,
    private cvService : CvService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.ActivateRoute.params.subscribe(
      (params)=>{
        let id = params.id
        this.person = this.cvService.getPersonById(id)
        if (!this.person){
          this.router.navigate(LINK);
        }
      }
    )
  }
  deletePersonne(){
    if (this.cvService.deletePersonById(this.person)){
      this.router.navigate(LINK);
    }
  }

}

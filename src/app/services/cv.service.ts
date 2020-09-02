import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne'

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes : Personne []
  constructor() {
    this.personnes = [
      new Personne (1, 'Yazidi', 'Douaa', 29, 11111111, 'Développeur', "capture1.png"),
      new Personne (2, 'Marvel', 'John', 35, 22222222, 'CEO', "   "),
      new Personne (3, 'Andrew', 'Mike', 30, 33333333, 'Développeur', "capture3.png"),
      new Personne (4, 'Corman', 'Inna', 26, 44444444, 'Product Manager', "capture4.png")
    ]
   }
   getPersonnes(): Personne[]{
    return this.personnes
   }
   getPersonById(id): Personne{
      return this.personnes.find(
        (personne)=>personne.id === +id
      );

   }
   deletePersonById(person : Personne){
    let index;
    index = this.personnes.indexOf(person)
    console.log(index)
    if (index === -1){
      alert("Person does not exist")
      return 0
    } else {
      this.personnes.splice(index, 1)
      console.log(this.personnes)
      return 1
    }
   }
}

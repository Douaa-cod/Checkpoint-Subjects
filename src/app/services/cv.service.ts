import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from '../Model/Personne'

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes : Personne [];
  nbClick = 0;
  clickSubject = new Subject<number>();
  selectItemSubject = new Subject<Personne>();
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
   addPerson(person : Personne){
     if (person){
       const id = this.personnes[this.personnes.length-1].id
       person.id = id + 1
       this.personnes.push(person)
       console.log(this.personnes)
     }else
     {
       alert ("Nothing to add")
     }
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
   click(){
     this.nbClick ++;
     this.clickSubject.next(this.nbClick);
   }
   clickOnItem( personne : Personne) {
    this.selectItemSubject.next(personne);
   }
}

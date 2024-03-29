import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Skill } from '../micro_components/skill/skill';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  skills: Skill[] = [];
  learningskills: Skill[] = [];

  summary: string = '';

  idade: number = idade(2004, 5, 4);

  constructor(private title: Title, private homeservice: HomeService) { }

  ngOnInit(): void {
    this.title.setTitle('Home - Portifolio');
    this.getskills();
    this.getsummary();
  }

  getskills(): void{
    this.homeservice.getskills().subscribe((skills) => {
      skills.forEach((a) => {
        if (a.learning == true) {
          this.learningskills.push(a)
        }else{
          this.skills.push(a)
        }
      })
    });
  }

  getsummary(): void{
    this.homeservice.getsummary().subscribe((summary) => {
      this.summary = summary.summary;
    });
  }

}

function idade(ano_aniversario: number, mes_aniversario: number, dia_aniversario: number) {
  var d = new Date,
      ano_atual = d.getFullYear(),
      mes_atual = d.getMonth() + 1,
      dia_atual = d.getDate(),

      ano_aniversario = +ano_aniversario,
      mes_aniversario = +mes_aniversario,
      dia_aniversario = +dia_aniversario,

      quantos_anos = ano_atual - ano_aniversario;

  if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
      quantos_anos--;
  }

  return quantos_anos < 0 ? 0 : quantos_anos;
}
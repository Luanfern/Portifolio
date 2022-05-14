import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnChanges, OnInit {

  @Input()
  skillname: string = '';

  @Input()
  skillpercent: number = 0;

  percent: number = 0;
  name: string = '';

  ngOnChanges(): void {
    this.name = this.skillname;
    this.percent = this.skillpercent;
  }

  ngOnInit(): void {
  }

}

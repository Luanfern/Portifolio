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
  skilllogo: string = '';

  @Input()
  skilllearning: boolean = false;

  logo: string = '';
  name: string = '';
  learning: boolean = false;

  ngOnChanges(): void {
    this.name = this.skillname;
    this.logo = this.skilllogo;
    this.learning = this.skilllearning;
  }

  ngOnInit(): void {
  }

}

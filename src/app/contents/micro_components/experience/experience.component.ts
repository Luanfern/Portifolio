import { Component, Input, OnInit } from '@angular/core';
import { Experience } from '../../experiences/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  duration: string = ''

  @Input()
  experience!: Experience;

  constructor() { }

  ngOnInit(): void {
   this.setDuration();
  }

  setDuration(): void{
    if (this.experience.start == '-' && this.experience.end == '-') {
      this.duration = '1 Mounth'
    } else if (this.experience.start != '-' && this.experience.end == '-') {
      this.duration = 'present'
    } else {
      var e = Date.parse(this.experience.end)
      var s = Date.parse(this.experience.start)
      var meses = (e-s)/2629746000
      var anos = (e-s)/31556952000
      if (anos < 1) {
        this.duration = Math.round(meses).toString()+' Mounth(s)'
      } else if(anos >= 1 && anos < 2){
        if (meses > Math.floor(anos)) {
          this.duration = Math.floor(anos).toString()+' Year(s) '+Math.round(((meses/12)-Math.floor(anos))*10)+ ' Mounth(s)'
        } else {
          this.duration = Math.round(anos).toString()+' Year(s)'
        }
      } else {
        this.duration = '2+ Year(s)'
      }
    }
  }

}

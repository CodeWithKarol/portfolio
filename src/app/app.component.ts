import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {SkillsComponent} from './skills/skills.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}

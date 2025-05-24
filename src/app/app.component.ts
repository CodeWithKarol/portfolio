import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // skillsSection = viewChild.required(SkillsComponent, { read: ElementRef });
  // scrollToSkills(): void {
  //   if (this.skillsSection()) {
  //     this.skillsSection().nativeElement.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     });
  //   }
  // }
  //
  // scrollToTop(): void {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }
  //
  // scrollTo(section: string): void {
  //   console.log(section);
  //   if (section === 'top') {
  //     this.scrollToTop();
  //     return;
  //   } else if (section === 'skills') {
  //     this.scrollToSkills();
  //     return;
  //   }
  // }
}

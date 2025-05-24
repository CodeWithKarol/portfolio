import { Component, effect, inject, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FaIconComponent, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly isMenuOpened = signal(false);
  protected readonly faCoffee = faBars;
  protected readonly faTimes = faXmark;
  private readonly breakpointObserver = inject(BreakpointObserver);
  protected readonly isMobile = toSignal(
    this.breakpointObserver.observe([Breakpoints.XSmall]).pipe(
      map((breakpointState) => breakpointState.matches),
      takeUntilDestroyed(),
    ),
    {
      initialValue: false,
    },
  );

  constructor() {
    effect(() => {
      if (!this.isMobile() && this.isMenuOpened()) {
        this.toggleMenu();
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpened.update((state) => !state);
  }
}

import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('main')
  public main: ElementRef;

  constructor() {}

  public ngOnInit(): void {
    const cursor: HTMLElement = document.querySelector('.cursor');
    document.body.addEventListener('mousemove', ({ clientX, clientY }) => {
      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    });
  }

  /**
   * Scroll to next section
   */
  public scrollToNextSection(): void {
    const el: HTMLElement = this.main.nativeElement;
    el.scrollTo(0, el.scrollTop + window.innerWidth);
  }

  /**
   * Scroll to previous section
   */
  public scrollToPreviousSection(): void {
    const el: HTMLElement = this.main.nativeElement;
    el.scrollTo(0, el.scrollTop - window.innerWidth);
  }
}


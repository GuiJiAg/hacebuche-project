import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('responsiveNav') responsive_nav: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {}

  nav_open() {
    let hidden: boolean = false;
    let responsive_class_list: [] = this.responsive_nav.nativeElement.classList;

    for (let i in responsive_class_list) {
      if (responsive_class_list[i] === 'responsive-nav-hidden') {
        hidden = true;
        break;
      }
    }

    if (hidden) {
      this.renderer.removeClass(this.responsive_nav.nativeElement, 'responsive-nav-hidden');
      this.renderer.addClass(this.responsive_nav.nativeElement, 'responsive-nav-enabled');
    }
    else {
      this.nav_close();
    }
    
  }

  // Close the sidebar with the close button
  nav_close() {
    this.renderer.removeClass(this.responsive_nav.nativeElement, 'responsive-nav-enabled');
    this.renderer.addClass(this.responsive_nav.nativeElement, 'responsive-nav-hidden');
  }
  
  goTop() {
    window.scrollTo(0, 0);
  }
}

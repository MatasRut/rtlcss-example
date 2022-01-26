import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rtlappscss';
  dir = "ltr";

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleRtl() {
    if (this.dir === 'rtl') {
      this.dir = 'ltr';
    } else {
      this.dir = 'rtl';
    }

    let htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = this.dir;
  }
}

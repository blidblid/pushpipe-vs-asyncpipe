import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  randomizeSub = new Subject<void>();

  numbers = Array.from({ length: 10000 }).map(() => {
    return this.randomizeSub.pipe(map(() => Math.random()));
  });
}

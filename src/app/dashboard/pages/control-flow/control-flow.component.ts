import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'D';

@Component({
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('B');
  public frameworks = signal<string[]>([
    'Angular',
    'React',
    'Vue',
    'Svelte',
    'Ember',
  ]);

  public toogleContent() {
    this.showContent.update((value) => !value);
  }
}

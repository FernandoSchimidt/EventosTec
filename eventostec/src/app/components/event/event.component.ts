import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss',
})
export class EventComponent {
  @Input('title') title: string = 'Não conseguimos carregar';
  @Input('description') description: string = 'descrição vira em breve';
  @Input('date') date: string = '10/10/2024';
  @Input('place') place: string = 'Online';
}

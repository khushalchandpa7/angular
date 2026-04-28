import { Component, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextTrimPipe } from './custom-pipes/text-trim-pipe';
import { ReplaceTextPipe } from './custom-pipes/replace-text-pipe';
import { AddCurrPipe } from './custom-pipes/add-curr-pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, TextTrimPipe, ReplaceTextPipe, AddCurrPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {
  fullName = signal<string>('');
  amount = signal(7_00_369);
  isLighter = signal(true);
  today = signal(new Date());
  percent = signal(1);
  user = { username: 'khushal', age: 20 };
  text = signal('Khushal Chandpa Vijaybhai');
}

import {
  Component, OnInit, EventEmitter, Output
} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Output() textEntered = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enter(input: HTMLInputElement) {
    this.textEntered.emit(input.value);
    input.value = '';
  }
}

import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  imgUrl =
    'https://images.unsplash.com/photo-1530092285049-1c42085fd395?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwZmxvd2VyfGVufDB8fDB8fHww';

  clickEvent(): void {
    alert(`Click Event Invoked`);
  }

  dblClick(): void {
    alert('Double Click Event Invoked');
  }

  keyPress(): void {
    alert(`User entered their name!`);
  }

  count = 0;
  updateCount(action: string): void {
    if (action === '-') {
      if (this.count > 0) {
        this.count--;
      }
    } else if (action === '+') {
      if (this.count < 7) {
        this.count++;
      }
    }
  }

  // Using 'preventDefault()' to block the default behaviour of the element;
  blockDefaultBehaviour(evt: Event) {
    evt.preventDefault();
  }

  charCount = signal(0);

  username = signal('');
  password = signal('');

  handleSubmit(evt: any) {
    evt.preventDefault();
    console.log(evt);
    this.username.set(evt.srcElement[0].value);
    this.password.set(evt.srcElement[1].value);
  }

  handleChange(evt: any) {
    console.log(evt.target.value);
  }

  // Focus
  handleFocus(evt: any) {
    console.log('Inside the Input field');
  }

  // Blur
  handleBlur(ect: any) {
    console.log('Outside the Input field');
  }

  // Mouse Event (mouseenter, mousemove, mouseout)
  handleMouseEvent(eventType: any) {
    if (eventType === 'mouseenter') {
      console.log('Mouse Enter');
    } else if (eventType === 'mousemove') {
      console.log('Mouse Move');
    } else {
      console.log('Mouse Out');
    }
  }
}

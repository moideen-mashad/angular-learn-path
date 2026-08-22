import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HourItem } from './models/contact.model';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly header = 'Contact DecoLux';
  readonly subHeader = 'Let\'s collaborate to bring your luxury spatial vision to life.';

  readonly studioHeader = 'The London Studio';
  readonly address = '12 Piccadilly Court, London, W1J 0TR';
  readonly phone = '+44 (0) 20 7946 0982';
  readonly email = 'hello@decolux.com';

  readonly hoursHeader = 'Studio Hours';
  readonly hours: HourItem[] = [
    { days: 'Monday - Friday', time: '09:00 AM - 06:00 PM' },
    { days: 'Saturday', time: '10:00 AM - 04:00 PM (By Appointment)' },
    { days: 'Sunday', time: 'Closed' }
  ];

  // Interactive Form Bindings (Signals)
  readonly name = signal('');
  readonly userEmail = signal('');
  readonly subject = signal('');
  readonly message = signal('');
  readonly isSubmitted = signal(false);

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.isSubmitted.set(true);
      // Reset form variables
      this.name.set('');
      this.userEmail.set('');
      this.subject.set('');
      this.message.set('');
      form.resetForm();
      
      // Auto close success notification after 5 seconds
      setTimeout(() => {
        this.isSubmitted.set(false);
      }, 5000);
    }
  }
}

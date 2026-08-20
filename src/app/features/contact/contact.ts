import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface HourItem {
  days: string;
  time: string;
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  header = 'Contact DecoLux';
  subHeader = 'Let\'s collaborate to bring your luxury spatial vision to life.';

  studioHeader = 'The London Studio';
  address = '12 Piccadilly Court, London, W1J 0TR';
  phone = '+44 (0) 20 7946 0982';
  email = 'hello@decolux.com';

  hoursHeader = 'Studio Hours';
  hours: HourItem[] = [
    { days: 'Monday - Friday', time: '09:00 AM - 06:00 PM' },
    { days: 'Saturday', time: '10:00 AM - 04:00 PM (By Appointment)' },
    { days: 'Sunday', time: 'Closed' }
  ];

  // Interactive Form Bindings
  name = signal('');
  userEmail = signal('');
  subject = signal('');
  message = signal('');
  isSubmitted = signal(false);

  onSubmit(form: any) {
    if (form.valid) {
      this.isSubmitted.set(true);
      // Reset form variables
      this.name.set('');
      this.userEmail.set('');
      this.subject.set('');
      this.message.set('');
      
      // Auto close success notification after 5 seconds
      setTimeout(() => {
        this.isSubmitted.set(false);
      }, 5000);
    }
  }
}

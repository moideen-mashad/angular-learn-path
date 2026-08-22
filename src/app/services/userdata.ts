import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Userdata {
  constructor() {}
  users(): any {
    return [
      { name: 'moideen', age: '25', city: 'bangalore' },
      { name: 'mashad', age: '24', city: 'bangalore' },
      { name: 'saheer', age: '23', city: 'chennai' },
      { name: 'faisal', age: '26', city: 'mumbai' },
      { name: 'muhammed', age: '27', city: 'delhi' },
    ];
  }
}

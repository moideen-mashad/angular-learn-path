# Angular Beginner's Guide (Modern Angular v17 - v21+)

Welcome to Angular! This guide is designed to help you get started with modern Angular, focusing on the latest paradigms like **Standalone Components**, **Signals** (reactive state management), and the new **Block Control Flow** template syntax.

---

## Table of Contents
1. [Core Architecture Overview](#1-core-architecture-overview)
2. [Components: The Building Blocks](#2-components-the-building-blocks)
3. [Reactive State with Signals](#3-reactive-state-with-signals)
4. [Modern Template Control Flow](#4-modern-template-control-flow)
5. [Data Binding](#5-data-binding)
6. [Component Communication](#6-component-communication)
7. [Services & Dependency Injection](#7-services--dependency-injection)
8. [Routing](#8-routing)
9. [Useful Angular CLI Commands](#9-useful-angular-cli-commands)

---

## 1. Core Architecture Overview
Modern Angular applications are structured around **standalone components**, **services**, and **routing**. 

Unlike older versions of Angular (which relied on complex `@NgModule` declarations), modern Angular apps are much lighter. Every component imports its own dependencies directly, making code cleaner, easier to test, and tree-shakeable.

```
src/
├── app/
│   ├── app.ts                 # Root component code
│   ├── app.html               # Root component HTML template
│   ├── app.css                # Root component styling
│   ├── app.config.ts          # Core application configuration (Providers, Routing)
│   └── app.routes.ts          # Application route definitions
├── main.ts                    # Application bootstrap entry point
└── index.html                 # Main HTML wrapper file
```

---

## 2. Components: The Building Blocks
A component in Angular consists of three main files:
- **TypeScript Class (`.ts`)**: Logic, state, and behavior.
- **HTML Template (`.html`)**: The view structure.
- **CSS Styles (`.css`)**: Localized styling.

Here is a minimal standalone component example:

### TypeScript (`user-profile.component.ts`)
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',      // Custom HTML tag used to embed this component
  standalone: true,                  // Marks the component as standalone (default in modern Angular)
  imports: [],                       // Import other standalone components, directives, or pipes here
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  // Component class properties (state)
  username = 'John Doe';
  role = 'Administrator';
}
```

### HTML (`user-profile.component.html`)
```html
<div class="profile-card">
  <h2>{{ username }}</h2> <!-- Interpolation: renders the variable value -->
  <p>Role: {{ role }}</p>
</div>
```

---

## 3. Reactive State with Signals
**Signals** are Angular's modern reactive state management model. They allow Angular to track state changes with extreme precision, updating only the exact elements in the DOM that changed.

There are three primary concepts in Signals:
1. **Writable Signals**: Variables you can read and write to.
2. **Computed Signals**: Read-only variables derived from other signals.
3. **Effects**: Side-effects triggered automatically when dependencies change.

### Example Usage:
```typescript
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter-container">
      <p>Count: {{ count() }}</p>            <!-- Use parenthesis to read signal values in templates -->
      <p>Double Count: {{ doubleCount() }}</p> 
      
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
    </div>
  `
})
export class CounterComponent {
  // 1. Writable Signal
  count = signal<number>(0);

  // 2. Computed Signal (automatically recalculates if count changes)
  doubleCount = computed(() => this.count() * 2);

  constructor() {
    // 3. Effect (useful for logging, local storage, analytics)
    effect(() => {
      console.log(`The count has changed to: ${this.count()}`);
    });
  }

  increment() {
    this.count.update(val => val + 1); // Mutate value based on previous value
  }

  decrement() {
    this.count.update(val => val - 1);
  }

  reset() {
    this.count.set(0); // Overwrite value directly
  }
}
```

---

## 4. Modern Template Control Flow
Angular features a powerful, built-in block syntax for control flow. It is fast, type-safe, and does not require importing directives.

### Conditional Rendering (`@if` / `@else`)
```html
@if (user.isLoggedIn) {
  <p>Welcome back, {{ user.name }}!</p>
} @else if (user.isGuest) {
  <p>Hello Guest, please sign up.</p>
} @else {
  <p>Please log in.</p>
}
```

### Loop Rendering (`@for`)
The `@for` block requires a `track` expression (usually an ID) to optimize rendering and updates.
```html
<ul>
  @for (item of items; track item.id) {
    <li>{{ item.name }} - ${{ item.price }}</li>
  } @empty {
    <li>No items available.</li> <!-- Displayed if the array is empty -->
  }
</ul>
```

### Switch Statement (`@switch`)
```html
@switch (userRole) {
  @case ('admin') {
    <admin-dashboard />
  }
  @case ('editor') {
    <editor-dashboard />
  }
  @default {
    <viewer-dashboard />
  }
}
```

---

## 5. Data Binding
Data binding defines how data flows between the TypeScript code and the HTML layout.

### 1. Interpolation (One-Way: Class -> View)
Renders a string representation of a variable or expression.
```html
<h1>Hello, {{ username }}</h1>
<p>Total: {{ price * quantity }}</p>
```

### 2. Property Binding (One-Way: Class -> View Element Property)
Binds class properties to HTML element properties or attributes.
```html
<img [src]="profileImageUrl" alt="Profile Image">
<button [disabled]="isSubmitDisabled">Submit</button>
```

### 3. Event Binding (One-Way: View Event -> Class Method)
Captures HTML events and triggers TS class methods.
```html
<button (click)="onSave()">Save</button>
<input (input)="onKeyUp($event)">
```

### 4. Two-Way Binding (Bi-directional: Class <-> View)
Synchronizes inputs with component variables. Uses the `FormsModule` and syntax shorthand `[(ngModel)]`.
```typescript
// TS File
import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="username" placeholder="Enter username">
    <p>Live username preview: {{ username() }}</p>
  `
})
export class UserFormComponent {
  username = model(''); // modern model input/output signal
}
```

---

## 6. Component Communication
Components often need to share data with each other.

### Parent to Child (`input()` Signals)
In modern Angular, parents pass data down to child components using the `input` function.

**Child Component (`child.component.ts`):**
```typescript
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Passed Message: {{ message() }}</p>`
})
export class ChildComponent {
  // Read-only Signal input
  message = input<string>('Default value'); 
  
  // Required input (compilation errors if parent forgets to provide it)
  userId = input.required<number>(); 
}
```

**Parent Component Template (`parent.component.html`):**
```html
<app-child [message]="'Hello from Parent!'" [userId]="42" />
```

### Child to Parent (`output()` Events)
Children send data up to parents using the `output` function.

**Child Component (`child.component.ts`):**
```typescript
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="notifyParent()">Notify Parent</button>`
})
export class ChildComponent {
  notify = output<string>(); // Emits a string value

  notifyParent() {
    this.notify.emit('Success: Task completed!');
  }
}
```

**Parent Component (`parent.component.ts`):**
```typescript
import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  imports: [ChildComponent],
  template: `
    <app-child (notify)="handleNotification($event)" />
  `
})
export class ParentComponent {
  handleNotification(message: string) {
    console.log('Received from child:', message);
  }
}
```

---

## 7. Services & Dependency Injection
Services are used to organize business logic, retrieve remote data (HTTP calls), and share state across components. 

### Step 1: Define a Service
```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service globally accessible as a singleton
})
export class DataService {
  private users = signal<string[]>(['Alice', 'Bob', 'Charlie']);
  
  getUsers() {
    return this.users.asReadonly();
  }

  addUser(name: string) {
    this.users.update(current => [...current, name]);
  }
}
```

### Step 2: Inject the Service in a Component
In modern Angular, you can use the `inject` function instead of the traditional constructor parameter injection.

```typescript
import { Component, inject } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      @for (user of users(); track user) {
        <li>{{ user }}</li>
      }
    </ul>
    <button (click)="addNewUser()">Add User</button>
  `
})
export class UserListComponent {
  // Inject service using inject() function
  private dataService = inject(DataService);

  // Expose the read-only signal list of users
  users = this.dataService.getUsers();

  addNewUser() {
    this.dataService.addUser('David');
  }
}
```

---

## 8. Routing
Routing lets you build Single Page Applications (SPAs) with navigation.

### Step 1: Define Routes (`app.routes.ts`)
```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' } // Fallback path redirect
];
```

### Step 2: Enable Router Elements in Parent Component (`app.ts`)
```typescript
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <!-- Navigate without reloading the page -->
      <a routerLink="/" routerLinkActive="active-class" [routerLinkActiveOptions]="{exact: true}">Home</a>
      <a routerLink="/about" routerLinkActive="active-class">About</a>
    </nav>

    <!-- Component for current route renders here -->
    <main>
      <router-outlet />
    </main>
  `
})
export class App {}
```

---

## 9. Useful Angular CLI Commands
Open your terminal in the workspace folder to execute these commands:

| Command | Action |
|---------|--------|
| `ng serve` | Runs local dev server on `http://localhost:4200` |
| `ng build` | Compiles the production-ready code into `dist/` |
| `ng test` | Runs unit tests (using Vitest/Karma depending on config) |
| `ng generate component my-comp` | Creates a new Component |
| `ng generate service my-service` | Creates a new Service |
| `ng generate directive my-dir` | Creates a new Directive |
| `ng generate pipe my-pipe` | Creates a new Pipe |

---

## Next Steps
Try the following in your code editor:
1. Open the [test component class](file:///c:/Users/Moideen%20Mashad/My%20media%20files/DEVELOPMENT/AngularJs/my-angular-app/src/app/test/test.ts).
2. Add a `signal` inside `Test` class, e.g. `count = signal(0);`.
3. In [test.html](file:///c:/Users/Moideen%20Mashad/My%20media%20files/DEVELOPMENT/AngularJs/my-angular-app/src/app/test/test.html), display it using `{{ count() }}` and add a button with click handler to increment it.
4. Run `npm start` (or `ng serve`) to watch it compile and test it interactively in the browser!

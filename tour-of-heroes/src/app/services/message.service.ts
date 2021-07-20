import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// This service exposes it's cache of `messages` with two methods.
export class MessageService {
  messages: string[] = [];

  // pushes a new string message into the array
  add(message: string) {
    this.messages.push(message);
  }

  // Resets the array to empty
  clear() {
    this.messages = [];
  }
}

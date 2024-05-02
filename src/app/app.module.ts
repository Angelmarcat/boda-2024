import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Fecha objetivo
const targetDate: Date = new Date('2024-08-03T00:00:00');

function updateCountdown(): void {
  const now: Date = new Date();
  const difference: number = targetDate.getTime() - now.getTime();

  const days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours: number = Math.floor(difference / (1000 * 60 * 60));
  const minutes: number = Math.floor(difference / (1000 * 60)); 
  const seconds: number = Math.floor(difference / 1000);

  // Obtener los elementos del DOM
  const daysElement: HTMLElement | null = document.getElementById('days');
  const hoursElement: HTMLElement | null = document.getElementById('hours');
  const minutesElement: HTMLElement | null = document.getElementById('minutes');
  const secondsElement: HTMLElement | null = document.getElementById('seconds');

  // Verificar si los elementos existen antes de actualizar su contenido
  if (daysElement && hoursElement && minutesElement && secondsElement) {
    daysElement.innerText = days.toString().padStart(3, '0');
    hoursElement.innerText = hours.toString();
    minutesElement.innerText = minutes.toString();
    secondsElement.innerText = seconds.toString();
  }
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);

// Ejecutar una vez para evitar un retraso inicial
updateCountdown();
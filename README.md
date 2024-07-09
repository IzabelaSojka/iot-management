# Projekt Systemu Monitorowania Modułów

Projekt Systemu Monitorowania Modułów jest aplikacją webową stworzoną w React oraz Node.js, służącą do zarządzania i monitorowania różnych modułów z możliwością śledzenia historii temperatury oraz edycji parametrów modułów.

## Funkcje

### Lista Modułów

Wyświetla listę modułów z ich podstawowymi informacjami takimi jak dostępność, temperatura docelowa i aktualna temperatura.
Aktualizacja danych w czasie rzeczywistym za pomocą Socket.IO.

### Szczegóły Modułu

Zapewnia szczegółowe informacje o wybranym module, w tym opis, dostępność, temperaturę docelową oraz aktualną temperaturę.
Umożliwia edycję parametrów modułu w tym nazwy, opisu oraz temperatury docelowej.
Wyświetla wykres historii temperatury w zależności od wybranego zakresu czasowego (godzinowy lub dzienny).

## Komponenty

### ModuleList

Komponent odpowiedzialny za wyświetlanie listy modułów.
Integracja z Socket.IO dla aktualizacji danych w czasie rzeczywistym.
Umożliwia nawigację do szczegółowych informacji o modułach.

### EditModuleDialog

Modal umożliwiający edycję parametrów modułu, takich jak nazwa, opis oraz temperatura docelowa.
Waliduje wprowadzone dane przed ich zapisaniem i komunikuje błędy użytkownikowi.

### HistoryChart

Komponent odpowiedzialny za wyświetlanie wykresu historii temperatury modułu.
Pozwala na wybór zakresu czasowego (godzinowy lub dzienny) oraz dynamicznie aktualizuje dane zgodnie z wyborem użytkownika.

## Instalacja i Uruchomienie

### Instalacja zależności:

### `npm install` 

### Uruchomienie aplikacji:

### `npm start` 

Aplikacja będzie dostępna pod adresem http://localhost:3000.
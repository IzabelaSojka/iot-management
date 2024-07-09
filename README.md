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

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

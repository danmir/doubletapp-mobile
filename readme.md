#### Страница события `/events/1`

##### Запуск локально
```sh
$ npm start
```
##### Запуск тестов
```
npm install -g gemini
npm install -g selenium-standalone
npm install -g gemini-gui
selenium-standalone install
```
 - Запуск сервера `selenium-standalone start`
 - Запуск тестов `gemini test --reporter flat --reporter html`
##### Deploy
```sh
docker build -t <your name>/doubletapp-mobile .
docker run -p 3000:3001 <your name>/doubletapp-mobile
```
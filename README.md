# [promised-event][npm]

[![License][license-image]][license-url]
[![Build status][travis-image]][travis-url]

> Simply get a promise for a specified event

Promises the next dispatch of a specified [EventEmitter][event-emitter] event.
Nothing more, nothing less.

## Installation & usage

```
npm install promised-event
```
```js
cosnt promiseEvent = require('promised-event');
```
```js
const emitter = new EventEmitter();
promiseEvent(emitter, 'myevent').then((answer) => {
    console.log(answer);
});
emitter.emit('myevent', 42);
// 42
```

## Want to reject on error?

Simply do
```js
const promise = promiseEvent(stream, 'error').then(Promise.reject);
```
Then you can write
```js
promise.catch((err) => {
    console.log('oh no!');
});
```

## API

##### `promiseEvent(emitter, eventName)`

 * `emitter`: [EventEmitter][event-emitter];
 * `eventName`: [String][string] or [Symbol][symbol];
 * returns a [Promise][promise]

## License

MIT

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[travis-image]: https://travis-ci.org/JD342/promised-event.svg?branch=master
[travis-url]: https://travis-ci.org/JD342/promised-event
[event-emitter]: https://nodejs.org/api/events.html#events_class_eventemitter
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[symbol]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol
[promise]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
[npm]: https://www.npmjs.com/package/promised-event

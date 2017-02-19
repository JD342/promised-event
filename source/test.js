/* eslint-env mocha */

'use strict';

var expect = require('expect');
var EventEmitter = require('events').EventEmitter;

var promiseEvent = require('./index.js');

describe('promiseEvent', function () {

    it('exists', function () {
        expect(promiseEvent).toBeA('function');
    });

    it('promises the resolution of the specified event', function (done) {
        this.timeout(10);
        var emitter = new EventEmitter();
        var promise = promiseEvent(emitter, 'foo');
        emitter.emit('bar', 1);
        emitter.emit('foo', 2);
        emitter.emit('foo', 3);
        promise.then(function (value) {
            expect(value).toBe(2);
            done();
        });
    });

});

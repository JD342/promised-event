'use strict';

module.exports = function promiseEevent(emitter, event) {
    return new Promise(function (resolve) {
        emitter.once(event, resolve);
    });
};

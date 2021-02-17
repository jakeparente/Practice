"use strict";
exports.__esModule = true;
var index_1 = require("./index");
exports.map = function (f, o) {
    if (index_1.isSome(o)) {
        return index_1.some(f(o.value));
    }
    else {
        return index_1.none();
    }
};
exports.filter = function (f, options) {
    return options.map(function (option) {
        var res = exports.map(f, option);
        if (index_1.isSome(res)) {
            return res;
        }
    });
};
exports.foldl = function (f, i, options) {
    if (options[i]) {
        var val = exports.map(f, options[i]);
        if (index_1.isSome(val)) {
            var next = exports.foldl(f, i + 1, options);
            return val.value + next;
        }
    }
    return 0;
};
exports.foldTest = function (f, i, options) {
    if (options[i]) {
        var next = exports.foldTest(f, i + 1, options);
        if (index_1.isSome(next)) {
            var val_1 = f(options[i], next.value);
            return index_1.some(val_1);
        }
        var val = f(options[i], 0);
        return index_1.some(val);
    }
    return index_1.none();
};
exports.test = function () {
    var t = [1, 2, 3];
    var v = exports.foldTest(function (x, w) { return x + w; }, 0, t);
    return v;
};
exports.test();
exports.fold = function (f, iterator, options) {
    if (options[iterator]) {
        return exports.map(f, options[iterator]);
    }
};
console.log(exports.test());

"use strict";
exports.__esModule = true;
var Option;
(function (Option) {
    Option[Option["some"] = 0] = "some";
    Option[Option["none"] = 1] = "none";
})(Option = exports.Option || (exports.Option = {}));
exports.isSome = function (val) {
    return val.option === Option.some;
};
exports.isNone = function (val) {
    return val.option === Option.none;
};
exports.isEven = function (num) {
    if (num % 2 === 0) {
        return exports.some(num);
    }
    else
        return exports.none();
};
exports.some = function (val) {
    return { option: Option.some, value: val };
};
exports.none = function () {
    return { option: Option.none };
};
exports.match = function (val, some, none) {
    switch (val.option) {
        case Option.some:
            return some(val.value);
        case Option.none:
            return none;
    }
};
var test = function (num) {
    var val = exports.isEven(num);
    if (exports.isSome(val)) {
        console.log("This is a even number: " + val.value);
    }
    else {
        console.log("This is not a even number");
    }
};
test(3);
var test2 = function (num) {
    var tester = exports.isEven(num);
    return exports.match(tester, function (num) {
        return num;
    }, function () {
        return -1;
    });
};
console.log(test2(14));

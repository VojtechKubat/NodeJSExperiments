'use strict';

var asyncAdd = function asyncAdd(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Both arguments must be numbers');
            }
        }, 1000);
    });
};

console.log('>>> testing promises...');

asyncAdd(4, 200).then(function (result) {
    console.log('Success:', result);
    console.log('Making another promise...');
    return asyncAdd(result, 30);
}).then(function (result) {
    console.log('Success:', result);
}).catch(function (error) {
    console.log('Error:', error);
});

// var promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         // resolve('It worked correctly.');
//         reject('it does not work correctly.');
//     }, 2000);
// });

// promise
// .then((msg) => {
//     console.log('Success:', msg);
// },(error) => {
//     console.log('Failed:', error);
// });
//# sourceMappingURL=promises.js.map
var carMap = new Map();
carMap.set('Toyota', 'Durable Cars');
carMap.set('BMW', 'Sports and Performance Cars');
carMap.set('Mecedes Benz', 'Luxury Cars');
console.log(carMap);
for (var _i = 0, _a = carMap.entries(); _i < _a.length; _i++) {
    var _b = _a[_i], key = _b[0], value = _b[1];
    console.log("Car Brand: ".concat(key, " is for ").concat(value));
}

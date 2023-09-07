const carMap = new Map<string, string>();

carMap.set('Toyota', 'Durable Cars');
carMap.set('BMW', 'Sports and Performance Cars');
carMap.set('Mecedes Benz', 'Luxury Cars');

console.log(carMap);
for (const [key, value] of carMap.entries()) {
  console.log(`Car Brand: ${key} is for ${value}`);
}
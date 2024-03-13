const args = process.argv.slice(2);

if (args.length > 0) {
  console.log('Параметри, передані через консоль:');
  args.forEach((arg, index) => {
    console.log(`Аргумент ${index + 1}: ${arg}`);
  });
} else {
  console.log('Параметри не були передані через консоль.');
}

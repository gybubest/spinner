setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

// ... fill in the rest yourself ...
setTimeout(() => {
  process.stdout.write('\rHOW '); 
}, 900);

setTimeout(() => {
  process.stdout.write('\rARE '); 
}, 1900);

setTimeout(() => {
  process.stdout.write('\rYOU '); 
}, 2900);

setTimeout(() => {
  process.stdout.write('\r?   \n'); 
}, 3900);
const print = (input) => {
  let time = 100;
  for (const sth of input) {
    setTimeout(() => process.stdout.write(sth), time);
    time += 200;
  }
}
let input = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\rHOW ', '\rARE ', '\rYOU ', '\r?   ', '\r\n']
print(input);
const arrayOfLetters: Array<string> = [];

for (let index = 0; index < 26; index++) {
  arrayOfLetters.push(String.fromCharCode(97 + index));
}

export { arrayOfLetters };

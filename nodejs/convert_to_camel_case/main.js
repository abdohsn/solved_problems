function StringChallenge(str) {
  str2 = str.charAt(0).toLowerCase();
  for (var i = 1; i < str.length; i++) {
    if (str[i].match(/[^A-Za-z0-9]/)) {
      str2 += '';
      str2 += str[i + 1].toUpperCase();
      i++;
    } else {
      str2 += str[i].toLowerCase();
    }
  }
  str = str2;
  return str;
}

// keep this function call here
console.log(StringChallenge('cats AND*Dogs-are Awesome'));

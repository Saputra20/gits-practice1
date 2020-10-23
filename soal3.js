function soal3(brakets) {
  let char = [];
  let word;

  for (let index = 0; index < brakets.length; index++) {
    word = brakets.charAt(index);
    if (word == "(" || word == "[" || word == "{") {
      char.push(word);
    }

    if (char.length == 0) {
      console.log("1");
      return console.log("NO");
    }

    switch (word) {
      case ")":
        check = char.pop();
        if (check == "{" || check == "[") {
          console.log("2");
          return console.log("NO");
        }
        break;
      case "}":
        check = char.pop();
        if (check == "(" || check == "[") {
          console.log("3");
          return console.log("NO");
        }
        break;
      case "]":
        check = char.pop();
        if (check == "(" || check == "{") {
          console.log("4");
          return console.log("NO");
        }
        break;
    }
  }
  char.length == 0 ? (flag = "YES") : (flag = "NO");
  return console.log(flag);
}

soal3("{(([])[])[]}");

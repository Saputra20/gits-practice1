let word = [];
function reverse(str, counter) {
  let index = counter + 1;
  let count = str.length;
  if (index == 5) {
    word.push(str.charAt(0));
    console.log(word);
    return;
  } else {
    word.push(str.charAt(count - index));
    reverse(str, index);
  }
}

reverse("hello" , 0)

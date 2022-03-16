function sarcast1() {
  let s = document.getElementById("string").value.toLowerCase();
  // console.log(s);

  let another_s = "";

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    if (i % 2 == 0) {
      another_s = another_s.concat(char.toUpperCase());
    } else {
      another_s = another_s.concat(char);
    }
  }

  // console.log(another_s);
  document.getElementById("output").innerText = another_s;
}

function sarcast2() {
  let s = document.getElementById("string").value.toLowerCase();
  console.log(s);

  let another_s = "";

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    if (i % 2 == 0) {
      another_s = another_s.concat(char);
    } else {
      another_s = another_s.concat(char.toUpperCase());
    }
  }

  console.log(another_s);
  document.getElementById("output").innerText = another_s;
}

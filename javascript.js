let afterCopy = "Copied ✅";
let beforeCopy = "Copy Message 📝";

function sarcast1() {
  document.getElementById("copy").innerText = beforeCopy;
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
  document.getElementById("copy").innerText = beforeCopy;
  let s = document.getElementById("string").value.toLowerCase();
  // console.log(s);

  let another_s = "";

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);

    if (i % 2 == 0) {
      another_s = another_s.concat(char);
    } else {
      another_s = another_s.concat(char.toUpperCase());
    }
  }

  // console.log(another_s);
  document.getElementById("output").innerText = another_s;
}

function copyMessage(){
  let finalMessage = document.getElementById("output").innerText;
  navigator.clipboard.writeText(finalMessage);
  console.log(finalMessage);

  document.getElementById("copy").innerText = afterCopy;

}
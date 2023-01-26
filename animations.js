const text = ["With", "a", "purpose-driven", "heart", "and", "a", "steadfast", "will,", "I", "shall", "pave", "the", "way", "for", "a", "brighter", "tomorrow,", "For", "the", "world", "and", "its", "people,", "I", "shall", "tirelessly", "toil,", "Great", "deeds", "and", "legacies,", "I", "shall", "borrow."];

const textbox = document.querySelector(".textbox");
const textElement = document.getElementById("text");
let counter = 0;

anime({
  targets: textElement,
  text: text,
  loop: true,
  duration: 5000,
  delay: function(el, index) {
    return index * 1000;
  }
});

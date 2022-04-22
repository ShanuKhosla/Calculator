const display = document.querySelector("#display");
const buttons = Array.from(document.querySelectorAll("button"));

buttons.map(btn => {
  btn.addEventListener("click", (m) => {
    switch(m.target.innerText){
      case 'Clear All':
      display.innerText='';
      break;

      case '=':
      display.innerText = eval(display.innerText);
      break;

      default:
      display.innerText += m.target.innerText;

    }
  });
});

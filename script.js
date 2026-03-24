const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

  code.addEventListener("input", (e) => {
    let value = e.target.value;

    if (value.length > 1) {
      e.target.value = value.slice(0, 1);
    }

    if (value !== "" && index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {

    if (e.key === "Backspace") {

      if (code.value !== "") {
        code.value = "";
      } 
      else if (index > 0) {
        codes[index - 1].focus();
      }

    }

  });

});
const display = document.getElementById('display');

function appendChar(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/%/g, '/100'));
  } catch {
    display.value = 'Error';
  }
}

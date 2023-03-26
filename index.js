const vscode = acquireVsCodeApi();

function sendMessage() {
   vscode.postMessage({
      command : 'myCommand',
      data: 'Hello ROBLOX!'
   })
}

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

const keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','(',')','-','+', '=', '*', 'backspace'],
    ['tab','q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':',"'",'enter'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ",","."],
    ['space']
  ];

keys.forEach(row => {
  const rowElement = document.createElement('div');
  rowElement.classList.add('row');

  row.forEach(key => {
    const keyElement = document.createElement('div');
    keyElement.classList.add('key');
    keyElement.textContent = key;

    keyElement.addEventListener('click', () => {
      vscode.postMessage({
        command : 'keyCommand',
        data : key
      })
    });

    rowElement.appendChild(keyElement);
  });

  keyboard.appendChild(rowElement);
});

document.body.appendChild(keyboard);
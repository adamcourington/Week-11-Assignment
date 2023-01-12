let count = 0;

let boxes = ['1-1', '1-2', '1-3', '2-1', '2-2', '2-3', '3-1', '3-2', '3-3'];

for (let i = 0; i < boxes.length; i++) {
  document.getElementById(boxes[i]).addEventListener('click', () => {
    if (
      document.getElementById(boxes[i]).innerHTML == 'X' ||
      document.getElementById(boxes[i]).innerHTML == 'O'
    ) {
    } else if (count % 2 == 0) {
      document.getElementById(boxes[i]).innerHTML = 'X';
      count += 1;
      win();
    } else {
      document.getElementById(boxes[i]).innerHTML = 'O';
      count += 1;
      win();
    }
  });
}

function startOver() {
  for (var i = 0; i < boxes.length; i++) {
    document.getElementById(boxes[i]).innerHTML = '';
    document.getElementById('winner').innerHTML = '';
  }
}

document.getElementById('btn').addEventListener('click', startOver);

function win() {
  if (
    (document.getElementById(boxes[0]).innerHTML == 'X' &&
      document.getElementById(boxes[1]).innerHTML == 'X' &&
      document.getElementById(boxes[2]).innerHTML == 'X') ||
    (document.getElementById(boxes[3]).innerHTML == 'X' &&
      document.getElementById(boxes[4]).innerHTML == 'X' &&
      document.getElementById(boxes[5]).innerHTML == 'X') ||
    (document.getElementById(boxes[6]).innerHTML == 'X' &&
      document.getElementById(boxes[7]).innerHTML == 'X' &&
      document.getElementById(boxes[8]).innerHTML == 'X') ||
    (document.getElementById(boxes[0]).innerHTML == 'X' &&
      document.getElementById(boxes[3]).innerHTML == 'X' &&
      document.getElementById(boxes[6]).innerHTML == 'X') ||
    (document.getElementById(boxes[1]).innerHTML == 'X' &&
      document.getElementById(boxes[4]).innerHTML == 'X' &&
      document.getElementById(boxes[7]).innerHTML == 'X') ||
    (document.getElementById(boxes[2]).innerHTML == 'X' &&
      document.getElementById(boxes[5]).innerHTML == 'X' &&
      document.getElementById(boxes[8]).innerHTML == 'X') ||
    (document.getElementById(boxes[0]).innerHTML == 'X' &&
      document.getElementById(boxes[4]).innerHTML == 'X' &&
      document.getElementById(boxes[8]).innerHTML == 'X') ||
    (document.getElementById(boxes[2]).innerHTML == 'X' &&
      document.getElementById(boxes[4]).innerHTML == 'X' &&
      document.getElementById(boxes[6]).innerHTML == 'X')
  ) {
    document.getElementById('winner').innerHTML = 'X is the Winner!!!';
  } else if (
    (document.getElementById(boxes[0]).innerHTML == 'O' &&
      document.getElementById(boxes[1]).innerHTML == 'O' &&
      document.getElementById(boxes[2]).innerHTML == 'O') ||
    (document.getElementById(boxes[3]).innerHTML == 'O' &&
      document.getElementById(boxes[4]).innerHTML == 'O' &&
      document.getElementById(boxes[5]).innerHTML == 'O') ||
    (document.getElementById(boxes[6]).innerHTML == 'O' &&
      document.getElementById(boxes[7]).innerHTML == 'O' &&
      document.getElementById(boxes[8]).innerHTML == 'O') ||
    (document.getElementById(boxes[0]).innerHTML == 'O' &&
      document.getElementById(boxes[3]).innerHTML == 'O' &&
      document.getElementById(boxes[6]).innerHTML == 'O') ||
    (document.getElementById(boxes[1]).innerHTML == 'O' &&
      document.getElementById(boxes[4]).innerHTML == 'O' &&
      document.getElementById(boxes[7]).innerHTML == 'O') ||
    (document.getElementById(boxes[2]).innerHTML == 'O' &&
      document.getElementById(boxes[5]).innerHTML == 'O' &&
      document.getElementById(boxes[8]).innerHTML == 'O') ||
    (document.getElementById(boxes[0]).innerHTML == 'O' &&
      document.getElementById(boxes[4]).innerHTML == 'O' &&
      document.getElementById(boxes[8]).innerHTML == 'O') ||
    (document.getElementById(boxes[2]).innerHTML == 'O' &&
      document.getElementById(boxes[4]).innerHTML == 'O' &&
      document.getElementById(boxes[6]).innerHTML == 'O')
  ) {
    document.getElementById('winner').innerHTML = 'O is the Winner!!!';
  } else if (
    (document.getElementById(boxes[0]).innerHTML == 'X' ||
      document.getElementById(boxes[0]).innerHTML == 'O') &&
    (document.getElementById(boxes[1]).innerHTML == 'X' ||
      document.getElementById(boxes[1]).innerHTML == 'O') &&
    (document.getElementById(boxes[2]).innerHTML == 'X' ||
      document.getElementById(boxes[2]).innerHTML == 'O') &&
    (document.getElementById(boxes[3]).innerHTML == 'X' ||
      document.getElementById(boxes[3]).innerHTML == 'O') &&
    (document.getElementById(boxes[4]).innerHTML == 'X' ||
      document.getElementById(boxes[4]).innerHTML == 'O') &&
    (document.getElementById(boxes[5]).innerHTML == 'X' ||
      document.getElementById(boxes[5]).innerHTML == 'O') &&
    (document.getElementById(boxes[6]).innerHTML == 'X' ||
      document.getElementById(boxes[6]).innerHTML == 'O') &&
    (document.getElementById(boxes[7]).innerHTML == 'X' ||
      document.getElementById(boxes[7]).innerHTML == 'O') &&
    (document.getElementById(boxes[8]).innerHTML == 'X' ||
      document.getElementById(boxes[8]).innerHTML == 'O')
  ) {
    document.getElementById('winner').innerHTML = 'Tie Game';
  }
}

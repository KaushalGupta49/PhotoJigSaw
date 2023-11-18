function generateRandomArray(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

var counter = 0;
var check = [1, 2, 3, 4, 5, 6, 7, 8, 9];

$(function () {
  $('#sortable').sortable({
    update: function (event, ui) {
      $('#counter').html(++counter);
      const lis = $('#sortable').children();
      const arr = [];

      for (let i = 0; i < lis.length; i++) {
        arr.push(lis[i].id);
      }
      if (arr.toString() === check.toString()) {
        alert('Congratulations! Puzzle Solved.');
      }
    },
  });
});

const puzzleName = ['ScenaryOne', 'Naruto'];
var directory;

function generatePuzzle() {
  directory = puzzleName[Math.floor(Math.random() * puzzleName.length)];
  document.getElementById('solImg').src = `./assets/${directory}/solImg.jpg`;
  $('#sortable').html(generateRandomArray(9).map(listGen));
}

function listGen(item) {
  return `<li id=${item}><img src="./assets/${directory}/${item}.jpg"/></li>`;
}

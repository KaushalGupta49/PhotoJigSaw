function generateRandomArray(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

var counter = 0;
var check = [];

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
        $('li').switchClass('border-2', 'border-0', 0);
        setTimeout(() => {
          alert('Congratulations! Puzzle Solved.');
        }, 200);
      }
    },
  });
});

var directory;
const puzzleEasy = ['ScenaryOne', 'Naruto', 'Gojo'];
const puzzleMed = ['Kratos'];
const puzzleHard = ['Thor'];

function generatePuzzleEasy() {
  counter = 0;
  $('#counter').html(counter);
  check = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  directory = puzzleEasy[Math.floor(Math.random() * puzzleEasy.length)];
  document.getElementById('solImg').src = `./assets/${directory}/solImg.jpg`;
  $('#sortable').html(generateRandomArray(9).map(listGen));
}

function generatePuzzleMed() {
  counter = 0;
  $('#counter').html(counter);
  check = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  directory = puzzleMed[Math.floor(Math.random() * puzzleMed.length)];
  document.getElementById('solImg').src = `./assets/${directory}/solImg.jpg`;
  $('#sortable').html(generateRandomArray(16).map(listGen));
}

function generatePuzzleHard() {
  counter = 0;
  $('#counter').html(counter);
  check = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  directory = puzzleHard[Math.floor(Math.random() * puzzleHard.length)];
  document.getElementById('solImg').src = `./assets/${directory}/solImg.jpg`;
  $('#sortable').html(generateRandomArray(25).map(listGen));
}

function listGen(item) {
  return `<li class="border-2" id=${item}><img src="./assets/${directory}/${item}.jpg"/></li>`;
}

// Switch Class
$(function () {
  $('button#Easy').on('click', function () {
    $('#sortable').switchClass('grid-cols-4 grid-cols-5', 'grid-cols-3', 0);
  });

  $('button#Medium').on('click', function () {
    $('#sortable').switchClass('grid-cols-3 grid-cols-5', 'grid-cols-4', 0);
  });

  $('button#Hard').on('click', function () {
    $('#sortable').switchClass('grid-cols-3 grid-cols-4', 'grid-cols-5', 0);
  });
});

const gridDiv = document.querySelector('.grid');
let gridDivSide = gridDiv.clientHeight;

const createGrid = (size = 16) => {
  size = parseInt(size);
  
  for (let i = parseInt(0); i < size; i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    row.style['width']  = `${gridDivSide}px`;
    let side = parseInt(gridDivSide / size);
    row.style['height'] = `${side}px`;
    row.style['display'] = 'flex';

    for (let j = parseInt(0); j < size; j++) {
      let col = document.createElement('div');
      col.classList.add('col');

      col.style['width']  = `${side}px`;
      col.style['height'] = `${side}px`;
  
      row.appendChild(col);
    }
    
    gridDiv.appendChild(row);
  }
};

const updateGrid = (size = 16) => {
  const rows = document.querySelectorAll('.row');

  rows.forEach(row => {
    gridDiv.removeChild(row);
  });

  createGrid(size);
};

const addHoverFill = (event) => {
  event.target.style['background-color'] = 'magenta';
};

const addHoverFillToAll = () => {
  const cols = document.querySelectorAll('.col');
  cols.forEach(col => {
    col.addEventListener('mouseover', addHoverFill);
  });
};

const removeHoverFillFromAll = () => {
  const cols = document.querySelectorAll('.col');
  cols.forEach(col => {
    col.removeEventListener('mouseover', addHoverFill);
  });
};

const clearGrid = () => {
  const cols = document.querySelectorAll('.col');

  cols.forEach((col) => {
    col.style.backgroundColor = 'white';
  });
};

const changeGridSize = (size = 16) => {
  const newGridSize = prompt('enter new grid size (leave empty for 16x16): ', 16);

  removeHoverFillFromAll();
  updateGrid(newGridSize);
  addHoverFillToAll();
};

document.getElementById('reset-button').addEventListener('click', (event) => clearGrid());

document.getElementById('size-button').addEventListener('click', (ev) => changeGridSize());

createGrid();
addHoverFillToAll();
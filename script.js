const createMatrix = (size = 16) => {
  
  const mainDiv = document.querySelector('.main');
  
  for (let i = parseInt(0); i < parseInt(size); i++) {
    let row = document.createElement('div');
    row.classList.add('row');

    for (let j = parseInt(0); j < parseInt(size); j++) {
      let col = document.createElement('div');
      col.classList.add('col');
      row.appendChild(col);
    }
    
    mainDiv.appendChild(row);
  }

}

createMatrix();
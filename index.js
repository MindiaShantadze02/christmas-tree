const christmasTree = document.querySelector('.christmas-tree');

let newArr = [];

for (let i=0;i<10;i++) {
    let row = [0];
    for (let j=0;j<i;j++) {
        row.push(j+1);
    }
    newArr.push(row);
}

for (let i=0;i<newArr.length;i++) {

    const row = document.createElement('tr');
    let christmasTreeStr = '';
    
    for (let j=0;j<newArr[i].length;j++) {
        if (i ===0 && j===0) {
            christmasTreeStr+=`<td class='christmas-tree-branch christmas-tree-star-branch'>${newArr[i][j]}</td>`
        }
        else {
            christmasTreeStr+=`<td class='christmas-tree-branch'>${newArr[i][j]}</td>`;
        }
    }

    row.innerHTML = christmasTreeStr;
    christmasTree.appendChild(row);
}
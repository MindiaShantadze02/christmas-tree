const christmasTreePage = document.querySelector('.christmas-tree-page');

function drawChristmasTree(size) {
    // getting table from DOM to build christmas tree on it
    const christmasTree = document.querySelector('.christmas-tree');

    // defining new array to hold tree branches
    let newArr = [];

    // filling array with random numbers
    for (let i=0;i<size;i++) {
        let row = [0];
        for (let j=0;j<i;j++) { 
            row[0] = Math.ceil(Math.random() * 9);
            row.push(Math.ceil(Math.random() * 9))
        }
        newArr.push(row);
    }

    // printing christmas tree on the page
    for (let i=0;i<newArr.length;i++) {

        const row = document.createElement('tr');

        for (let j=0;j<newArr[i].length;j++) {
            const treeBranch = document.createElement('td');
            treeBranch.className = (newArr[i][j] === 0) ? 'christmas-tree-star-branch' : 'christmas-tree-branch';

            if (newArr[i][j] %2 === 0) {
                setInterval(() => {
                    treeBranch.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
                }, 1000);
            }
            row.appendChild(treeBranch);
        }

        christmasTree.appendChild(row);
    }
}

drawChristmasTree(40);
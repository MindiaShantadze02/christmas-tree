const startForm = document.querySelector('.start-page-form');

// event listeners
startForm.addEventListener("submit", validateStartForm);

// function for validating start form
function validateStartForm(ev) {
    ev.preventDefault();

    // errors object
    let errors = {};

    // checking if user entered everything
    if (!startForm.userName.value) errors.userName = "You should enter your name";

    if (!startForm.treeSize.value) errors.treeSize = "You should enter size of the tree";
    else if (Number(startForm.treeSize.value) > 30) errors.treeSize = "Tree size must be less than 30";
    else if (Number(startForm.treeSize.value) < 5) errors.treeSize = "Tree size must be greater than 5";

    // if there are no errors call the drawChristmasTree function
    if (!errors.treeSize && !errors.userName) {
        drawChristmasTree(Number(startForm.treeSize.value), startForm.userName.value);
    }

    // display errors if there are any
    else {
        const errorPlace = document.createElement('div');
        errorPlace.classList.add("error-place");
        document.querySelector(".start-page").appendChild(errorPlace);
        
        let errorStr = `${errors.treeSize ?? errors.treeSize} <br> ${errors.userName ?? errors.userName} <br><br>`;
        errorPlace.innerHTML = errorStr;
    }
}

// function for drawing christmas tree
function drawChristmasTree(size, userName) {
    // getting table from DOM to build christmas tree on it
    const christmasTree = document.querySelector('.christmas-tree');
    const userNameSpan = document.querySelector('.name-span');

    // displayng user name
    userNameSpan.innerHTML = userName;

    // getting start and christmas tree pages from DOM
    const startPage = document.querySelector('.start-page');
    const christmasTreePage = document.querySelector('.christmas-tree-page');
    
    // chaning page from start to christmas tree when button is clicked
    christmasTreePage.style.display = 'block';
    startPage.style.display = 'none';

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
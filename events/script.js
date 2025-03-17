const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  const newDiv = document.createElement('div');
  const color = e.target.classList[1];
newDiv.classList.add('displayedsquare', color);
const sectdisplayedsquarewrapper = document.querySelector('.displayedsquare-wrapper');
sectdisplayedsquarewrapper.appendChild(newDiv);


const createLi = document.createElement('li');
const main = document.querySelector('main');
const ul = main.children[2].children[1];
createLi.innerText = `[${getElapsedTime()}] Created a new ${color} square`;
ul.appendChild(createLi);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

document.body.addEventListener('keypress', (event) => {
  if (event.code === 'Space') {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    
    const main = document.querySelector('main');
    const ul = main.children[2].children[1];
    const createLi = document.createElement('li');
    createLi.innerText = `[${getElapsedTime()}] Spacebar pressed - Background changed to ${randomColor}`;
    ul.appendChild(createLi);
  }
  
  if (event.key === 'l') {
    const main = document.querySelector('main');
    const ul = main.children[2].children[1];
    
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
    }
    

  }
  
  if (event.key === 's') {
    const sectdisplayedsquarewrapper = document.querySelector('.displayedsquare-wrapper');
    
    while (sectdisplayedsquarewrapper.firstChild) {
      sectdisplayedsquarewrapper.removeChild(sectdisplayedsquarewrapper.firstChild);
    }
    
  }
});

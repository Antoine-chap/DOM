console.log(document.title);

let titleElement = document.querySelector('title');
titleElement.innerHTML = "Modifying the DOM";

let randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

let body = document.body;
body.style.backgroundColor = randomColor();

let secondChild = document.body;
for (const child of secondChild.children) {
    console.log(child);
    };

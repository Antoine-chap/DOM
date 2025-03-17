const addTitle = document.querySelectorAll(`.important`);

addTitle.forEach(addTitle => {
    addTitle.setAttribute('title', 'This is an important item');
});

console.log(addTitle[0].getAttribute('title'));

const imgSearch = document.querySelectorAll(`img`);

imgSearch.forEach(img => {
    if (!img.classList.contains('important')) {
        img.style.display = 'none';
    }
});

const allParas =document.querySelectorAll(`p`);
let randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};


allParas.forEach(allPara => {
if (allPara.classList.length > 0) {
    console.log(allPara.className ,allPara.textContent);
} else {
    console.log(allPara.textContent);
    allPara.style.color = randomColor();
}
});

let getRandomColor2 = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return {
        color: `rgb(${r}, ${g}, ${b})`,
        isDark: (r * 0.299 + g * 0.587 + b * 0.114) < 125 // Calculer la luminosité perçue
    };
};

let arrs = ["Antoine", "Martin", "Jordan", "Manu", "Hugo", "Kamal", "Stephane", "Valentin", "Liana", "Arsenia", "Ina"];
let randArrs = arrs.sort(() => 0.5 - Math.random());
randArrs.forEach(arr => {
    const article = document.querySelector('article');

    const section = document.createElement('section');

    const randomColor = getRandomColor2().color;
    section.style.backgroundColor = randomColor;

    section.style.color = getRandomColor2().isDark ? `dark`:`white`; // if(getRandomColor2().isDark) {section.style.color = `dark`} else {section.style.color = `white`}

    const sectpara = document.createElement('p');
    sectpara.textContent = arr;

    section.appendChild(sectpara);

    article.appendChild(section);
});

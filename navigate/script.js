const ol = document.querySelector('ol');
const li0 = ol.children[0];
const li4 = ol.children[4];
const swap = ol.insertBefore(li4, li0);
swap


const main = document.querySelector('main');
const section2h2 = main.children[1].children[0];
const section3h2 = main.children[2].children[0].children[0];
const section2 = main .children[1];
const section3 = main.children[2].children[0];
section2.appendChild(section3h2);// nouveauParent.appendChild(elementADeplacer);
section3.appendChild(section2h2);
const section3Source = main.children[2];

main.removeChild(section3Source);


// const main = document.querySelector('main');
// const section2 = main.children[1];
// const section3 = main.children[2].children[0];

// // Échanger les titres en une seule étape avec destructuration
// [section2.children[0], section3.children[0]] = [section3.children[0], section2.children[0]];

// // Supprimer la section3 parent
// main.removeChild(main.children[2]);



// const main = document.querySelector('main');
// const section2 = main.children[1];
// const section3 = main.children[2].querySelector('div'); // Suppose que children[0] est un div

// // Échanger les titres
// const tempTitle = section2.querySelector('h2');
// section2.querySelector('h2').replaceWith(section3.querySelector('h2'));
// section3.prepend(tempTitle);

// // Supprimer la section3 parent
// main.removeChild(main.children[2]);
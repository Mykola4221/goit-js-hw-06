const numberCategories = document.querySelectorAll(".item").length;
console.log('Number of categories:', numberCategories);

 

const ul = Array.from(document.querySelector('#categories').children);
for (let elem of ul) {
     
    let category = elem.firstElementChild.textContent;  
     
    let countElem = elem.lastElementChild.children.length;
     
    console.log(`Category: ${category} \nElements: ${countElem}`);
};

const categoryItems = document.querySelectorAll("#categories > li.item");
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
    const headingElement = item.querySelector("h2");    
    console.log("");
    console.log(`Category: ${headingElement.innerText}`);

    const innerElements = item.querySelectorAll("li");
    console.log(`Elements: ${innerElements.length}`);
});
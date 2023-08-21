//function to add the information to the library page
class Library {
    constructor(id, title, address, phone, day, img, desc) {
        this.id = id;
        this.title = title;
        this.address = address;
        this.phone = phone;
        this.day = day;
        this.img = img;
        this.desc = desc
    }
}

//make a click event handler
function clickHandler(e){
    console.log(e.currentTarget);
    console.log(e.target);
    if (e.currentTarget != e.target){
        const targetID = e.target.id;
        console.log(targetID);
        const item = info.find( i => i.id == targetID);
        console.log( item.id );
        if (typeof item !== 'undefined'){
            alert(item.desc);
         }
    }

}

const library1 = new Library(1,"Aylsham","Hungate Street","01263 3666636","Monday", "images/library.png", "Hungate Street, Aylsham");
const library2 = new Library(2,"Aylsham","Hungate Street","01263 3666636","Tuesday", "images/library.png", "Hungate Street, Aylsham");
const library3 = new Library(3,"Aylsham","Hungate Street","01263 3666636","Wednesday", "images/library.png", "Hungate Street, Aylsham");
const library4 = new Library(4,"Aylsham","Hungate Street","01263 3666636","Thursday", "images/library.png", "Hungate Street, Aylsham");
const library5 = new Library(5,"Aylsham","Hungate Street","01263 3666636","Sunday", "images/library.png", "Hungate Street, Aylsham");
const library6 = new Library(6,"Aylsham","Hungate Street","01263 3666636","Monday", "images/library.png", "Hungate Street, Aylsham");
const library7 = new Library(7,"Aylsham","Hungate Street","01263 3666636","Saturday", "images/library.png", "Hungate Street, Aylsham");
const library8 = new Library(8,"Aylsham","Hungate Street","01263 3666636","Sunda", "images/library.png", "Hungate Street, Aylsham");

const info = [];

info.push(library1);
info.push(library2);
info.push(library3);
info.push(library4);
info.push(library5);
info.push(library6);
info.push(library7);
info.push(library8);

//enter the above information into the section centre
const sectionCenter = document.querySelector(".section-center");

//event handler

window.addEventListener("DOMContentLoaded", () => {
    let displayItem = info.map( (item) => {
        return `
        <article class="item">
        <img src=${item.img} alt=${item.title} id=${item.id} class="photo"/>
        <div class="item-info">
        <div class="item-header">
         <h4>${item.title}</h4>
         <h4 class="day"></i>${item.day}</h4>
        </div>
            <p class="item-text">
            ${item.desc}
             </p>

        </div>
        <div id="result"></div>
        </article>
        `;
    });
    displayItem = displayItem.join("");
    console.log(displayItem);
    sectionCenter.innerHTML = displayItem;
    sectionCenter.addEventListener('click', clickHandler);
});

// window.addEventListener("DOMContentLoaded", loadContent, false);


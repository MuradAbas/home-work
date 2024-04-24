const section = document.createElement("section");
section.id = "cards";
section.style.backgroundColor = "#E0DBEB";
section.style.padding = "100px o";


const wrapper = document.createElement("div");
wrapper.classList.add("wrapper");


const card =document.createElement("div");
card.classList.add("card");
card.style.width = "33%";
card.style.padding = "20px";
card.style.border = "2px solid";
card.style.textAlign = "center";


const icon = document.createElement("i");
icon.classList.add("fa-barnds", "fa-instagram", "fa-2x");


const h2 = document.createElement("p");
h2.textContent = "instagram";

const p = document.createElement("p");
p.textContent= "lorem ipsum, dolor sit amet consectetur adipisicing";

const button = document.createElement("button");
button.textContent = "read more";
button.style.backgroundColor = "#000";
button.style.color = "#fff";
button.style.padding = "10px 50px";
button.style.border = "none";
button.style.borderRadius = "20px";


card.appendChild(icon);
card.appendChild(h2);
card.appendChild(p);
card.appendChild(button);


wrapper.appendChild(card);
section.appendChild(wrapper);

document.body.appendChild(section)

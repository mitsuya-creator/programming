let parentDiv = document.createElement("div");
parentDiv.setAttribute("id","parent");

let span2 = document.createElement("span");
span2.setAttribute("id","span2");

let span1 = document.createElement("span");
span1.setAttribute("id","span1");

parentDiv.appendChild(span2);
//parentDiv.appendChild(span1);

let thefirstChild = parentDiv.firstChild;
console.log(thefirstChild)

parentDiv.insertBefore(span1,thefirstChild);

console.log(parentDiv);
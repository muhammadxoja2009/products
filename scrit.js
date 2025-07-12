const shop=document.getElementById("shop");
const korzinka=document.getElementById("korzinka");
const productsOta=document.getElementById("products-ota");
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const ul=document.getElementById("list");
const summa=document.getElementById("summa");
const count=document.getElementById("count");

shop.addEventListener("click",()=>{
    korzinka.style.display="block";
    productsOta.style.filter="blur(20px)";
});
btn1.addEventListener("click",()=>{
    korzinka.style.display="none";
    productsOta.style.filter="blur(0px)";
})
btn2.addEventListener("click",()=>{
    korzinka.style.display="none";
    productsOta.style.filter="blur(0px)";
})

fetch("https://fakestoreapi.com/products?limit=20")
.then( response=>response.json())
.then( data=> productChizish(data))
function productChizish (mahsulotlar){
    productsOta.innerHTML="";
    mahsulotlar.map(tovar=>{
        const div=document.createElement("div");
        div.classList.add("card")
        div.innerHTML=`
         <img
          src="${tovar.image}"
          alt=""
        />
        <h2>${tovar.title.slice(0,30)}</h2>
        <p>${tovar.description.slice(0,80)}</p>
        <span>${tovar.price} $</span>
        <button id="buy-btn"  onClick='sotibOlish(this)'> sotib olish</button>
        `;
        productsOta.appendChild(div);
    })
}

function sotibOlish(e){

    let nomi=e.parentNode.children[1].textContent;
    let narxi=+e.parentNode.children[3].textContent.slice(0,-2);
    const li= document.createElement("li");
    li.innerHTML=`${nomi}   ${narxi} $`;
    ul.appendChild(li);
    count.textContent=+count.textContent+narxi;
    
}
















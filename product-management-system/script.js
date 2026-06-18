// all the tasks
//1 get total
//2 create product
//3 save in local storeg 
//4 cleare inputs
//5 read
//6 cont
//7 delete
//8 update
//9 search
//10 clean data
/////////////////////////////////////////////=======================================================//////////////////////////////
// the inputs value
const titel = document.getElementById(`Titel`);
const price = document.getElementById(`price`);
const ads = document.getElementById(`Ads`);
const category = document.getElementById(`Catogery`);
const discound = document.getElementById(`dis`);
const totale = document.querySelector(`small`);
const Creat = document.getElementById(`Creat`);
const tex = document.getElementById(`Taxes`);
const count = document.getElementById(`Cont`);
const warning = document.querySelector(`.warning`);
const out_put = document.getElementById(`op`);
let item;

function getTotal (){
if(price.value != ''){
    let result = (+price.value + +ads.value + +tex.value) - +discound.value;
    totale.innerHTML = result;
    totale.style.background = `rgb(69, 249, 28)`;
    warning.classList.add(`hide`);
}
else if (ads.value != '' || tex.value != '' || discound.value != ''){
warning.innerHTML = "*you should fill all the information pleas";
}



}
function clear_data(){
    titel.value = '';
    price.value = '';
    ads.value = '';
    category.value = '';
    discound.value = '';
    totale.innerHTML = '';
    tex.value = '';
    count.value = '';
}
let datapro;
// the if statment container
if(localStorage.produit != null){
    datapro = JSON.parse(localStorage.produit);
}else{
    datapro = [];
}

// the for loops and while container


Creat.onclick = () => {
let nev_pro = {
titel:titel.value,
price:price.value,
ads:ads.value,
tax:tex.value,
count:count.value,
discount:discound.value,
total:totale.innerHTML,
catogery:category.value,
};
if(nev_pro.price != '' && nev_pro.catogery != '' && nev_pro.count != ''){
    datapro.push(nev_pro);
    show_data();
    out_put.style.opacity = `1`
}else{
    warning.innerHTML = "*you should fill all the information please !!!";
}

localStorage.setItem('produit',JSON.stringify(datapro));
if(price.value === ''){
    warning.innerHTML = "*you should fill the price first";
}
else{
    clear_data();
}
}

// function for show data;
function show_data(){

}

 function show_data(){
     let i;
     for(i = 0; i < datapro.length ; i++ ){
     }
     let a = i - 1;
 let all = document.createElement('div');
 out_put.appendChild(all);
 // the titel
  let titel = document.createElement('div');
  let titel_def = document.createElement('div');
  titel_def.innerHTML = "Titel";
  titel.classList.add('titel2');
  titel.innerHTML += datapro[a].titel;
  titel.appendChild(titel_def);
  all.appendChild(titel);
 // the price
 let price = document.createElement('div');
 let prive_dif = document.createElement("div");
 prive_dif.innerHTML = "price";
 price.classList.add('price2');
 price.innerHTML += datapro[a].price;
 price.appendChild(prive_dif);
 all.appendChild(price);
 // tax
 let tax = document.createElement('div');
 let tax_def = document.createElement("div");
 tax_def.innerHTML = "tax";
 tax.classList.add('tax2');
 tax.innerHTML += datapro[a].tax;
 tax.appendChild(tax_def);
 all.appendChild(tax);
 // discount
 let dis = document.createElement('div');
 let dis_def = document.createElement("div");
 dis_def.innerHTML = "dis";
 dis.classList.add('dis2');
 dis.innerHTML += datapro[a].discount;
 dis.appendChild(dis_def);
 all.appendChild(dis);
 // catogery
 let category = document.createElement('div');
 let category_def = document.createElement("div");
 category_def.innerHTML = "category";
 category.classList.add('category2');
 category.innerHTML += datapro[a].catogery;
 category.appendChild(category_def);
 all.appendChild(category);
 // ads 
 let ads = document.createElement('div');
 let ads_def = document.createElement("div");
 ads_def.innerHTML = "ads";
 ads.classList.add('ads2');
 ads.innerHTML += datapro[a].ads;
 ads.appendChild(ads_def);
 all.appendChild(ads);
 // totale
 let total = document.createElement('div');
 let total_def = document.createElement("div");
 total_def.innerHTML = "total";
 total.classList.add('total');
 total.innerHTML += datapro[a].total;
 total.appendChild(total_def);
 all.appendChild(total);
  //index
 let index = document.createElement("div")
 index.innerHTML = a;
 index.classList.add('index');
 all.appendChild(index);
  //delet button3
  let btn_con = document.createElement('div');
 let btn = document.createElement('button');
 btn.classList.add('trach');
 btn_con.classList.add('trach_con');
 btn_con.appendChild(btn);
 all.appendChild(btn_con);
 btn.onclick = (i) => {

 }
 
  //   <!-- <div>
//       <div class="titel2">
//           <div>title</div>
//           oppo
//       </div>
//       <div class="index">1</div>
//       <div class="tax2"><div>tax</div>26</div>
//       <div class="price2"><div>price</div>200</div>
//       <div class="dis2"><div>dis</div>42</div>
//       <div class="category2"><div>category</div>phone</div>
//       <div class="total"><div>total</div>2500</div>

//   </div>
//   </div> -->

 }

// delet function 

// let kkk = '';
// function ooo (){

//     let i;
// for(i = 0; i < datapro.lenght; i++){
    
// }
//         let a = i - 1;
//          kkk += `
// <div>
//      <div class="titel2">
//      <div>title</div>
//      ${datapro[a].titel}
//     </div>
//     <div class="index">${a}</div>
//      <div class="tax2"><div>tax</div>${datapro[a].tax}</div>
//     <div class="price2"><div>price</div>${datapro[a].price}</div>
//      <div class="dis2"><div>dis</div>${datapro[a].discount}</div>
//      <div class="category2"><div>category</div>${datapro[a].category}</div>
//     <div class="total"><div>total</div>${datapro[a].total}</div>
// `
// console.log(kkk);
     
    
// };
// ooo();
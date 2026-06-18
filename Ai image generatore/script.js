 const api = "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";
 const anp_value = document.getElementById(`inp`);
 const images = document.getElementsByClassName(`card2`);
 console.log(images);
let inp;
let close_alert = document.getElementById(`close`);
let oussama = document.querySelector(`.warning`);





 const  get_data = async () => {
    // envoyer le rqueste 
const methodes = {
    method: "POST",
    headers:{
        "Content-Type": "application/json",npx 
        "Authorization":`Bearer ${api}`,
    },
    body:JSON.stringify({
    "prompt": anp_value.value,
    "n":3,
    "size":"256x256",
    
    })}

    // condetion of the text value
    if ( anp_value.value != ""){
        console.log("done")
        const tfc = fetch("https://api.openai.com/v1/images/generations",methodes)
        // the response
        const data = await (await tfc).json();
        const list_img = data.data;
        console.log(list_img);
        let img1 = document.createElement("img");
        let img2 = document.createElement("img");
        let img3 = document.createElement("img");
        img1.src = list_img[0].url;
        img2.src = list_img[1].url;
        img3.src = list_img[2].url;
         images[0].append(img1);
         images[1].append(img2);
         images[2].append(img3);
         img1.style.width = ``;
         img1.style.height = ``;
    }
    else{
        oussama.classList.remove("hide");
    }
    close_alert.onclick = () =>{
        oussama.classList.add("hide");
    }






    // let container = document.createElement("div");
    // let container02 = document.createElement("div")
    // container.classList.add('card');
    // container02.classList.add('card2');
    // container.append(container02);
    // let images = document.createElement("img");
    // container02.append(images);
    // images.src = photos.url;
};

let letars = "abcdefghijklmnopqrstuvwxyz";
let Ar_let = Array.from(letars);

let letars_D = document.querySelector(".letters");

Ar_let.forEach(le=>{
    let sp = document.createElement("span");
    sp.className = "latar";
    let tex = document.createTextNode(le);
    sp.appendChild(tex);
    letars_D.appendChild(sp);
});

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Asmaa", "Alexander", "Cleopatra", "Mahatma Ghandi", "Eslam"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
    Eslam:["Ahmed", "mohmed", "Gamal", "moslam"]
  }
  
  let Arr_word = Object.keys(words)
  let Arr_word_Ran = Math.floor(Math.random() * Arr_word.length);
  let Arr_wo_R = Arr_word[Arr_word_Ran];
  let Arr_ = words[Arr_wo_R],
  Arr_R = Math.floor(Math.random() * Arr_.length);
  let Arr_R_wo = Arr_[Arr_R],
  Arr_R_wo_ = Array.from(Arr_R_wo) ;
  
  
  // the 
document.querySelector(".wored span").innerHTML = Arr_wo_R;
// span leter
Arr_R_wo_.forEach(e=>{
    let span_ = document.createElement("span");
    if (e == " ") {
        span_.className = "with-spa";
    }
    document.querySelector(".letter-gas").appendChild(span_)
});

// checked
let rwong = 0;
let right = 0;
let ch_wor = Arr_R_wo.replaceAll(" ", "").length;

document.addEventListener("click", (e)=>{
    if (e.target.className == "latar") {
        e.target.classList.add("clicked");
        let stats = false;

Arr_R_wo_.forEach((w, indix)=>{
    // console.log(indix);
if (e.target.innerHTML.toLowerCase() == w.toLowerCase()) {
    stats = true ;
    right++;
    document.querySelector(".right-A").play();
   document.querySelector(".letter-gas").children[indix].innerHTML = w ;
}


});


if (stats === false) {
    rwong++;
    document.querySelector(".rong-A").play();
    document.querySelector(".hangman-draw").classList.add(`rwong-${rwong}`)
}else{
  
    
}
if (rwong == 9) {
    document.querySelector(".bad").classList.add("v-bad");
    document.querySelector(".bad").innerHTML = `the right word is ${Arr_R_wo}`
    document.querySelector(".hangman-draw").parentElement.remove();
}
if (right === ch_wor) {
    document.querySelector(".good").classList.add("v-good");
    document.querySelector(".hangman-draw").parentElement.remove();
}

 }   
})
const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const inp = document.getElementById("inp");
const inpBtn = document.getElementById("inp-btn");
const bmw = document.querySelector(".bmw");
const bm = document.querySelector(".bm");
const b = document.querySelector(".b");
const bmwl = document.querySelector(".bmwl");
const card1 = document.getElementById('card1')
const h1 = document.getElementById('h1')
const b1 = document.getElementById('b1')
const card2 = document.getElementById('card2')
const h2 = document.getElementById('h2')
const b2 = document.getElementById('b2')
const card3 = document.getElementById('card3')
const h3 = document.getElementById('h3')
const b3 = document.getElementById('b3')
const contactInp = document.getElementById('contactInp')
const contactBtn = document.getElementById('contactBtn')

showBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

inpBtn.addEventListener("click", () => {
  if (inp.value === "") {
    alert("Please Enter Your Email");
  } else {
    alert("Your Email Send");
  }
  inp.value = ""
});

bmw.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
bm.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
b.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
bmwl.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

card1.addEventListener("click", ()=>{
    h1.innerHTML = '£'+5.99*12
    b1.innerHTML = 'per year'
})
card1.addEventListener("dblclick", ()=>{
    h1.innerHTML = '£'+5.99
    b1.innerHTML = 'per month'
})

card2.addEventListener("click", ()=>{
    h2.innerHTML = '£'+12.99*12
    b2.innerHTML = 'per year'
})
card2.addEventListener("dblclick", ()=>{
    h2.innerHTML = '£'+12.99
    b2.innerHTML = 'per month'
})

card3.addEventListener("click", ()=>{
    h3.innerHTML = '£'+20.99*12
    b3.innerHTML = 'per year'
})
card3.addEventListener("dblclick", ()=>{
    h3.innerHTML = '£'+20.99
    b3.innerHTML = 'per month'
})

contactBtn.addEventListener("click", () => {
    if (contactInp.value === "") {
      alert("Please Enter Your Email");
    } else {
      alert("Your Email Send");
    }
    contactInp.value = ""
  });
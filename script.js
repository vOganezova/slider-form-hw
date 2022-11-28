//slider

const prevBtn = document.getElementById("arrow-left");
const nextBtn = document.getElementById("arrow-right");
const content = document.getElementById("slider-content");
const wrapper = document.querySelector('.slider-wrapper');
let current = 0;

let data = [
    {   
        index:0,
        title:'Fancy Cat',
        img: "./img/fancy.jpg"
    },
    {
        index:1,
        title:'Ginger Cat',
        img: "./img/fat.jpg"
    },
    {
        index:2,
        title:'Kitty Paw',
        img: "./img/paw.jpg"
    },
    {
        index:3,
        title:'Little Cuddly Kitty',
        img: "./img/cuddly.jpg"
    },
    {   
        index:4,
        title:'Princess Kitty',
        img: './img/princess.jpg'
    },
    {
        index:5,
        title:'Sleepy Cat',
        img: './img/sleepy.jpg'
    },
    {
        index:6,
        title:'Smug Cat',
        img: './img/smug.jpg'
    },
    {
        index:7,
        title:'Poor Worried Kitty',
        img: './img/worried.jpg'
    }
]

const createSliderContainer = () => {
  const container = document.createElement("div");
  container.classList.add("container");

  return container;
}

const addImg = (obj)=>{
   const imgDiv = document.createElement('div');
   imgDiv.style.backgroundImage = `url(${obj.img})`;
   imgDiv.classList.add('bg');
   console.log(imgDiv);
   console.log(obj.img);
     
   return imgDiv;
}


const addTitle = (obj)=>{
const title = document.createElement('h2');
title.innerText = obj.title;
return title;
}

const addSliderNav = ()=> {
    const dots = document.createElement("div");
    dots.classList.add("dots");
  
    data.forEach((obj) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dot.innerHTML = '<i class="fa-solid fa-paw"></i>';
      dots.appendChild(dot);
    });

   
  
    return dots;
}

const dotsNav = ()=>{
    const dotsArr = Array.from(document.querySelectorAll('.fa-paw'));
    dotsArr.forEach((dot, index)=>{
        if(index === current){
            dot.style.color = 'white';
        }
            dot.addEventListener('click', ()=>{
                current = index;
                slide();
            })
       
    })
   
}

const slide = () => {
    content.innerHTML = " ";
    const slide = createSliderContainer();
    const bgDiv = addImg(data[current]);
    const title = addTitle(data[current]);
    const dots = addSliderNav();
    

    bgDiv.appendChild(title);
    slide.appendChild(bgDiv);
    content.appendChild(slide);
    content.appendChild(dots);
    dotsNav();
  }

  nextBtn.addEventListener('click', ()=>{
    if (current === data.length - 1) {
        current = 0;
        slide();
        return;
      }
      current++;
      slide();
      dotsNav();
  });

  prevBtn.addEventListener('click', ()=>{
    if (current === 0) {
        current = data.length - 1;
        slide();
        return;
      }
      current--;
      slide();
      dotsNav();
  });

  slide();
  dotsNav();





  //form

  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");
  const icon1 = document.getElementById("show");
  const icon2 = document.getElementById("showPsw");

 const showPassword = (icon, password)=>{
    if (password.type == "password") {
        password.setAttribute("type", "text");
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      } else {
        password.setAttribute("type", "password");
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
      }
      console.log('nrah');
  }
  
  icon1.addEventListener("click", (e)=>{
    showPassword(e.target, password);
  });
  icon2.addEventListener("click", (e)=>{
    showPassword(e.target, confirm);
  });




  const form = document.getElementById("signUp");

  form.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = {};

  const humanName = document.getElementById("humanName").value;
  if (humanName == "") {
    errors.humanName =
      "Name field must not be empty";
  }

  const catName = document.getElementById("catName").value;
  if (catName == "") {
    errors.catName =
      "Name field can not be empty";
  }

  
  const catAge = document.getElementById("catAge").value;
  if (!catAge) {
    errors.catAge =
      "Please specify your cat's age";
  }

  const checkRadio = document.querySelector(
    'input[name="catGender"]:checked');
    if(!checkRadio){
        errors.catGender = 
        "Please specify your cat's gender";
    }






  

  const passwordValue = document.getElementById("password").value;
  const confirmValue = document.getElementById("confirm").value;

  if (passwordValue == "") {
    errors.password = "Pasword field must not be empty";
  }
  if (passwordValue != confirmValue) {
    errors.confirm = "Passwords do not match";
  }

  
  const agreement = document.getElementById("agreement").checked;

  if (!agreement) {
    errors.agreement = "You must agree to our terms and conditons";
  }

  console.log(errors);

  document.querySelectorAll(".error-text").forEach((item) => {
    item.innerText = " ";
  });

  for (let key in errors) {
    let spanText = document.getElementById("error_" + key);

    if (spanText) {
      spanText.innerText = errors[key];
    }
  }

  if (Object.keys(errors).length == 0) {
     signUp.submit();
  }
});






  


  
  
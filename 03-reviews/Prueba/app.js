const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];


const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const text=document.getElementById("info");

const prevbtn=document.querySelector(".prev-btn");
const nextbtn=document.querySelector(".next-btn");
const randbtn=document.querySelector(".random-btn");

let a=2;

console.log(prevbtn);


function showPerson(person){
  const item=reviews[person];

  img.src=item.img;
  author.textContent=item.name;
  job.textContent=item.job;
  text.textContent=item.text;
  
  
}

prevbtn.addEventListener("click", function(){
a--;
if(a<reviews.length-3){
  a=3;
}
showPerson(a);
})

nextbtn.addEventListener("click", function(){
  a++;
  if(a>reviews.length-1){
    a=0;
  }
  showPerson(a);
  })

  randbtn.addEventListener("click", function(){
    const b=Math.floor(Math.random()*reviews.length);
    showPerson(b);
  })
  


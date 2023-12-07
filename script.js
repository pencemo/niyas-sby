
window.addEventListener("load", () => {
  const loder = document.querySelector(".loder");

  loder.classList.add("loder--hide");

  loder.addEventListener("transitionend", () => {
    document.body.removeChild(load)
  });
});




const person = {
    profile_pic: "./image/mypic.jpg",
    profile_logo: "./image/Neptune-mark-logo.png",

    Name: "Muhammed Niyas",
    designation: "Graphic Designer,",
    des_link_text: "@NeptuneMark",
    des_link: "https://neptunemark.com/",
    contact: "./contact/Muhammad Niyas Sby.vcf",
};

const contact ={
    contact_no: "+918089969860",
    whatsapp: "+918089969860",
    location: "https://maps.app.goo.gl/Cq6MN5TVmKvk1Gv57",
    email: "niyasms.sby@gmail.com",
};



const links =[
    facebook={
    visibil: true,
    link:"https://www.facebook.com/niyasmssby/"
  },
    instagram={
    visibil: true,
    link:"https://instagram.com/niyas_sby"
  },
    skype={
    visibil: false,
    link:"https://maps.app.goo.gl/zMguVmn3NbNHkdAb7"
  },
    web={
    visibil: true,
    link:"https://niyas-sby.github.io/"
  },
    linkedin={
    visibil: true,
    link:"https://www.linkedin.com/in/niyassby/"
  },
    behance={
    visibil: true,
    link:"https://www.behance.net/niyassby"
  },
    x={
    visibil: true,
    link:"https://twitter.com/NiyasSby"
  },
    mail={
    visibil: true,
    link:"niyasms.sby@gmail.com"
  },
    google={
    visibil: false,
    link:"https://maps.app.goo.gl/zMguVmn3NbNHkdAb7"
  },
    telegram={
    visibil: true,
    link:"https://t.me/niyassby"
  },
    youtube={
    visibil: false,
    link:"https://maps.app.goo.gl/zMguVmn3NbNHkdAb7"
  },
    pinterest={
    visibil: false,
    link:"https://maps.app.goo.gl/zMguVmn3NbNHkdAb7"
  },
];

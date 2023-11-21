function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function showModal(){
  let myModal = document.getElementById('myModal');
  console.log(myModal);
  myModal.style.display = "block"
}

function closeModal(){
  let myModal = document.getElementById('myModal');
  console.log(myModal);
  myModal.style.display = "none"
}

closeModal();

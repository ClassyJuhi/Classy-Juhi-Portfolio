let logoReload = document.getElementById('logoReload');
let navLi = document.getElementById('navLi');
let openSidebar = document.getElementById('openSidebar');
let closeSidebar = document.getElementById('closeSidebar');
let sidebar = document.getElementById('sidebar');
let sidebarLi = document.getElementById('sidebarLi');

logoReload.addEventListener('click',() => {
    location.reload();
})

openSidebar.addEventListener('click',() => {
    sidebar.style.display = 'block';
    openSidebar.style.display = 'none';
    closeSidebar.style.display = 'block';
    sidebarLi.style.display = 'block';
});

closeSidebar.addEventListener('click', () =>{
    sidebarLi.style.display = 'none';
    closeSidebar.style.display = 'none';
    openSidebar.style.display = 'block';
})


let sections = document.querySelectorAll('.animate');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let halfway = window.innerHeight * 0.85; 

    if (top + halfway >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });
};

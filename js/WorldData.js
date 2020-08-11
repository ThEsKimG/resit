const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");
const toggleMenu = () =>{
  console.log("called toggleMenu");
  menuNav.classList.toggle("menu-toggle");
}
menuToggle.addEventListener("click",toggleMenu);

window.onload=function(){
  let oTab = document.getElementById('tab1');
  let orginalColor='';

  for (let i = 0; i < oTab.tBodies[0].rows.length; i++) {
    oTab.tBodies[0].rows[i].onmouseover=function()
    {
      orginalColor=this.style.background;
      this.style.background='#CCBBFF';
    };
      oTab.tBodies[0].rows[i].onmouseout=function(){
        this.style.background=orginalColor;
      };
  if (i%2) {
    oTab.tBodies[0].rows[i].style.background='#ccc';
  }else {
    oTab.tBodies[0].rows[i].style.background='';
  }
  }
}

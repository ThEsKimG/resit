ctec3905 resit assignment
the covid-19 picture is come from public websit: https://www.shutterstock.com/zh/image-photo/coronavirus-2019ncov-novel-concept-resposible-asian-1625951257

use hover for change the menu color,when the cursor move on, those parts will change color in 1.5s by using transition.

Set a medical kit icon in the menu to move the mouse up and it will rotate 180 degrees
.ico{
  width: 20px;
  height: 20px;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}

.ico:hover {
 transform: rotate(180deg);
 -webkit-transform: rotate(180deg);
 -moz-transform: rotate(180deg);
 -o-transform: rotate(180deg);
 -ms-transform: rotate(180deg);
}

problem 1: in the WorldData page, I cant set the Reporter picture show in the center of the big size screen, but it doing ok in phone screen.
problem solved:
.container{
  display: grid;
  place-items:center;
}

problem 2: in the index page, the first aid kit icon cannot be displayed next to the menu, it will always appear on the far right of the page
problem solved: Before I set all the pictures to float to the right, so the first kid icon always in the right, I gave a class to the icon, and then wrote CSS specifically for it.

problem 3: The table will be incomplete when the screen size is reduced.
problem solved:
table{
  width: 100%;
}
.countries-data{
  overflow: scroll;
}
in this case, Why I specifically set the table because setting it together with td and th will change the length of the first column of cells.

use flexbox to setting eamil box.

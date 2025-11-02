//We made themes.js work with button images but decided to switch to just buttons instead. Copilot helped us debug because we couldn't figure out the problem
document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll(".text");
    const col1 = document.querySelector("#column1");
    const col2 = document.querySelector("#column2");
    const col3 = document.querySelector("#column3");

    const normalThemeButton = document.querySelector("#normal_theme");
    const tealThemeButton = document.querySelector("#teal_theme");
    const purpleThemeButton = document.querySelector("#purple_theme");
    const orangeThemeButton = document.querySelector("#orange_theme");

    const themes = [
   {
      name:"Basic",
      font:"Arial",
      text_color:"White",
      backgroundColor:"Blue"
   },
   {
      name:"Wic",
      font:"Arial",
      text_color:"Black",
      backgroundColor:"Purple"
   },
   {
      name:"Chicken",
      font:"Arial",
      text_color:"Black",
      backgroundColor:"Orange"
   },
   {
      name:"Miku",
      font:"Arial",
      text_color:"Black",
      backgroundColor:"Teal"
   },
]

function update(theme){
   for (let t of texts) {
      t.style.fontFamily = theme.font;
      t.style.color = theme.text_color;
   }
   col1.style.backgroundColor = theme.backgroundColor;
   col2.style.backgroundColor = theme.backgroundColor;
   col3.style.backgroundColor = theme.backgroundColor;
}

normalThemeButton.onclick = changeBasic;
tealThemeButton.onclick = changeTeal;
purpleThemeButton.onclick = changePurple;
orangeThemeButton.onclick = changeOrange;

function changeBasic(){
   update(themes[0])
}

function changeTeal(){
   update(themes[3])
}

function changePurple(){
   update(themes[1])
}

function changeOrange(){
   update(themes[2])
}
});
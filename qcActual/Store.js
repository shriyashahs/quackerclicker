texts=document.querySelectorAll(".text")
col1=document.querySelector("#column1")
col2=document.querySelector("#column2")
col3=document.querySelector("#column3")

normalThemeButton=document.querySelector("#normal_theme")
tealThemeButton=document.querySelector("#teal_theme")
purpleThemeButton=document.querySelector("#purple_theme")
orangeThemeButton=document.querySelector("#orange_theme")

themes = [
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
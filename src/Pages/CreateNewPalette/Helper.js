
function checkColorHave (index) {
     if(index === -1) {
          return false;
     }
     return true
}
function randomNewColor(paletteList) {
     const colorPaletteList = paletteList.map((pl) => pl.colors).flat();
     const randomNum = Math.floor(Math.random() * colorPaletteList.length);
     return colorPaletteList[randomNum];
}


export {checkColorHave,randomNewColor} 
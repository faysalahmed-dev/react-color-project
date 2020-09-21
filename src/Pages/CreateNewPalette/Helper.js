function checkColorHave(index) {
    if (index === -1) {
        return false;
    }
    return true;
}
function randomNewColor(paletteList) {
    const colorPaletteList = paletteList.map((pl) => pl.colors).flat();
    const randomNum = Math.floor(Math.random() * colorPaletteList.length);
    return { ...colorPaletteList[randomNum], id: uuid() };
}

function uuid() {
    return Math.random().toString(36).substr(2);
}

export { checkColorHave, randomNewColor, uuid };

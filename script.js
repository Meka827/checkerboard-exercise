function createCheckerDiv(containerStr) {
//====Create 'checkerDiv' div and put into any container
  const container = document.querySelector(containerStr);
  const checkerDiv = document.createElement('checkerDiv')
  container.append(checkerDiv)
  
  
  //create 8 'row' divs
    //add them into checkerdiv
    //give each rows a classname = position/index
  for (var j = 1; j <= 8; j++) {
    let rows = document.createElement("rows");
    checkerDiv.append(rows);
    rows.className = j;

    // create 8 'tiles' divs
        // add tiles to 'row' div
        //give each tile a classname = position/index
    for (var i = 1; i <= 8; i++) {
      let tile = document.createElement("tile");
      rows.append(tile);
      tile.className = i;
      
      //give shape to each tile
      tile.style.width = "12.5%";
      tile.style.float = "left";
      tile.style.paddingBottom = "12.5%";
      

      //sty
      if (rows.className % 2 === 0 && tile.className % 2 === 0) {
        tile.style.backgroundColor = "black";
      } else if (rows.className % 2 === 0 && tile.className % 2 === 1) {
        tile.style.backgroundColor = "red";
      } else if (rows.className % 2 === 1 && tile.className % 2 === 0) {
        tile.style.backgroundColor = "red";
      } else if (rows.className % 2 === 1 && tile.className % 2 === 1) {
        tile.style.backgroundColor = "black";
      }
    }
  }
}
const html = document.querySelector('html')
const header = document.createElement('header')
html.append(header)
createCheckerDiv("header");



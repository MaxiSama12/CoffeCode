let arraynumeros = [];

function generadorId() {
  for (let i = 0; i < 1; i++) {
    let numerorandom = Math.floor(Math.random() * 900000) + 100000;
    if (arraynumeros.includes(numerorandom)) {
      i--;
    } else {
      arraynumeros.push(numerorandom);
    }
  }
  return arraynumeros[0];
}




export{arraynumeros,generadorId};




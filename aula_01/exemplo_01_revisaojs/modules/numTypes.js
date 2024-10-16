function exemplosNumTypes() {
  // run `node index.js` in the terminal

  var pi = 3.1415;
  console.log(pi.toFixed(2)); //imprimi 3.14

  //TYPE BIGINT
  let aBigInt = 11n;
  let aNumber = 156;
  console.log(aNumber);
  console.log(aBigInt);
  aBigInt = BigInt(aNumber); // converte para BigInt
  console.log(aBigInt === 156n); // true
  console.log(typeof 156);
  // "number"
  console.log(typeof 156n);
  // "bigint"

  //Math
  console.log(Math.PI);
  console.log(Math.PI.toFixed(2));
  console.log(Math.PI.toFixed(2) + 3);
  console.log(Number(Math.PI.toFixed(2)) + 3);
  console.log((Number(Math.PI.toFixed(2)) + 3).toPrecision(5));
}

export { exemplosNumTypes };

// export function* getNextValue(): Generator {
//   function getRandom() {
//     return Math.random();
//   }
//   // const values = [];
//   const seed = (getRandom() * 9301 + 49297) % 233280;

//   yield seed / 233280.0;
// }

let seed = 1;

export function getNextValue(): number {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280.0;
}

// export function setSeed(_seed_) {
//   seed = _seed_;
// }

// TODO: write your code here

function compareNumeric(aHero, bHero) {
  const aHealth = aHero.health;
  const bHealth = bHero.health;
  if (aHealth > bHealth) return -1;
  if (aHealth === bHealth) return 0;
  if (aHealth < bHealth) return 1;
  return 0;
}

export default function sorting(arr) {
  arr.sort(compareNumeric);
  return arr;
}

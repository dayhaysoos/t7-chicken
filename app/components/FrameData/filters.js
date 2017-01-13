// all filters go in here
export function isHighAttack (attack) {
  console.log(attack);
  return attack.hit_level === 'h';
}

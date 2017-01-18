// all filters go in here
export function isHighAttack (attack) {
  return attack.hit_level === 'h';
}

export function isLowAttack (attack) {
  return attack.hit_level === 'l';
}

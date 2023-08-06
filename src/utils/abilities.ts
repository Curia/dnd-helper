export const calculateAbilityModifier = (abilityValue: number) => {
  return Math.floor((abilityValue - 10) / 2);
}

// Types
import { MonsterArmorClass } from '@/gql';

export const calcStatModifier = (abilityValue: number) => {
  return Math.floor((abilityValue - 10) / 2);
};

export const calcArmorClass = (monsterData: MonsterArmorClass[]) => {
  let baseArmorClass = 10; // Default base AC
  let finalArmorClass = baseArmorClass;
  let spellModifier = '';
  let hasSpell = false;

  monsterData.forEach((data) => {
    switch (data.type) {
      case 'armor':
        if (data.armor && data.armor.length > 0) {
          baseArmorClass = data.value;
          finalArmorClass = baseArmorClass;
          spellModifier = `(${data.armor[0]?.name})`;
        }
        break;
      case 'dex':
        baseArmorClass = data.value;
        finalArmorClass = data.value;
        break;
      case 'spell':
        if (data.spell) {
          spellModifier = ` with ${data.spell.name}`;
          finalArmorClass = data.value;
          hasSpell = true;
        }
        break;
      case 'natural':
        finalArmorClass = data.value;
        spellModifier = '(natural armor)';
        break;
      default:
        break;
    }
  });

  if (hasSpell) {
    return `${baseArmorClass} (${finalArmorClass} ${spellModifier})`;
  } else {
    return `${finalArmorClass} ${spellModifier}`;
  }
};

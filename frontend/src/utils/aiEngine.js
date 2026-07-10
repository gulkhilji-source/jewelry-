import { skinToneRules, outfitRules } from "./jewelryRules";

export function generateRecommendation(skinTone, outfitColor) {
  const skin = skinToneRules[skinTone];
  const outfit = outfitRules[outfitColor];

  return {
    metal:
      outfit?.metals?.[0] ||
      skin.metals[0],

    gemstone:
      outfit?.gemstones?.[0] ||
      skin.gemstones[0],
  };
}

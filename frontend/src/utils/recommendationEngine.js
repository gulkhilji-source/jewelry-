import { recommendations } from "./jewelryRules";

export function getRecommendation(skinTone, dressColor) {

    const skin = recommendations[skinTone];

    if (!skin)
        return null;

    return skin[dressColor] || skin.Black;
}

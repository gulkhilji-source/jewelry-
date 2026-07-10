import { FastAverageColor } from "fast-average-color";

const fac = new FastAverageColor();

export async function getDominantColor(img) {
  const color = await fac.getColorAsync(img);

  const { r, g, b } = color.value;

  if (r > 180 && g > 180 && b > 180) return "White";

  if (r < 60 && g < 60 && b < 60) return "Black";

  if (r > g && r > b) return "Red";

  if (g > r && g > b) return "Green";

  if (b > r && b > g) return "Blue";

  return "Neutral";
}

export function getAverageSkinColor(image, box) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;

  ctx.drawImage(image, 0, 0);

  const x = Math.max(0, Math.floor(box.originX));
  const y = Math.max(0, Math.floor(box.originY));
  const w = Math.floor(box.width);
  const h = Math.floor(box.height);

  const data = ctx.getImageData(x, y, w, h).data;

  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;

  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    count++;
  }

  return {
    r: Math.round(r / count),
    g: Math.round(g / count),
    b: Math.round(b / count),
  };
}

export function classifySkinTone({ r, g, b }) {
  const warmth = r - b;

  if (warmth > 20) {
    return {
      tone: "Warm",
      confidence: 85,
      metal: "Gold",
    };
  }

  if (warmth < -10) {
    return {
      tone: "Cool",
      confidence: 82,
      metal: "Silver",
    };
  }

  return {
    tone: "Neutral",
    confidence: 88,
    metal: "Rose Gold",
  };
}

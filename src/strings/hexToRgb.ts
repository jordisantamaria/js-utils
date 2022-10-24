export const hexToRGB = (hex: string) => {
  let alpha = false,
    hexValue = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (hexValue.length === 3) hexValue = [...hexValue].map(x => x + x).join('');
  else if (hexValue.length === 8) alpha = true;
  const h = parseInt(hexValue, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  );
};

export const toRGBArray = (rgbStr: string) => rgbStr.match(/\d+/g)!.map(Number);

export function hexToRGBA(hex: string, opacity: number) {
  const rgb = hexToRGB(hex)
  const [red, green, blue] = toRGBArray(rgb)
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`

}

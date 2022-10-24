import { hexToRGB, hexToRGBA } from "../src/strings/hexToRgb"

test('Hext to RGB', () => {
  expect(hexToRGB('#27ae60ff')).toBe('rgba(39, 174, 96, 255)')
  expect(hexToRGB('27ae60')).toBe('rgb(39, 174, 96)')
  expect(hexToRGB('#fff')).toBe('rgb(255, 255, 255)')
})

test('Hext to RGBA', () => {
  expect(hexToRGBA('#000', 0.5)).toBe('rgba(0, 0, 0, 0.5)')
})


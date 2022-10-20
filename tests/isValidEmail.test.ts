import { isValidEmail } from "../src/strings/isValidEmail"

test('validate email true', () => {
 expect(isValidEmail('jordi@gmail.com')).toBe(true)
})

test('validate email false', () => {
 expect(isValidEmail('jordi@gmailcom')).toBe(false)
 expect(isValidEmail('jordigmail.com')).toBe(false)
})


export const elementContains = (parent: Element, child: Element) =>
  parent !== child && parent.contains(child);

// elementContains(
//   document.querySelector('head'),
//   document.querySelector('title')
// );
// // true
// elementContains(document.querySelector('body'), document.querySelector('body'));
// // false

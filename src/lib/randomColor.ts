export function randomColor() {
  const colors = Array(3)
    .fill(null)
    .map(() => Math.floor(Math.random() * 256).toString(16));

  // Ensure 2-digit hexadecimal representation for each color component
  const hexFormat = `#${colors
    .map((color) => color.padStart(2, '0'))
    .join('')}`;
  return hexFormat;
}
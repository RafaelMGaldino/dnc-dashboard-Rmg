/**
 * Convert text from highlight api
 * @param text - Text to be converted
 * @returns Converted text
 */

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
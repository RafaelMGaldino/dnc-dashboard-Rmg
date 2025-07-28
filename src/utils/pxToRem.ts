/**
 * Convert Pixel to rem
 * @param pixels - Pixels value to be converted
 * @returns Converted value in rem value
 */

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
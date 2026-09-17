/**
 * Design tokens.
 *
 * This is where Figma variables map into code. When you set up the real thing,
 * these values should come from your Figma variables export rather than being
 * typed by hand — but for the test, hand-written is fine.
 */

export const color = {
  brand: '#2F6BFF',
  brandPressed: '#1F4FCC',
  danger: '#D64545',
  success: '#2E9E6B',
  warning: '#D9922B',

  textPrimary: '#14181F',
  textSecondary: '#5B6472',
  textInverse: '#FFFFFF',

  surface: '#FFFFFF',
  surfaceMuted: '#F4F6F9',
  border: '#DDE2EA',
} as const;

export const space = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
} as const;

export const radius = {
  sm: 6,
  md: 10,
  lg: 16,
  pill: 999,
} as const;

export const fontSize = {
  sm: 13,
  md: 15,
  lg: 18,
  xl: 22,
} as const;

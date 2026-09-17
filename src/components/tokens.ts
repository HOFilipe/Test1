/**
 * Design tokens — taken from the HOF Design System Figma variables.
 *
 * These names mirror the Figma variable names exactly, so a change in Figma
 * has an obvious single place to land in code. In a production setup these
 * would be generated from a Figma variables export rather than typed by hand.
 */

export const color = {
  // Colors/Text
  textPrimary: '#ffffff',

  // Gradients/Blue
  blue100: '#3f83f8',
  blue200: '#0070ff',
} as const;

export const spacing = {
  // Spacing/*
  none: 0,
  sm: 8,
  lg: 16,
} as const;

export const radius = {
  // Radius/*
  lg: 16,
} as const;

/** text-sm/medium — SF Pro, Medium, 14 / 1.5 */
export const textSmMedium = {
  fontSize: 14,
  lineHeight: 21, // 14 * 1.5
  fontWeight: '500' as const,
  letterSpacing: 0,
};

/** Fixed height of the large button. */
export const controlHeight = {
  lg: 48,
} as const;

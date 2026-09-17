import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color, space, radius, fontSize } from './tokens';

export type BadgeTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export interface BadgeProps {
  /** Text inside the badge. Keep it to a word or two. */
  label: string;
  /** Semantic colour. Matches the tone property on the Figma component. */
  tone?: BadgeTone;
}

export const Badge = ({ label, tone = 'neutral' }: BadgeProps) => (
  <View style={[styles.base, toneStyles[tone]]}>
    <Text style={[styles.label, labelToneStyles[tone]]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    paddingVertical: space.xs,
    paddingHorizontal: space.sm + 2,
    borderRadius: radius.pill,
  },
  label: {
    fontSize: fontSize.sm,
    fontWeight: '600',
  },
});

const toneStyles = StyleSheet.create({
  neutral: { backgroundColor: color.surfaceMuted },
  info: { backgroundColor: '#E6EEFF' },
  success: { backgroundColor: '#E3F5EC' },
  warning: { backgroundColor: '#FCF1DF' },
  danger: { backgroundColor: '#FBE7E7' },
});

const labelToneStyles = StyleSheet.create({
  neutral: { color: color.textSecondary },
  info: { color: color.brand },
  success: { color: color.success },
  warning: { color: color.warning },
  danger: { color: color.danger },
});

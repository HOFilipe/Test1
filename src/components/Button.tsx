import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { Gradient } from './Gradient';
import { color, spacing, radius, textSmMedium, controlHeight } from './tokens';

export interface ButtonProps {
  /** Button text. Hidden entirely when `showLabel` is false (icon-only button). */
  label?: string;
  /** Matches the `label` boolean property on the Figma component. */
  showLabel?: boolean;
  /** Matches `iconLeft` in Figma. Pass any 20x20 node. */
  iconLeft?: React.ReactNode;
  /** Matches `iconRight` in Figma. Pass any 20x20 node. */
  iconRight?: React.ReactNode;

  // --- Behaviour. Not expressible in Figma, but required in code. ---
  disabled?: boolean;
  onPress?: () => void;
}

/**
 * Primary button — large.
 *
 * Spec source: HOF Design System → "Primary button - lg", node 2257:551.
 * Height 48, radius 16, 16px horizontal padding, 8px gap, vertical gradient
 * from Gradients/Blue/100 to Gradients/Blue/200, label in text-sm/medium.
 */
export const Button = ({
  label = 'Button',
  showLabel = true,
  iconLeft,
  iconRight,
  disabled = false,
  onPress,
}: ButtonProps) => (
  <Pressable
    accessibilityRole="button"
    accessibilityLabel={showLabel ? label : undefined}
    accessibilityState={{ disabled }}
    disabled={disabled}
    onPress={onPress}
    style={({ pressed }) => [pressed && !disabled && styles.pressed, disabled && styles.disabled]}
  >
    <Gradient from={color.blue100} to={color.blue200} style={styles.surface}>
      {iconLeft ? <View style={styles.icon}>{iconLeft}</View> : null}
      {showLabel ? <Text style={styles.label}>{label}</Text> : null}
      {iconRight ? <View style={styles.icon}>{iconRight}</View> : null}
    </Gradient>
  </Pressable>
);

const styles = StyleSheet.create({
  surface: {
    height: controlHeight.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.none,
    borderRadius: radius.lg,
    alignSelf: 'flex-start',
  },
  label: {
    ...textSmMedium,
    color: color.textPrimary,
  },
  icon: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: { opacity: 0.85 },
  disabled: { opacity: 0.4 },
});

import React from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { color, space, radius, fontSize } from './tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  /** Text shown inside the button. */
  label: string;
  /** Visual style. Maps 1:1 to the variants in the Figma component. */
  variant?: ButtonVariant;
  /** Height and padding preset. */
  size?: ButtonSize;
  /** Greys the button out and blocks presses. */
  disabled?: boolean;
  /** Swaps the label for a spinner. */
  loading?: boolean;
  /** Stretches the button to fill its container. */
  fullWidth?: boolean;
  onPress?: () => void;
}

export const Button = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  onPress,
}: ButtonProps) => {
  const isInactive = disabled || loading;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: isInactive, busy: loading }}
      disabled={isInactive}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        sizeStyles[size],
        variantStyles[variant],
        fullWidth && styles.fullWidth,
        pressed && !isInactive && pressedStyles[variant],
        isInactive && styles.inactive,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' || variant === 'danger' ? color.textInverse : color.brand}
        />
      ) : (
        <View style={styles.labelWrap}>
          <Text style={[styles.label, labelSizeStyles[size], labelVariantStyles[variant]]}>
            {label}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  fullWidth: { alignSelf: 'stretch' },
  inactive: { opacity: 0.45 },
  labelWrap: { flexDirection: 'row', alignItems: 'center' },
  label: { fontWeight: '600' },
});

const sizeStyles = StyleSheet.create({
  small: { paddingVertical: space.xs + 2, paddingHorizontal: space.md, minHeight: 32 },
  medium: { paddingVertical: space.sm + 2, paddingHorizontal: space.lg, minHeight: 40 },
  large: { paddingVertical: space.md + 2, paddingHorizontal: space.xl, minHeight: 52 },
});

const labelSizeStyles = StyleSheet.create({
  small: { fontSize: fontSize.sm },
  medium: { fontSize: fontSize.md },
  large: { fontSize: fontSize.lg },
});

const variantStyles = StyleSheet.create({
  primary: { backgroundColor: color.brand },
  secondary: { backgroundColor: color.surface, borderColor: color.border },
  ghost: { backgroundColor: 'transparent' },
  danger: { backgroundColor: color.danger },
});

const pressedStyles = StyleSheet.create({
  primary: { backgroundColor: color.brandPressed },
  secondary: { backgroundColor: color.surfaceMuted },
  ghost: { backgroundColor: color.surfaceMuted },
  danger: { backgroundColor: '#B93A3A' },
});

const labelVariantStyles = StyleSheet.create({
  primary: { color: color.textInverse },
  secondary: { color: color.textPrimary },
  ghost: { color: color.brand },
  danger: { color: color.textInverse },
});

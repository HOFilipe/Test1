import React from 'react';
import { View, Platform, type ViewProps, type StyleProp, type ViewStyle } from 'react-native';

export interface GradientProps extends ViewProps {
  /** Top colour of a vertical (top-to-bottom) linear gradient. */
  from: string;
  /** Bottom colour of the gradient. */
  to: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

/**
 * A vertical linear gradient that works on native AND in the browser.
 *
 * Why this exists: React Native supports gradients through the
 * `experimental_backgroundImage` style, but react-native-web does not
 * implement that prop yet. Left alone, the component would render a
 * gradient on a phone and a flat colour in Storybook — a silent mismatch
 * between what designers review and what ships.
 *
 * So we branch on platform and use the CSS equivalent on web. No extra
 * dependency, and both targets show the same thing.
 */
export const Gradient = ({ from, to, style, children, ...rest }: GradientProps) => {
  const gradient = `linear-gradient(180deg, ${from} 0%, ${to} 100%)`;

  const gradientStyle = Platform.select({
    web: { backgroundImage: gradient },
    default: { experimental_backgroundImage: gradient },
  }) as ViewStyle;

  return (
    <View {...rest} style={[style, gradientStyle]}>
      {children}
    </View>
  );
};

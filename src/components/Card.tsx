import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { color, space, radius, fontSize } from './tokens';
import { Badge, type BadgeTone } from './Badge';
import { Button } from './Button';

export interface CardProps {
  title: string;
  subtitle?: string;
  body?: string;
  /** Optional badge shown in the top-right corner. */
  badgeLabel?: string;
  badgeTone?: BadgeTone;
  /** Optional button along the bottom. Omit the label to hide it. */
  actionLabel?: string;
  onAction?: () => void;
}

export const Card = ({
  title,
  subtitle,
  body,
  badgeLabel,
  badgeTone = 'info',
  actionLabel,
  onAction,
}: CardProps) => (
  <View style={styles.card}>
    <View style={styles.header}>
      <View style={styles.headerText}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {badgeLabel ? <Badge label={badgeLabel} tone={badgeTone} /> : null}
    </View>

    {body ? <Text style={styles.body}>{body}</Text> : null}

    {actionLabel ? (
      <View style={styles.footer}>
        <Button label={actionLabel} size="small" onPress={onAction} fullWidth />
      </View>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 320,
    backgroundColor: color.surface,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: color.border,
    padding: space.lg,
    gap: space.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: space.md,
  },
  headerText: { flexShrink: 1, gap: space.xs },
  title: {
    fontSize: fontSize.lg,
    fontWeight: '700',
    color: color.textPrimary,
  },
  subtitle: {
    fontSize: fontSize.sm,
    color: color.textSecondary,
  },
  body: {
    fontSize: fontSize.md,
    lineHeight: 22,
    color: color.textSecondary,
  },
  footer: { marginTop: space.xs },
});

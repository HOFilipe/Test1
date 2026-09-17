import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    badgeTone: { control: 'select', options: ['neutral', 'info', 'success', 'warning', 'danger'] },
  },
  args: {
    title: 'Flamengo vs Palmeiras',
    subtitle: 'Brasileirão · Today 21:30',
    body: 'Match odds and 42 other markets available.',
    badgeLabel: 'Live',
    badgeTone: 'info',
    actionLabel: 'View markets',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutBadge: Story = {
  args: { badgeLabel: undefined },
};

export const WithoutAction: Story = {
  args: { actionLabel: undefined },
};

export const TextOnly: Story = {
  args: { badgeLabel: undefined, actionLabel: undefined, body: undefined },
};

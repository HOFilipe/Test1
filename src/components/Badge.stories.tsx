import type { Meta, StoryObj } from '@storybook/react-native-web-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'info', 'success', 'warning', 'danger'] },
  },
  args: { label: 'Live', tone: 'info' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { tone: 'neutral', label: 'Draft' } };
export const Info: Story = { args: { tone: 'info', label: 'Live' } };
export const Success: Story = { args: { tone: 'success', label: 'Won' } };
export const Warning: Story = { args: { tone: 'warning', label: 'Pending' } };
export const Danger: Story = { args: { tone: 'danger', label: 'Void' } };

import type { Meta, StoryObj } from '@storybook/react';
import Stat from '.';

const meta: Meta<typeof Stat> = { component: Stat };
export default meta;

type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  args: { value: 12, unit: 'voix', label: 'Un ensemble intime' },
};

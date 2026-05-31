import type { Meta, StoryObj } from '@storybook/react';
import StatNumber from '.';

const meta: Meta<typeof StatNumber> = { component: StatNumber };
export default meta;

type Story = StoryObj<typeof StatNumber>;

export const Default: Story = { args: { value: 12, unit: 'voix' } };

import type { Meta, StoryObj } from '@storybook/react';
import EncartItem from '.';

const meta: Meta<typeof EncartItem> = { component: EncartItem };
export default meta;

type Story = StoryObj<typeof EncartItem>;

export const Default: Story = {
  args: { children: 'Partitions et enregistrements fournis plusieurs semaines avant les répétitions.' },
};

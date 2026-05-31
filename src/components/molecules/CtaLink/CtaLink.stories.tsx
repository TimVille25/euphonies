import type { Meta, StoryObj } from '@storybook/react';
import CtaLink from '.';

const meta: Meta<typeof CtaLink> = { component: CtaLink };
export default meta;

type Story = StoryObj<typeof CtaLink>;

export const Default: Story = {
  args: { href: '#presentation', children: 'Découvrir le projet' },
};

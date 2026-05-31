import type { Meta, StoryObj } from '@storybook/react';
import EmailLink from '.';

const meta: Meta<typeof EmailLink> = { component: EmailLink };
export default meta;

type Story = StoryObj<typeof EmailLink>;

export const Default: Story = {
  args: { email: 'contact@euphonies.fr' },
};

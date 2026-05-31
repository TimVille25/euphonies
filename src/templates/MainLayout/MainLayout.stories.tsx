import type { Meta, StoryObj } from '@storybook/react';
import MainLayout from '.';

const meta: Meta<typeof MainLayout> = { component: MainLayout };
export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {
  args: { children: <p style={{ padding: '2rem' }}>Contenu de la page</p> },
};

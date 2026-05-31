import type { Meta, StoryObj } from '@storybook/react';
import Etape from '.';

const meta: Meta<typeof Etape> = { component: Etape };
export default meta;

type Story = StoryObj<typeof Etape>;

export const Default: Story = {
  args: {
    titre: "Séance d'essai",
    description: 'Vous participez à une répétition avec partitions transmis à l\'avance.',
  },
};

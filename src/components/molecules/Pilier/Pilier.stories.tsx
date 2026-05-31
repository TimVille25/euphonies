import type { Meta, StoryObj } from '@storybook/react';
import Pilier from '.';

const meta: Meta<typeof Pilier> = { component: Pilier };
export default meta;

type Story = StoryObj<typeof Pilier>;

export const Default: Story = {
  args: {
    titre: 'Des concerts en lieux choisis',
    description: 'Chapelles, salles patrimoniales, espaces insolites — des lieux dont l\'acoustique magnifie le chant.',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import ConcertCard from '.';

const meta: Meta<typeof ConcertCard> = { component: ConcertCard };
export default meta;

type Story = StoryObj<typeof ConcertCard>;

export const Default: Story = {
  args: {
    concert: {
      id: 'premiere-rencontre',
      title: 'Première rencontre avec EuphonieS',
      description: 'Date et lieu annoncés prochainement',
      day: '—',
      month: 'À venir',
      tag: 'Prochainement',
    },
  },
};

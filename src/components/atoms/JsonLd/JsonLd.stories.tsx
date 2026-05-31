import type { Meta, StoryObj } from '@storybook/react';
import JsonLd from '.';

const meta: Meta<typeof JsonLd> = {
  component: JsonLd,
};
export default meta;

type Story = StoryObj<typeof JsonLd>;

export const MusicGroupSchema: Story = {
  args: {
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MusicGroup',
      name: 'EuphonieS',
      description:
        'EuphonieS est un ensemble vocal de 12 chanteurs basé à Besançon.',
      url: 'https://timville25.github.io/euphonies/',
    },
  },
};

export const EventSchema: Story = {
  args: {
    schema: {
      '@context': 'https://schema.org',
      '@type': 'MusicEvent',
      name: 'Concert de printemps',
      description: 'Concert de musique classique a cappella à Besançon.',
      startDate: '2026-06-15',
      eventStatus: 'https://schema.org/EventScheduled',
      organizer: {
        '@type': 'MusicGroup',
        name: 'EuphonieS',
        url: 'https://timville25.github.io/euphonies/',
      },
    },
  },
};

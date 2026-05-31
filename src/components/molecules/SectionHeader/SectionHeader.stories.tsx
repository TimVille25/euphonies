import type { Meta, StoryObj } from '@storybook/react';
import SectionHeader from '.';

const meta: Meta<typeof SectionHeader> = { component: SectionHeader };
export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: { label: 'Le chœur', heading: 'Un ensemble vocal de musique classique et contemporaine' },
};

export const Centered: Story = {
  args: { label: 'Contact', heading: <>Écrire à Euphonie<span>S</span></>, center: true },
};

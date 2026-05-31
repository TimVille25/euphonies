import type { Meta, StoryObj } from '@storybook/react';
import SectionHeader from '.';

const meta: Meta<typeof SectionHeader> = { component: SectionHeader };
export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: { label: 'Le chœur', heading: <>La voix humaine, <em>à portée de main</em></> },
};

export const Centered: Story = {
  args: { label: 'Contact', heading: <>Écrire à Euphonie<span>S</span></>, center: true },
};

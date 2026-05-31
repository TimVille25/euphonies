import type { Meta, StoryObj } from '@storybook/react';
import Rule from '.';

const meta: Meta<typeof Rule> = { component: Rule };
export default meta;

type Story = StoryObj<typeof Rule>;

export const Default: Story = {};
export const Centered: Story = { args: { center: true } };

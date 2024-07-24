import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { action } from '@storybook/addon-actions'
import { ChevronRight } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'components/ui/button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      description: 'Muda a variação do botão',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      description: 'Muda o tamanho do botão',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
      description: 'Muda o estado do botão para desativado',
    },
    onClick: {
      action: 'clicked',
      description: 'Função chamada quando o botão é clicado',
    },
    loading: {
      control: 'boolean',
      description: 'Muda o estado do botão para carregando',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    onClick: action('default click'),
    children: 'Button',
    loading: false,
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    disabled: false,
    onClick: action('default click'),
    children: 'Button',
    loading: false,
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    disabled: false,
    onClick: action('default click'),
    children: 'Button',
    loading: false,
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    disabled: false,
    onClick: action('default click'),
    children: 'Button',
    loading: false,
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    disabled: false,
    onClick: action('default click'),
    children: 'Button',
    loading: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    disabled: false,
    onClick: action('default click'),
    children: 'Button',
    loading: false,
  },
}

export const Disabled: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: true,
    children: 'Disabled',
    loading: false,
  },
}

export const Loading: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    onClick: action('default click'),
    children: 'Please wait',
    loading: true,
  },
}

export const Icon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    disabled: false,
    onClick: action('default click'),
    children: <ChevronRight className="h-4 w-4" />,
    loading: false,
  },
}

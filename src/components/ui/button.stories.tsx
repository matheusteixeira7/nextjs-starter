import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Button> = {
  title: 'components/ui/button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: { control: 'select', description: 'Muda a variação do botão', options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] },
    size: { control: 'select', description: 'Muda o tamanho do botão', options: ['default','sm', 'lg', 'icon'] },
    disabled: { control: 'boolean', description: 'Muda o estado do botão para desativado' },
    onClick: { action: 'clicked', description: 'Função chamada quando o botão é clicado', },
    loading: { control: 'boolean', description: 'Muda o estado do botão para carregando' },
  }

}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    onClick: action('default click'),
    children: 'Default Button',
    loading: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    disabled: false,
    onClick: action('default click'),
    children: 'Secondary Button',
    loading: false,
  },
}

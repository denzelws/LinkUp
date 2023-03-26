import { Story, Meta } from '@storybook/react/types-6-0'
import CardSlider, { CardSliderProps } from '.'

import items from './mock'

export default {
  title: 'CardSlider',
  component: CardSlider,
  args: { items }
} as Meta

export const Default: Story<CardSliderProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <CardSlider {...args} />
  </div>
)

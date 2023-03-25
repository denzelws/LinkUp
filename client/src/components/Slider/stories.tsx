import { Story, Meta } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'

import styled from 'styled-components'

import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const verticalSettings: Settings = {
  dots: true,
  infinite: false,
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 3
}

const Slide = styled.div`
  width: 30rem;
  border: 0.1rem solid red;
  text-align: center;
  height: 8rem;
  padding: 10rem 0;
`

export const Default: Story = () => (
  <Slider settings={settings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
)

export const Vertical: Story = () => (
  <Slider settings={verticalSettings}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
)
